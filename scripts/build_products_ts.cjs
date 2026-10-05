const fs = require('fs');
const path = require('path');

const preparedCatPath = 'C:/Users/gokul/.gemini/antigravity-ide/scratch/meeshine-jewels/prepared_catalogue.json';
const catData = JSON.parse(fs.readFileSync(preparedCatPath, 'utf8'));

const rawProducts = catData.products || [];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function normalizeCategory(cat) {
  const c = (cat || '').toLowerCase();
  if (c.includes('ring')) return 'RINGS';
  if (c.includes('bracelet')) return 'BRACELETS';
  if (c.includes('bangle')) return 'BANGLES';
  if (c.includes('chain') && !c.includes('hip') && !c.includes('anklet')) return 'CHAINS';
  if (c.includes('necklace') || c.includes('neckpiece')) return 'NECKLACES';
  if (c.includes('earring') || c.includes('stud') || c.includes('jumka')) return 'EARRINGS';
  if (c.includes('anklet')) return 'ANKLETS';
  return 'RINGS';
}

function extractSpecs(title, desc) {
  const t = (title + ' ' + desc).toLowerCase();
  let material = 'Anti-Tarnish Stainless Steel';
  if (t.includes('316l')) material = '316L Surgical Steel (Waterproof)';
  else if (t.includes('oxidized') || t.includes('oxidised')) material = 'Oxidised Silver Finish';
  else if (t.includes('stainless steel')) material = 'Stainless Steel';

  let colour = 'Warm Champagne Gold';
  if (t.includes('rose gold')) colour = 'Rose Gold';
  else if (t.includes('silver')) colour = 'Platinum Silver';
  else if (t.includes('multicolor')) colour = 'Multicolor';

  let wear = 'Daily & Occasion Wear';
  let delivery = '3–5 Business Days';

  return { material, colour, wear, delivery };
}

const mappedProducts = rawProducts.map((p) => {
  const normCat = normalizeCategory(p.category);
  const specs = extractSpecs(p.title, p.description || '');

  let modelKey;
  const lowerTitle = p.title.toLowerCase();
  if (normCat === 'RINGS' && !modelKey) modelKey = 'ring01';
  else if (normCat === 'BRACELETS' && (lowerTitle.includes('b45') || lowerTitle.includes('kada'))) modelKey = 'bracelet01';
  else if (normCat === 'CHAINS' && (lowerTitle.includes('c10') || lowerTitle.includes('c19') || lowerTitle.includes('c70'))) modelKey = 'chain01';
  else if (normCat === 'EARRINGS' && (lowerTitle.includes('k4') || lowerTitle.includes('butterfly') || lowerTitle.includes('stud'))) modelKey = 'earring01';

  return {
    id: p.id,
    slug: slugify(p.title) + '-' + p.id.slice(0, 6),
    name: p.title,
    category: normCat,
    price: Number(p.price),
    mrp: Number(p.mrp || Math.round(p.price * 1.25)),
    discount: Number(p.discount || (p.mrp ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0)),
    description: p.description ? p.description.replace(/<[^>]*>/g, '').trim() : 'Premium anti-tarnish everyday jewellery crafted with exquisite precision.',
    material: specs.material,
    colour: specs.colour,
    wear: specs.wear,
    delivery: specs.delivery,
    images: p.images && p.images.length > 0 ? p.images : [p.image],
    modelKey: modelKey || (normCat === 'RINGS' ? 'ring01' : normCat === 'BRACELETS' ? 'bracelet01' : normCat === 'CHAINS' ? 'chain01' : normCat === 'EARRINGS' ? 'earring01' : undefined),
    sourceUrl: p.sourceUrl || `https://meeshinejewels.smartbiz.in/product/${p.id}`,
    isFeatured: Boolean(
      p.title.includes('B45') ||
      p.title.includes('C10') ||
      p.title.includes('K4') ||
      p.title.includes('B7') ||
      p.title.includes('Tulip') ||
      p.title.includes('B13') ||
      normCat === 'RINGS'
    )
  };
});

const targetFile = 'C:/Users/gokul/.gemini/antigravity-ide/scratch/mee-shine-jewels/src/data/products.ts';
fs.mkdirSync(path.dirname(targetFile), { recursive: true });

const content = `// Source: https://meeshinejewels.smartbiz.in/
// Authentic live Mee Shine Jewels catalogue data

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  mrp?: number;
  discount?: number;
  description?: string;
  material?: string;
  colour?: string;
  wear?: string;
  delivery?: string;
  images: string[];
  modelKey?: string;
  sourceUrl: string;
  isFeatured?: boolean;
}

export const CATEGORIES = [
  'ALL',
  'RINGS',
  'BRACELETS',
  'CHAINS',
  'EARRINGS',
  'ANKLETS',
  'BANGLES',
  'NECKLACES'
] as const;

export type CategoryType = typeof CATEGORIES[number];

export const PRODUCTS: Product[] = ${JSON.stringify(mappedProducts, null, 2)};

export const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.isFeatured).slice(0, 12);

export const SELECTOR_PRODUCTS: Record<string, Product> = {
  ring01: PRODUCTS.find(p => p.category === 'RINGS') || PRODUCTS[0],
  bracelet01: PRODUCTS.find(p => p.name.includes('B45') || (p.category === 'BRACELETS' && p.modelKey === 'bracelet01')) || PRODUCTS[1],
  chain01: PRODUCTS.find(p => p.name.includes('C10') || p.category === 'CHAINS') || PRODUCTS[2],
  earring01: PRODUCTS.find(p => p.name.includes('K4') || p.category === 'EARRINGS') || PRODUCTS[3],
  anklet01: PRODUCTS.find(p => p.category === 'ANKLETS') || PRODUCTS[4]
};
`;

fs.writeFileSync(targetFile, content);
console.log(`Generated ${targetFile} with ${mappedProducts.length} products!`);
