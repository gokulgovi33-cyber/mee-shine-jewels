// Source: https://meeshinejewels.smartbiz.in/
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

export const PRODUCTS: Product[] = [
  {
    "id": "090883b7-92d4-452e-bd2f-be3c6c43b5a8",
    "slug": "2-in-1-reversible-pendant-chain-c70-090883",
    "name": "2-in-1 Reversible Pendant Chain - C70",
    "category": "CHAINS",
    "price": 180,
    "mrp": 199,
    "discount": 9,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Zbxt1BoVJFPFWwc.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/090883b7-92d4-452e-bd2f-be3c6c43b5a8",
    "isFeatured": false
  },
  {
    "id": "8d2b0ffa-df92-48fa-9cdd-7aac85c726fc",
    "slug": "6-in-1-pendant-chain-set-8d2b0f",
    "name": "6 in 1 Pendant Chain Set",
    "category": "CHAINS",
    "price": 499,
    "mrp": 599,
    "discount": 16,
    "description": "Premium Stainless Steel Jewellery • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear 2 Chain Sets + 6 Interchangeable Colour Pendants Mix, match &amp; create different looks with the same set! 💖",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/dbxt1hztDI7LcRz.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8d2b0ffa-df92-48fa-9cdd-7aac85c726fc",
    "isFeatured": false
  },
  {
    "id": "14bd2850-e261-4816-86b2-e5ddc33569a1",
    "slug": "ad-neckpiece-set-n10-14bd28",
    "name": "AD Neckpiece Set - N10",
    "category": "NECKLACES",
    "price": 449,
    "mrp": 550,
    "discount": 18,
    "description": "AD Neckpiece Set - N10",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1xl6eALisEP.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/14bd2850-e261-4816-86b2-e5ddc33569a1",
    "isFeatured": false
  },
  {
    "id": "367878ff-19c3-4ae7-a393-29a292c87a04",
    "slug": "ad-neckpiece-set-n11-367878",
    "name": "AD Neckpiece Set - N11",
    "category": "NECKLACES",
    "price": 499,
    "mrp": 600,
    "discount": 16,
    "description": "AD Neckpiece Set - N11",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1BwLCTaTw7M.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/367878ff-19c3-4ae7-a393-29a292c87a04",
    "isFeatured": false
  },
  {
    "id": "fdf02e50-20b0-4f26-93cd-2e84142de823",
    "slug": "ad-neckpiece-set-n12-fdf02e",
    "name": "AD Neckpiece Set - N12",
    "category": "NECKLACES",
    "price": 499,
    "mrp": 550,
    "discount": 9,
    "description": "AD Neckpiece Set - N12",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/zbxt1hfZdMtx2zN.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/fdf02e50-20b0-4f26-93cd-2e84142de823",
    "isFeatured": false
  },
  {
    "id": "a479d721-bba0-4a34-9792-b697fd325480",
    "slug": "ad-neckpiece-set-n13-a479d7",
    "name": "AD Neckpiece Set - N13",
    "category": "NECKLACES",
    "price": 499,
    "mrp": 550,
    "discount": 9,
    "description": "AD Neckpiece Set - N13",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/pbxt1BDnX$5fY3Y.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a479d721-bba0-4a34-9792-b697fd325480",
    "isFeatured": false
  },
  {
    "id": "649bc363-b77b-472d-ac7b-bc21bc05eee7",
    "slug": "ad-neckpiece-set-n14-649bc3",
    "name": "AD Neckpiece Set - N14",
    "category": "NECKLACES",
    "price": 549,
    "mrp": 600,
    "discount": 8,
    "description": "AD Neckpiece Set - N14",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Pbxt1BfpRdtLL$A.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/649bc363-b77b-472d-ac7b-bc21bc05eee7",
    "isFeatured": false
  },
  {
    "id": "73b98a2d-87e0-42e9-90de-2f8e01ca6625",
    "slug": "ad-neckpiece-set-n15-73b98a",
    "name": "AD Neckpiece Set - N15",
    "category": "NECKLACES",
    "price": 499,
    "mrp": 550,
    "discount": 9,
    "description": "AD Neckpiece Set - N15",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1RGCbu3nGZr.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/73b98a2d-87e0-42e9-90de-2f8e01ca6625",
    "isFeatured": false
  },
  {
    "id": "3ee4aadd-fff5-41eb-8674-7dcaada09168",
    "slug": "adjustable-ring-r20-3ee4aa",
    "name": "Adjustable Ring - R20",
    "category": "RINGS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/obxt1Rl6AsXTqyd.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3ee4aadd-fff5-41eb-8674-7dcaada09168",
    "isFeatured": true
  },
  {
    "id": "420b9362-340e-4040-ba53-0eb0b9926c40",
    "slug": "adjustable-ring-r20-420b93",
    "name": "Adjustable Ring - R20",
    "category": "RINGS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1Bfoz1cz9Mf.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/420b9362-340e-4040-ba53-0eb0b9926c40",
    "isFeatured": true
  },
  {
    "id": "de264d6d-0c8a-402a-a0c7-b55219d66cd6",
    "slug": "adjustable-ring-r20-de264d",
    "name": "Adjustable Ring - R20",
    "category": "RINGS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/5bxt1x$jXPi9tWm.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/de264d6d-0c8a-402a-a0c7-b55219d66cd6",
    "isFeatured": true
  },
  {
    "id": "20d531f0-58f8-42aa-9591-3b9ffdd52d58",
    "slug": "alphabet-chain-c23-20d531",
    "name": "Alphabet chain C23",
    "category": "CHAINS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Its a stainless steel fancy pendent chain - C23",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/cbxt1BvEIHL1htg.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/20d531f0-58f8-42aa-9591-3b9ffdd52d58",
    "isFeatured": false
  },
  {
    "id": "3fa5d8e5-da27-42d5-af42-5e87a4748ae6",
    "slug": "alphabet-chain-c23-3fa5d8",
    "name": "Alphabet chain C23",
    "category": "CHAINS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Its a stainless steel fancy pendent chain.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/6bxt1xAZsO-qDRY.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3fa5d8e5-da27-42d5-af42-5e87a4748ae6",
    "isFeatured": false
  },
  {
    "id": "5997b135-71c7-47ef-b164-11e0b3ab9775",
    "slug": "alphabet-chain-c23-5997b1",
    "name": "Alphabet chain C23",
    "category": "CHAINS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Its a stainless steel fancy pendent chain.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1Rsh6PIhOAL.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5997b135-71c7-47ef-b164-11e0b3ab9775",
    "isFeatured": false
  },
  {
    "id": "e2ec5687-3be8-45da-b4a4-93d33d319c21",
    "slug": "alphabet-chain-c23-e2ec56",
    "name": "Alphabet chain C23",
    "category": "CHAINS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Its a stainless steel fancy pendent chain.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ybxt1R3A52dc0GD.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e2ec5687-3be8-45da-b4a4-93d33d319c21",
    "isFeatured": false
  },
  {
    "id": "210eac06-3650-4fa9-8e02-1ec898b55396",
    "slug": "anti-tarnish-bangle-single-piece-210eac",
    "name": "Anti Tarnish Bangle - Single piece",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/bbxt1R8-GmvOqYg.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/210eac06-3650-4fa9-8e02-1ec898b55396",
    "isFeatured": false
  },
  {
    "id": "9a5607d7-23c0-46d5-b158-a683fac9bfa5",
    "slug": "anti-tarnish-bangle-single-piece-9a5607",
    "name": "Anti Tarnish Bangle - Single piece",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Mbxt1RN9Bh0fI9h.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9a5607d7-23c0-46d5-b158-a683fac9bfa5",
    "isFeatured": false
  },
  {
    "id": "cd4aedbd-4ce4-410e-809a-ddd83acd2d9c",
    "slug": "anti-tarnish-bangle-single-piece-cd4aed",
    "name": "Anti Tarnish Bangle - Single piece",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/jbxt1xWEaFSQkJf.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/cd4aedbd-4ce4-410e-809a-ddd83acd2d9c",
    "isFeatured": false
  },
  {
    "id": "e646331d-9063-4b31-a958-41d8c16bd1b3",
    "slug": "anti-tarnish-bangle-single-piece-e64633",
    "name": "Anti Tarnish Bangle - Single piece",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ebxt1ROfo2kl2YP.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e646331d-9063-4b31-a958-41d8c16bd1b3",
    "isFeatured": false
  },
  {
    "id": "1cd30c97-83a9-4046-8598-ad02a28d1383",
    "slug": "anti-tarnish-kids-anklet-pair-1cd30c",
    "name": "Anti Tarnish Kids Anklet - Pair",
    "category": "ANKLETS",
    "price": 359,
    "mrp": 399,
    "discount": 10,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1RL3ho3sFYm.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1cd30c97-83a9-4046-8598-ad02a28d1383",
    "isFeatured": false
  },
  {
    "id": "d90f3616-e645-4a5a-8168-b83e3b4541cf",
    "slug": "attigai-n5-d90f36",
    "name": "Attigai N5",
    "category": "NECKLACES",
    "price": 350,
    "mrp": 399,
    "discount": 12,
    "description": "Attigai",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1hnMjjJKld5.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d90f3616-e645-4a5a-8168-b83e3b4541cf",
    "isFeatured": false
  },
  {
    "id": "ac0f9b96-6623-41d3-a158-d6f6fcd67f15",
    "slug": "ball-back-screw-stud-ac0f9b",
    "name": "Ball Back Screw Stud",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/wbxt1RRGLzZroAn.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ac0f9b96-6623-41d3-a158-d6f6fcd67f15",
    "isFeatured": false
  },
  {
    "id": "39a2e3c5-8044-4df9-b543-4489c0d86012",
    "slug": "bamboo-bracelet-b25-39a2e3",
    "name": "Bamboo Bracelet B25",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 240,
    "discount": 17,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel. 18k Gold Colour Plated.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Kbxt1xay5zndC32.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/39a2e3c5-8044-4df9-b543-4489c0d86012",
    "isFeatured": false
  },
  {
    "id": "e103db1f-fdb9-453a-8108-3224f39cd317",
    "slug": "bamboo-neck-chain-c80-e103db",
    "name": "Bamboo Neck Chain -  C80",
    "category": "CHAINS",
    "price": 180,
    "mrp": 220,
    "discount": 18,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Fbxt1BixhGl980t.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e103db1f-fdb9-453a-8108-3224f39cd317",
    "isFeatured": false
  },
  {
    "id": "0a240f0c-4da9-4599-9892-93639ef0e4f2",
    "slug": "bamboo-openable-bracelet-0a240f",
    "name": "Bamboo Openable Bracelet",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ubxt1xcO6Q5ZODf.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0a240f0c-4da9-4599-9892-93639ef0e4f2",
    "isFeatured": false
  },
  {
    "id": "2bca396f-9aa2-4c9b-8b49-4a2991a0dac8",
    "slug": "bamboo-openable-bracelet-2bca39",
    "name": "Bamboo Openable Bracelet",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Qbxt1RoyrT37Tpo.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2bca396f-9aa2-4c9b-8b49-4a2991a0dac8",
    "isFeatured": false
  },
  {
    "id": "20eea70f-0498-4a57-84da-edafcaa8ed6b",
    "slug": "bangle-bracelet-b59-20eea7",
    "name": "Bangle Bracelet - B59",
    "category": "BRACELETS",
    "price": 220,
    "mrp": 220,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/hbxt1hcOEUOycPM.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/20eea70f-0498-4a57-84da-edafcaa8ed6b",
    "isFeatured": false
  },
  {
    "id": "222abea4-31e7-4d4b-8faf-6766c594c6a4",
    "slug": "bangle-bracelet-b59-222abe",
    "name": "Bangle Bracelet - B59",
    "category": "BRACELETS",
    "price": 220,
    "mrp": 220,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Kbxt1RfGg1reVro.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/222abea4-31e7-4d4b-8faf-6766c594c6a4",
    "isFeatured": false
  },
  {
    "id": "d0b7e50a-09f4-425a-ad3a-57659a44f90f",
    "slug": "bangle-bracelet-b59-d0b7e5",
    "name": "Bangle Bracelet - B59",
    "category": "BRACELETS",
    "price": 220,
    "mrp": 220,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/qbxt1BcUV-FY4LQ.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d0b7e50a-09f4-425a-ad3a-57659a44f90f",
    "isFeatured": false
  },
  {
    "id": "90c1e3bc-74a2-445c-983b-9505e29eb20f",
    "slug": "bangle-bracelet-b59-90c1e3",
    "name": "Bangle Bracelet- B59",
    "category": "BRACELETS",
    "price": 220,
    "mrp": 220,
    "discount": 0,
    "description": "Anti-tarnish | Hypoallergenic | Skin-friendly",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1BfiSfFb51X.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/90c1e3bc-74a2-445c-983b-9505e29eb20f",
    "isFeatured": false
  },
  {
    "id": "ff5235c2-17a9-41c1-80cd-7af50efafa6f",
    "slug": "bar-pendant-chain-ff5235",
    "name": "Bar Pendant Chain",
    "category": "CHAINS",
    "price": 299,
    "mrp": 299,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Cbxt1hiYV-egmuQ.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ff5235c2-17a9-41c1-80cd-7af50efafa6f",
    "isFeatured": false
  },
  {
    "id": "aecafd24-ca0c-4be1-afae-0a1189a3bbaf",
    "slug": "black-drop-earrings-aecafd",
    "name": "Black Drop Earrings",
    "category": "RINGS",
    "price": 239,
    "mrp": 250,
    "discount": 4,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1R8eiNayGFt.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/aecafd24-ca0c-4be1-afae-0a1189a3bbaf",
    "isFeatured": true
  },
  {
    "id": "ff6db788-d1a1-48af-b208-5aa8e6a1b1e4",
    "slug": "black-pendant-chain-ff6db7",
    "name": "Black Pendant Chain",
    "category": "CHAINS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/pbxt1RM74xon-LU.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ff6db788-d1a1-48af-b208-5aa8e6a1b1e4",
    "isFeatured": false
  },
  {
    "id": "1ee21502-8103-4d29-9ea3-bbe087659ae3",
    "slug": "bloom-drop-ball-back-earrings-1ee215",
    "name": "Bloom Drop Ball Back Earrings",
    "category": "EARRINGS",
    "price": 190,
    "mrp": 199,
    "discount": 4,
    "description": "Premium Anti tarnished - highly durable, rust-resistant and ready for everyday wear Water-resistant for daily wear. Avoid harsh chemicals for longer life. Finished in 18KT Gold Tone for a rich luxury look. Advanced PVD Coating, long-lasting colour, anti-tarnish &amp; scratch resistance. . Extra E-Coating Layer on top – added protection and shine.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/kbxt1BicJdkuoW4.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1ee21502-8103-4d29-9ea3-bbe087659ae3",
    "isFeatured": false
  },
  {
    "id": "f561c27d-5b6c-46fe-b91c-d67ee6b55e07",
    "slug": "bow-bracelet-b71-f561c2",
    "name": "Bow Bracelet -  B71",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 230,
    "discount": 21,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1hJRo7cENi5.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f561c27d-5b6c-46fe-b91c-d67ee6b55e07",
    "isFeatured": true
  },
  {
    "id": "f25f776c-c294-4cc0-8dc6-ac3c3c33a946",
    "slug": "bow-neckchain-c57-f25f77",
    "name": "Bow Neckchain - C57",
    "category": "CHAINS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Cbxt1BMgpbp4Vj3.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f25f776c-c294-4cc0-8dc6-ac3c3c33a946",
    "isFeatured": false
  },
  {
    "id": "70f2abf4-d7fb-44d7-934b-8f4731893737",
    "slug": "bow-neckchain-c69-70f2ab",
    "name": "Bow Neckchain - C69",
    "category": "CHAINS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1hs0JJgwYrT.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/70f2abf4-d7fb-44d7-934b-8f4731893737",
    "isFeatured": false
  },
  {
    "id": "7de2c33f-f22b-43e4-8311-2e3ed9139e03",
    "slug": "bracelet-b10-7de2c3",
    "name": "Bracelet B10",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 230,
    "discount": 13,
    "description": "Stainless Steel anti tarnished Bracelet.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/qbxt1x$ceisTRc9.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7de2c33f-f22b-43e4-8311-2e3ed9139e03",
    "isFeatured": false
  },
  {
    "id": "a189cc87-65a9-47e6-8d03-89a0fab0288c",
    "slug": "bracelet-b14-a189cc",
    "name": "Bracelet B14",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 230,
    "discount": 13,
    "description": "Stainless Steel anti tarnished Bracelet.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Cbxt1hzUOQhNd78.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a189cc87-65a9-47e6-8d03-89a0fab0288c",
    "isFeatured": false
  },
  {
    "id": "bf668f66-96b1-491f-94be-88b47137d949",
    "slug": "bracelet-b26-bf668f",
    "name": "Bracelet B26",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 250,
    "discount": 0,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel. 18k Gold Colour Plated.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Gbxt1BfmgSa$hGA.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bf668f66-96b1-491f-94be-88b47137d949",
    "isFeatured": false
  },
  {
    "id": "1833db61-1dbd-4af1-9f80-b19b779d4dc8",
    "slug": "bugadi-stud-pair-ec5-1833db",
    "name": "Bugadi Stud pair - EC5",
    "category": "EARRINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Bugadi Stud pair - EC5",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/dbxt1htzWLDsGWo.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1833db61-1dbd-4af1-9f80-b19b779d4dc8",
    "isFeatured": false
  },
  {
    "id": "08f5f471-9bcc-4aff-80a6-bb6addbd4bdc",
    "slug": "butterfly-charm-bracelet-b46-08f5f4",
    "name": "Butterfly charm bracelet - B46",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 220,
    "discount": 18,
    "description": "Anti-tarnish 💧 | Hypoallergenic 💖 | Made for everyday shine ✨",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/8bxt1xRB9Uh4mMi.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/08f5f471-9bcc-4aff-80a6-bb6addbd4bdc",
    "isFeatured": false
  },
  {
    "id": "84217943-6ec1-49b5-a0bc-3a95ad49f6a3",
    "slug": "butterfly-charm-bracelet-b46-842179",
    "name": "Butterfly charm bracelet - B46",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 220,
    "discount": 18,
    "description": "Anti-tarnish • Waterproof • Hypoallergenic&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ebxt1hjUk9vkvdA.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/84217943-6ec1-49b5-a0bc-3a95ad49f6a3",
    "isFeatured": false
  },
  {
    "id": "493fc5b0-d3d9-475a-a728-3551136fb0c8",
    "slug": "butterfly-charm-bracelet-b67-493fc5",
    "name": "Butterfly Charm Bracelet - B67",
    "category": "BRACELETS",
    "price": 230,
    "mrp": 230,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1hm$qAUno6P.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/493fc5b0-d3d9-475a-a728-3551136fb0c8",
    "isFeatured": false
  },
  {
    "id": "e86884a4-5e00-4fe8-8ceb-f0fb56abf3af",
    "slug": "butterfly-charm-bracelet-b46-e86884",
    "name": "Butterfly charm bracelet-B46",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 220,
    "discount": 18,
    "description": "Anti-tarnish • Waterproof • Hypoallergenic&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Jbxt1xZe5eI$HjZ.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e86884a4-5e00-4fe8-8ceb-f0fb56abf3af",
    "isFeatured": false
  },
  {
    "id": "95506adc-2d61-4f2f-8528-4b55fe85cfd9",
    "slug": "butterfly-earrings-e15-95506a",
    "name": "Butterfly earrings - E15",
    "category": "RINGS",
    "price": 130,
    "mrp": 130,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1xz7mq5Lj3y.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/95506adc-2d61-4f2f-8528-4b55fe85cfd9",
    "isFeatured": true
  },
  {
    "id": "5c66783e-5336-4cfc-a92a-167808ac5e06",
    "slug": "butterfly-earrings-ke35-5c6678",
    "name": "Butterfly earrings - KE35",
    "category": "RINGS",
    "price": 149,
    "mrp": 199,
    "discount": 25,
    "description": "Butterfly earrings - KE35",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1xYozp2CnyN.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5c66783e-5336-4cfc-a92a-167808ac5e06",
    "isFeatured": true
  },
  {
    "id": "bac9487b-573d-4e3d-a453-1aed5a8ce41c",
    "slug": "butterfly-hand-chain-b62-bac948",
    "name": "Butterfly hand chain - B62",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 209,
    "discount": 13,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ubxt1hygGvpeBkU.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bac9487b-573d-4e3d-a453-1aed5a8ce41c",
    "isFeatured": false
  },
  {
    "id": "36e9a96d-ed63-45a9-b0d1-0f00ab1f42f4",
    "slug": "butterfly-hoops-e34-36e9a9",
    "name": "Butterfly Hoops - E34",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/cbxt1xgmLkL1eIS.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/36e9a96d-ed63-45a9-b0d1-0f00ab1f42f4",
    "isFeatured": true
  },
  {
    "id": "ad43f4c8-acfa-486f-8c43-ba68d26200c2",
    "slug": "butterfly-invisible-chain-ad43f4",
    "name": "Butterfly Invisible Chain",
    "category": "CHAINS",
    "price": 119,
    "mrp": 119,
    "discount": 0,
    "description": "Butterfly Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/sbxt1hmuNNzoaUg.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ad43f4c8-acfa-486f-8c43-ba68d26200c2",
    "isFeatured": false
  },
  {
    "id": "dd401074-69c8-46bb-8514-12762d70b675",
    "slug": "butterfly-multi-color-neckchain-c84-dd4010",
    "name": "Butterfly Multi color Neckchain -  C84",
    "category": "CHAINS",
    "price": 220,
    "mrp": 249,
    "discount": 11,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/tbxt1BrsiNV4FGf.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/dd401074-69c8-46bb-8514-12762d70b675",
    "isFeatured": false
  },
  {
    "id": "ec1502b1-c10f-4528-89b5-9f620920de41",
    "slug": "butterfly-second-stud-ss2-ec1502",
    "name": "Butterfly second stud - SS2",
    "category": "EARRINGS",
    "price": 299,
    "mrp": 399,
    "discount": 25,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/rbxt1Rcg3v-vKds.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ec1502b1-c10f-4528-89b5-9f620920de41",
    "isFeatured": false
  },
  {
    "id": "e3542bba-5f84-44cd-959a-dedeb0ec9e3b",
    "slug": "butterfly-silver-chain-c12-e3542b",
    "name": "Butterfly silver chain C12",
    "category": "CHAINS",
    "price": 99,
    "mrp": 250,
    "discount": 60,
    "description": "Stainless steel chain",
    "material": "Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1RI-L4$NJZJ.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e3542bba-5f84-44cd-959a-dedeb0ec9e3b",
    "isFeatured": false
  },
  {
    "id": "2f540630-eef0-45f8-8d55-b72a56a0e5ce",
    "slug": "butterfly-silver-chain-c2-2f5406",
    "name": "Butterfly silver chain C2",
    "category": "CHAINS",
    "price": 149,
    "mrp": 299,
    "discount": 50,
    "description": "Stainless Steel anti tarnished Chain.",
    "material": "Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Hbxt1xbjiok-BgH.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2f540630-eef0-45f8-8d55-b72a56a0e5ce",
    "isFeatured": false
  },
  {
    "id": "bc45d6bc-1813-45bf-bf90-372645990625",
    "slug": "cherry-bloom-neckchain-bc45d6",
    "name": "Cherry Bloom Neckchain",
    "category": "CHAINS",
    "price": 209,
    "mrp": 240,
    "discount": 12,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Mbxt1hBa8sxZ6uA.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bc45d6bc-1813-45bf-bf90-372645990625",
    "isFeatured": false
  },
  {
    "id": "8ca3a344-bca7-45b0-ba92-606df62bf046",
    "slug": "clip-on-earcuff-ec1-8ca3a3",
    "name": "Clip on Earcuff - EC1",
    "category": "RINGS",
    "price": 99,
    "mrp": 199,
    "discount": 50,
    "description": "Trendy earcuff collections.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/6bxt1hMHCG1RmBi.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8ca3a344-bca7-45b0-ba92-606df62bf046",
    "isFeatured": true
  },
  {
    "id": "0a514b7c-6903-4f73-b71e-40870c37e36b",
    "slug": "clip-on-earcuff-ec3-0a514b",
    "name": "Clip on Earcuff - EC3",
    "category": "RINGS",
    "price": 99,
    "mrp": 199,
    "discount": 50,
    "description": "Earcuff - EC3",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Kbxt1xZz4HaHtox.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0a514b7c-6903-4f73-b71e-40870c37e36b",
    "isFeatured": true
  },
  {
    "id": "4f7b761a-657e-4870-ac64-6dd7513207d1",
    "slug": "clover-bracelet-b52-4f7b76",
    "name": "Clover bracelet - B52",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 230,
    "discount": 21,
    "description": "Clover bracelet - B52",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/7bxt1BV0pWJNezT.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4f7b761a-657e-4870-ac64-6dd7513207d1",
    "isFeatured": false
  },
  {
    "id": "4427ba16-0519-4b2a-8c06-5db7dfb1ba67",
    "slug": "combo-earrings-ke31-4427ba",
    "name": "Combo Earrings KE31",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Combo Earrings KE31",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ibxt1xB9abw8ELh.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4427ba16-0519-4b2a-8c06-5db7dfb1ba67",
    "isFeatured": true
  },
  {
    "id": "0a1e65d7-7cfc-4eea-8d64-1794df7f9eb2",
    "slug": "combo-earrings-ke32-0a1e65",
    "name": "Combo Earrings KE32",
    "category": "RINGS",
    "price": 239,
    "mrp": 240,
    "discount": 0,
    "description": "Combo Earrings KE32",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Jbxt1RonEw3mWf2.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0a1e65d7-7cfc-4eea-8d64-1794df7f9eb2",
    "isFeatured": true
  },
  {
    "id": "e9d0eca0-7ef3-4ab0-93a0-0ba9465a280c",
    "slug": "combo-earrings-ke32-e9d0ec",
    "name": "Combo Earrings KE32",
    "category": "RINGS",
    "price": 240,
    "mrp": 240,
    "discount": 0,
    "description": "Combo Earrings KE32",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/abxt1Rv7o55Qs68.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e9d0eca0-7ef3-4ab0-93a0-0ba9465a280c",
    "isFeatured": true
  },
  {
    "id": "749849ea-b019-4220-a25d-64f60d24e9af",
    "slug": "combo-earrings-set-of-3-749849",
    "name": "Combo Earrings Set of 3",
    "category": "RINGS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/3aee4012_1787674800640.png"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/749849ea-b019-4220-a25d-64f60d24e9af",
    "isFeatured": true
  },
  {
    "id": "088ef3ae-6c72-4272-aec7-a9487b8a3297",
    "slug": "crystal-petal-drop-ball-back-earrings-088ef3",
    "name": "Crystal Petal Drop Ball Back Earrings",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Crystal Petal Drop Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1RXn-fxFPv1.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/088ef3ae-6c72-4272-aec7-a9487b8a3297",
    "isFeatured": false
  },
  {
    "id": "c9e05251-dd9d-4ff8-8cba-47ca2a80d6a9",
    "slug": "cute-pup-pendant-chain-c80-c9e052",
    "name": "Cute Pup Pendant Chain - C80",
    "category": "CHAINS",
    "price": 199,
    "mrp": 250,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/obxt1xDDd1rrdNc.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c9e05251-dd9d-4ff8-8cba-47ca2a80d6a9",
    "isFeatured": false
  },
  {
    "id": "4ac606d3-6525-4a15-b833-44a43fc86da1",
    "slug": "cz-adjustable-bracelet-c47-4ac606",
    "name": "CZ Adjustable Bracelet  - C47",
    "category": "BRACELETS",
    "price": 210,
    "mrp": 210,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1hpfx$VL5$M.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4ac606d3-6525-4a15-b833-44a43fc86da1",
    "isFeatured": false
  },
  {
    "id": "6d63a264-b9be-4d24-80d1-71acbaf6d1ca",
    "slug": "cz-adjustable-bracelet-c47-6d63a2",
    "name": "CZ Adjustable Bracelet  - C47",
    "category": "BRACELETS",
    "price": 210,
    "mrp": 210,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ybxt1hjRmHLnW8N.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6d63a264-b9be-4d24-80d1-71acbaf6d1ca",
    "isFeatured": false
  },
  {
    "id": "7d25202a-e4ba-4c6b-985c-3ce7725be29a",
    "slug": "cz-adjustable-bracelet-b51-7d2520",
    "name": "CZ Adjustable Bracelet - B51",
    "category": "BRACELETS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/8bxt1x6a6Zphq5R.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7d25202a-e4ba-4c6b-985c-3ce7725be29a",
    "isFeatured": false
  },
  {
    "id": "5f05f1a9-89c2-414e-b5a8-59472bdbc3d0",
    "slug": "cz-adustable-bracelet-c47-5f05f1",
    "name": "CZ Adustable Bracelet - C47",
    "category": "BRACELETS",
    "price": 210,
    "mrp": 210,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1h5KsrE6VaB.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5f05f1a9-89c2-414e-b5a8-59472bdbc3d0",
    "isFeatured": false
  },
  {
    "id": "6b12eac5-c0ea-40cd-939b-16bed9b6f243",
    "slug": "cz-adustable-bracelet-c47-6b12ea",
    "name": "CZ Adustable Bracelet - C47",
    "category": "BRACELETS",
    "price": 210,
    "mrp": 210,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Fbxt1xX4o4pPF1I.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6b12eac5-c0ea-40cd-939b-16bed9b6f243",
    "isFeatured": false
  },
  {
    "id": "fc8b6499-1304-4ecb-8c40-20b02c0e1643",
    "slug": "cz-adustable-bracelet-c47-fc8b64",
    "name": "CZ Adustable Bracelet - C47",
    "category": "BRACELETS",
    "price": 210,
    "mrp": 210,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1BLQXkMgL06.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/fc8b6499-1304-4ecb-8c40-20b02c0e1643",
    "isFeatured": false
  },
  {
    "id": "5d5aaf76-9b3a-4f44-8b64-f0e9a9d19ff3",
    "slug": "cz-adustable-bracelet-c49-5d5aaf",
    "name": "CZ Adustable Bracelet - C49",
    "category": "BRACELETS",
    "price": 260,
    "mrp": 260,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1xXgWvT-rtL.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5d5aaf76-9b3a-4f44-8b64-f0e9a9d19ff3",
    "isFeatured": false
  },
  {
    "id": "b3cb42c1-9d05-4b40-ac28-861bc1c4f9a4",
    "slug": "cz-earrings-e14-b3cb42",
    "name": "CZ earrings - E14",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Abxt1RMRRu910XN.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b3cb42c1-9d05-4b40-ac28-861bc1c4f9a4",
    "isFeatured": true
  },
  {
    "id": "31fdcc35-4e84-46d3-9985-4e5d658885ea",
    "slug": "cz-earrings-e17-31fdcc",
    "name": "CZ earrings - E17",
    "category": "RINGS",
    "price": 150,
    "mrp": 150,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1BVNdvuFTvN.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/31fdcc35-4e84-46d3-9985-4e5d658885ea",
    "isFeatured": true
  },
  {
    "id": "ca4f8a02-431d-4066-ae32-56be7a56cb4d",
    "slug": "cz-earrings-e17-ca4f8a",
    "name": "CZ earrings - E17",
    "category": "RINGS",
    "price": 150,
    "mrp": 150,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Pbxt1BfaPvwoeFe.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ca4f8a02-431d-4066-ae32-56be7a56cb4d",
    "isFeatured": true
  },
  {
    "id": "d0d8e37a-47c1-43aa-a2c8-05b8e62d54cd",
    "slug": "daisy-bracelet-b58-d0d8e3",
    "name": "Daisy Bracelet - B58",
    "category": "BRACELETS",
    "price": 299,
    "mrp": 299,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/pbxt1xRsRH$ZAbT.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d0d8e37a-47c1-43aa-a2c8-05b8e62d54cd",
    "isFeatured": false
  },
  {
    "id": "077d9d77-42e4-43a9-b3ef-493734bdd7c1",
    "slug": "diamond-inspired-bangle-b2-077d9d",
    "name": "Diamond inspired bangle - B2",
    "category": "BANGLES",
    "price": 699,
    "mrp": 800,
    "discount": 12,
    "description": "Premium quality Diamond inspired bangle set of 2 bangle",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1xGxuhIkiYE.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/077d9d77-42e4-43a9-b3ef-493734bdd7c1",
    "isFeatured": false
  },
  {
    "id": "6f8df575-6461-4a0f-ab79-886d2d3ea37d",
    "slug": "double-layer-chain-6f8df5",
    "name": "Double layer chain",
    "category": "CHAINS",
    "price": 299,
    "mrp": 350,
    "discount": 14,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel. 18k Gold Colour Plated.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/nbxt1xjbPUPp1c1.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6f8df575-6461-4a0f-ab79-886d2d3ea37d",
    "isFeatured": false
  },
  {
    "id": "e882fef7-03cd-4fea-b6a6-afa09e3b3227",
    "slug": "double-layer-floral-earrings-e6-e882fe",
    "name": "Double layer floral earrings E6",
    "category": "RINGS",
    "price": 149,
    "mrp": 170,
    "discount": 12,
    "description": "Double layer floral earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/gbxt1RPO$-HIG$Q.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e882fef7-03cd-4fea-b6a6-afa09e3b3227",
    "isFeatured": true
  },
  {
    "id": "e5917e49-6c3f-4aa3-a197-aa2250b053b0",
    "slug": "double-layer-neckchain-c78-e5917e",
    "name": "Double layer Neckchain C78",
    "category": "CHAINS",
    "price": 299,
    "mrp": 350,
    "discount": 14,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/cbxt1Bw2PAJfC$b.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e5917e49-6c3f-4aa3-a197-aa2250b053b0",
    "isFeatured": false
  },
  {
    "id": "8f9dbb70-ff1a-4c9b-85f8-69e718539b79",
    "slug": "drop-pendant-neckchain-ic10-8f9dbb",
    "name": "Drop Pendant Neckchain - IC10",
    "category": "CHAINS",
    "price": 299,
    "mrp": 350,
    "discount": 14,
    "description": "Made with anti tarnished adjustable chain.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/2bxt1hAajOW5kKn.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8f9dbb70-ff1a-4c9b-85f8-69e718539b79",
    "isFeatured": true
  },
  {
    "id": "cae9d8eb-69c4-4249-aba1-a28bd27a005f",
    "slug": "earcuff-pair-ec9-cae9d8",
    "name": "Earcuff - Pair EC9",
    "category": "RINGS",
    "price": 299,
    "mrp": 299,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1xOqdO5TgHa.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/cae9d8eb-69c4-4249-aba1-a28bd27a005f",
    "isFeatured": true
  },
  {
    "id": "2e900a43-87ab-4045-876f-206c22564e35",
    "slug": "earcuff-pair-ec8-2e900a",
    "name": "Earcuff pair EC8",
    "category": "RINGS",
    "price": 349,
    "mrp": 349,
    "discount": 0,
    "description": "Earcuff pair",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/3bxt1R3VPnSifJi.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2e900a43-87ab-4045-876f-206c22564e35",
    "isFeatured": true
  },
  {
    "id": "0f869bec-02dd-4e66-8481-533229bfaccb",
    "slug": "earrings-0f869b",
    "name": "Earrings",
    "category": "RINGS",
    "price": 80,
    "mrp": 100,
    "discount": 20,
    "description": "Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/5bxt1xMoxCHGmOR.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0f869bec-02dd-4e66-8481-533229bfaccb",
    "isFeatured": true
  },
  {
    "id": "3bbbfbe5-79b8-45eb-b79a-8d7e63dbc192",
    "slug": "earrings-3bbbfb",
    "name": "Earrings",
    "category": "RINGS",
    "price": 99,
    "mrp": 150,
    "discount": 34,
    "description": "Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1huMI4-nddH.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3bbbfbe5-79b8-45eb-b79a-8d7e63dbc192",
    "isFeatured": true
  },
  {
    "id": "91d6e4e8-90c8-4e45-8a98-cde48273ce08",
    "slug": "earrings-91d6e4",
    "name": "Earrings",
    "category": "RINGS",
    "price": 70,
    "mrp": 100,
    "discount": 30,
    "description": "Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Cbxt1hTaeYQ2mq1.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/91d6e4e8-90c8-4e45-8a98-cde48273ce08",
    "isFeatured": true
  },
  {
    "id": "dbcd839e-0008-4364-8aa2-292e18a15b81",
    "slug": "earrings-dbcd83",
    "name": "Earrings",
    "category": "RINGS",
    "price": 50,
    "mrp": 50,
    "discount": 0,
    "description": "Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Fbxt1h-Z$mbf3er.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/dbcd839e-0008-4364-8aa2-292e18a15b81",
    "isFeatured": true
  },
  {
    "id": "8670d27b-2307-46d9-b912-581129b3b8c2",
    "slug": "earrings-oe13-8670d2",
    "name": "Earrings - OE13",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Earrings - OE13",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/dbxt1xH2hC3uzQP.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8670d27b-2307-46d9-b912-581129b3b8c2",
    "isFeatured": true
  },
  {
    "id": "1b8663c6-0217-44b5-b615-519fd9325240",
    "slug": "earrings-with-backscrew-ec7-1b8663",
    "name": "Earrings with backscrew - EC7",
    "category": "RINGS",
    "price": 109,
    "mrp": 109,
    "discount": 0,
    "description": "Earrings with backscrew - EC7",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1xXxhufxrTd.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1b8663c6-0217-44b5-b615-519fd9325240",
    "isFeatured": true
  },
  {
    "id": "6d921fbb-b8b5-41c4-b906-4729f5054004",
    "slug": "earrings-with-backscrew-ec7-6d921f",
    "name": "Earrings with backscrew - EC7",
    "category": "RINGS",
    "price": 109,
    "mrp": 109,
    "discount": 0,
    "description": "Earrings with backscrew - EC7",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ybxt1h$gUx5oabl.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6d921fbb-b8b5-41c4-b906-4729f5054004",
    "isFeatured": true
  },
  {
    "id": "f7253db3-592c-418a-a4d0-63d08b614ac6",
    "slug": "earrings-with-backscrew-ec7-f7253d",
    "name": "Earrings with backscrew - EC7",
    "category": "RINGS",
    "price": 109,
    "mrp": 109,
    "discount": 0,
    "description": "Earrings with backscrew - EC7",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/jbxt1BoHi5Yok4G.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f7253db3-592c-418a-a4d0-63d08b614ac6",
    "isFeatured": true
  },
  {
    "id": "42051643-ee07-4f36-a4a3-ae8f8c3c7bc7",
    "slug": "ellakkathali-neckchain-420516",
    "name": "Ellakkathali Neckchain",
    "category": "NECKLACES",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Ellakkathali Neckchain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/d6111550_1786820049816.png"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/42051643-ee07-4f36-a4a3-ae8f8c3c7bc7",
    "isFeatured": false
  },
  {
    "id": "189a369d-9db1-4ccf-bdc3-ef64e317fff2",
    "slug": "emerald-heart-hoops-189a36",
    "name": "Emerald Heart Hoops",
    "category": "RINGS",
    "price": 239,
    "mrp": 250,
    "discount": 4,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/6bxt1hdr5TQvRwC.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/189a369d-9db1-4ccf-bdc3-ef64e317fff2",
    "isFeatured": true
  },
  {
    "id": "7bb8d036-f6aa-43f5-a9b1-42b895c4e387",
    "slug": "emerald-pendant-chain-7bb8d0",
    "name": "Emerald Pendant Chain",
    "category": "CHAINS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Vbxt1xysO3VvhEA.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7bb8d036-f6aa-43f5-a9b1-42b895c4e387",
    "isFeatured": false
  },
  {
    "id": "2405e40a-7ade-4e2e-846a-8040fb337d7f",
    "slug": "fake-dual-piercing-earrings-2405e4",
    "name": "Fake Dual Piercing Earrings",
    "category": "RINGS",
    "price": 229,
    "mrp": 250,
    "discount": 8,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/6bxt1BoWFfxSLdP.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2405e40a-7ade-4e2e-846a-8040fb337d7f",
    "isFeatured": true
  },
  {
    "id": "66257cf2-28ec-40a7-baf3-f611fd94ff61",
    "slug": "fancy-hoops-e35-66257c",
    "name": "Fancy Hoops -  E35",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/hbxt1Bhz06urX86.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/66257cf2-28ec-40a7-baf3-f611fd94ff61",
    "isFeatured": true
  },
  {
    "id": "b3a29e14-05e1-4c51-9a77-d7be162bed2e",
    "slug": "fancy-hoops-e33-b3a29e",
    "name": "Fancy Hoops - E33",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1RR-aZJCh5E.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b3a29e14-05e1-4c51-9a77-d7be162bed2e",
    "isFeatured": true
  },
  {
    "id": "f7b9f4e8-94ae-47c9-8235-6e353b776f51",
    "slug": "fancy-round-hoops-e32-f7b9f4",
    "name": "Fancy Round Hoops - E32",
    "category": "RINGS",
    "price": 209,
    "mrp": 209,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy and copper metals studded with CZ stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1huo0JmJ$iV.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f7b9f4e8-94ae-47c9-8235-6e353b776f51",
    "isFeatured": true
  },
  {
    "id": "66f9abcf-d861-41bb-913e-4ba6c749bbad",
    "slug": "floral-adjustable-ring-66f9ab",
    "name": "Floral Adjustable Ring",
    "category": "RINGS",
    "price": 149,
    "mrp": 199,
    "discount": 25,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Gbxt1hAgPI0UndA.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/66f9abcf-d861-41bb-913e-4ba6c749bbad",
    "isFeatured": true
  },
  {
    "id": "1d2a5146-ea2b-433a-b837-3c97782b26cc",
    "slug": "floral-anklet-pair-1d2a51",
    "name": "Floral Anklet Pair",
    "category": "ANKLETS",
    "price": 399,
    "mrp": 399,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/415b2e6c_1787310068390.png"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1d2a5146-ea2b-433a-b837-3c97782b26cc",
    "isFeatured": false
  },
  {
    "id": "1645dd34-1fed-41b6-b4bd-d29143da8611",
    "slug": "floral-bracelet-b34-1645dd",
    "name": "Floral bracelet B34",
    "category": "BRACELETS",
    "price": 219,
    "mrp": 320,
    "discount": 31,
    "description": "Anti-tarnish • Waterproof • Hypoallergenic&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1RsZBMz$laU.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1645dd34-1fed-41b6-b4bd-d29143da8611",
    "isFeatured": false
  },
  {
    "id": "81bd2ff2-c9f6-4926-b388-d6918a1e2d70",
    "slug": "floral-chain-c22-81bd2f",
    "name": "Floral chain C22",
    "category": "CHAINS",
    "price": 109,
    "mrp": 140,
    "discount": 22,
    "description": "Stainless Steel Floral chain",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1xdQ8GpWRdy.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/81bd2ff2-c9f6-4926-b388-d6918a1e2d70",
    "isFeatured": false
  },
  {
    "id": "d250e15b-5f07-419f-af46-e5583aab2d88",
    "slug": "floral-charm-bracelet-b46-d250e1",
    "name": "Floral charm bracelet - B46",
    "category": "BRACELETS",
    "price": 220,
    "mrp": 220,
    "discount": 0,
    "description": "Floral charm bracelet - B46",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ubxt1haPYrCWeDY.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d250e15b-5f07-419f-af46-e5583aab2d88",
    "isFeatured": false
  },
  {
    "id": "a9b6c208-65cb-4b58-bc13-473f33e8e357",
    "slug": "floral-drop-ball-back-earrings-a9b6c2",
    "name": "Floral Drop Ball Back Earrings",
    "category": "EARRINGS",
    "price": 190,
    "mrp": 199,
    "discount": 4,
    "description": "Premium Anti tarnished - highly durable, rust-resistant and ready for everyday wear Water-resistant for daily wear. Avoid harsh chemicals for longer life. Finished in 18KT Gold Tone for a rich luxury look. Advanced PVD Coating, long-lasting colour, anti-tarnish &amp; scratch resistance. . Extra E-Coating Layer on top – added protection and shine.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/6bxt1BE7HGBQZLx.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a9b6c208-65cb-4b58-bc13-473f33e8e357",
    "isFeatured": false
  },
  {
    "id": "f3285396-7b8b-4d73-934c-f4eda40806fd",
    "slug": "floral-earring-e14-f32853",
    "name": "Floral earring - E14",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/9bxt1xxhFfjTFVl.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f3285396-7b8b-4d73-934c-f4eda40806fd",
    "isFeatured": true
  },
  {
    "id": "e602fafd-b8f5-42d5-bdbe-e468b965c0c1",
    "slug": "floral-hand-chain-b61-e602fa",
    "name": "Floral Hand Chain - B61",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 215,
    "discount": 16,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1xnvfwoglA2.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e602fafd-b8f5-42d5-bdbe-e468b965c0c1",
    "isFeatured": false
  },
  {
    "id": "ba4ddd40-c4a3-42a4-9ea4-dbdccc868ace",
    "slug": "floral-hoops-ba4ddd",
    "name": "Floral Hoops",
    "category": "RINGS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/63520bdb_1787242453086.png"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ba4ddd40-c4a3-42a4-9ea4-dbdccc868ace",
    "isFeatured": true
  },
  {
    "id": "a8dfb7a9-c5c4-4664-9153-0d4d4652c5a0",
    "slug": "floral-invisible-chain-a8dfb7",
    "name": "Floral Invisible Chain",
    "category": "CHAINS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Floral Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1RDqtmR6-ay.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a8dfb7a9-c5c4-4664-9153-0d4d4652c5a0",
    "isFeatured": false
  },
  {
    "id": "e47778e6-edbe-4948-9b12-e9b073e7d130",
    "slug": "floral-invisible-chain-e47778",
    "name": "Floral Invisible Chain",
    "category": "CHAINS",
    "price": 109,
    "mrp": 109,
    "discount": 0,
    "description": "Floral Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/dbxt1x7jSINd$6T.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e47778e6-edbe-4948-9b12-e9b073e7d130",
    "isFeatured": false
  },
  {
    "id": "0e3cc0e2-898f-4611-a673-f6c77566bdcd",
    "slug": "floral-invisible-chain-ic14-0e3cc0",
    "name": "Floral invisible chain - IC14",
    "category": "CHAINS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Floral invisible chain - IC14",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1hIvqCXxyiM.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0e3cc0e2-898f-4611-a673-f6c77566bdcd",
    "isFeatured": false
  },
  {
    "id": "aee4e86a-7f20-4cc7-808b-e2b71e936f1e",
    "slug": "floral-kada-bracelet-b66-aee4e8",
    "name": "Floral Kada Bracelet - B66",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 220,
    "discount": 9,
    "description": "Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ybxt1B2UjVOUpKo.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/aee4e86a-7f20-4cc7-808b-e2b71e936f1e",
    "isFeatured": false
  },
  {
    "id": "081c901e-d7c2-46ee-bd3a-435f45723a63",
    "slug": "floral-neckchain-081c90",
    "name": "Floral Neckchain",
    "category": "CHAINS",
    "price": 249,
    "mrp": 300,
    "discount": 17,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/2bxt1xs6MmBkwx0.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/081c901e-d7c2-46ee-bd3a-435f45723a63",
    "isFeatured": false
  },
  {
    "id": "7a78cefa-b63a-4a9e-b815-27a259a7832d",
    "slug": "floral-neckchain-c43-7a78ce",
    "name": "Floral Neckchain C43",
    "category": "CHAINS",
    "price": 99,
    "mrp": 230,
    "discount": 56,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1B2ND1rLj-k.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7a78cefa-b63a-4a9e-b815-27a259a7832d",
    "isFeatured": false
  },
  {
    "id": "97946a63-0485-4bc5-b324-fbc9c89fe324",
    "slug": "golden-heart-hoops-97946a",
    "name": "Golden Heart Hoops",
    "category": "RINGS",
    "price": 220,
    "mrp": 250,
    "discount": 12,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/hbxt1h0DEVDfwBj.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/97946a63-0485-4bc5-b324-fbc9c89fe324",
    "isFeatured": true
  },
  {
    "id": "642ab3e5-2be1-4473-9df6-26818f6019dd",
    "slug": "golden-rose-neckchain-642ab3",
    "name": "Golden Rose Neckchain",
    "category": "CHAINS",
    "price": 239,
    "mrp": 300,
    "discount": 20,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ibxt1R0LK3k6pHl.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/642ab3e5-2be1-4473-9df6-26818f6019dd",
    "isFeatured": false
  },
  {
    "id": "dc4937e8-3bae-4c2e-863c-66b61768dc90",
    "slug": "green-lotus-invisible-chain-dc4937",
    "name": "Green Lotus Invisible Chain",
    "category": "CHAINS",
    "price": 59,
    "mrp": 59,
    "discount": 0,
    "description": "Green Lotus Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/rbxt1BR6ow$aY3P.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/dc4937e8-3bae-4c2e-863c-66b61768dc90",
    "isFeatured": false
  },
  {
    "id": "c240811d-1a03-48a4-8433-900b7e554edb",
    "slug": "green-pendant-invisible-chain-c24081",
    "name": "Green Pendant Invisible Chain",
    "category": "CHAINS",
    "price": 119,
    "mrp": 119,
    "discount": 0,
    "description": "Green Pendant Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1Rt3ECyt39b.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c240811d-1a03-48a4-8433-900b7e554edb",
    "isFeatured": false
  },
  {
    "id": "0a1c4b6d-78cb-4574-9a51-3beac95d46fe",
    "slug": "heart-chain-c30-0a1c4b",
    "name": "Heart Chain C30",
    "category": "CHAINS",
    "price": 180,
    "mrp": 220,
    "discount": 18,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel. 18k Gold Colour Plated.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Kbxt1h1eg85wfs7.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0a1c4b6d-78cb-4574-9a51-3beac95d46fe",
    "isFeatured": false
  },
  {
    "id": "cd6c7ae6-3cbe-4d3e-b9c0-56396f8aa931",
    "slug": "heart-chain-c42-cd6c7a",
    "name": "Heart Chain C42",
    "category": "CHAINS",
    "price": 180,
    "mrp": 220,
    "discount": 18,
    "description": "Anti-tarnish &amp; long-lasting Water &amp; sweat resistant 💧 Hypoallergenic (safe for sensitive skin) Lightweight &amp; comfortable Perfect for daily wear",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/abxt1xiyQQ1kE7F.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/cd6c7ae6-3cbe-4d3e-b9c0-56396f8aa931",
    "isFeatured": false
  },
  {
    "id": "31eb84d3-edbf-4751-9dd9-6b7c55427675",
    "slug": "heart-chain-c72-31eb84",
    "name": "Heart Chain C72",
    "category": "CHAINS",
    "price": 180,
    "mrp": 240,
    "discount": 25,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel. 18k Gold Colour Plated.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/bbxt1x88XZ2WnIh.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/31eb84d3-edbf-4751-9dd9-6b7c55427675",
    "isFeatured": false
  },
  {
    "id": "a490e357-eccd-4046-be78-3bb2adac2d05",
    "slug": "heart-charm-bracelet-b46-a490e3",
    "name": "Heart charm Bracelet - B46",
    "category": "BRACELETS",
    "price": 220,
    "mrp": 220,
    "discount": 0,
    "description": "Anti-tarnish • Waterproof • Hypoallergenic&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1RFMxPWbi0M.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a490e357-eccd-4046-be78-3bb2adac2d05",
    "isFeatured": false
  },
  {
    "id": "af0a39b3-43c5-4762-a8b6-357c80f9fec5",
    "slug": "heart-charm-neck-chain-with-earrings-af0a39",
    "name": "Heart Charm Neck Chain With Earrings",
    "category": "CHAINS",
    "price": 239,
    "mrp": 239,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/45878554_1787242241406.png"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/af0a39b3-43c5-4762-a8b6-357c80f9fec5",
    "isFeatured": false
  },
  {
    "id": "f8098f0d-5826-4d99-aa8c-4008e6fc5043",
    "slug": "heart-cuff-b41-f8098f",
    "name": "Heart Cuff B41",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 240,
    "discount": 25,
    "description": "Anti-tarnish &amp; long-lasting Water &amp; sweat resistant 💧 Hypoallergenic (safe for sensitive skin) Lightweight &amp; comfortable Perfect for daily wear",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/3bxt1xw8bfQPwLS.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f8098f0d-5826-4d99-aa8c-4008e6fc5043",
    "isFeatured": false
  },
  {
    "id": "f50e5470-30bd-4c09-8d62-4e009937d20c",
    "slug": "heart-drop-earrings-ke34-f50e54",
    "name": "Heart Drop Earrings KE34",
    "category": "RINGS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/xbxt1RThKy$QVr0.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f50e5470-30bd-4c09-8d62-4e009937d20c",
    "isFeatured": true
  },
  {
    "id": "16df9641-2632-47a9-b56c-eee6d2aba144",
    "slug": "heart-drops-hip-chain-16df96",
    "name": "Heart Drops Hip Chain",
    "category": "RINGS",
    "price": 459,
    "mrp": 499,
    "discount": 8,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/c1c2b21b_1787310501166.png"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/16df9641-2632-47a9-b56c-eee6d2aba144",
    "isFeatured": true
  },
  {
    "id": "a40ec758-2155-4dd7-8d38-93eab0b0f1a0",
    "slug": "heart-drops-hip-chain-a40ec7",
    "name": "Heart Drops Hip Chain",
    "category": "RINGS",
    "price": 459,
    "mrp": 499,
    "discount": 8,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/e43e312d_1787310645958.png"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a40ec758-2155-4dd7-8d38-93eab0b0f1a0",
    "isFeatured": true
  },
  {
    "id": "41a143d9-94a2-4c87-909c-bf1d784c0808",
    "slug": "heart-earrings-e14-41a143",
    "name": "Heart earrings - E14",
    "category": "RINGS",
    "price": 99,
    "mrp": 120,
    "discount": 17,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1BTUo3jc1O9.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/41a143d9-94a2-4c87-909c-bf1d784c0808",
    "isFeatured": true
  },
  {
    "id": "8be9f910-b031-4d61-bcc6-345a19c0629f",
    "slug": "heart-earrings-e16-8be9f9",
    "name": "Heart earrings - E16",
    "category": "RINGS",
    "price": 109,
    "mrp": 140,
    "discount": 22,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ibxt1BT8zwTx2pR.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8be9f910-b031-4d61-bcc6-345a19c0629f",
    "isFeatured": true
  },
  {
    "id": "fb46b025-ac61-441f-aa5e-4e5c0d26d4dd",
    "slug": "heart-earrings-e16-fb46b0",
    "name": "Heart earrings - E16",
    "category": "RINGS",
    "price": 99,
    "mrp": 140,
    "discount": 29,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1Bg4LNxI3X0.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/fb46b025-ac61-441f-aa5e-4e5c0d26d4dd",
    "isFeatured": true
  },
  {
    "id": "ad01bcff-28c4-4271-9827-35bb290e700c",
    "slug": "heart-hoops-e12-ad01bc",
    "name": "Heart hoops - E12",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ibxt1ROolLyZ0x4.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ad01bcff-28c4-4271-9827-35bb290e700c",
    "isFeatured": true
  },
  {
    "id": "da96cbc2-fcc0-4eda-b386-2a0fa5c6cf8d",
    "slug": "heart-mini-huggies-da96cb",
    "name": "Heart Mini Huggies",
    "category": "RINGS",
    "price": 170,
    "mrp": 199,
    "discount": 14,
    "description": "Premium Anti tarnished - highly durable, rust-resistant and ready for everyday wear Water-resistant for daily wear. Avoid harsh chemicals for longer life. Finished in 18KT Gold Tone for a rich luxury look. Advanced PVD Coating, long-lasting colour, anti-tarnish &amp; scratch resistance. . Extra E-Coating Layer on top – added protection and shine.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ebxt1hjYuUbN3gq.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/da96cbc2-fcc0-4eda-b386-2a0fa5c6cf8d",
    "isFeatured": true
  },
  {
    "id": "14b1f20a-3b28-4775-a4ee-1857eeb7a171",
    "slug": "heart-neckchain-c61-14b1f2",
    "name": "Heart Neckchain - C61",
    "category": "CHAINS",
    "price": 190,
    "mrp": 190,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/jbxt1xVeW7lSpLu.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/14b1f20a-3b28-4775-a4ee-1857eeb7a171",
    "isFeatured": false
  },
  {
    "id": "5668ad2c-dd3b-4f93-a4f5-caf82e58edbc",
    "slug": "heart-press-on-nose-pin-earrings-single-5668ad",
    "name": "Heart Press On Nose Pin / Earrings - Single",
    "category": "RINGS",
    "price": 115,
    "mrp": 150,
    "discount": 23,
    "description": "Heart Press On Nose Pin / Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/sbxt1RAr4Ihjiul.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5668ad2c-dd3b-4f93-a4f5-caf82e58edbc",
    "isFeatured": true
  },
  {
    "id": "a9cfe150-0002-4210-86f8-d101fc2a002a",
    "slug": "heart-sollitaire-necklace-a9cfe1",
    "name": "Heart Sollitaire Necklace",
    "category": "CHAINS",
    "price": 180,
    "mrp": 199,
    "discount": 9,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ybxt1RMvYvV7nyJ.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a9cfe150-0002-4210-86f8-d101fc2a002a",
    "isFeatured": false
  },
  {
    "id": "21fd7cde-4b45-4c5e-ab5a-817c6be9494f",
    "slug": "hoops-e37-21fd7c",
    "name": "Hoops - E37",
    "category": "RINGS",
    "price": 189,
    "mrp": 189,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy and copper metals studded with CZ stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Abxt1BCvp71XZUK.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/21fd7cde-4b45-4c5e-ab5a-817c6be9494f",
    "isFeatured": true
  },
  {
    "id": "0082b291-0292-4f92-94c3-7a12ee3b1967",
    "slug": "hug-ring-r20-0082b2",
    "name": "Hug Ring - R20",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/6bxt1R2yDRrFS-7.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0082b291-0292-4f92-94c3-7a12ee3b1967",
    "isFeatured": true
  },
  {
    "id": "fbdb6b9d-0ade-4524-8c59-8005bf27728b",
    "slug": "infinity-black-bead-neckchain-c63-fbdb6b",
    "name": "Infinity Black Bead Neckchain - C63",
    "category": "RINGS",
    "price": 240,
    "mrp": 240,
    "discount": 0,
    "description": "Dailywear Mangalsutra.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/hbxt1hn-srhXt8M.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/fbdb6b9d-0ade-4524-8c59-8005bf27728b",
    "isFeatured": true
  },
  {
    "id": "e8d53cdc-0a7f-4903-bc79-a1fc1ebdff29",
    "slug": "infinity-bracelet-e8d53c",
    "name": "Infinity Bracelet",
    "category": "BRACELETS",
    "price": 299,
    "mrp": 350,
    "discount": 14,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/8c90beb0_1787242584411.png"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e8d53cdc-0a7f-4903-bc79-a1fc1ebdff29",
    "isFeatured": false
  },
  {
    "id": "e92d87c1-a352-44f9-9bd5-29e27e711a5f",
    "slug": "infinity-neck-chain-e92d87",
    "name": "Infinity Neck Chain",
    "category": "CHAINS",
    "price": 220,
    "mrp": 249,
    "discount": 11,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/a2932f31_1787241764282.png"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e92d87c1-a352-44f9-9bd5-29e27e711a5f",
    "isFeatured": false
  },
  {
    "id": "0247fafe-b59a-4625-8862-3759aa12bdbf",
    "slug": "infinity-neckchain-0247fa",
    "name": "Infinity Neckchain",
    "category": "CHAINS",
    "price": 249,
    "mrp": 300,
    "discount": 17,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/2bxt1hTnhinqAHH.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0247fafe-b59a-4625-8862-3759aa12bdbf",
    "isFeatured": false
  },
  {
    "id": "19e29611-0c10-43a0-a1fa-f2c7ef836242",
    "slug": "invisible-chain-19e296",
    "name": "Invisible Chain",
    "category": "CHAINS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Kbxt1ROf9cFxJsa.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/19e29611-0c10-43a0-a1fa-f2c7ef836242",
    "isFeatured": false
  },
  {
    "id": "5185f237-87c8-4941-89ca-aa9ec48fc704",
    "slug": "invisible-chain-5185f2",
    "name": "Invisible chain",
    "category": "CHAINS",
    "price": 219,
    "mrp": 219,
    "discount": 0,
    "description": "Invisible chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1BjM1HMOniM.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5185f237-87c8-4941-89ca-aa9ec48fc704",
    "isFeatured": false
  },
  {
    "id": "7812c09c-76de-4893-a387-ddc80cd514c5",
    "slug": "invisible-chain-7812c0",
    "name": "Invisible chain",
    "category": "CHAINS",
    "price": 180,
    "mrp": 180,
    "discount": 0,
    "description": "Invisible chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Tbxt1hSvROaRcRJ.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7812c09c-76de-4893-a387-ddc80cd514c5",
    "isFeatured": false
  },
  {
    "id": "90ee2e86-39de-48e6-b65a-7e7fe45ed52b",
    "slug": "invisible-chain-90ee2e",
    "name": "Invisible chain",
    "category": "CHAINS",
    "price": 180,
    "mrp": 180,
    "discount": 0,
    "description": "Invisible chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1RMnC3qKk-i.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/90ee2e86-39de-48e6-b65a-7e7fe45ed52b",
    "isFeatured": false
  },
  {
    "id": "9c304d27-f7b6-4618-85ce-07ca22090c7d",
    "slug": "invisible-chain-9c304d",
    "name": "Invisible Chain",
    "category": "CHAINS",
    "price": 119,
    "mrp": 119,
    "discount": 0,
    "description": "Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ibxt1BfBXxSBwV7.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9c304d27-f7b6-4618-85ce-07ca22090c7d",
    "isFeatured": false
  },
  {
    "id": "a7eb307d-b4f7-4c19-bb7a-4bebfc12d81d",
    "slug": "invisible-chain-a7eb30",
    "name": "Invisible Chain",
    "category": "CHAINS",
    "price": 119,
    "mrp": 119,
    "discount": 0,
    "description": "Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/lbxt1Bm9jUc4Ss8.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a7eb307d-b4f7-4c19-bb7a-4bebfc12d81d",
    "isFeatured": false
  },
  {
    "id": "aab90822-dc22-444e-b38f-1dd427cdd96f",
    "slug": "invisible-chain-aab908",
    "name": "Invisible chain",
    "category": "CHAINS",
    "price": 180,
    "mrp": 180,
    "discount": 0,
    "description": "Invisible chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1Bz7K3P1SoC.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/aab90822-dc22-444e-b38f-1dd427cdd96f",
    "isFeatured": false
  },
  {
    "id": "ae35740a-c573-4aec-be26-28cd697b9043",
    "slug": "invisible-chain-ae3574",
    "name": "Invisible Chain",
    "category": "CHAINS",
    "price": 109,
    "mrp": 109,
    "discount": 0,
    "description": "Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Gbxt1RcIHbxHWXe.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ae35740a-c573-4aec-be26-28cd697b9043",
    "isFeatured": false
  },
  {
    "id": "bc5cb0c9-66c3-4266-8727-febac165eba5",
    "slug": "invisible-chain-bc5cb0",
    "name": "Invisible chain",
    "category": "CHAINS",
    "price": 119,
    "mrp": 149,
    "discount": 20,
    "description": "Invisible chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ybxt1xqh1UZMqKa.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bc5cb0c9-66c3-4266-8727-febac165eba5",
    "isFeatured": false
  },
  {
    "id": "8d3cc87e-540e-4c48-83a5-583855c47695",
    "slug": "invisible-chain-ic1-8d3cc8",
    "name": "Invisible Chain IC1",
    "category": "CHAINS",
    "price": 120,
    "mrp": 150,
    "discount": 20,
    "description": "Invisible Chain IC1",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ibxt1hg5wzi76ny.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8d3cc87e-540e-4c48-83a5-583855c47695",
    "isFeatured": false
  },
  {
    "id": "9d363908-9565-4165-a5eb-d3885d1c646f",
    "slug": "invisible-chain-ic1-9d3639",
    "name": "Invisible Chain IC1",
    "category": "CHAINS",
    "price": 120,
    "mrp": 150,
    "discount": 20,
    "description": "Invisible Chain IC1",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/tbxt1BqlSkW-9f5.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9d363908-9565-4165-a5eb-d3885d1c646f",
    "isFeatured": false
  },
  {
    "id": "77c7fbaf-1a34-4f53-8f2e-a18c4618c9bb",
    "slug": "invisible-chain-ic2-77c7fb",
    "name": "Invisible Chain IC2",
    "category": "CHAINS",
    "price": 149,
    "mrp": 160,
    "discount": 6,
    "description": "Invisible Chain IC2",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1h16CQROIYy.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/77c7fbaf-1a34-4f53-8f2e-a18c4618c9bb",
    "isFeatured": false
  },
  {
    "id": "6c2af266-3dbe-4aea-a6b2-2d4124c72d28",
    "slug": "invisible-chain-ic3-6c2af2",
    "name": "Invisible Chain IC3",
    "category": "CHAINS",
    "price": 149,
    "mrp": 150,
    "discount": 1,
    "description": "Invisible Chain IC3",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1R7aKLs$iwO.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6c2af266-3dbe-4aea-a6b2-2d4124c72d28",
    "isFeatured": false
  },
  {
    "id": "8b35df19-f0bd-4e2c-9201-d26b884c9622",
    "slug": "invisible-chain-ic3-8b35df",
    "name": "Invisible Chain IC3",
    "category": "CHAINS",
    "price": 149,
    "mrp": 150,
    "discount": 1,
    "description": "Invisible Chain IC3",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1B6-fKhEy7r.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8b35df19-f0bd-4e2c-9201-d26b884c9622",
    "isFeatured": false
  },
  {
    "id": "732153b4-79f3-4472-bb2a-5eeee19461b8",
    "slug": "invisible-chain-ic4-732153",
    "name": "Invisible Chain IC4",
    "category": "CHAINS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Invisible Chain IC4",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1xuwo8WaQ8S.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/732153b4-79f3-4472-bb2a-5eeee19461b8",
    "isFeatured": false
  },
  {
    "id": "e4b26e2e-2a50-4402-8bd3-8f83b75756a8",
    "slug": "invisible-chain-ic6-e4b26e",
    "name": "Invisible Chain IC6",
    "category": "CHAINS",
    "price": 119,
    "mrp": 149,
    "discount": 20,
    "description": "Invisible Chain IC6",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1xYZ36Pb$b4.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e4b26e2e-2a50-4402-8bd3-8f83b75756a8",
    "isFeatured": false
  },
  {
    "id": "45d20131-0943-4a76-9063-5db38ebb660d",
    "slug": "invisible-chain-ic7-45d201",
    "name": "Invisible Chain IC7",
    "category": "CHAINS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Invisible Chain IC7",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/rbxt1BBRTomnqll.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/45d20131-0943-4a76-9063-5db38ebb660d",
    "isFeatured": false
  },
  {
    "id": "b3a1ba9b-671c-4b54-aa66-2953fc7477b8",
    "slug": "invisible-chain-ic7-b3a1ba",
    "name": "Invisible Chain IC7",
    "category": "CHAINS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Invisible Chain IC7",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ibxt1RE55Cpcr0s.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b3a1ba9b-671c-4b54-aa66-2953fc7477b8",
    "isFeatured": false
  },
  {
    "id": "17d2f390-d37b-44ba-8d27-114067a2b704",
    "slug": "invisible-chain-ic9-17d2f3",
    "name": "Invisible Chain IC9",
    "category": "CHAINS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Invisible Chain IC9",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1BdqamhSUBP.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/17d2f390-d37b-44ba-8d27-114067a2b704",
    "isFeatured": false
  },
  {
    "id": "b6f38a83-c9ba-4f4c-a0ae-585fb312ff91",
    "slug": "jumka-b6f38a",
    "name": "Jumka",
    "category": "EARRINGS",
    "price": 65,
    "mrp": 150,
    "discount": 56,
    "description": "Jumka",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1xCidFZlUN2.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b6f38a83-c9ba-4f4c-a0ae-585fb312ff91",
    "isFeatured": false
  },
  {
    "id": "e708f779-da62-4c01-911a-9b832d1d8e55",
    "slug": "jumka-e708f7",
    "name": "Jumka",
    "category": "RINGS",
    "price": 99,
    "mrp": 150,
    "discount": 34,
    "description": "Jumka",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/rbxt1BKemSGGoBY.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e708f779-da62-4c01-911a-9b832d1d8e55",
    "isFeatured": true
  },
  {
    "id": "eef06491-6581-45ee-8e5d-3d2072dc4012",
    "slug": "jumka-eef064",
    "name": "Jumka",
    "category": "EARRINGS",
    "price": 99,
    "mrp": 150,
    "discount": 34,
    "description": "Jumka",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1RpYELNkT-i.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/eef06491-6581-45ee-8e5d-3d2072dc4012",
    "isFeatured": false
  },
  {
    "id": "115c12a8-791a-4e8f-97f9-c004b5366333",
    "slug": "jumka-oe12-115c12",
    "name": "Jumka - OE12",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Jumka - OE12",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ybxt1hduXZmERhS.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/115c12a8-791a-4e8f-97f9-c004b5366333",
    "isFeatured": true
  },
  {
    "id": "f90bd43f-a746-4bf7-bc42-b82cbc6b03ca",
    "slug": "jumka-oe13-f90bd4",
    "name": "Jumka - OE13",
    "category": "RINGS",
    "price": 109,
    "mrp": 109,
    "discount": 0,
    "description": "Jumka - OE13",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/4bxt1Rqrn94eUiI.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f90bd43f-a746-4bf7-bc42-b82cbc6b03ca",
    "isFeatured": true
  },
  {
    "id": "b25808f2-338e-49dd-aa1b-9f5950b12e37",
    "slug": "kemp-neckpiece-set-n4-b25808",
    "name": "Kemp neckpiece set N4",
    "category": "NECKLACES",
    "price": 350,
    "mrp": 399,
    "discount": 12,
    "description": "Kemp neckpiece set",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ybxt1RGdbUYsBag.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b25808f2-338e-49dd-aa1b-9f5950b12e37",
    "isFeatured": false
  },
  {
    "id": "46ca7ff5-d4e9-47c0-9266-f6ae0993ab7b",
    "slug": "korean-earrings-ke6-46ca7f",
    "name": "Korean earrings KE6",
    "category": "RINGS",
    "price": 199,
    "mrp": 250,
    "discount": 20,
    "description": "Korean earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/lbxt1h3iLh$LPVd.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/46ca7ff5-d4e9-47c0-9266-f6ae0993ab7b",
    "isFeatured": true
  },
  {
    "id": "8e71a21e-c2c6-4aa6-96d8-f31f52951eaf",
    "slug": "lakshmi-bangle-set-of-4-b1-8e71a2",
    "name": "Lakshmi bangle set of 4  - B1",
    "category": "BANGLES",
    "price": 499,
    "mrp": 700,
    "discount": 28,
    "description": "Premium quality Lakshmi bangle set of 4.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/tbxt1RPyT3tHnV9.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8e71a21e-c2c6-4aa6-96d8-f31f52951eaf",
    "isFeatured": false
  },
  {
    "id": "00aa26a1-f0b5-42a1-be79-d61e82f0f5fd",
    "slug": "lakshmi-invisible-chain-00aa26",
    "name": "Lakshmi invisible chain",
    "category": "CHAINS",
    "price": 299,
    "mrp": 299,
    "discount": 0,
    "description": "Lakshmi invisible chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1BGpmb8j0S5.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/00aa26a1-f0b5-42a1-be79-d61e82f0f5fd",
    "isFeatured": false
  },
  {
    "id": "a28e7601-7991-47eb-a466-ed9f09e51669",
    "slug": "leafy-drop-ball-back-earrings-a28e76",
    "name": "Leafy Drop Ball Back Earrings",
    "category": "EARRINGS",
    "price": 190,
    "mrp": 199,
    "discount": 4,
    "description": "Premium Anti tarnished - highly durable, rust-resistant and ready for everyday wear Water-resistant for daily wear. Avoid harsh chemicals for longer life. Finished in 18KT Gold Tone for a rich luxury look. Advanced PVD Coating, long-lasting colour, anti-tarnish &amp; scratch resistance. . Extra E-Coating Layer on top – added protection and shine.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Cbxt1hN-WiqezkG.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a28e7601-7991-47eb-a466-ed9f09e51669",
    "isFeatured": false
  },
  {
    "id": "f0193d05-1938-4e0a-a3ac-bab15118977b",
    "slug": "leafy-invisible-chain-f0193d",
    "name": "Leafy Invisible Chain",
    "category": "CHAINS",
    "price": 109,
    "mrp": 109,
    "discount": 0,
    "description": "Leafy Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Zbxt1R9NT6aQBb5.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f0193d05-1938-4e0a-a3ac-bab15118977b",
    "isFeatured": false
  },
  {
    "id": "892dd193-53e5-4390-bfc7-e5c1df3a97fe",
    "slug": "mangalsutra-m2-892dd1",
    "name": "Mangalsutra M2",
    "category": "RINGS",
    "price": 259,
    "mrp": 299,
    "discount": 13,
    "description": "It’s traditional chain with imported pendant. Micro plated. perfect for daily wear.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/pbxt1xKAh15BauT.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/892dd193-53e5-4390-bfc7-e5c1df3a97fe",
    "isFeatured": true
  },
  {
    "id": "6724f6a7-75b2-469c-ab25-49c4ac27869a",
    "slug": "mangalsutra-m3-6724f6",
    "name": "Mangalsutra M3",
    "category": "RINGS",
    "price": 299,
    "mrp": 350,
    "discount": 14,
    "description": "It’s traditional chain with imported pendant. Micro plated. perfect for daily wear.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1RDZ6E04813.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6724f6a7-75b2-469c-ab25-49c4ac27869a",
    "isFeatured": true
  },
  {
    "id": "8ea28e9c-c401-4edd-9356-39a26dc8aa45",
    "slug": "meenakari-kada-b17-8ea28e",
    "name": "Meenakari kada B17",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Meenakari kada",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Cbxt1RsBTyyR5h6.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8ea28e9c-c401-4edd-9356-39a26dc8aa45",
    "isFeatured": false
  },
  {
    "id": "9e50bf71-e989-4987-8db6-263deec91183",
    "slug": "meenakari-kada-b18-9e50bf",
    "name": "Meenakari kada B18",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Meenakari kada",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/sbxt1xhIcyTIRMn.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9e50bf71-e989-4987-8db6-263deec91183",
    "isFeatured": false
  },
  {
    "id": "a1f5f824-7b27-4d86-ac07-019813dda995",
    "slug": "meenakari-kada-b19-a1f5f8",
    "name": "Meenakari kada B19",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Meenakari kada",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/nbxt1xbFEmAJYUg.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a1f5f824-7b27-4d86-ac07-019813dda995",
    "isFeatured": false
  },
  {
    "id": "ff0c7477-b1e2-4c55-9cdf-0c202ee7a342",
    "slug": "meenakari-kada-b22-ff0c74",
    "name": "Meenakari kada B22",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Meenakari kada",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/bbxt1B84TsfY8En.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ff0c7477-b1e2-4c55-9cdf-0c202ee7a342",
    "isFeatured": false
  },
  {
    "id": "28962b9a-b9a5-45e2-bda3-2d89485c031b",
    "slug": "minimal-ring-28962b",
    "name": "Minimal Ring",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Gbxt1B3OSz6P3wX.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/28962b9a-b9a5-45e2-bda3-2d89485c031b",
    "isFeatured": true
  },
  {
    "id": "4afd3fd5-ed2c-4d9f-b6e7-742704137e2d",
    "slug": "minimal-ring-4afd3f",
    "name": "Minimal Ring",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/bbxt1xa$JkeZOZi.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4afd3fd5-ed2c-4d9f-b6e7-742704137e2d",
    "isFeatured": true
  },
  {
    "id": "667f1480-add2-49e3-bd77-7e28ee9ec2b2",
    "slug": "minimal-ring-667f14",
    "name": "Minimal Ring",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/4bxt1Rqw$q9cvYM.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/667f1480-add2-49e3-bd77-7e28ee9ec2b2",
    "isFeatured": true
  },
  {
    "id": "9416632c-3b1f-490b-8bab-4da2b8a7546c",
    "slug": "minimal-stone-neckchain-c79-941663",
    "name": "Minimal Stone Neckchain - C79",
    "category": "CHAINS",
    "price": 99,
    "mrp": 199,
    "discount": 50,
    "description": "✨ Anti-tarnish ✨ Waterproof ✨ Hypoallergenic ✨ Everyday elegance",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/zbxt1RNxaRECgiH.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9416632c-3b1f-490b-8bab-4da2b8a7546c",
    "isFeatured": false
  },
  {
    "id": "6e4d2602-0769-4a17-8987-dc795b61e1cc",
    "slug": "minimal-tulip-bracelet-6e4d26",
    "name": "Minimal Tulip Bracelet",
    "category": "BRACELETS",
    "price": 259,
    "mrp": 299,
    "discount": 13,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Fbxt1xQkBha-4Vc.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6e4d2602-0769-4a17-8987-dc795b61e1cc",
    "isFeatured": true
  },
  {
    "id": "ba835aa1-205f-4985-a653-39508ab2dea8",
    "slug": "minimal-tulip-bracelet-ba835a",
    "name": "Minimal Tulip Bracelet",
    "category": "BRACELETS",
    "price": 259,
    "mrp": 299,
    "discount": 13,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/cbxt1BtGFxv0CRW.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ba835aa1-205f-4985-a653-39508ab2dea8",
    "isFeatured": true
  },
  {
    "id": "9ceb39e6-e9ea-45a2-bda7-210fe87be074",
    "slug": "minimal-tulip-magnetic-bracelet-9ceb39",
    "name": "Minimal Tulip Magnetic Bracelet",
    "category": "BRACELETS",
    "price": 399,
    "mrp": 460,
    "discount": 13,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1BCEIOLuXqQ.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9ceb39e6-e9ea-45a2-bda7-210fe87be074",
    "isFeatured": true
  },
  {
    "id": "b206b261-8e41-40f7-b94b-6201d4ed03a7",
    "slug": "minimal-tulip-neck-chain-b206b2",
    "name": "Minimal Tulip Neck Chain",
    "category": "CHAINS",
    "price": 169,
    "mrp": 199,
    "discount": 15,
    "description": "Premium Stainless steel Jewel. Anti tarnished. Waterproof Skin Friendly.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Mbxt1BAomlHajSQ.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b206b261-8e41-40f7-b94b-6201d4ed03a7",
    "isFeatured": true
  },
  {
    "id": "6edcc675-1d1e-42a8-9006-b57ab44b1246",
    "slug": "minimal-unisex-silver-bracelet-6edcc6",
    "name": "Minimal Unisex Silver Bracelet",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 199,
    "discount": 9,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/nbxt1BbLjiornmh.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6edcc675-1d1e-42a8-9006-b57ab44b1246",
    "isFeatured": false
  },
  {
    "id": "20d78ab4-832b-4ffc-b418-c46e0d0e7eb3",
    "slug": "moon-ball-back-stud-20d78a",
    "name": "Moon Ball Back Stud",
    "category": "EARRINGS",
    "price": 159,
    "mrp": 199,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Zbxt1ht8n3FnLxg.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/20d78ab4-832b-4ffc-b418-c46e0d0e7eb3",
    "isFeatured": false
  },
  {
    "id": "15d04c62-b042-4d8b-9e25-f9e3131f7a66",
    "slug": "moon-neckchain-15d04c",
    "name": "Moon Neckchain",
    "category": "CHAINS",
    "price": 219,
    "mrp": 250,
    "discount": 12,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/sbxt1BxnpM7LQP1.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/15d04c62-b042-4d8b-9e25-f9e3131f7a66",
    "isFeatured": false
  },
  {
    "id": "d64dc128-3022-4b26-bf62-8206bc46fa85",
    "slug": "moon-stud-big-ss2-d64dc1",
    "name": "Moon Stud big - SS2",
    "category": "EARRINGS",
    "price": 230,
    "mrp": 230,
    "discount": 0,
    "description": "Moon stud - SS2",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1xepNY4iOdz.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d64dc128-3022-4b26-bf62-8206bc46fa85",
    "isFeatured": false
  },
  {
    "id": "f8bdf602-df22-446e-94fc-88bf6a677d25",
    "slug": "multi-color-bloom-bracelet-b69-f8bdf6",
    "name": "Multi Color Bloom Bracelet - B69",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/wbxt1xGq9$AtmdP.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f8bdf602-df22-446e-94fc-88bf6a677d25",
    "isFeatured": false
  },
  {
    "id": "bdfa5471-ab8d-4e7b-af88-4622d7b59316",
    "slug": "multi-color-bloom-neckchain-c81-bdfa54",
    "name": "Multi Color Bloom Neckchain - C81",
    "category": "CHAINS",
    "price": 239,
    "mrp": 299,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/lbxt1BhXNLMxkTi.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bdfa5471-ab8d-4e7b-af88-4622d7b59316",
    "isFeatured": false
  },
  {
    "id": "5face527-44ba-4231-8361-004c95125b55",
    "slug": "multi-color-neckchain-c59-5face5",
    "name": "Multi color Neckchain - C59",
    "category": "CHAINS",
    "price": 230,
    "mrp": 230,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1hI931by4dx.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5face527-44ba-4231-8361-004c95125b55",
    "isFeatured": false
  },
  {
    "id": "a48654a9-041f-4149-80e2-cfc706fa1d08",
    "slug": "multi-color-neckchain-c65-a48654",
    "name": "Multi color Neckchain C65",
    "category": "CHAINS",
    "price": 269,
    "mrp": 299,
    "discount": 10,
    "description": "Anti-tarnish &amp; long-lasting Water &amp; sweat resistant 💧 Hypoallergenic (safe for sensitive skin) Lightweight &amp; comfortable Perfect for daily wear",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/hbxt1RTN$5xEzLo.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a48654a9-041f-4149-80e2-cfc706fa1d08",
    "isFeatured": false
  },
  {
    "id": "3fc5f6b4-51c2-40ef-aedb-d68d118496a2",
    "slug": "multi-color-tennis-bracelet-b72-3fc5f6",
    "name": "Multi Color Tennis Bracelet - B72",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/bbxt1BXY$dL9G5b.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3fc5f6b4-51c2-40ef-aedb-d68d118496a2",
    "isFeatured": true
  },
  {
    "id": "2080681c-468c-4a70-9b2f-bd02b0da637b",
    "slug": "multi-stone-drops-bracelet-b57-208068",
    "name": "Multi Stone Drops Bracelet - B57",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/obxt1RQDcGUiL4e.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2080681c-468c-4a70-9b2f-bd02b0da637b",
    "isFeatured": false
  },
  {
    "id": "0be6dc16-7825-46bf-a9e0-f28c14d73f48",
    "slug": "multi-stone-neckchain-c74-0be6dc",
    "name": "Multi Stone Neckchain - C74",
    "category": "CHAINS",
    "price": 269,
    "mrp": 299,
    "discount": 10,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Jbxt1RrtPHjOcMc.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0be6dc16-7825-46bf-a9e0-f28c14d73f48",
    "isFeatured": false
  },
  {
    "id": "950b10be-af51-4607-8d22-e2fe613f7d6c",
    "slug": "multi-color-stone-anklet-a3-pair-950b10",
    "name": "Multi-Color Stone Anklet A3 - Pair",
    "category": "ANKLETS",
    "price": 199,
    "mrp": 399,
    "discount": 50,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Jbxt1BsndrWwHGd.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/950b10be-af51-4607-8d22-e2fe613f7d6c",
    "isFeatured": false
  },
  {
    "id": "0f23a1a7-a63c-4ec9-a906-719e1a613c8c",
    "slug": "multicolor-nosepin-0f23a1",
    "name": "Multicolor Nosepin",
    "category": "RINGS",
    "price": 10,
    "mrp": 20,
    "discount": 50,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Multicolor",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Mbxt1hs9XoxWH0w.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0f23a1a7-a63c-4ec9-a906-719e1a613c8c",
    "isFeatured": true
  },
  {
    "id": "7945728d-bac0-410a-bb72-32edb0bf3f78",
    "slug": "multicolor-trendy-hoops-794572",
    "name": "Multicolor Trendy Hoops",
    "category": "RINGS",
    "price": 290,
    "mrp": 300,
    "discount": 3,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Multicolor",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Cbxt1Bcny2BLHa9.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7945728d-bac0-410a-bb72-32edb0bf3f78",
    "isFeatured": true
  },
  {
    "id": "562e653a-ffc4-43cb-9ce5-1f76c1913543",
    "slug": "multiple-bangle-stack-bracelet-562e65",
    "name": "Multiple Bangle Stack Bracelet",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 199,
    "discount": 50,
    "description": "Multiple Bangle Stack Bracelet",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ebxt1h$gmEttKYU.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/562e653a-ffc4-43cb-9ce5-1f76c1913543",
    "isFeatured": false
  },
  {
    "id": "3a781712-9b06-4b11-9dd0-9c545ae91778",
    "slug": "nail-bracelet-b42-3a7817",
    "name": "Nail Bracelet B42",
    "category": "BRACELETS",
    "price": 149,
    "mrp": 199,
    "discount": 25,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1h7lO$q-0Ts.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3a781712-9b06-4b11-9dd0-9c545ae91778",
    "isFeatured": false
  },
  {
    "id": "2d7b0413-249d-4361-a4e8-4c306ceb4999",
    "slug": "openable-pearl-heart-neckchain-c66-2d7b04",
    "name": "Openable Pearl Heart Neckchain -  C66",
    "category": "CHAINS",
    "price": 199,
    "mrp": 250,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ibxt1h5VeRs2VzR.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2d7b0413-249d-4361-a4e8-4c306ceb4999",
    "isFeatured": false
  },
  {
    "id": "012af615-d7fd-4216-b704-1f5efe674060",
    "slug": "pastel-color-invisble-chain-ic16-012af6",
    "name": "Pastel Color Invisble chain - IC16",
    "category": "CHAINS",
    "price": 119,
    "mrp": 149,
    "discount": 20,
    "description": "Pastel Color Invisble chain - IC16",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Tbxt1h$W5WWTIHu.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/012af615-d7fd-4216-b704-1f5efe674060",
    "isFeatured": false
  },
  {
    "id": "775d859d-08e3-4349-a3a0-c5c2af62e3b3",
    "slug": "pastel-color-invisble-chain-ic16-775d85",
    "name": "Pastel Color Invisble chain - IC16",
    "category": "CHAINS",
    "price": 119,
    "mrp": 149,
    "discount": 20,
    "description": "Pastel Color Invisble chain - IC16",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ubxt1xbIgNsDgvn.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/775d859d-08e3-4349-a3a0-c5c2af62e3b3",
    "isFeatured": false
  },
  {
    "id": "7a09eab7-5b0a-4a77-aa8c-54f0ef450087",
    "slug": "pastel-color-invisible-chain-ic15-7a09ea",
    "name": "Pastel color invisible chain - IC15",
    "category": "CHAINS",
    "price": 119,
    "mrp": 149,
    "discount": 20,
    "description": "Pastel color invisible chain - IC15",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Jbxt1B7IYyxi4eE.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7a09eab7-5b0a-4a77-aa8c-54f0ef450087",
    "isFeatured": false
  },
  {
    "id": "8e8d82c1-fca6-4281-89c4-7ac2021d9a6f",
    "slug": "pastel-color-invisible-chain-ic15-8e8d82",
    "name": "Pastel color invisible chain - IC15",
    "category": "CHAINS",
    "price": 119,
    "mrp": 149,
    "discount": 20,
    "description": "Pastel color invisible chain - IC15",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/lbxt1RTzeqdJvrr.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8e8d82c1-fca6-4281-89c4-7ac2021d9a6f",
    "isFeatured": false
  },
  {
    "id": "8f47b3e7-d1b9-4b3e-ba69-d35afe73963d",
    "slug": "pastel-jumka-j6-8f47b3",
    "name": "Pastel Jumka - J6",
    "category": "EARRINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Pastel Jumka - J6",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ubxt1hIk08JboBf.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8f47b3e7-d1b9-4b3e-ba69-d35afe73963d",
    "isFeatured": false
  },
  {
    "id": "314de52d-dc0c-42d6-a862-f9028403d743",
    "slug": "peacock-314de5",
    "name": "Peacock",
    "category": "CHAINS",
    "price": 119,
    "mrp": 119,
    "discount": 0,
    "description": "Peacock",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/xbxt1RdNP-D7Vkf.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/314de52d-dc0c-42d6-a862-f9028403d743",
    "isFeatured": false
  },
  {
    "id": "a7b5ed6d-31b0-4bdb-b278-2e693f87a011",
    "slug": "peacock-invisible-chain-a7b5ed",
    "name": "Peacock Invisible chain",
    "category": "CHAINS",
    "price": 119,
    "mrp": 119,
    "discount": 0,
    "description": "Peacock Invisible chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1BZNZiwBJsG.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a7b5ed6d-31b0-4bdb-b278-2e693f87a011",
    "isFeatured": false
  },
  {
    "id": "fdf75448-ed76-447a-bbbd-cf843827219d",
    "slug": "peacock-invisible-chain-ic11-fdf754",
    "name": "Peacock invisible chain - IC11",
    "category": "CHAINS",
    "price": 159,
    "mrp": 159,
    "discount": 0,
    "description": "Peacock invisible chain - IC11",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1hAy7bHkjYT.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/fdf75448-ed76-447a-bbbd-cf843827219d",
    "isFeatured": false
  },
  {
    "id": "f55db249-3192-4cf3-ba59-123d7ed1d5bb",
    "slug": "pearl-shell-charm-necklace-f55db2",
    "name": "Pearl & Shell Charm Necklace",
    "category": "CHAINS",
    "price": 219,
    "mrp": 250,
    "discount": 12,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1RyB2zoizmp.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f55db249-3192-4cf3-ba59-123d7ed1d5bb",
    "isFeatured": false
  },
  {
    "id": "c7b2f55d-ba61-4ffb-b4a6-468f25d58e5c",
    "slug": "pink-drop-hoops-c7b2f5",
    "name": "Pink Drop Hoops",
    "category": "RINGS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1xmvwU3g0jQ.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c7b2f55d-ba61-4ffb-b4a6-468f25d58e5c",
    "isFeatured": true
  },
  {
    "id": "e9cca2b1-8272-4618-a584-b1798e449f49",
    "slug": "plain-nose-pin-e9cca2",
    "name": "Plain Nose Pin",
    "category": "RINGS",
    "price": 10,
    "mrp": 20,
    "discount": 50,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/xbxt1xjbW9G$LpN.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e9cca2b1-8272-4618-a584-b1798e449f49",
    "isFeatured": true
  },
  {
    "id": "14382927-c780-4073-a4af-e458ecb1c41b",
    "slug": "premium-anti-tarnish-watch-143829",
    "name": "Premium Anti Tarnish Watch",
    "category": "RINGS",
    "price": 490,
    "mrp": 699,
    "discount": 29,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/pbxt1BcbZTlotvX.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/14382927-c780-4073-a4af-e458ecb1c41b",
    "isFeatured": true
  },
  {
    "id": "1def53f3-85b6-4c9d-8b49-930101e4dad8",
    "slug": "premium-anti-tarnish-watch-1def53",
    "name": "Premium Anti Tarnish Watch",
    "category": "RINGS",
    "price": 490,
    "mrp": 599,
    "discount": 18,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1hiDqh8XXAe.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1def53f3-85b6-4c9d-8b49-930101e4dad8",
    "isFeatured": true
  },
  {
    "id": "e4b4dd87-af46-463c-b14c-7e3bd334a35e",
    "slug": "premium-anti-tarnished-watch-w2-e4b4dd",
    "name": "Premium Anti tarnished Watch -  W2",
    "category": "RINGS",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1RcjSgcVrtu.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e4b4dd87-af46-463c-b14c-7e3bd334a35e",
    "isFeatured": true
  },
  {
    "id": "740aa8bf-3d52-438b-b8b3-a6b1b91e6f8b",
    "slug": "premium-anti-tarnished-watch-w2-740aa8",
    "name": "Premium Anti tarnished Watch - W2",
    "category": "RINGS",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1BhZC6Zo67C.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/740aa8bf-3d52-438b-b8b3-a6b1b91e6f8b",
    "isFeatured": true
  },
  {
    "id": "985ca2b5-3432-471d-b828-680760353fab",
    "slug": "premium-bow-earrings-k1-985ca2",
    "name": "Premium bow earrings K1",
    "category": "RINGS",
    "price": 149,
    "mrp": 199,
    "discount": 25,
    "description": "Premium bow earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ebxt1R42BiLDNYP.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/985ca2b5-3432-471d-b828-680760353fab",
    "isFeatured": true
  },
  {
    "id": "c941c721-d483-41ab-920f-ec9866b073ee",
    "slug": "premium-bracelet-b23-c941c7",
    "name": "Premium bracelet - B23",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 249,
    "discount": 27,
    "description": "Anti-tarnish 💧 | Hypoallergenic 💖 | Made for everyday shine ✨",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/nbxt1h3UmKdwGni.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c941c721-d483-41ab-920f-ec9866b073ee",
    "isFeatured": false
  },
  {
    "id": "d54dae94-efcf-4024-8ec1-533f750c7ba8",
    "slug": "premium-bracelet-b45-d54dae",
    "name": "Premium Bracelet - B45",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/kbxt1BZ6srKLk8e.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d54dae94-efcf-4024-8ec1-533f750c7ba8",
    "isFeatured": true
  },
  {
    "id": "73af4f71-7dc2-43e6-904a-d3056d7101c8",
    "slug": "premium-bracelet-b30-73af4f",
    "name": "Premium Bracelet B30",
    "category": "BRACELETS",
    "price": 309,
    "mrp": 350,
    "discount": 11,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ybxt1B$aEuvhrM3.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/73af4f71-7dc2-43e6-904a-d3056d7101c8",
    "isFeatured": false
  },
  {
    "id": "5cfc7d70-dda0-41c4-b65f-5d71e05e344e",
    "slug": "premium-bracelet-b43-5cfc7d",
    "name": "Premium Bracelet B43",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 350,
    "discount": 28,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ibxt1h9oqWlxAtn.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5cfc7d70-dda0-41c4-b65f-5d71e05e344e",
    "isFeatured": false
  },
  {
    "id": "51c07e98-f6ef-4ce0-8b51-1ae6318eaaa9",
    "slug": "premium-daisy-bracelet-b35-51c07e",
    "name": "Premium Daisy Bracelet B35",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 399,
    "discount": 37,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/abxt1xbxXZnxCeK.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/51c07e98-f6ef-4ce0-8b51-1ae6318eaaa9",
    "isFeatured": false
  },
  {
    "id": "40fd3de0-8895-4945-8050-92a23b359c1b",
    "slug": "premium-floral-bracelet-c35-40fd3d",
    "name": "Premium Floral Bracelet C35",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 399,
    "discount": 37,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/nbxt1BwoKIXkrwP.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/40fd3de0-8895-4945-8050-92a23b359c1b",
    "isFeatured": false
  },
  {
    "id": "047e8ef0-5ecb-4187-9b6e-bed1929c8d7c",
    "slug": "premium-gold-heart-earrings-k2-047e8e",
    "name": "Premium gold heart earrings K2",
    "category": "RINGS",
    "price": 120,
    "mrp": 140,
    "discount": 14,
    "description": "Premium gold heart earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Vbxt1RVvvBw77p1.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/047e8ef0-5ecb-4187-9b6e-bed1929c8d7c",
    "isFeatured": true
  },
  {
    "id": "03bc396c-1db8-4815-9c4a-22cf16030e16",
    "slug": "premium-gold-korean-earrings-k16-03bc39",
    "name": "Premium gold Korean earrings K16",
    "category": "RINGS",
    "price": 89,
    "mrp": 99,
    "discount": 10,
    "description": "Premium gold Korean earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1BgyHiGSoJW.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/03bc396c-1db8-4815-9c4a-22cf16030e16",
    "isFeatured": true
  },
  {
    "id": "177d7f9a-0f39-48a0-b080-5be7bdbe3143",
    "slug": "premium-kada-bracelet-b45-177d7f",
    "name": "Premium Kada Bracelet  - B45",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Kiyuziyu Jewellery &nbsp;(often stylized as Kiyu Ziyu) is&nbsp; a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry .",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/5bxt1hMs0Ai-hYs.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/177d7f9a-0f39-48a0-b080-5be7bdbe3143",
    "isFeatured": true
  },
  {
    "id": "873b7062-3bb0-4bf7-b373-b9fcdfede5ec",
    "slug": "premium-kada-bracelet-b45-873b70",
    "name": "Premium Kada Bracelet  - B45",
    "category": "BRACELETS",
    "price": 420,
    "mrp": 499,
    "discount": 15,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Pbxt1xizfgzP$0j.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/873b7062-3bb0-4bf7-b373-b9fcdfede5ec",
    "isFeatured": true
  },
  {
    "id": "bcd4fed4-ad25-4857-8e89-0b33216d912a",
    "slug": "premium-kada-bracelet-b45-bcd4fe",
    "name": "Premium Kada Bracelet  - B45",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Fbxt1BwQPEkRHqm.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bcd4fed4-ad25-4857-8e89-0b33216d912a",
    "isFeatured": true
  },
  {
    "id": "e927134c-71f3-423a-9452-f95826df41e0",
    "slug": "premium-kada-bracelet-b45-e92713",
    "name": "Premium Kada Bracelet  - B45",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ybxt1RTfWeskGrd.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e927134c-71f3-423a-9452-f95826df41e0",
    "isFeatured": true
  },
  {
    "id": "151baab5-b0a9-4d95-b821-450e8840e0a9",
    "slug": "premium-kada-bracelet-b45-151baa",
    "name": "Premium Kada Bracelet - B45",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Bbxt1Bzw0mu$6U3.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/151baab5-b0a9-4d95-b821-450e8840e0a9",
    "isFeatured": true
  },
  {
    "id": "4e6bb500-45b4-4689-a824-9b34e067188b",
    "slug": "premium-kada-bracelet-b45-4e6bb5",
    "name": "Premium Kada Bracelet - B45",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/5bxt1hmsnv0OAfj.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4e6bb500-45b4-4689-a824-9b34e067188b",
    "isFeatured": true
  },
  {
    "id": "d9ce6b03-f76e-4f8f-acff-3ce4174c37bc",
    "slug": "premium-kada-bracelet-b45-d9ce6b",
    "name": "Premium Kada Bracelet - B45",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Rbxt1xCZDTbrW4e.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d9ce6b03-f76e-4f8f-acff-3ce4174c37bc",
    "isFeatured": true
  },
  {
    "id": "e75653fe-0840-4ea7-94e1-b5ffda7a1f17",
    "slug": "premium-kada-bracelet-b45-e75653",
    "name": "Premium Kada Bracelet - B45",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Gbxt1hwcy0eku$x.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e75653fe-0840-4ea7-94e1-b5ffda7a1f17",
    "isFeatured": true
  },
  {
    "id": "15d6a494-fc3e-4d70-b79b-c130ced1e720",
    "slug": "premium-korean-earrings-k19-15d6a4",
    "name": "Premium korean earrings K19",
    "category": "RINGS",
    "price": 99,
    "mrp": 175,
    "discount": 43,
    "description": "Premium korean earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Fbxt1BquNfBEbGn.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/15d6a494-fc3e-4d70-b79b-c130ced1e720",
    "isFeatured": true
  },
  {
    "id": "fdb9b8b7-5543-4b14-ad67-6d54806d71ba",
    "slug": "premium-korean-earrings-k19-fdb9b8",
    "name": "Premium korean earrings K19",
    "category": "RINGS",
    "price": 99,
    "mrp": 175,
    "discount": 43,
    "description": "Premium korean earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ybxt1x9tHpPVt9C.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/fdb9b8b7-5543-4b14-ad67-6d54806d71ba",
    "isFeatured": true
  },
  {
    "id": "3fc6724c-f8ad-470d-b6d2-bfc1f204cfbc",
    "slug": "premium-korean-earrings-k5-3fc672",
    "name": "Premium korean earrings K5",
    "category": "RINGS",
    "price": 99,
    "mrp": 180,
    "discount": 45,
    "description": "Premium korean earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1R8h7QnE7$X.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3fc6724c-f8ad-470d-b6d2-bfc1f204cfbc",
    "isFeatured": true
  },
  {
    "id": "7e06b63c-0c5f-40ed-8c21-3bb7e9ff0de8",
    "slug": "premium-korean-earrings-k5-7e06b6",
    "name": "Premium korean earrings K5",
    "category": "RINGS",
    "price": 99,
    "mrp": 180,
    "discount": 45,
    "description": "Premium korean earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1R-5tSGZwoG.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7e06b63c-0c5f-40ed-8c21-3bb7e9ff0de8",
    "isFeatured": true
  },
  {
    "id": "82f210f9-4e4a-4660-ad9b-e6f4066df3e5",
    "slug": "premium-korean-earrings-k7-82f210",
    "name": "Premium korean earrings K7",
    "category": "RINGS",
    "price": 99,
    "mrp": 250,
    "discount": 60,
    "description": "Premium korean earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/jbxt1x5IDa3bNYr.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/82f210f9-4e4a-4660-ad9b-e6f4066df3e5",
    "isFeatured": true
  },
  {
    "id": "8a59420c-0e89-4ae3-bd79-b619a7854674",
    "slug": "premium-korean-earrings-k7-8a5942",
    "name": "Premium korean earrings K7",
    "category": "RINGS",
    "price": 99,
    "mrp": 250,
    "discount": 60,
    "description": "Premium korean earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1heprBzND6Y.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8a59420c-0e89-4ae3-bd79-b619a7854674",
    "isFeatured": true
  },
  {
    "id": "3fb9723c-5f39-4385-95ad-dd6b463c7662",
    "slug": "premium-silver-butterfly-earrings-k9-3fb972",
    "name": "Premium silver butterfly earrings K9",
    "category": "RINGS",
    "price": 59,
    "mrp": 120,
    "discount": 50,
    "description": "Premium silver butterfly earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/jbxt1hU-mtss0a3.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3fb9723c-5f39-4385-95ad-dd6b463c7662",
    "isFeatured": true
  },
  {
    "id": "33ae92e9-7c01-47a7-9ced-57fbed986b28",
    "slug": "premium-silver-rose-earrings-k18-33ae92",
    "name": "Premium silver rose earrings K18",
    "category": "RINGS",
    "price": 49,
    "mrp": 80,
    "discount": 38,
    "description": "Premium silver rose earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/obxt1hTAbKV2nBM.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/33ae92e9-7c01-47a7-9ced-57fbed986b28",
    "isFeatured": true
  },
  {
    "id": "40c95392-300a-4026-b251-be6f5689cb26",
    "slug": "pretty-bow-neck-chain-with-earrings-40c953",
    "name": "Pretty Bow Neck Chain With Earrings",
    "category": "CHAINS",
    "price": 299,
    "mrp": 350,
    "discount": 14,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/13ad59fc_1787241939262.png"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/40c95392-300a-4026-b251-be6f5689cb26",
    "isFeatured": false
  },
  {
    "id": "b8c3f1a1-d37b-40d1-a1f5-335cd9ff4549",
    "slug": "pretty-butterfly-neckchain-c76-b8c3f1",
    "name": "Pretty Butterfly NeckChain -  C76",
    "category": "CHAINS",
    "price": 199,
    "mrp": 250,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/abxt1RUEQ6qDaoa.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b8c3f1a1-d37b-40d1-a1f5-335cd9ff4549",
    "isFeatured": false
  },
  {
    "id": "327658b7-4620-41a7-9127-6b91a24fe88d",
    "slug": "promise-heart-bracelet-b70-327658",
    "name": "Promise Heart Bracelet - B70",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 180,
    "discount": 45,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ubxt1x1dsZNqZOS.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/327658b7-4620-41a7-9127-6b91a24fe88d",
    "isFeatured": true
  },
  {
    "id": "8922f20d-13f4-41ae-8b9a-8c018cf16673",
    "slug": "raindrop-anklet-pair-a5-8922f2",
    "name": "Raindrop Anklet Pair - A5",
    "category": "ANKLETS",
    "price": 299,
    "mrp": 399,
    "discount": 25,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Zbxt1ROC3$6-kV8.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8922f20d-13f4-41ae-8b9a-8c018cf16673",
    "isFeatured": false
  },
  {
    "id": "b3e817c4-4c8f-4729-ac5d-a3f08e0cdf1b",
    "slug": "reversible-anti-tarnish-anklet-pair-b3e817",
    "name": "Reversible Anti Tarnish Anklet - Pair",
    "category": "ANKLETS",
    "price": 399,
    "mrp": 399,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/6bxt1hQIFnTRf8Y.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b3e817c4-4c8f-4729-ac5d-a3f08e0cdf1b",
    "isFeatured": false
  },
  {
    "id": "6b5bcf2f-b2a0-4626-932f-8de0239335dd",
    "slug": "ring-r10-6b5bcf",
    "name": "Ring - R10",
    "category": "RINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Ring - R10",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1BrfqVSptFn.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6b5bcf2f-b2a0-4626-932f-8de0239335dd",
    "isFeatured": true
  },
  {
    "id": "977714f1-44c3-4cfd-b3e1-8ca033628ee5",
    "slug": "ring-r12-977714",
    "name": "Ring - R12",
    "category": "RINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Ring - R12",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/8bxt1R41mbueL9J.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/977714f1-44c3-4cfd-b3e1-8ca033628ee5",
    "isFeatured": true
  },
  {
    "id": "b2133847-2e1c-4ab5-9aa1-646949b68370",
    "slug": "ring-r13-b21338",
    "name": "Ring - R13",
    "category": "RINGS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Ring - R13",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/nbxt1hmQsTRYMtY.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b2133847-2e1c-4ab5-9aa1-646949b68370",
    "isFeatured": true
  },
  {
    "id": "364010c6-f052-4130-accc-a2ed3ca34d69",
    "slug": "ring-r8-364010",
    "name": "Ring - R8",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Ring - R8",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/gbxt1R$cQTSkb1w.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/364010c6-f052-4130-accc-a2ed3ca34d69",
    "isFeatured": true
  },
  {
    "id": "ab274ddc-642a-4cf7-9f8a-0ac129004797",
    "slug": "ring-r9-ab274d",
    "name": "Ring - R9",
    "category": "RINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Ring - R9",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1x6ry9T8gsP.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ab274ddc-642a-4cf7-9f8a-0ac129004797",
    "isFeatured": true
  },
  {
    "id": "2f276ab7-5150-4894-b6f5-ff298348ed7f",
    "slug": "rose-gold-chain-c10-2f276a",
    "name": "Rose gold chain C10",
    "category": "CHAINS",
    "price": 149,
    "mrp": 199,
    "discount": 25,
    "description": "Anti tarnished Stainless Steel Rose gold chain",
    "material": "Stainless Steel",
    "colour": "Rose Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/sbxt1RRnisFCfgq.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2f276ab7-5150-4894-b6f5-ff298348ed7f",
    "isFeatured": true
  },
  {
    "id": "c9d92559-c91b-4df1-8d72-43a9f0c3af65",
    "slug": "rose-gold-hoops-k4-c9d925",
    "name": "Rose gold hoops K4",
    "category": "RINGS",
    "price": 99,
    "mrp": 199,
    "discount": 50,
    "description": "Rose gold hoops",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Rose Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Tbxt1B7W73HyizY.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c9d92559-c91b-4df1-8d72-43a9f0c3af65",
    "isFeatured": true
  },
  {
    "id": "3f0f9d3a-d628-43c4-bb26-2bfb184f6cfc",
    "slug": "rose-gold-neck-chain-c17-3f0f9d",
    "name": "Rose gold neck chain C17",
    "category": "CHAINS",
    "price": 79,
    "mrp": 130,
    "discount": 39,
    "description": "Anti tarnished Stainless Steel Rose gold neck chain",
    "material": "Stainless Steel",
    "colour": "Rose Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/sbxt1BbXnSH3Bdq.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3f0f9d3a-d628-43c4-bb26-2bfb184f6cfc",
    "isFeatured": false
  },
  {
    "id": "5d78e838-1a5d-41c5-a224-ecc1beb43a15",
    "slug": "second-stud-ss2-5d78e8",
    "name": "Second Stud -SS2",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Tbxt1RiWIIFdRW7.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5d78e838-1a5d-41c5-a224-ecc1beb43a15",
    "isFeatured": false
  },
  {
    "id": "9e5e0440-06c5-4093-a285-9a674c21589f",
    "slug": "silver-anklet-a2-pair-9e5e04",
    "name": "Silver Anklet A2 - Pair",
    "category": "ANKLETS",
    "price": 149,
    "mrp": 249,
    "discount": 40,
    "description": "Anti-tarnish &amp; long-lasting Water &amp; sweat resistant 💧 Hypoallergenic (safe for sensitive skin) Lightweight &amp; comfortable Perfect for daily wear",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ubxt1Bx6wui33L4.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9e5e0440-06c5-4093-a285-9a674c21589f",
    "isFeatured": false
  },
  {
    "id": "8983e713-9b32-4c59-a59d-6aa48622b9a0",
    "slug": "silver-bracelet-b1-8983e7",
    "name": "Silver bracelet B1",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 199,
    "discount": 50,
    "description": "Stainless steel bracelet.",
    "material": "Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1RQL3dASr4x.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8983e713-9b32-4c59-a59d-6aa48622b9a0",
    "isFeatured": false
  },
  {
    "id": "3ade31a9-3fef-440d-a7f1-c3bbdf72fb57",
    "slug": "silver-bracelet-b2-3ade31",
    "name": "Silver bracelet B2",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 199,
    "discount": 50,
    "description": "Stainless steel bracelet.",
    "material": "Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ebxt1xk8B8MNjc1.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3ade31a9-3fef-440d-a7f1-c3bbdf72fb57",
    "isFeatured": false
  },
  {
    "id": "2b024bbd-5428-4472-b1c6-0ef4b35cc9b5",
    "slug": "silver-bracelet-b3-2b024b",
    "name": "Silver bracelet B3",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 199,
    "discount": 50,
    "description": "Stainless steel bracelet.",
    "material": "Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/qbxt1xkZ057RB3k.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2b024bbd-5428-4472-b1c6-0ef4b35cc9b5",
    "isFeatured": false
  },
  {
    "id": "61cab1d4-173d-4870-92d4-7b5771b5942e",
    "slug": "silver-bracelet-b4-61cab1",
    "name": "Silver bracelet B4",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 199,
    "discount": 50,
    "description": "Anti tarnished Stainless Steel Silver bracelet",
    "material": "Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ibxt1RtAVDxRkXk.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/61cab1d4-173d-4870-92d4-7b5771b5942e",
    "isFeatured": false
  },
  {
    "id": "a0113f67-a774-4ec3-abec-3955cf960645",
    "slug": "silver-bracelet-b5-a0113f",
    "name": "Silver bracelet B5",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 199,
    "discount": 50,
    "description": "Anti tarnished Stainless Steel Silver bracelet",
    "material": "Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1BU3iTT1PrJ.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a0113f67-a774-4ec3-abec-3955cf960645",
    "isFeatured": false
  },
  {
    "id": "a99aebd6-f0e2-4073-a0a0-0a67b28ecc63",
    "slug": "silver-heart-earrings-e2-a99aeb",
    "name": "Silver heart earrings E2",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Silver heart earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/5bxt1xtZEki6AOV.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a99aebd6-f0e2-4073-a0a0-0a67b28ecc63",
    "isFeatured": true
  },
  {
    "id": "91fc5adb-cdeb-4e81-8e2f-97eb9014fe8b",
    "slug": "silver-hoops-e2-91fc5a",
    "name": "Silver hoops E2",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Silver hoops",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/4bxt1hGHd8$ZyVA.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/91fc5adb-cdeb-4e81-8e2f-97eb9014fe8b",
    "isFeatured": true
  },
  {
    "id": "bc868410-b8c0-47b1-85c9-6560970d6e6a",
    "slug": "silver-snake-chain-bracelet-b36-bc8684",
    "name": "Silver Snake Chain Bracelet - B36",
    "category": "BRACELETS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Anti-tarnish &amp; long-lasting Water &amp; sweat resistant 💧 Hypoallergenic (safe for sensitive skin) Lightweight &amp; comfortable Perfect for daily wear",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/4bxt1hhcfdsaiMF.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bc868410-b8c0-47b1-85c9-6560970d6e6a",
    "isFeatured": false
  },
  {
    "id": "952a0a1e-7ef9-4d19-9e42-001293358bdd",
    "slug": "silver-star-earring-k17-952a0a",
    "name": "Silver star earring K17",
    "category": "RINGS",
    "price": 59,
    "mrp": 80,
    "discount": 26,
    "description": "Silver star earring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1hNHF5bxZs7.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/952a0a1e-7ef9-4d19-9e42-001293358bdd",
    "isFeatured": true
  },
  {
    "id": "ea9c655b-9511-467a-b07a-7d87ba161341",
    "slug": "small-hoops-second-stud-e12-ea9c65",
    "name": "Small hoops / Second stud - E12",
    "category": "RINGS",
    "price": 49,
    "mrp": 99,
    "discount": 50,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1Rm-A7O6VvR.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ea9c655b-9511-467a-b07a-7d87ba161341",
    "isFeatured": true
  },
  {
    "id": "1eb41085-37bc-44ae-87f2-089cfc54bbeb",
    "slug": "snake-bracelet-b44-1eb410",
    "name": "Snake Bracelet B44",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 149,
    "discount": 33,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1B2VWW4LI8g.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1eb41085-37bc-44ae-87f2-089cfc54bbeb",
    "isFeatured": false
  },
  {
    "id": "fddb81e1-f15a-47c6-89b0-26dd5c6a2d21",
    "slug": "snow-flake-charm-bracelet-b46-fddb81",
    "name": "Snow Flake charm bracelet - B46",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 220,
    "discount": 18,
    "description": "Anti-tarnish • Waterproof • Hypoallergenic&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Pbxt1BPZPRCcp7q.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/fddb81e1-f15a-47c6-89b0-26dd5c6a2d21",
    "isFeatured": false
  },
  {
    "id": "64a798b2-0686-4428-81ce-f42d137e6d56",
    "slug": "solid-mens-kada-64a798",
    "name": "Solid Men's Kada",
    "category": "BRACELETS",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1B7ohHtXTwc.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/64a798b2-0686-4428-81ce-f42d137e6d56",
    "isFeatured": false
  },
  {
    "id": "891f9aaa-5fe8-4742-bfe6-236b501ae305",
    "slug": "stackable-ring-r19-891f9a",
    "name": "Stackable Ring - R19",
    "category": "RINGS",
    "price": 180,
    "mrp": 180,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/lbxt1RmiralIMOk.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/891f9aaa-5fe8-4742-bfe6-236b501ae305",
    "isFeatured": true
  },
  {
    "id": "e9f6074a-27fa-4e5c-bf3b-0b1ed8f79747",
    "slug": "stackable-ring-r19-e9f607",
    "name": "Stackable Ring - R19",
    "category": "RINGS",
    "price": 170,
    "mrp": 170,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1R3laTYsv0u.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e9f6074a-27fa-4e5c-bf3b-0b1ed8f79747",
    "isFeatured": true
  },
  {
    "id": "7e89a44c-76ba-4fd5-99cb-24c40fb1ec52",
    "slug": "stackable-ring-r19-7e89a4",
    "name": "Stackable Ring - R19",
    "category": "RINGS",
    "price": 170,
    "mrp": 170,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1B8zPGMDMLF.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7e89a44c-76ba-4fd5-99cb-24c40fb1ec52",
    "isFeatured": true
  },
  {
    "id": "9b6e6934-32a8-49df-bef0-f0ff900816f9",
    "slug": "stackable-rings-r19-9b6e69",
    "name": "Stackable Rings - R19",
    "category": "RINGS",
    "price": 170,
    "mrp": 170,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Zbxt1B0FQJpgPGn.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9b6e6934-32a8-49df-bef0-f0ff900816f9",
    "isFeatured": true
  },
  {
    "id": "33a5ce61-1b05-472e-b580-c0bda3451601",
    "slug": "stackable-rings-r19-33a5ce",
    "name": "Stackable Rings - R19",
    "category": "RINGS",
    "price": 170,
    "mrp": 170,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ibxt1hc$ETAa21s.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/33a5ce61-1b05-472e-b580-c0bda3451601",
    "isFeatured": true
  },
  {
    "id": "c47b94df-038d-44d3-9027-2ae1baeca6b5",
    "slug": "stackable-rings-r19-c47b94",
    "name": "Stackable Rings - R19",
    "category": "RINGS",
    "price": 170,
    "mrp": 170,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1xxk5UnC3QK.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c47b94df-038d-44d3-9027-2ae1baeca6b5",
    "isFeatured": true
  },
  {
    "id": "2e4dd047-5c65-4ddd-87c5-c180c5112708",
    "slug": "stackable-rings-r19-2e4dd0",
    "name": "Stackable Rings - R19",
    "category": "RINGS",
    "price": 180,
    "mrp": 180,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1RjUjq2MLY6.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2e4dd047-5c65-4ddd-87c5-c180c5112708",
    "isFeatured": true
  },
  {
    "id": "dfe1bab9-59d5-4696-bd13-b5d04ce0e348",
    "slug": "stackable-rings-r19-dfe1ba",
    "name": "Stackable Rings - R19",
    "category": "RINGS",
    "price": 170,
    "mrp": 170,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/3bxt1xQ3XIJ2$nJ.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/dfe1bab9-59d5-4696-bd13-b5d04ce0e348",
    "isFeatured": true
  },
  {
    "id": "99703a62-f3cc-4623-b139-5916bdcd69b9",
    "slug": "stackable-rings-r19-99703a",
    "name": "Stackable Rings - R19",
    "category": "RINGS",
    "price": 180,
    "mrp": 180,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1BTbdTRLmMK.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/99703a62-f3cc-4623-b139-5916bdcd69b9",
    "isFeatured": true
  },
  {
    "id": "21d5bb89-c8c3-46d3-a064-bcaed2eb5d9f",
    "slug": "stackable-rings-set-of-2-r19-21d5bb",
    "name": "Stackable Rings Set of 2 - R19",
    "category": "RINGS",
    "price": 170,
    "mrp": 170,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/5bxt1RoRZSTTnlg.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/21d5bb89-c8c3-46d3-a064-bcaed2eb5d9f",
    "isFeatured": true
  },
  {
    "id": "f48bc966-662c-4626-a11b-26e87a594b0a",
    "slug": "stainless-steel-chain-c16-f48bc9",
    "name": "Stainless steel chain C16",
    "category": "CHAINS",
    "price": 69,
    "mrp": 150,
    "discount": 54,
    "description": "Stainless steel chain",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ubxt1RGfSBzJlPm.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f48bc966-662c-4626-a11b-26e87a594b0a",
    "isFeatured": false
  },
  {
    "id": "bd8603be-a07d-48a2-b83d-546d19269eb6",
    "slug": "stainless-steel-chain-c19-bd8603",
    "name": "Stainless steel chain C19",
    "category": "CHAINS",
    "price": 149,
    "mrp": 199,
    "discount": 25,
    "description": "Stainless steel chain",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/8bxt1hiXcKXGZ0A.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bd8603be-a07d-48a2-b83d-546d19269eb6",
    "isFeatured": false
  },
  {
    "id": "8a6f7835-1948-47ac-b3f7-8238a45ce477",
    "slug": "stainless-steel-hoops-e19-8a6f78",
    "name": "Stainless Steel hoops E19",
    "category": "RINGS",
    "price": 89,
    "mrp": 89,
    "discount": 0,
    "description": "Stainless Steel hoops E19",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1xrXJTTQ52k.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8a6f7835-1948-47ac-b3f7-8238a45ce477",
    "isFeatured": true
  },
  {
    "id": "33ea66e0-c92a-4572-9c7c-5769f5db4a17",
    "slug": "star-invisible-chain-33ea66",
    "name": "Star Invisible Chain",
    "category": "CHAINS",
    "price": 119,
    "mrp": 119,
    "discount": 0,
    "description": "Star Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/kbxt1BCGdY2b31C.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/33ea66e0-c92a-4572-9c7c-5769f5db4a17",
    "isFeatured": false
  },
  {
    "id": "3af2d673-ae49-442f-8cba-033945a89a92",
    "slug": "stretchable-tennis-bracelet-3af2d6",
    "name": "Stretchable Tennis Bracelet",
    "category": "BRACELETS",
    "price": 30,
    "mrp": 30,
    "discount": 0,
    "description": "Stretchable Tennis Bracelet",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1R64B25UP4a.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3af2d673-ae49-442f-8cba-033945a89a92",
    "isFeatured": false
  },
  {
    "id": "9c76bb5b-ebea-4f50-aee7-3f706042d2c1",
    "slug": "stretchable-tennis-bracelet-9c76bb",
    "name": "Stretchable Tennis Bracelet",
    "category": "BRACELETS",
    "price": 30,
    "mrp": 30,
    "discount": 0,
    "description": "Stretchable Tennis Bracelet",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1xDacSUGOvp.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9c76bb5b-ebea-4f50-aee7-3f706042d2c1",
    "isFeatured": false
  },
  {
    "id": "07e372a0-2c82-429d-91d6-76beb3c314eb",
    "slug": "stretchable-tennis-bracelet-07e372",
    "name": "Stretchable Tennis Bracelet",
    "category": "BRACELETS",
    "price": 30,
    "mrp": 30,
    "discount": 0,
    "description": "Stretchable Tennis Bracelet",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ybxt1R74rtjhBYc.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/07e372a0-2c82-429d-91d6-76beb3c314eb",
    "isFeatured": false
  },
  {
    "id": "582745ef-91de-4fb5-8e39-eb297a71d213",
    "slug": "swan-earring-e3-582745",
    "name": "Swan earring E3",
    "category": "RINGS",
    "price": 110,
    "mrp": 110,
    "discount": 0,
    "description": "Swan earring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Fbxt1x9sLFvF6xg.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/582745ef-91de-4fb5-8e39-eb297a71d213",
    "isFeatured": true
  },
  {
    "id": "1028b903-92e0-4393-abcf-0c13454258af",
    "slug": "swan-earrings-e3-1028b9",
    "name": "Swan Earrings E3",
    "category": "RINGS",
    "price": 110,
    "mrp": 110,
    "discount": 0,
    "description": "Swan earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/wbxt1hEj$QFqk3B.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1028b903-92e0-4393-abcf-0c13454258af",
    "isFeatured": true
  },
  {
    "id": "bad139b4-3476-4886-82da-1e7d6b0b161a",
    "slug": "swan-earrings-e3-bad139",
    "name": "Swan earrings E3",
    "category": "RINGS",
    "price": 110,
    "mrp": 110,
    "discount": 0,
    "description": "Swan earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/gbxt1BqbqLMMqMD.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bad139b4-3476-4886-82da-1e7d6b0b161a",
    "isFeatured": true
  },
  {
    "id": "3a6f505d-fa81-4365-800b-a5e04f7fced0",
    "slug": "swan-invisible-chain-3a6f50",
    "name": "Swan Invisible Chain",
    "category": "CHAINS",
    "price": 119,
    "mrp": 119,
    "discount": 0,
    "description": "Swan Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/obxt1hyX$28LKfu.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3a6f505d-fa81-4365-800b-a5e04f7fced0",
    "isFeatured": false
  },
  {
    "id": "73d44e02-1d28-48d2-b564-d8d11576d169",
    "slug": "swan-invisible-chain-73d44e",
    "name": "Swan Invisible Chain",
    "category": "CHAINS",
    "price": 119,
    "mrp": 119,
    "discount": 0,
    "description": "Swan Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1hxtN3DE2yK.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/73d44e02-1d28-48d2-b564-d8d11576d169",
    "isFeatured": false
  },
  {
    "id": "74f82d3c-7512-46a4-b10e-3f8054871ed9",
    "slug": "swan-invisible-chain-74f82d",
    "name": "Swan Invisible Chain",
    "category": "CHAINS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Swan Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Cbxt1RHm9x5prNc.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/74f82d3c-7512-46a4-b10e-3f8054871ed9",
    "isFeatured": false
  },
  {
    "id": "f3991b94-9a28-4ed6-9e9c-e887f7aac1ba",
    "slug": "tennis-bracelet-b38-f3991b",
    "name": "Tennis Bracelet B38",
    "category": "BRACELETS",
    "price": 119,
    "mrp": 199,
    "discount": 40,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/wbxt1h99J0Lzhpq.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f3991b94-9a28-4ed6-9e9c-e887f7aac1ba",
    "isFeatured": false
  },
  {
    "id": "66073230-91cf-4517-abae-3489b3b6760b",
    "slug": "trendy-ad-earrings-ec1-660732",
    "name": "Trendy AD earrings EC1",
    "category": "NECKLACES",
    "price": 349,
    "mrp": 399,
    "discount": 12,
    "description": "Trendy earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1hwP3R9mDAj.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/66073230-91cf-4517-abae-3489b3b6760b",
    "isFeatured": false
  },
  {
    "id": "6beb80da-2922-4eee-a4e5-2403f200e13e",
    "slug": "trendy-ball-back-earrings-6beb80",
    "name": "Trendy Ball Back Earrings",
    "category": "EARRINGS",
    "price": 190,
    "mrp": 199,
    "discount": 4,
    "description": "Premium Anti tarnished - highly durable, rust-resistant and ready for everyday wear Water-resistant for daily wear. Avoid harsh chemicals for longer life. Finished in 18KT Gold Tone for a rich luxury look. Advanced PVD Coating, long-lasting colour, anti-tarnish &amp; scratch resistance. . Extra E-Coating Layer on top – added protection and shine.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1hTxKsg7FDK.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6beb80da-2922-4eee-a4e5-2403f200e13e",
    "isFeatured": false
  },
  {
    "id": "b9a1290e-6aa2-4232-86a1-119f85951a1a",
    "slug": "trendy-bracelet-b55-b9a129",
    "name": "Trendy Bracelet - B55",
    "category": "BRACELETS",
    "price": 259,
    "mrp": 299,
    "discount": 13,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Abxt1hTV0JErnck.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b9a1290e-6aa2-4232-86a1-119f85951a1a",
    "isFeatured": false
  },
  {
    "id": "8425a8a6-93ab-4e06-a9b4-31a73385f5cf",
    "slug": "trendy-bracelet-b40-8425a8",
    "name": "Trendy Bracelet B40",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/sbxt1BpQWU6OIoa.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8425a8a6-93ab-4e06-a9b4-31a73385f5cf",
    "isFeatured": false
  },
  {
    "id": "4cb9d77b-2f0d-4eaf-b0cc-dc9aed7bae86",
    "slug": "trendy-chain-bracelet-b66-4cb9d7",
    "name": "Trendy Chain Bracelet - B66",
    "category": "BRACELETS",
    "price": 230,
    "mrp": 230,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/abxt1RTxochDEJ5.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4cb9d77b-2f0d-4eaf-b0cc-dc9aed7bae86",
    "isFeatured": false
  },
  {
    "id": "bad34f85-7fbb-476c-ad1e-50352a120cbc",
    "slug": "trendy-dual-hoops-ke36-bad34f",
    "name": "Trendy dual hoops KE36",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Made with premium 316L Stainless Steel (Surgical Grade) – highly durable, rust-resistant &amp; skin-friendly &nbsp;•⁠ ⁠Water-resistant / Waterproof – safe for daily wear, sweat &amp; moisture",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/xbxt1Rv-gWFW8NJ.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bad34f85-7fbb-476c-ad1e-50352a120cbc",
    "isFeatured": true
  },
  {
    "id": "78ecdd81-bf8a-44e9-b9b0-280c27e8d3d1",
    "slug": "trendy-ear-stud-p2-78ecdd",
    "name": "Trendy ear stud - P2",
    "category": "EARRINGS",
    "price": 170,
    "mrp": 199,
    "discount": 14,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/rbxt1BmCFIT-1xh.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/78ecdd81-bf8a-44e9-b9b0-280c27e8d3d1",
    "isFeatured": false
  },
  {
    "id": "8ab39fd1-3447-466b-a170-fc8ea68a41fb",
    "slug": "trendy-ear-stud-ss2-8ab39f",
    "name": "Trendy Ear Stud - SS2",
    "category": "EARRINGS",
    "price": 299,
    "mrp": 449,
    "discount": 33,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/nbxt1BJffIYeqUQ.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8ab39fd1-3447-466b-a170-fc8ea68a41fb",
    "isFeatured": false
  },
  {
    "id": "0dfb8df4-2519-4bdf-a777-026ae5d015c7",
    "slug": "trendy-earcuff-single-ec03-0dfb8d",
    "name": "Trendy earcuff - Single EC03",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Anti tarnished ear cuff",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1RMFOnA82cs.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0dfb8df4-2519-4bdf-a777-026ae5d015c7",
    "isFeatured": true
  },
  {
    "id": "27aa4dea-0ff7-4515-9506-c89ecf6d0a98",
    "slug": "trendy-earring-ss2-27aa4d",
    "name": "Trendy earring - SS2",
    "category": "EARRINGS",
    "price": 299,
    "mrp": 399,
    "discount": 25,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1BWgbAS4$tJ.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/27aa4dea-0ff7-4515-9506-c89ecf6d0a98",
    "isFeatured": false
  },
  {
    "id": "bce1a698-bb95-4d63-98e7-e82f676139d8",
    "slug": "trendy-earring-ss2-bce1a6",
    "name": "Trendy earring - SS2",
    "category": "EARRINGS",
    "price": 299,
    "mrp": 449,
    "discount": 33,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1RnWU8UXJTJ.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bce1a698-bb95-4d63-98e7-e82f676139d8",
    "isFeatured": false
  },
  {
    "id": "6f855533-7f22-4287-bc4c-d165fa3f2398",
    "slug": "trendy-earrings-e14-6f8555",
    "name": "Trendy earrings - E14",
    "category": "RINGS",
    "price": 99,
    "mrp": 130,
    "discount": 23,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ibxt1xic758nyYO.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6f855533-7f22-4287-bc4c-d165fa3f2398",
    "isFeatured": true
  },
  {
    "id": "4b9d7d2d-a356-41b2-b54c-cc90b20dae30",
    "slug": "trendy-earrings-ec2-4b9d7d",
    "name": "Trendy earrings - EC2",
    "category": "RINGS",
    "price": 149,
    "mrp": 199,
    "discount": 25,
    "description": "Earcuff",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Zbxt1hX3l$HrIa3.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4b9d7d2d-a356-41b2-b54c-cc90b20dae30",
    "isFeatured": true
  },
  {
    "id": "aff2f38e-6449-4500-bf81-55ae61ccebab",
    "slug": "trendy-hoops-aff2f3",
    "name": "Trendy Hoops",
    "category": "RINGS",
    "price": 299,
    "mrp": 350,
    "discount": 14,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/obxt1R8uEtL$xVS.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/aff2f38e-6449-4500-bf81-55ae61ccebab",
    "isFeatured": true
  },
  {
    "id": "514052ed-2cce-4050-b941-66dac0307975",
    "slug": "trendy-kada-bracelet-b68-514052",
    "name": "Trendy Kada Bracelet - B68",
    "category": "BRACELETS",
    "price": 220,
    "mrp": 220,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Abxt1x3ReTvZfAz.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/514052ed-2cce-4050-b941-66dac0307975",
    "isFeatured": false
  },
  {
    "id": "b72e90f8-4f74-497a-a443-e9e9311e191b",
    "slug": "trendy-neckchain-c68-b72e90",
    "name": "Trendy Neckchain - C68",
    "category": "CHAINS",
    "price": 229,
    "mrp": 250,
    "discount": 8,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/8bxt1hOPAyX-E0t.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b72e90f8-4f74-497a-a443-e9e9311e191b",
    "isFeatured": false
  },
  {
    "id": "05a66b26-e9c5-4291-bc15-0ec20d0cae7e",
    "slug": "trendy-neckchain-with-earrings-c82-05a66b",
    "name": "Trendy Neckchain With Earrings - C82",
    "category": "CHAINS",
    "price": 249,
    "mrp": 349,
    "discount": 28,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Rbxt1RsrHqN7EX9.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/05a66b26-e9c5-4291-bc15-0ec20d0cae7e",
    "isFeatured": false
  },
  {
    "id": "5b9a694f-edb2-4eea-8e21-5cd0de417506",
    "slug": "trendy-neckchain-with-earrings-c82-5b9a69",
    "name": "Trendy Neckchain With Earrings - C82",
    "category": "CHAINS",
    "price": 249,
    "mrp": 399,
    "discount": 37,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Fbxt1xPEKEtTniE.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5b9a694f-edb2-4eea-8e21-5cd0de417506",
    "isFeatured": false
  },
  {
    "id": "2f357889-d576-4e2c-81c7-1179b464f403",
    "slug": "trendy-ring-r19-2f3578",
    "name": "Trendy Ring - R19",
    "category": "RINGS",
    "price": 275,
    "mrp": 275,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1xBI4AhcCHq.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2f357889-d576-4e2c-81c7-1179b464f403",
    "isFeatured": true
  },
  {
    "id": "b2783e05-6305-4286-be8b-1a6d8a749def",
    "slug": "trendy-tulip-bracelet-silver-b2783e",
    "name": "Trendy Tulip Bracelet Silver",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 399,
    "discount": 50,
    "description": "Trendy Tulip Bracelet Silver",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1xBeWYz72gp.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b2783e05-6305-4286-be8b-1a6d8a749def",
    "isFeatured": true
  },
  {
    "id": "acbd646e-7faa-46fd-b0eb-78b4c2f26220",
    "slug": "tulip-bracelet-green-b65-acbd64",
    "name": "Tulip Bracelet Green- B65",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1xI5mBgpBWN.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/acbd646e-7faa-46fd-b0eb-78b4c2f26220",
    "isFeatured": true
  },
  {
    "id": "8c9f808b-c689-43c2-b801-7ce24dae8214",
    "slug": "tulip-bracelet-pink-b65-8c9f80",
    "name": "Tulip Bracelet Pink - B65",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/5bxt1BBjEbnnu79.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8c9f808b-c689-43c2-b801-7ce24dae8214",
    "isFeatured": true
  },
  {
    "id": "043f980d-101f-43dd-a28e-1dbed428a931",
    "slug": "tulip-bracelet-purple-b65-043f98",
    "name": "Tulip Bracelet Purple - B65",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/hbxt1B2PTxB6kPT.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/043f980d-101f-43dd-a28e-1dbed428a931",
    "isFeatured": true
  },
  {
    "id": "ecd15ecc-713c-4f56-925e-06317020245e",
    "slug": "tulip-bracelet-red-b65-ecd15e",
    "name": "Tulip Bracelet Red - B65",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1xYFY4o1kqU.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ecd15ecc-713c-4f56-925e-06317020245e",
    "isFeatured": true
  },
  {
    "id": "3a088d9e-5c4a-4147-a2ed-6221a574d62f",
    "slug": "tulip-bracelet-white-b65-3a088d",
    "name": "Tulip Bracelet White - B65",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1Rtfvo3ZbPp.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3a088d9e-5c4a-4147-a2ed-6221a574d62f",
    "isFeatured": true
  },
  {
    "id": "6b5784c6-8713-4e91-a344-51ae1512d3ec",
    "slug": "viral-v-ring-adjustable-6b5784",
    "name": "Viral V Ring - Adjustable",
    "category": "RINGS",
    "price": 149,
    "mrp": 199,
    "discount": 25,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/70958b46_1787675864106.png"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6b5784c6-8713-4e91-a344-51ae1512d3ec",
    "isFeatured": true
  },
  {
    "id": "db695e64-6f95-408d-9ec1-b6e10a771e56",
    "slug": "watch-style-bracelet-b66-db695e",
    "name": "Watch Style Bracelet - B66",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 249,
    "discount": 27,
    "description": "Non Working Watch Bracelet. Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Abxt1B0JIxYzMUp.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/db695e64-6f95-408d-9ec1-b6e10a771e56",
    "isFeatured": false
  },
  {
    "id": "feaae28a-302e-487f-86b8-5bb5a7a3297d",
    "slug": "watch-style-bracelet-b66-feaae2",
    "name": "Watch Style Bracelet - B66",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 249,
    "discount": 27,
    "description": "Non working watch Bracelet. Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1haVAL4423d.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/feaae28a-302e-487f-86b8-5bb5a7a3297d",
    "isFeatured": false
  },
  {
    "id": "d873b6a0-239d-4332-8645-1b98b14afa05",
    "slug": "xuping-hoops-e23-d873b6",
    "name": "Xuping Hoops - E23",
    "category": "RINGS",
    "price": 159,
    "mrp": 199,
    "discount": 20,
    "description": "Elevate your everyday style with this versatile, high-quality Xuping Hoop.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1Rvqa74fM0S.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d873b6a0-239d-4332-8645-1b98b14afa05",
    "isFeatured": true
  },
  {
    "id": "72706401-cf09-4fb4-96d7-0b10c698a314",
    "slug": "xuping-hoops-e27-727064",
    "name": "Xuping Hoops - E27",
    "category": "RINGS",
    "price": 235,
    "mrp": 299,
    "discount": 21,
    "description": "Elevate your everyday style with this versatile, high-quality Xuping Hoop.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Cbxt1h7T5oc60Yy.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/72706401-cf09-4fb4-96d7-0b10c698a314",
    "isFeatured": true
  },
  {
    "id": "515ee459-0f2d-44a3-9dbe-d20bfdbfbc33",
    "slug": "xuping-hoops-e28-515ee4",
    "name": "Xuping Hoops - E28",
    "category": "RINGS",
    "price": 235,
    "mrp": 299,
    "discount": 21,
    "description": "Elevate your everyday style with this versatile, high-quality Xuping Hoop.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ubxt1hS8LhitBRU.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/515ee459-0f2d-44a3-9dbe-d20bfdbfbc33",
    "isFeatured": true
  },
  {
    "id": "c610d597-3fef-4803-824d-012780700d96",
    "slug": "xuping-hoops-e31-c610d5",
    "name": "Xuping Hoops - E31",
    "category": "RINGS",
    "price": 209,
    "mrp": 249,
    "discount": 16,
    "description": "Elevate your everyday style with this versatile, high-quality Xuping Hoop.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ybxt1BjZBwG0Otz.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c610d597-3fef-4803-824d-012780700d96",
    "isFeatured": true
  },
  {
    "id": "0b51bfbe-8fff-4eb3-8952-307a9dd93adc",
    "slug": "xuping-rose-gold-earrings-k27-0b51bf",
    "name": "Xuping Rose Gold Earrings K27",
    "category": "RINGS",
    "price": 199,
    "mrp": 210,
    "discount": 5,
    "description": "Xuping Rose Gold Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Rose Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/nbxt1R7f8QX8Qs9.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0b51bfbe-8fff-4eb3-8952-307a9dd93adc",
    "isFeatured": true
  },
  {
    "id": "18efac63-43f1-40a8-a2a9-ef536fe3d56d",
    "slug": "xuping-rose-gold-hoops-e22-18efac",
    "name": "Xuping Rose Gold Hoops - E22",
    "category": "RINGS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Elevate your everyday style with this versatile, high-quality Xuping Hoops.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Rose Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Bbxt1xsOLoSJBdM.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/18efac63-43f1-40a8-a2a9-ef536fe3d56d",
    "isFeatured": true
  },
  {
    "id": "c68961d4-a354-48c0-ba9e-41f330177bc9",
    "slug": "ad-changeable-neckpiece-c68961",
    "name": "AD Changeable Neckpiece",
    "category": "NECKLACES",
    "price": 299,
    "mrp": 400,
    "discount": 25,
    "description": "AD Changeable Neckpiece.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ybxt1hUvkAzSeEH.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c68961d4-a354-48c0-ba9e-41f330177bc9",
    "isFeatured": false
  },
  {
    "id": "64aad787-a777-4bc6-841b-f3fbae4ae1e1",
    "slug": "ad-neckpiece-set-n9-64aad7",
    "name": "AD Neckpiece Set - N9",
    "category": "NECKLACES",
    "price": 549,
    "mrp": 600,
    "discount": 8,
    "description": "AD Neckpiece Set - N9",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Pbxt1xCaKiBecA0.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/64aad787-a777-4bc6-841b-f3fbae4ae1e1",
    "isFeatured": false
  },
  {
    "id": "a0a4c81f-2f8b-444f-8a42-efef9e962c96",
    "slug": "adjustable-cz-bracelet-b50-a0a4c8",
    "name": "Adjustable CZ Bracelet - B50",
    "category": "BRACELETS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1hxfiKxcMw8.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a0a4c81f-2f8b-444f-8a42-efef9e962c96",
    "isFeatured": false
  },
  {
    "id": "25f8575a-762e-4107-ae74-f96e08a8e8db",
    "slug": "adjustable-cz-bracelet-b51-25f857",
    "name": "Adjustable CZ Bracelet - B51",
    "category": "BRACELETS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/6bxt1B$7cFrpsY1.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/25f8575a-762e-4107-ae74-f96e08a8e8db",
    "isFeatured": false
  },
  {
    "id": "3697db52-1c43-4ae0-904a-39600ec931b7",
    "slug": "adjustable-ring-r20-3697db",
    "name": "Adjustable Ring -  R20",
    "category": "RINGS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/2bxt1BgUElY56nd.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3697db52-1c43-4ae0-904a-39600ec931b7",
    "isFeatured": true
  },
  {
    "id": "3b8c8420-8bd0-4d2d-b019-4ccc240a8aba",
    "slug": "adjustable-ring-r20-3b8c84",
    "name": "Adjustable Ring -  R20",
    "category": "RINGS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1xlQ5DEQIUl.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3b8c8420-8bd0-4d2d-b019-4ccc240a8aba",
    "isFeatured": true
  },
  {
    "id": "62fe8708-b8de-4fba-9b86-c0161a088ae8",
    "slug": "adjustable-ring-r20-62fe87",
    "name": "Adjustable Ring -  R20",
    "category": "RINGS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1B5A7-geseV.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/62fe8708-b8de-4fba-9b86-c0161a088ae8",
    "isFeatured": true
  },
  {
    "id": "88685a06-7be7-4d26-9d81-958428fbf809",
    "slug": "adjustable-ring-r20-88685a",
    "name": "Adjustable Ring - R20",
    "category": "RINGS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/9bxt1hxJt9-xJCI.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/88685a06-7be7-4d26-9d81-958428fbf809",
    "isFeatured": true
  },
  {
    "id": "a224efd8-aaa0-4a45-9da0-6d79b836658b",
    "slug": "adjustable-ring-r20-a224ef",
    "name": "Adjustable Ring - R20",
    "category": "RINGS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/gbxt1RdCLF$MPGn.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a224efd8-aaa0-4a45-9da0-6d79b836658b",
    "isFeatured": true
  },
  {
    "id": "3a39a676-5cfe-48b5-a520-acc932175016",
    "slug": "alphabet-chain-c23-3a39a6",
    "name": "Alphabet chain C23",
    "category": "CHAINS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Its a stainless steel fancy pendent chain.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/tbxt1BReZx7a-Kr.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3a39a676-5cfe-48b5-a520-acc932175016",
    "isFeatured": false
  },
  {
    "id": "66231013-2d53-476b-a53f-dee2a0268ab1",
    "slug": "alphabet-chain-c23-662310",
    "name": "Alphabet chain C23",
    "category": "CHAINS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Its a stainless steel fancy pendent chain.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/9bxt1RTXSuknrti.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/66231013-2d53-476b-a53f-dee2a0268ab1",
    "isFeatured": false
  },
  {
    "id": "7047f768-5ce8-42f0-9d76-d09bc2ec3d15",
    "slug": "alphabet-chain-c23-7047f7",
    "name": "Alphabet chain C23",
    "category": "CHAINS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Its a stainless steel fancy pendent chain.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Mbxt1hM9Q76v2wQ.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7047f768-5ce8-42f0-9d76-d09bc2ec3d15",
    "isFeatured": false
  },
  {
    "id": "e90d8296-f680-4223-997d-ad2353d0749b",
    "slug": "alphabet-chain-c23-e90d82",
    "name": "Alphabet chain C23",
    "category": "CHAINS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Its a stainless steel fancy pendent chain.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/dbxt1RnjpvecIhW.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e90d8296-f680-4223-997d-ad2353d0749b",
    "isFeatured": false
  },
  {
    "id": "85810995-f112-436b-ae00-e6bdf8636b01",
    "slug": "anklet-a1-pair-858109",
    "name": "Anklet A1 - Pair",
    "category": "ANKLETS",
    "price": 249,
    "mrp": 399,
    "discount": 37,
    "description": "Anti-tarnish &amp; long-lasting Water &amp; sweat resistant 💧 Hypoallergenic (safe for sensitive skin) Lightweight &amp; comfortable Perfect for daily wear",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Jbxt1hoJ63HUz2R.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/85810995-f112-436b-ae00-e6bdf8636b01",
    "isFeatured": false
  },
  {
    "id": "4637ddc5-2aa3-49f7-b3bf-4cc73174ebac",
    "slug": "anklet-a4-pair-4637dd",
    "name": "Anklet A4 - Pair",
    "category": "ANKLETS",
    "price": 299,
    "mrp": 299,
    "discount": 0,
    "description": "Anti-tarnish &amp; long-lasting Water &amp; sweat resistant 💧 Hypoallergenic (safe for sensitive skin) Lightweight &amp; comfortable Perfect for daily wear",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1h7NxSrgHHY.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4637ddc5-2aa3-49f7-b3bf-4cc73174ebac",
    "isFeatured": false
  },
  {
    "id": "cc6baa6c-5dc2-46f3-993d-411aad4f6c37",
    "slug": "anti-tarnish-bangle-single-piece-cc6baa",
    "name": "Anti Tarnish Bangle - Single Piece",
    "category": "BRACELETS",
    "price": 299,
    "mrp": 299,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1Bcg5JWL8I2.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/cc6baa6c-5dc2-46f3-993d-411aad4f6c37",
    "isFeatured": false
  },
  {
    "id": "5bb8b7a3-a07a-4230-96f6-382c88422a16",
    "slug": "ball-back-stud-p2-5bb8b7",
    "name": "Ball Back Stud - P2",
    "category": "EARRINGS",
    "price": 120,
    "mrp": 149,
    "discount": 19,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/9bxt1hTIrbrdTB1.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5bb8b7a3-a07a-4230-96f6-382c88422a16",
    "isFeatured": false
  },
  {
    "id": "4be1bd0f-595e-4bc5-b282-18554d65de4f",
    "slug": "bangle-bracelet-b59-4be1bd",
    "name": "Bangle Bracelet - B59",
    "category": "BRACELETS",
    "price": 220,
    "mrp": 220,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/9bxt1BfEoG94cJL.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4be1bd0f-595e-4bc5-b282-18554d65de4f",
    "isFeatured": false
  },
  {
    "id": "81b81864-6426-4bcf-8e83-850b60c9b057",
    "slug": "bow-bracelet-b39-81b818",
    "name": "Bow Bracelet B39",
    "category": "BRACELETS",
    "price": 220,
    "mrp": 240,
    "discount": 8,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ibxt1Ro33QJlOx2.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/81b81864-6426-4bcf-8e83-850b60c9b057",
    "isFeatured": false
  },
  {
    "id": "63bfda82-24fb-44ef-b77c-59ad003f664c",
    "slug": "bow-chain-bracelet-b66-63bfda",
    "name": "Bow Chain Bracelet - B66",
    "category": "BRACELETS",
    "price": 230,
    "mrp": 230,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1x8N$Ab0Yaq.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/63bfda82-24fb-44ef-b77c-59ad003f664c",
    "isFeatured": false
  },
  {
    "id": "d2fda74b-ee21-4ad6-a74c-aa8ca27865d4",
    "slug": "bow-dangler-earrings-d2fda7",
    "name": "Bow Dangler Earrings",
    "category": "RINGS",
    "price": 220,
    "mrp": 299,
    "discount": 26,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Qbxt1xNh10A$1zd.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d2fda74b-ee21-4ad6-a74c-aa8ca27865d4",
    "isFeatured": true
  },
  {
    "id": "e1abce0e-4b8f-4140-8312-e207ade2fb7f",
    "slug": "bow-earring-e4-e1abce",
    "name": "Bow earring E4",
    "category": "RINGS",
    "price": 110,
    "mrp": 110,
    "discount": 0,
    "description": "Bow earring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1x03rXbhDrK.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e1abce0e-4b8f-4140-8312-e207ade2fb7f",
    "isFeatured": true
  },
  {
    "id": "82e57276-55dc-4523-a571-6b1b22ee21e0",
    "slug": "bow-earrings-82e572",
    "name": "Bow earrings",
    "category": "RINGS",
    "price": 99,
    "mrp": 120,
    "discount": 17,
    "description": "Bow earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/xbxt1htx9Cq5Sb3.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/82e57276-55dc-4523-a571-6b1b22ee21e0",
    "isFeatured": true
  },
  {
    "id": "5cb96f78-fe8b-4ca2-9cf8-41ec049ebdee",
    "slug": "bow-earrings-e4-5cb96f",
    "name": "Bow earrings E4",
    "category": "RINGS",
    "price": 110,
    "mrp": 110,
    "discount": 0,
    "description": "Bow earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/4bxt1Bh5GvCUPQk.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5cb96f78-fe8b-4ca2-9cf8-41ec049ebdee",
    "isFeatured": true
  },
  {
    "id": "c9e444c0-cfda-40ee-ad09-4696544cbf47",
    "slug": "bow-neck-chain-c67-c9e444",
    "name": "Bow Neck Chain - C67",
    "category": "CHAINS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1Rsa3Yc4B$q.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c9e444c0-cfda-40ee-ad09-4696544cbf47",
    "isFeatured": false
  },
  {
    "id": "d7e280bc-10d6-40e2-ae4f-666e536b9b27",
    "slug": "bow-neck-chain-j23-d7e280",
    "name": "Bow Neck Chain - J23",
    "category": "CHAINS",
    "price": 220,
    "mrp": 249,
    "discount": 11,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/a50f8214_1787241590590.png"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d7e280bc-10d6-40e2-ae4f-666e536b9b27",
    "isFeatured": false
  },
  {
    "id": "a6a2d8d5-716e-4922-8dd4-808aa542c5d8",
    "slug": "bow-neckchain-c75-a6a2d8",
    "name": "Bow Neckchain - C75",
    "category": "CHAINS",
    "price": 299,
    "mrp": 350,
    "discount": 14,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ubxt1Bi6gYZlgRD.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a6a2d8d5-716e-4922-8dd4-808aa542c5d8",
    "isFeatured": false
  },
  {
    "id": "50b3ca62-58ef-4f31-bafe-27d79b286242",
    "slug": "bow-stud-p2-50b3ca",
    "name": "Bow Stud - P2",
    "category": "EARRINGS",
    "price": 180,
    "mrp": 199,
    "discount": 9,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/hbxt1BXAjfIknkg.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/50b3ca62-58ef-4f31-bafe-27d79b286242",
    "isFeatured": false
  },
  {
    "id": "b30c2260-8fc5-4fe8-8480-78edd58a5167",
    "slug": "bow-stud-p2-b30c22",
    "name": "Bow Stud - P2",
    "category": "EARRINGS",
    "price": 180,
    "mrp": 199,
    "discount": 9,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/wbxt1RSmF$SLWev.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b30c2260-8fc5-4fe8-8480-78edd58a5167",
    "isFeatured": false
  },
  {
    "id": "60446598-1ccf-46ee-962f-70e9498dafb4",
    "slug": "bracelet-b8-604465",
    "name": "Bracelet - B8",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Stainless Steel anti tarnished Bracelet.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/abxt1xkthksNp0d.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/60446598-1ccf-46ee-962f-70e9498dafb4",
    "isFeatured": false
  },
  {
    "id": "44c8d72d-9504-461d-96f1-8709c2dd2195",
    "slug": "bracelet-b11-44c8d7",
    "name": "Bracelet B11",
    "category": "BRACELETS",
    "price": 230,
    "mrp": 250,
    "discount": 8,
    "description": "Stainless Steel anti tarnished Bracelet.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1RpEnA-sCr7.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/44c8d72d-9504-461d-96f1-8709c2dd2195",
    "isFeatured": false
  },
  {
    "id": "bb3039e2-0cbb-41f1-968c-32fafa1006b5",
    "slug": "bracelet-b9-bb3039",
    "name": "Bracelet B9",
    "category": "BRACELETS",
    "price": 230,
    "mrp": 250,
    "discount": 8,
    "description": "Stainless Steel anti tarnished Bracelet.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1Bv9fmvXioa.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bb3039e2-0cbb-41f1-968c-32fafa1006b5",
    "isFeatured": false
  },
  {
    "id": "8dab96ac-ec71-4ece-8eb4-b1f57a1254f1",
    "slug": "bracelets-b6-8dab96",
    "name": "Bracelets B6",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Stainless Steel anti tarnished Bracelet.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/gbxt1RlRGo7jNBQ.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8dab96ac-ec71-4ece-8eb4-b1f57a1254f1",
    "isFeatured": false
  },
  {
    "id": "34c10920-0091-40cd-8547-b8ac8ad602d2",
    "slug": "bugadi-pair-ec5-34c109",
    "name": "Bugadi pair - EC5",
    "category": "EARRINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Bugadi pair - EC5",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ybxt1h2ta6$beYS.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/34c10920-0091-40cd-8547-b8ac8ad602d2",
    "isFeatured": false
  },
  {
    "id": "2b1ce555-fdc8-404b-8db7-a5d22f28cc7a",
    "slug": "bugadi-pair-ec6-2b1ce5",
    "name": "Bugadi pair - EC6",
    "category": "EARRINGS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Bugadi pair - EC6",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1R3B6MkHeQl.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2b1ce555-fdc8-404b-8db7-a5d22f28cc7a",
    "isFeatured": false
  },
  {
    "id": "f8b690ba-04fd-4061-bd06-6e7f8482c3bc",
    "slug": "bugadi-pair-ec6-f8b690",
    "name": "Bugadi pair - EC6",
    "category": "EARRINGS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Bugadi pair - EC6",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/kbxt1xo-HHUtSzX.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f8b690ba-04fd-4061-bd06-6e7f8482c3bc",
    "isFeatured": false
  },
  {
    "id": "79a1cacc-c206-4e25-b4e5-c258c0fdd904",
    "slug": "butterfly-bracelet-b16-79a1ca",
    "name": "Butterfly Bracelet B16",
    "category": "BRACELETS",
    "price": 220,
    "mrp": 230,
    "discount": 4,
    "description": "Stainless Steel anti tarnished Bracelet.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/gbxt1R0boZ1PzNn.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/79a1cacc-c206-4e25-b4e5-c258c0fdd904",
    "isFeatured": false
  },
  {
    "id": "ea7d5a6d-9138-4206-86af-f7b86a239329",
    "slug": "butterfly-chain-c14-ea7d5a",
    "name": "Butterfly chain C14",
    "category": "CHAINS",
    "price": 120,
    "mrp": 150,
    "discount": 20,
    "description": "Stainless Steel anti tarnished Chain.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/nbxt1xn5eHNlTQu.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ea7d5a6d-9138-4206-86af-f7b86a239329",
    "isFeatured": false
  },
  {
    "id": "36567fff-86ea-41f6-bcbf-9de3b92edca0",
    "slug": "butterfly-chain-c28-36567f",
    "name": "Butterfly Chain C28",
    "category": "CHAINS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Anti tarnished chain 18k gold plated",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1xFjGLaYzEI.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/36567fff-86ea-41f6-bcbf-9de3b92edca0",
    "isFeatured": false
  },
  {
    "id": "483eb1a3-c379-4cb8-9b6e-1946d377e02c",
    "slug": "butterfly-charm-bracelet-b46-483eb1",
    "name": "Butterfly charm bracelet - B46",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 220,
    "discount": 18,
    "description": "Anti-tarnish • Waterproof • Hypoallergenic&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1RhNYLZcbIU.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/483eb1a3-c379-4cb8-9b6e-1946d377e02c",
    "isFeatured": false
  },
  {
    "id": "0a029337-6f6c-4f70-b6f7-52c6aedb8ee8",
    "slug": "butterfly-charm-chain-c45-0a0293",
    "name": "Butterfly Charm Chain - C45",
    "category": "CHAINS",
    "price": 239,
    "mrp": 260,
    "discount": 8,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1RjlV0un23z.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0a029337-6f6c-4f70-b6f7-52c6aedb8ee8",
    "isFeatured": false
  },
  {
    "id": "fd52dbff-7c57-4204-bb7c-685006096de8",
    "slug": "butterfly-charm-chain-c45-fd52db",
    "name": "Butterfly Charm Chain - C45",
    "category": "CHAINS",
    "price": 239,
    "mrp": 260,
    "discount": 8,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ubxt1BJWAx17xQT.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/fd52dbff-7c57-4204-bb7c-685006096de8",
    "isFeatured": false
  },
  {
    "id": "d8dcdc9e-4033-4fa0-8092-2c735d837b59",
    "slug": "butterfly-earring-e3-d8dcdc",
    "name": "Butterfly earring E3",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Butterfly earring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/8bxt1h$Unr5boVe.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d8dcdc9e-4033-4fa0-8092-2c735d837b59",
    "isFeatured": true
  },
  {
    "id": "447cc5c0-601d-411f-9c55-07bbc1d68f23",
    "slug": "butterfly-earrings-e13-447cc5",
    "name": "Butterfly earrings - E13",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Hbxt1xaLcyfpVGa.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/447cc5c0-601d-411f-9c55-07bbc1d68f23",
    "isFeatured": true
  },
  {
    "id": "5ea69628-2dde-419d-8c75-2de917650827",
    "slug": "butterfly-helix-p1-5ea696",
    "name": "Butterfly Helix - P1",
    "category": "EARRINGS",
    "price": 169,
    "mrp": 169,
    "discount": 0,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1RPzQrCZbar.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5ea69628-2dde-419d-8c75-2de917650827",
    "isFeatured": false
  },
  {
    "id": "f37b60ca-e232-41fc-b959-07f5d271564e",
    "slug": "butterfly-press-on-nose-pin-earrings-single-f37b60",
    "name": "Butterfly Press On Nose Pin / Earrings - Single",
    "category": "RINGS",
    "price": 115,
    "mrp": 115,
    "discount": 0,
    "description": "Heart Press On Nose Pin / Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/2bxt1hyKZbKZuNF.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f37b60ca-e232-41fc-b959-07f5d271564e",
    "isFeatured": true
  },
  {
    "id": "902ef67b-7f5f-4bf1-8b70-ae4c694a3551",
    "slug": "butterfly-silver-chain-c11-902ef6",
    "name": "Butterfly silver chain C11",
    "category": "CHAINS",
    "price": 199,
    "mrp": 250,
    "discount": 20,
    "description": "Butterfly silver chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/7bxt1RUOYr$2mxl.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/902ef67b-7f5f-4bf1-8b70-ae4c694a3551",
    "isFeatured": false
  },
  {
    "id": "bd30592b-9d9c-42e6-a0c9-dc81e3b4690b",
    "slug": "charms-double-layer-chain-c36-bd3059",
    "name": "Charms double layer chain - C36",
    "category": "CHAINS",
    "price": 299,
    "mrp": 299,
    "discount": 0,
    "description": "Anti-tarnish ✨ Hypoallergenic 💛",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/9bxt1BmREHofxah.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bd30592b-9d9c-42e6-a0c9-dc81e3b4690b",
    "isFeatured": false
  },
  {
    "id": "abcb1683-698b-4abf-9e47-e3c1d91c8a9b",
    "slug": "cherry-earrings-e17-abcb16",
    "name": "Cherry earrings - E17",
    "category": "RINGS",
    "price": 150,
    "mrp": 150,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/pbxt1BHHJ4QN0FR.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/abcb1683-698b-4abf-9e47-e3c1d91c8a9b",
    "isFeatured": true
  },
  {
    "id": "18eed74a-1029-42b2-a192-4683de88e724",
    "slug": "combo-earrings-18eed7",
    "name": "Combo earrings",
    "category": "RINGS",
    "price": 145,
    "mrp": 145,
    "discount": 0,
    "description": "Combo earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1RvswDfYdxO.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/18eed74a-1029-42b2-a192-4683de88e724",
    "isFeatured": true
  },
  {
    "id": "59d33458-e3a5-4164-8e43-07153973efa7",
    "slug": "combo-earrings-59d334",
    "name": "Combo earrings",
    "category": "RINGS",
    "price": 145,
    "mrp": 145,
    "discount": 0,
    "description": "Combo earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Rbxt1BwhPgIIxgN.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/59d33458-e3a5-4164-8e43-07153973efa7",
    "isFeatured": true
  },
  {
    "id": "a2848aab-0e68-4140-a185-47f3a7a71197",
    "slug": "combo-earrings-a2848a",
    "name": "Combo earrings",
    "category": "RINGS",
    "price": 145,
    "mrp": 145,
    "discount": 0,
    "description": "Combo earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/tbxt1RdPYOEbXSE.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a2848aab-0e68-4140-a185-47f3a7a71197",
    "isFeatured": true
  },
  {
    "id": "cb8c5d76-ba47-4a80-a2fb-edcdef2c7c73",
    "slug": "combo-earrings-cb8c5d",
    "name": "Combo earrings",
    "category": "RINGS",
    "price": 90,
    "mrp": 90,
    "discount": 0,
    "description": "Combo earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ubxt1B$eNuFmDEO.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/cb8c5d76-ba47-4a80-a2fb-edcdef2c7c73",
    "isFeatured": true
  },
  {
    "id": "d355a280-7c69-43b6-9cd2-87a0331643de",
    "slug": "combo-earrings-d355a2",
    "name": "Combo earrings",
    "category": "RINGS",
    "price": 145,
    "mrp": 145,
    "discount": 0,
    "description": "Combo earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/8bxt1xUQRjJjybT.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d355a280-7c69-43b6-9cd2-87a0331643de",
    "isFeatured": true
  },
  {
    "id": "1f2abdea-bf59-4b08-9f76-2e45bfbe1362",
    "slug": "combo-earrings-k33-1f2abd",
    "name": "Combo Earrings K33",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Combo Earrings K33",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/obxt1Rx263hBWXI.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1f2abdea-bf59-4b08-9f76-2e45bfbe1362",
    "isFeatured": true
  },
  {
    "id": "5cf6fc8c-9b73-438d-8111-d7dab125997f",
    "slug": "combo-earrings-k33-5cf6fc",
    "name": "Combo Earrings K33",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Combo Earrings K33",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ubxt1xPip50aY3v.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5cf6fc8c-9b73-438d-8111-d7dab125997f",
    "isFeatured": true
  },
  {
    "id": "6bfa2040-4570-4969-9fe5-e441849f649b",
    "slug": "combo-earrings-k33-6bfa20",
    "name": "Combo Earrings K33",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Combo Earrings K33",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/8bxt1hysUDSMfYJ.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6bfa2040-4570-4969-9fe5-e441849f649b",
    "isFeatured": true
  },
  {
    "id": "fd7b2225-1032-4b06-bc22-f1bf72ed1658",
    "slug": "combo-earrings-k33-fd7b22",
    "name": "Combo Earrings K33",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Combo Earrings K33",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Zbxt1hv8UPxLiw9.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/fd7b2225-1032-4b06-bc22-f1bf72ed1658",
    "isFeatured": true
  },
  {
    "id": "3a6eed35-cae7-43cd-bd50-6f365e8de305",
    "slug": "combo-earrings-ke31-3a6eed",
    "name": "Combo Earrings KE31",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Combo Earrings KE31",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Jbxt1hCaYFlyhPg.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3a6eed35-cae7-43cd-bd50-6f365e8de305",
    "isFeatured": true
  },
  {
    "id": "42a53951-bdb5-4f17-b083-f515e5c4ef52",
    "slug": "combo-earrings-ke31-42a539",
    "name": "Combo Earrings KE31",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Combo Earrings KE31",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/obxt1hRL04f-IK2.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/42a53951-bdb5-4f17-b083-f515e5c4ef52",
    "isFeatured": true
  },
  {
    "id": "47500918-a1d2-4fee-a19f-a3a1e5f025df",
    "slug": "combo-earrings-ke31-475009",
    "name": "Combo Earrings KE31",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Combo Earrings KE31",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1B5CK6O1cMd.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/47500918-a1d2-4fee-a19f-a3a1e5f025df",
    "isFeatured": true
  },
  {
    "id": "6e71446a-9f3c-4e7a-bba6-0c1f53060c5c",
    "slug": "combo-earrings-ke31-6e7144",
    "name": "Combo Earrings KE31",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Combo Earrings KE31",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/sbxt1R8NCw6kMfq.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6e71446a-9f3c-4e7a-bba6-0c1f53060c5c",
    "isFeatured": true
  },
  {
    "id": "905c060c-cf55-481e-a3d7-94a9f0842ce4",
    "slug": "combo-earrings-ke31-905c06",
    "name": "Combo Earrings KE31",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Combo Earrings KE31",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Abxt1hsrIWNNZg9.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/905c060c-cf55-481e-a3d7-94a9f0842ce4",
    "isFeatured": true
  },
  {
    "id": "a38eee9b-4f88-4bb8-a63e-4f01a17a8374",
    "slug": "cross-pendant-c49-a38eee",
    "name": "Cross pendant - C49",
    "category": "CHAINS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Mbxt1RecpKW47-X.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a38eee9b-4f88-4bb8-a63e-4f01a17a8374",
    "isFeatured": false
  },
  {
    "id": "72919e2b-0809-4557-9ca0-3389ea99e988",
    "slug": "cross-stud-p2-72919e",
    "name": "Cross Stud - P2",
    "category": "EARRINGS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/kbxt1hW8IlNfRWj.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/72919e2b-0809-4557-9ca0-3389ea99e988",
    "isFeatured": false
  },
  {
    "id": "3e9bab25-4aa0-47ad-8bee-635ef5919a3f",
    "slug": "cz-adjustable-bracelet-b51-3e9bab",
    "name": "CZ Adjustable Bracelet  - B51",
    "category": "BRACELETS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Gbxt1BV2St4QaQZ.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3e9bab25-4aa0-47ad-8bee-635ef5919a3f",
    "isFeatured": false
  },
  {
    "id": "3e7894f7-fa7d-4443-8c9a-0b3460fc7854",
    "slug": "cz-adjustable-bracelet-c47-3e7894",
    "name": "CZ Adjustable Bracelet - C47",
    "category": "BRACELETS",
    "price": 210,
    "mrp": 210,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/jbxt1xmK25wCD1f.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3e7894f7-fa7d-4443-8c9a-0b3460fc7854",
    "isFeatured": false
  },
  {
    "id": "714b9918-3620-4758-b55a-ba9ca4737278",
    "slug": "cz-adjustable-bracelet-c47-714b99",
    "name": "CZ Adjustable Bracelet - C47",
    "category": "BRACELETS",
    "price": 210,
    "mrp": 210,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1xlx75P6Ez1.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/714b9918-3620-4758-b55a-ba9ca4737278",
    "isFeatured": false
  },
  {
    "id": "cdad04a5-5300-4e11-a568-c07d8f037492",
    "slug": "cz-adustable-bracelet-b51-cdad04",
    "name": "CZ Adustable Bracelet - B51",
    "category": "BRACELETS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ebxt1h2sBmZ5nYW.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/cdad04a5-5300-4e11-a568-c07d8f037492",
    "isFeatured": false
  },
  {
    "id": "2c3b1753-96e8-41d1-bf4b-ff97b0a4b0e6",
    "slug": "cz-adustable-bracelet-c47-2c3b17",
    "name": "CZ Adustable Bracelet - C47",
    "category": "BRACELETS",
    "price": 210,
    "mrp": 210,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1R$-FU-6O17.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2c3b1753-96e8-41d1-bf4b-ff97b0a4b0e6",
    "isFeatured": false
  },
  {
    "id": "dffcdf02-cf8f-48f5-87b6-6093441e8e74",
    "slug": "cz-adustable-bracelet-c47-dffcdf",
    "name": "CZ Adustable Bracelet - C47",
    "category": "BRACELETS",
    "price": 210,
    "mrp": 210,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Mbxt1RLyNjHbd6V.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/dffcdf02-cf8f-48f5-87b6-6093441e8e74",
    "isFeatured": false
  },
  {
    "id": "4e38b0fd-65c6-494d-b0c3-1d0af413dab9",
    "slug": "cz-adustable-bracelet-c48-4e38b0",
    "name": "CZ Adustable Bracelet - C48",
    "category": "BRACELETS",
    "price": 230,
    "mrp": 230,
    "discount": 0,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1hoCMhd-olo.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4e38b0fd-65c6-494d-b0c3-1d0af413dab9",
    "isFeatured": false
  },
  {
    "id": "2fd6c28f-9ae9-4a4a-a2d2-f193a02e97af",
    "slug": "cz-bracelet-b51-2fd6c2",
    "name": "CZ Bracelet - B51",
    "category": "BRACELETS",
    "price": 119,
    "mrp": 149,
    "discount": 20,
    "description": "CZ Jewel is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Hbxt1BiHNyrq0mo.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2fd6c28f-9ae9-4a4a-a2d2-f193a02e97af",
    "isFeatured": false
  },
  {
    "id": "b5684da0-807e-42ca-9d06-8a5c1c55f911",
    "slug": "cz-earrings-e12-b5684d",
    "name": "CZ earrings - E12",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Hbxt1RhNrZwNfga.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b5684da0-807e-42ca-9d06-8a5c1c55f911",
    "isFeatured": true
  },
  {
    "id": "6e6d9e6f-3e5f-43c0-ba2f-47d967d94062",
    "slug": "cz-earrings-e13-6e6d9e",
    "name": "CZ earrings - E13",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/zbxt1hyvAPpBE9B.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6e6d9e6f-3e5f-43c0-ba2f-47d967d94062",
    "isFeatured": true
  },
  {
    "id": "85e9916e-40d4-4af1-b37a-6521f6eea2cc",
    "slug": "cz-earrings-e14-85e991",
    "name": "CZ earrings - E14",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Rbxt1RGLHN$bLAd.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/85e9916e-40d4-4af1-b37a-6521f6eea2cc",
    "isFeatured": true
  },
  {
    "id": "f7684604-b9ae-4482-ac3c-8f7fa3f4b544",
    "slug": "cz-earrings-e17-f76846",
    "name": "CZ earrings - E17",
    "category": "RINGS",
    "price": 150,
    "mrp": 150,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/kbxt1BtozNGnetb.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f7684604-b9ae-4482-ac3c-8f7fa3f4b544",
    "isFeatured": true
  },
  {
    "id": "55cd2c62-ab15-4b5a-8c45-ab7814e656e7",
    "slug": "cz-earrings-e18-55cd2c",
    "name": "CZ earrings - E18",
    "category": "RINGS",
    "price": 160,
    "mrp": 160,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1RPm9ukx9AQ.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/55cd2c62-ab15-4b5a-8c45-ab7814e656e7",
    "isFeatured": true
  },
  {
    "id": "058bb393-8c99-4a7c-aa9b-4853d5e86143",
    "slug": "daisy-ball-back-stud-058bb3",
    "name": "Daisy Ball Back Stud",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/sbxt1hdWt0Fsiey.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/058bb393-8c99-4a7c-aa9b-4853d5e86143",
    "isFeatured": false
  },
  {
    "id": "3fec0772-f37c-4faf-afd7-10661df56299",
    "slug": "daisy-ball-back-stud-3fec07",
    "name": "Daisy Ball Back Stud",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1h1MqKtkXT5.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3fec0772-f37c-4faf-afd7-10661df56299",
    "isFeatured": false
  },
  {
    "id": "d6bd5a02-43f9-4881-b711-e666a70007d2",
    "slug": "diamond-inspired-neckpiece-set-n1-d6bd5a",
    "name": "Diamond inspired neckpiece set - N1",
    "category": "NECKLACES",
    "price": 450,
    "mrp": 499,
    "discount": 9,
    "description": "Diamond inspired neckpiece set",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/abxt1xEc54R7h4N.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d6bd5a02-43f9-4881-b711-e666a70007d2",
    "isFeatured": false
  },
  {
    "id": "da1947de-938b-448a-b989-447a05e7c045",
    "slug": "double-layer-chain-c32-da1947",
    "name": "Double layer Chain C32",
    "category": "CHAINS",
    "price": 249,
    "mrp": 300,
    "discount": 17,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel. 18k Gold Colour Plated.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1xOTo0guAcy.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/da1947de-938b-448a-b989-447a05e7c045",
    "isFeatured": false
  },
  {
    "id": "14565fd5-68bb-4562-b213-b9c003a4a3a3",
    "slug": "double-layer-heart-chain-bracelet-b66-14565f",
    "name": "Double layer Heart Chain Bracelet  - B66",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Gbxt1BnCp3aNKKH.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/14565fd5-68bb-4562-b213-b9c003a4a3a3",
    "isFeatured": false
  },
  {
    "id": "6833bbb0-0b94-4417-b505-eddcaff60660",
    "slug": "double-layer-neck-chain-n7-6833bb",
    "name": "Double layer neck chain N7",
    "category": "NECKLACES",
    "price": 399,
    "mrp": 399,
    "discount": 0,
    "description": "Double layer neck chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1hq-pi6x2pg.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6833bbb0-0b94-4417-b505-eddcaff60660",
    "isFeatured": false
  },
  {
    "id": "b3ec977a-9faf-415a-8cdf-f5f3d6cd57ff",
    "slug": "dragonfly-charm-double-layer-chain-c35-b3ec97",
    "name": "Dragonfly charm double layer chain - C35",
    "category": "CHAINS",
    "price": 299,
    "mrp": 299,
    "discount": 0,
    "description": "Anti-tarnish ✨ Hypoallergenic 💛",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/nbxt1RSNroMkCyf.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b3ec977a-9faf-415a-8cdf-f5f3d6cd57ff",
    "isFeatured": false
  },
  {
    "id": "f4d44e7a-220a-407d-bd3e-c1d96f6654e1",
    "slug": "drop-neckchain-c34-f4d44e",
    "name": "Drop Neckchain - C34",
    "category": "CHAINS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Drop Neckchain - C34",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1xgtZggDiPD.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f4d44e7a-220a-407d-bd3e-c1d96f6654e1",
    "isFeatured": false
  },
  {
    "id": "bc322780-76da-4e2f-89a4-232fa26edfaf",
    "slug": "dual-magnetic-neckchain-c46-bc3227",
    "name": "Dual Magnetic Neckchain - C46",
    "category": "CHAINS",
    "price": 159,
    "mrp": 159,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/abxt1x2NwC67QM1.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bc322780-76da-4e2f-89a4-232fa26edfaf",
    "isFeatured": false
  },
  {
    "id": "8c456f53-999c-4f59-be1d-ff3929d90335",
    "slug": "earring-e1-8c456f",
    "name": "Earring E1",
    "category": "RINGS",
    "price": 89,
    "mrp": 89,
    "discount": 0,
    "description": "Earring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Pbxt1xyTGACpayH.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8c456f53-999c-4f59-be1d-ff3929d90335",
    "isFeatured": true
  },
  {
    "id": "93f0d481-572a-4448-b98a-ca309670ec60",
    "slug": "earring-e2-93f0d4",
    "name": "Earring E2",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Earring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1hnsmbc$V8L.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/93f0d481-572a-4448-b98a-ca309670ec60",
    "isFeatured": true
  },
  {
    "id": "5152c63a-ff89-4b9e-9add-489ec8a24cd1",
    "slug": "earrings-5152c6",
    "name": "Earrings",
    "category": "RINGS",
    "price": 60,
    "mrp": 60,
    "discount": 0,
    "description": "Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1Bb-P8WBFwX.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5152c63a-ff89-4b9e-9add-489ec8a24cd1",
    "isFeatured": true
  },
  {
    "id": "a3839a0a-514e-48bf-986a-6a311b8d8b25",
    "slug": "earrings-a3839a",
    "name": "Earrings",
    "category": "RINGS",
    "price": 50,
    "mrp": 50,
    "discount": 0,
    "description": "Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/cbxt1xDZ-cc4v2O.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a3839a0a-514e-48bf-986a-6a311b8d8b25",
    "isFeatured": true
  },
  {
    "id": "52b885bf-cc5a-48e9-81b8-25251dfd404b",
    "slug": "earrings-e13-52b885",
    "name": "Earrings - E13",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1RtrA-Wtc4l.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/52b885bf-cc5a-48e9-81b8-25251dfd404b",
    "isFeatured": true
  },
  {
    "id": "989b34e0-d99c-483d-8d84-5114e62472c7",
    "slug": "earrings-e13-989b34",
    "name": "Earrings - E13",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ubxt1RD5$tc830F.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/989b34e0-d99c-483d-8d84-5114e62472c7",
    "isFeatured": true
  },
  {
    "id": "204f2bb2-347a-40f0-9a97-2be502aac612",
    "slug": "earrings-e2-204f2b",
    "name": "Earrings E2",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/jbxt1Rf609o6fJW.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/204f2bb2-347a-40f0-9a97-2be502aac612",
    "isFeatured": true
  },
  {
    "id": "d3246ee7-16c3-43dc-8c3e-b710e102df4d",
    "slug": "earrings-e2-d3246e",
    "name": "Earrings E2",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Gbxt1BIKlaUo2bU.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d3246ee7-16c3-43dc-8c3e-b710e102df4d",
    "isFeatured": true
  },
  {
    "id": "bc4c9960-c14d-4237-95cc-8af16ee34fc2",
    "slug": "earrings-e3-bc4c99",
    "name": "Earrings E3",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1R3-9nS0Hdy.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bc4c9960-c14d-4237-95cc-8af16ee34fc2",
    "isFeatured": true
  },
  {
    "id": "a4382ae5-edec-48e2-a600-9ab65a94fc09",
    "slug": "earrings-e5-a4382a",
    "name": "Earrings E5",
    "category": "RINGS",
    "price": 99,
    "mrp": 120,
    "discount": 17,
    "description": "Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/sbxt1hAUzbsYU0c.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a4382ae5-edec-48e2-a600-9ab65a94fc09",
    "isFeatured": true
  },
  {
    "id": "0cc013ec-241f-49ae-a381-ee36eb35c002",
    "slug": "earrings-with-backscrew-ec7-0cc013",
    "name": "Earrings with backscrew - EC7",
    "category": "RINGS",
    "price": 109,
    "mrp": 109,
    "discount": 0,
    "description": "Earrings with backscrew - EC7",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ebxt1BrCJZOF3Vl.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0cc013ec-241f-49ae-a381-ee36eb35c002",
    "isFeatured": true
  },
  {
    "id": "687da4de-5308-4bfa-a65c-55002e2c45ca",
    "slug": "earrings-with-backscrew-ec7-687da4",
    "name": "Earrings with backscrew - EC7",
    "category": "RINGS",
    "price": 109,
    "mrp": 109,
    "discount": 0,
    "description": "Earrings with backscrew - EC7",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1hZG$GoSTHC.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/687da4de-5308-4bfa-a65c-55002e2c45ca",
    "isFeatured": true
  },
  {
    "id": "940c0363-ec4d-4c54-8e1e-f32c5c2f47ac",
    "slug": "earrings-with-backscrew-ec7-940c03",
    "name": "Earrings with backscrew - EC7",
    "category": "RINGS",
    "price": 109,
    "mrp": 109,
    "discount": 0,
    "description": "Earrings with backscrew - EC7",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/qbxt1BbuPCoFYzv.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/940c0363-ec4d-4c54-8e1e-f32c5c2f47ac",
    "isFeatured": true
  },
  {
    "id": "9677868d-d221-4294-8051-3dea202211bd",
    "slug": "earrings-with-backscrew-ec7-967786",
    "name": "Earrings with backscrew - EC7",
    "category": "RINGS",
    "price": 109,
    "mrp": 109,
    "discount": 0,
    "description": "Earrings with backscrew - EC7",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Zbxt1hBG$6qFkVW.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9677868d-d221-4294-8051-3dea202211bd",
    "isFeatured": true
  },
  {
    "id": "ba1d26cf-728a-4530-9266-307ff9f8d3ec",
    "slug": "earrings-with-backscrew-ec7-ba1d26",
    "name": "Earrings with backscrew - EC7",
    "category": "RINGS",
    "price": 109,
    "mrp": 109,
    "discount": 0,
    "description": "Earrings with backscrew - EC7",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1Rzadmn-JHn.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ba1d26cf-728a-4530-9266-307ff9f8d3ec",
    "isFeatured": true
  },
  {
    "id": "7265950d-9536-41c6-8286-ebaa3976352a",
    "slug": "earrings-with-heart-drops-e18-726595",
    "name": "Earrings with heart drops - E18",
    "category": "RINGS",
    "price": 160,
    "mrp": 160,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl , Rubby &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/jbxt1h5I-XmY3mX.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7265950d-9536-41c6-8286-ebaa3976352a",
    "isFeatured": true
  },
  {
    "id": "eaa7ac11-6b7b-48d6-91cc-5453856d00d3",
    "slug": "elegant-ring-r15-eaa7ac",
    "name": "Elegant Ring R15",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/dbxt1hJA40Q6cbx.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/eaa7ac11-6b7b-48d6-91cc-5453856d00d3",
    "isFeatured": true
  },
  {
    "id": "c914f050-bb23-4959-aa75-5e3b6f484cfb",
    "slug": "evil-eye-chain-bracelet-b15-c914f0",
    "name": "Evil eye Chain bracelet B15",
    "category": "BRACELETS",
    "price": 299,
    "mrp": 350,
    "discount": 14,
    "description": "Evil eye Chain bracelet. stainless steel",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Cbxt1R-PF-Ephhp.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c914f050-bb23-4959-aa75-5e3b6f484cfb",
    "isFeatured": false
  },
  {
    "id": "437bd474-b320-4329-9e0e-944371b903ff",
    "slug": "feather-charm-bracelet-b46-437bd4",
    "name": "Feather charm bracelet - B46",
    "category": "BRACELETS",
    "price": 220,
    "mrp": 220,
    "discount": 0,
    "description": "Anti-tarnish • Waterproof • Hypoallergenic&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1R8CswkvsuQ.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/437bd474-b320-4329-9e0e-944371b903ff",
    "isFeatured": false
  },
  {
    "id": "d68f9be4-751f-41d2-b300-05298496b906",
    "slug": "floral-ball-back-stud-d68f9b",
    "name": "Floral Ball Back Stud",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/wbxt1xy39P3ISmB.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d68f9be4-751f-41d2-b300-05298496b906",
    "isFeatured": false
  },
  {
    "id": "0c8997ef-a1ce-4ad3-856b-12695c1d3457",
    "slug": "floral-beacelet-0c8997",
    "name": "Floral Beacelet",
    "category": "BRACELETS",
    "price": 209,
    "mrp": 249,
    "discount": 16,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://smartpos.amazon.in/images/85295/e42a8604_1787309628587.png"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0c8997ef-a1ce-4ad3-856b-12695c1d3457",
    "isFeatured": false
  },
  {
    "id": "dd18c035-381f-4703-8184-448e17e589df",
    "slug": "floral-black-bead-chain-c55-dd18c0",
    "name": "Floral Black Bead Chain  -C55",
    "category": "RINGS",
    "price": 180,
    "mrp": 180,
    "discount": 0,
    "description": "Floral Chain -C55",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1xbxAUdlcyV.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/dd18c035-381f-4703-8184-448e17e589df",
    "isFeatured": true
  },
  {
    "id": "3e13b3a6-4531-48a0-87bf-26969a4d174e",
    "slug": "floral-butterfly-neckchain-c43-3e13b3",
    "name": "Floral butterfly neckchain C43",
    "category": "CHAINS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Anti-tarnish | Waterproof | Everyday wear",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/rbxt1xuYpBnkhMy.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3e13b3a6-4531-48a0-87bf-26969a4d174e",
    "isFeatured": false
  },
  {
    "id": "681c3fdd-c074-499b-afd4-211abf91e375",
    "slug": "floral-chain-681c3f",
    "name": "Floral Chain",
    "category": "CHAINS",
    "price": 180,
    "mrp": 180,
    "discount": 0,
    "description": "This AD Chain is made with anti tarnished chain.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ubxt1RQZnr8XPnZ.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/681c3fdd-c074-499b-afd4-211abf91e375",
    "isFeatured": false
  },
  {
    "id": "7022652a-1f51-41f6-adaa-f01eabd21b59",
    "slug": "floral-chain-bracelet-b66-702265",
    "name": "Floral Chain Bracelet - B66",
    "category": "BRACELETS",
    "price": 230,
    "mrp": 230,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1hMCHooji5u.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7022652a-1f51-41f6-adaa-f01eabd21b59",
    "isFeatured": false
  },
  {
    "id": "ecf1607d-adfd-4b1c-8ce7-77afc8f130df",
    "slug": "floral-earring-e17-ecf160",
    "name": "Floral earring - E17",
    "category": "RINGS",
    "price": 150,
    "mrp": 150,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1BXP2rtw1Ou.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ecf1607d-adfd-4b1c-8ce7-77afc8f130df",
    "isFeatured": true
  },
  {
    "id": "db0f174b-c95a-421e-b05a-d34d6f9cf47a",
    "slug": "floral-earring-e11-db0f17",
    "name": "Floral earring E11",
    "category": "RINGS",
    "price": 150,
    "mrp": 150,
    "discount": 0,
    "description": "Floral earring E11",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Zbxt1x7jmX7bqZl.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/db0f174b-c95a-421e-b05a-d34d6f9cf47a",
    "isFeatured": true
  },
  {
    "id": "32059e59-813b-493b-97e8-9c2df6f026c4",
    "slug": "floral-earring-e4-32059e",
    "name": "Floral earring E4",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Floral earring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1x2MN7xpkUA.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/32059e59-813b-493b-97e8-9c2df6f026c4",
    "isFeatured": true
  },
  {
    "id": "a606d7af-143b-4b1a-816f-3595a6ffd281",
    "slug": "floral-earrings-a606d7",
    "name": "Floral earrings",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Floral earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Zbxt1RCuE-$sDuI.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a606d7af-143b-4b1a-816f-3595a6ffd281",
    "isFeatured": true
  },
  {
    "id": "6d648ef8-6bf2-4e7e-b4c3-59046386a85d",
    "slug": "floral-earrings-e10-6d648e",
    "name": "Floral earrings E10",
    "category": "RINGS",
    "price": 130,
    "mrp": 150,
    "discount": 13,
    "description": "Floral earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1B9Uy2Y6XKd.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6d648ef8-6bf2-4e7e-b4c3-59046386a85d",
    "isFeatured": true
  },
  {
    "id": "d222eb20-2b55-4c84-80d3-93b7572894da",
    "slug": "floral-earrings-e4-d222eb",
    "name": "Floral earrings E4",
    "category": "RINGS",
    "price": 110,
    "mrp": 120,
    "discount": 8,
    "description": "Floral earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ebxt1hlrIrohnLj.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d222eb20-2b55-4c84-80d3-93b7572894da",
    "isFeatured": true
  },
  {
    "id": "742c834c-e0a3-4b46-a2b9-dfd708dc57b4",
    "slug": "floral-earrings-e5-742c83",
    "name": "Floral earrings E5",
    "category": "RINGS",
    "price": 120,
    "mrp": 180,
    "discount": 33,
    "description": "Floral earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/5bxt1B5ElxmADi4.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/742c834c-e0a3-4b46-a2b9-dfd708dc57b4",
    "isFeatured": true
  },
  {
    "id": "1bd0b674-bcbb-4ed5-9aee-a8af316d27a9",
    "slug": "floral-earrings-e7-1bd0b6",
    "name": "Floral earrings E7",
    "category": "RINGS",
    "price": 180,
    "mrp": 200,
    "discount": 10,
    "description": "Floral earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/cbxt1RL5nLs5xx1.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1bd0b674-bcbb-4ed5-9aee-a8af316d27a9",
    "isFeatured": true
  },
  {
    "id": "c1fa3703-5097-4e7e-bc25-62fb8ff5385d",
    "slug": "floral-helix-p1-c1fa37",
    "name": "Floral helix - P1",
    "category": "EARRINGS",
    "price": 169,
    "mrp": 169,
    "discount": 0,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1RyJGeyNRAd.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c1fa3703-5097-4e7e-bc25-62fb8ff5385d",
    "isFeatured": false
  },
  {
    "id": "78e948ca-bd0f-4272-853e-b81af72d4088",
    "slug": "floral-helix-ss2-78e948",
    "name": "Floral helix - SS2",
    "category": "EARRINGS",
    "price": 299,
    "mrp": 399,
    "discount": 25,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 Surgical Steel Collection",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Rbxt1hk-ORfgpLv.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/78e948ca-bd0f-4272-853e-b81af72d4088",
    "isFeatured": false
  },
  {
    "id": "8579a34d-d053-4ef2-b083-ac06e428ad3c",
    "slug": "floral-hoops-8579a3",
    "name": "Floral Hoops",
    "category": "RINGS",
    "price": 280,
    "mrp": 300,
    "discount": 6,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1htuM2GYAh9.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8579a34d-d053-4ef2-b083-ac06e428ad3c",
    "isFeatured": true
  },
  {
    "id": "88c05749-9856-4b10-9458-573fe39eb1be",
    "slug": "floral-hoops-88c057",
    "name": "Floral Hoops",
    "category": "RINGS",
    "price": 280,
    "mrp": 300,
    "discount": 6,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/4bxt1B0CrB2W4-g.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/88c05749-9856-4b10-9458-573fe39eb1be",
    "isFeatured": true
  },
  {
    "id": "5c92d4bb-8dca-452c-b7bf-68707df88cbf",
    "slug": "floral-hoops-e27-5c92d4",
    "name": "Floral Hoops - E27",
    "category": "RINGS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Product Description Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Qbxt1BdKxSvGNW2.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5c92d4bb-8dca-452c-b7bf-68707df88cbf",
    "isFeatured": true
  },
  {
    "id": "7f6fd950-ca48-4304-9377-905b62c33c6e",
    "slug": "floral-kada-bracelet-b66-7f6fd9",
    "name": "Floral Kada Bracelet - B66",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 220,
    "discount": 9,
    "description": "Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Abxt1x8NCMig1iN.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7f6fd950-ca48-4304-9377-905b62c33c6e",
    "isFeatured": false
  },
  {
    "id": "fb6f05bf-fd5f-4b6c-8510-c02b40144d72",
    "slug": "floral-neckchain-c58-fb6f05",
    "name": "Floral Neckchain - C58",
    "category": "CHAINS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1BvzvFMu7d8.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/fb6f05bf-fd5f-4b6c-8510-c02b40144d72",
    "isFeatured": false
  },
  {
    "id": "29412eaf-0cad-4dc1-88d1-94d55763903d",
    "slug": "floral-neckchain-c40-29412e",
    "name": "Floral Neckchain C40",
    "category": "CHAINS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/nbxt1hITxrAl8OC.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/29412eaf-0cad-4dc1-88d1-94d55763903d",
    "isFeatured": false
  },
  {
    "id": "db7ef5de-0e44-4760-87b8-545bd7287f6b",
    "slug": "floral-neckchian-c58-db7ef5",
    "name": "Floral Neckchian - C58",
    "category": "CHAINS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/jbxt1R8I16zOWW8.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/db7ef5de-0e44-4760-87b8-545bd7287f6b",
    "isFeatured": false
  },
  {
    "id": "5481143d-5734-4704-b568-499fd0c12355",
    "slug": "floral-press-on-nose-pin-earrings-548114",
    "name": "Floral Press On Nose Pin / Earrings",
    "category": "RINGS",
    "price": 115,
    "mrp": 115,
    "discount": 0,
    "description": "Floral Press On Nose Pin / Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1xmwe3xaqn2.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5481143d-5734-4704-b568-499fd0c12355",
    "isFeatured": true
  },
  {
    "id": "0a818ae2-9108-4416-bad5-ab7ac5c309b7",
    "slug": "floral-press-on-nose-pin-earrings-single-0a818a",
    "name": "Floral Press On Nose Pin / Earrings - Single",
    "category": "RINGS",
    "price": 115,
    "mrp": 115,
    "discount": 0,
    "description": "Heart Press On Nose Pin / Earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1xQ6hEB4pfF.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0a818ae2-9108-4416-bad5-ab7ac5c309b7",
    "isFeatured": true
  },
  {
    "id": "532be42f-2c9f-4ea5-9abf-67047b0bab23",
    "slug": "floral-silver-chain-c1-532be4",
    "name": "Floral silver chain C1",
    "category": "CHAINS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Stainless Steel Floral silver chain",
    "material": "Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1BFMNrzNRhk.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/532be42f-2c9f-4ea5-9abf-67047b0bab23",
    "isFeatured": false
  },
  {
    "id": "0e2e37e7-564f-443f-9532-4bbe348d6db8",
    "slug": "floral-spinning-neckchain-c62-0e2e37",
    "name": "Floral Spinning Neckchain - C62",
    "category": "CHAINS",
    "price": 220,
    "mrp": 250,
    "discount": 12,
    "description": "Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/bbxt1RCc2uJc1UD.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0e2e37e7-564f-443f-9532-4bbe348d6db8",
    "isFeatured": false
  },
  {
    "id": "69b65cd4-6a22-40c6-99c5-695c0c36aad6",
    "slug": "floral-spinning-neckchain-c62-69b65c",
    "name": "Floral Spinning Neckchain - C62",
    "category": "CHAINS",
    "price": 220,
    "mrp": 250,
    "discount": 12,
    "description": "Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/cbxt1RXw4gdIGHt.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/69b65cd4-6a22-40c6-99c5-695c0c36aad6",
    "isFeatured": false
  },
  {
    "id": "3318be96-b2bb-49da-a0db-948cd4bda246",
    "slug": "floral-stud-p2-3318be",
    "name": "Floral Stud - P2",
    "category": "EARRINGS",
    "price": 130,
    "mrp": 149,
    "discount": 12,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/cbxt1xW5TaOY0I3.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3318be96-b2bb-49da-a0db-948cd4bda246",
    "isFeatured": false
  },
  {
    "id": "c10cbb91-9e67-494a-a6c1-a1a7e981d757",
    "slug": "floral-stud-p2-c10cbb",
    "name": "Floral Stud - P2",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/xbxt1xLavIXSeUZ.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c10cbb91-9e67-494a-a6c1-a1a7e981d757",
    "isFeatured": false
  },
  {
    "id": "1bde7cc1-1360-40ef-98d2-8964273377fb",
    "slug": "gold-snake-chain-anklet-pair-a6-1bde7c",
    "name": "Gold Snake Chain Anklet Pair - A6",
    "category": "ANKLETS",
    "price": 199,
    "mrp": 299,
    "discount": 33,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ibxt1RAW9uDN6q4.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1bde7cc1-1360-40ef-98d2-8964273377fb",
    "isFeatured": false
  },
  {
    "id": "9c63f22c-8aa0-4726-8c67-416eeb15c15d",
    "slug": "hear-bracelet-b7-9c63f2",
    "name": "Hear bracelet B7",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Stainless steel Heart bracelet",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/wbxt1BBWIc65but.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9c63f22c-8aa0-4726-8c67-416eeb15c15d",
    "isFeatured": true
  },
  {
    "id": "26ee1e93-5872-4819-ad5b-e6d7964de194",
    "slug": "heart-bracelet-26ee1e",
    "name": "Heart Bracelet",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Heart Bracelet",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Gbxt1hJwDAPsWm7.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/26ee1e93-5872-4819-ad5b-e6d7964de194",
    "isFeatured": false
  },
  {
    "id": "712e58a7-9739-4ed3-a7f0-1d81abe2bfc9",
    "slug": "heart-chain-bracelet-b67-712e58",
    "name": "Heart Chain Bracelet - B67",
    "category": "BRACELETS",
    "price": 180,
    "mrp": 199,
    "discount": 9,
    "description": "Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/bbxt1xQ$eZKx5vj.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/712e58a7-9739-4ed3-a7f0-1d81abe2bfc9",
    "isFeatured": false
  },
  {
    "id": "d646c2f8-c47c-43fd-95e6-e80807c41bb6",
    "slug": "heart-chain-c21-d646c2",
    "name": "Heart chain C21",
    "category": "CHAINS",
    "price": 199,
    "mrp": 220,
    "discount": 9,
    "description": "Anti tarnished Stainless Steel Heart chain",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Jbxt1hyUWYETXqP.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d646c2f8-c47c-43fd-95e6-e80807c41bb6",
    "isFeatured": false
  },
  {
    "id": "17b945ff-c591-47ca-ae67-d2a9fee55a36",
    "slug": "heart-charm-chain-c45-17b945",
    "name": "Heart Charm Chain - C45",
    "category": "CHAINS",
    "price": 239,
    "mrp": 260,
    "discount": 8,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/5bxt1hoXojqCw0z.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/17b945ff-c591-47ca-ae67-d2a9fee55a36",
    "isFeatured": false
  },
  {
    "id": "9b12cbb8-61b8-46d2-9b5a-7701b1725fd6",
    "slug": "heart-charm-chain-c45-9b12cb",
    "name": "Heart Charm Chain - C45",
    "category": "CHAINS",
    "price": 239,
    "mrp": 260,
    "discount": 8,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Mbxt1RhYhgZTi33.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9b12cbb8-61b8-46d2-9b5a-7701b1725fd6",
    "isFeatured": false
  },
  {
    "id": "80292e36-d023-4489-be1a-d0ebd3ea0c13",
    "slug": "heart-charm-neckchain-c51-80292e",
    "name": "Heart charm neckchain - C51",
    "category": "CHAINS",
    "price": 209,
    "mrp": 209,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Bbxt1hmD5TGM-Sg.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/80292e36-d023-4489-be1a-d0ebd3ea0c13",
    "isFeatured": false
  },
  {
    "id": "9cfe39ad-e7c3-47c7-89e0-5410cf814ae7",
    "slug": "heart-charm-neckchain-c37-9cfe39",
    "name": "Heart Charm Neckchain C37",
    "category": "CHAINS",
    "price": 239,
    "mrp": 260,
    "discount": 8,
    "description": "Stainless Steel anti tarnished Chain.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Jbxt1hUVxeA1jr4.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9cfe39ad-e7c3-47c7-89e0-5410cf814ae7",
    "isFeatured": false
  },
  {
    "id": "974288c6-714f-453c-9712-25e2dfb7bf64",
    "slug": "heart-earring-e3-974288",
    "name": "Heart earring E3",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Heart earring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1Ri1wk2U2BE.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/974288c6-714f-453c-9712-25e2dfb7bf64",
    "isFeatured": true
  },
  {
    "id": "182aa1a5-b801-4f0f-baca-2eb78c8eba27",
    "slug": "heart-earrings-e14-182aa1",
    "name": "Heart earrings - E14",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1R1ipdFEVkn.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/182aa1a5-b801-4f0f-baca-2eb78c8eba27",
    "isFeatured": true
  },
  {
    "id": "747ba03e-80a3-4119-86b5-d829f119dd39",
    "slug": "heart-earrings-e16-747ba0",
    "name": "Heart earrings - E16",
    "category": "RINGS",
    "price": 140,
    "mrp": 140,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/3bxt1x7OfWyCeoQ.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/747ba03e-80a3-4119-86b5-d829f119dd39",
    "isFeatured": true
  },
  {
    "id": "059d539a-2305-48ca-b7a5-17458e6907ef",
    "slug": "heart-earrings-ke30-059d53",
    "name": "Heart earrings KE30",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Stainless Steel earrings.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/obxt1h3ZaKPlZGr.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/059d539a-2305-48ca-b7a5-17458e6907ef",
    "isFeatured": true
  },
  {
    "id": "8bfc9ac4-7604-4deb-a78f-6ff6f1022a56",
    "slug": "heart-neckchain-c54-8bfc9a",
    "name": "Heart Neckchain - C54",
    "category": "CHAINS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/tbxt1RCAoGNK6Qu.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8bfc9ac4-7604-4deb-a78f-6ff6f1022a56",
    "isFeatured": false
  },
  {
    "id": "44ce92b5-270c-4be2-a481-c0700d32290d",
    "slug": "heart-neckchain-c71-44ce92",
    "name": "Heart Neckchain - C71",
    "category": "CHAINS",
    "price": 180,
    "mrp": 200,
    "discount": 10,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/rbxt1BuBEiE7d9T.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/44ce92b5-270c-4be2-a481-c0700d32290d",
    "isFeatured": false
  },
  {
    "id": "ae28649f-973d-4d22-9349-a1e91ad92b54",
    "slug": "heart-pendant-chain-c25-ae2864",
    "name": "Heart pendant chain C25",
    "category": "CHAINS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Stainless steel Chain",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/rbxt1RxCxmVb34w.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ae28649f-973d-4d22-9349-a1e91ad92b54",
    "isFeatured": false
  },
  {
    "id": "03531916-3053-4c9b-84af-d854af3164b5",
    "slug": "heart-ring-035319",
    "name": "Heart Ring",
    "category": "RINGS",
    "price": 99,
    "mrp": 120,
    "discount": 17,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/dbxt1BYEXFj$yov.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/03531916-3053-4c9b-84af-d854af3164b5",
    "isFeatured": true
  },
  {
    "id": "3d5bc6e0-5ca6-425f-a3eb-af8ceef06ac3",
    "slug": "heart-stud-p1-3d5bc6",
    "name": "Heart Stud - P1",
    "category": "EARRINGS",
    "price": 169,
    "mrp": 169,
    "discount": 0,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ibxt1xLyskXjJBp.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3d5bc6e0-5ca6-425f-a3eb-af8ceef06ac3",
    "isFeatured": false
  },
  {
    "id": "64e7fab8-edb6-4841-9167-ea4bf2282d6c",
    "slug": "heart-stud-p2-64e7fa",
    "name": "Heart Stud - P2",
    "category": "EARRINGS",
    "price": 180,
    "mrp": 199,
    "discount": 9,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/pbxt1R1opWG4844.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/64e7fab8-edb6-4841-9167-ea4bf2282d6c",
    "isFeatured": false
  },
  {
    "id": "a6cd7603-1525-4425-9252-2dabbeca9148",
    "slug": "heart-wings-neckchain-c47-a6cd76",
    "name": "Heart Wings Neckchain - C47",
    "category": "CHAINS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/7bxt1BRH2D3UnvI.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a6cd7603-1525-4425-9252-2dabbeca9148",
    "isFeatured": false
  },
  {
    "id": "4fdf5153-bcbb-4eab-8327-b14563d84096",
    "slug": "heat-infinity-chain-c20-4fdf51",
    "name": "Heat infinity chain C20",
    "category": "CHAINS",
    "price": 199,
    "mrp": 250,
    "discount": 20,
    "description": "Anti tarnished Stainless Steel Heat infinity chain",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ybxt1x8Q2KOmW9y.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4fdf5153-bcbb-4eab-8327-b14563d84096",
    "isFeatured": false
  },
  {
    "id": "bd0a5312-3200-4997-b252-2be567a8e040",
    "slug": "heat-pendant-chain-c3-bd0a53",
    "name": "Heat pendant chain C3",
    "category": "CHAINS",
    "price": 180,
    "mrp": 220,
    "discount": 18,
    "description": "Anti tarnished Stainless Steel Heat pendant chain",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Bbxt1RvrWJXlJFi.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bd0a5312-3200-4997-b252-2be567a8e040",
    "isFeatured": false
  },
  {
    "id": "263f75c2-d0ca-4183-9709-8496c0845524",
    "slug": "helix-earring-ss2-263f75",
    "name": "Helix earring - SS2",
    "category": "EARRINGS",
    "price": 399,
    "mrp": 399,
    "discount": 0,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 Surgical Steel Collection",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1RyVfkPEVRS.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/263f75c2-d0ca-4183-9709-8496c0845524",
    "isFeatured": false
  },
  {
    "id": "0b78b7c2-d9be-4045-9fcd-5bf56611a1c3",
    "slug": "helix-earrings-ss2-0b78b7",
    "name": "Helix earrings - SS2",
    "category": "EARRINGS",
    "price": 299,
    "mrp": 399,
    "discount": 25,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ybxt1xIilWMdL39.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0b78b7c2-d9be-4045-9fcd-5bf56611a1c3",
    "isFeatured": false
  },
  {
    "id": "ffafa4af-b8f5-4411-902c-8eaca09e72ae",
    "slug": "helix-earrings-ss2-ffafa4",
    "name": "Helix earrings - SS2",
    "category": "EARRINGS",
    "price": 299,
    "mrp": 399,
    "discount": 25,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 Surgical Steel Collection",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1xfjwvT9Fly.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ffafa4af-b8f5-4411-902c-8eaca09e72ae",
    "isFeatured": false
  },
  {
    "id": "9d24715e-f5d5-4fd6-a95e-25b647d1b651",
    "slug": "hoop-with-drops-e3-9d2471",
    "name": "Hoop with drops E3",
    "category": "RINGS",
    "price": 99,
    "mrp": 109,
    "discount": 9,
    "description": "Hoop with drops",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1BfY3Yb-KfP.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9d24715e-f5d5-4fd6-a95e-25b647d1b651",
    "isFeatured": true
  },
  {
    "id": "db049df5-b480-4486-9264-ca617910164c",
    "slug": "hoops-e12-db049d",
    "name": "Hoops - E12",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1R8ixto-rJL.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/db049df5-b480-4486-9264-ca617910164c",
    "isFeatured": true
  },
  {
    "id": "7aa6dc4b-d37d-4bf6-b18e-aae8d51d3f45",
    "slug": "hoops-e15-7aa6dc",
    "name": "Hoops - E15",
    "category": "RINGS",
    "price": 130,
    "mrp": 130,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Vbxt1h-1FBjJdTh.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7aa6dc4b-d37d-4bf6-b18e-aae8d51d3f45",
    "isFeatured": true
  },
  {
    "id": "aac6255d-70ff-46a7-a473-3b175069285c",
    "slug": "hoops-e15-aac625",
    "name": "Hoops - E15",
    "category": "RINGS",
    "price": 130,
    "mrp": 130,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1xzn3QVAFHY.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/aac6255d-70ff-46a7-a473-3b175069285c",
    "isFeatured": true
  },
  {
    "id": "28392448-1bce-43a0-84d6-daa8facb81fa",
    "slug": "hoops-with-drop-e15-283924",
    "name": "Hoops with drop - E15",
    "category": "RINGS",
    "price": 130,
    "mrp": 130,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/tbxt1xOxKvGNVsi.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/28392448-1bce-43a0-84d6-daa8facb81fa",
    "isFeatured": true
  },
  {
    "id": "e9932d3b-ecfb-42b1-a718-ab6c2ac459e1",
    "slug": "infinity-bracelet-b56-e9932d",
    "name": "Infinity Bracelet - B56",
    "category": "BRACELETS",
    "price": 239,
    "mrp": 239,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/wbxt1RuoAqrIK$P.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e9932d3b-ecfb-42b1-a718-ab6c2ac459e1",
    "isFeatured": false
  },
  {
    "id": "b1febab1-8582-4533-8b1f-1ee61127f685",
    "slug": "infinity-charm-neckchain-and-earrings-c83-b1feba",
    "name": "Infinity Charm Neckchain and Earrings - C83",
    "category": "CHAINS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/xbxt1BK0YtQaJpt.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b1febab1-8582-4533-8b1f-1ee61127f685",
    "isFeatured": false
  },
  {
    "id": "8c63ffe7-2ec7-4357-a27f-736389f6e8de",
    "slug": "infinity-neckchain-c53-8c63ff",
    "name": "Infinity Neckchain - C53",
    "category": "CHAINS",
    "price": 209,
    "mrp": 209,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ybxt1xqjvu3DXrt.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8c63ffe7-2ec7-4357-a27f-736389f6e8de",
    "isFeatured": false
  },
  {
    "id": "02cdd955-caa8-43c6-b29f-b89ada323620",
    "slug": "invisible-chain-02cdd9",
    "name": "Invisible Chain",
    "category": "CHAINS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/5bxt1hS3Of7YDOD.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/02cdd955-caa8-43c6-b29f-b89ada323620",
    "isFeatured": false
  },
  {
    "id": "8201a6cd-497f-40f9-b509-d2ee2bcc3380",
    "slug": "invisible-chain-8201a6",
    "name": "Invisible chain",
    "category": "CHAINS",
    "price": 119,
    "mrp": 149,
    "discount": 20,
    "description": "Invisible chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Abxt1xuFQ2H7-DA.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8201a6cd-497f-40f9-b509-d2ee2bcc3380",
    "isFeatured": false
  },
  {
    "id": "8df55f59-dd7b-415b-adf2-8666be4664e7",
    "slug": "invisible-chain-ic1-8df55f",
    "name": "Invisible Chain IC1",
    "category": "CHAINS",
    "price": 120,
    "mrp": 150,
    "discount": 20,
    "description": "Invisible Chain IC1",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Bbxt1hosDZENdtX.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8df55f59-dd7b-415b-adf2-8666be4664e7",
    "isFeatured": false
  },
  {
    "id": "98517d09-1475-47d0-b08c-c1de3f28ec96",
    "slug": "invisible-chain-ic1-98517d",
    "name": "Invisible Chain IC1",
    "category": "CHAINS",
    "price": 120,
    "mrp": 150,
    "discount": 20,
    "description": "Invisible Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1BTHhoPut9i.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/98517d09-1475-47d0-b08c-c1de3f28ec96",
    "isFeatured": false
  },
  {
    "id": "0f3a3e38-a490-4bdc-a1ec-4f3a7f45b5e8",
    "slug": "invisible-chain-ic5-0f3a3e",
    "name": "Invisible Chain IC5",
    "category": "CHAINS",
    "price": 120,
    "mrp": 150,
    "discount": 20,
    "description": "Invisible Chain IC5",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Gbxt1BiR27fj4CX.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0f3a3e38-a490-4bdc-a1ec-4f3a7f45b5e8",
    "isFeatured": false
  },
  {
    "id": "78890ee4-38f3-4f46-aeeb-c3e0045b9170",
    "slug": "invisible-chain-ic8-78890e",
    "name": "Invisible Chain IC8",
    "category": "CHAINS",
    "price": 199,
    "mrp": 240,
    "discount": 17,
    "description": "Invisible Chain IC8",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Bbxt1xM-TaYTLAG.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/78890ee4-38f3-4f46-aeeb-c3e0045b9170",
    "isFeatured": false
  },
  {
    "id": "290c7ea9-ddf7-4398-8656-016e83d2de69",
    "slug": "jumka-290c7e",
    "name": "Jumka",
    "category": "EARRINGS",
    "price": 99,
    "mrp": 120,
    "discount": 17,
    "description": "Jumka",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/kbxt1heko9-3sQ3.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/290c7ea9-ddf7-4398-8656-016e83d2de69",
    "isFeatured": false
  },
  {
    "id": "90412c54-41d1-40b0-ae13-755311d9be4e",
    "slug": "jumka-90412c",
    "name": "Jumka",
    "category": "RINGS",
    "price": 80,
    "mrp": 120,
    "discount": 33,
    "description": "Jumka",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1R6bd3Kji2L.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/90412c54-41d1-40b0-ae13-755311d9be4e",
    "isFeatured": true
  },
  {
    "id": "e9de40b4-884e-4ce6-b267-e1352bf26298",
    "slug": "jumka-e9de40",
    "name": "Jumka",
    "category": "RINGS",
    "price": 40,
    "mrp": 40,
    "discount": 0,
    "description": "Jumka",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ubxt1RewBApvCTK.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e9de40b4-884e-4ce6-b267-e1352bf26298",
    "isFeatured": true
  },
  {
    "id": "c0de8106-5288-4642-9d46-8634cfb74f32",
    "slug": "kemp-neckpiece-set-n3-c0de81",
    "name": "Kemp neckpiece set N3",
    "category": "NECKLACES",
    "price": 450,
    "mrp": 499,
    "discount": 9,
    "description": "Kemp neckpiece set",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Rbxt1hdRcgNvkij.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c0de8106-5288-4642-9d46-8634cfb74f32",
    "isFeatured": false
  },
  {
    "id": "4049ef11-223d-4c0b-8070-6d9ce11afffb",
    "slug": "labubu-pendant-chain-c7-4049ef",
    "name": "Labubu pendant chain C7",
    "category": "CHAINS",
    "price": 160,
    "mrp": 199,
    "discount": 19,
    "description": "Anti tarnished Stainless Steel Labubu pendant chain",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/pbxt1hwKw7fxO6x.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4049ef11-223d-4c0b-8070-6d9ce11afffb",
    "isFeatured": false
  },
  {
    "id": "53729305-1734-4c1e-a2bf-c3054607e753",
    "slug": "leafy-earrings-e5-537293",
    "name": "Leafy earrings E5",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Leafy earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1BWMIJRejfd.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/53729305-1734-4c1e-a2bf-c3054607e753",
    "isFeatured": true
  },
  {
    "id": "72fab943-2e5b-46bd-8ab8-8898abea1320",
    "slug": "leafy-helix-second-stud-p2-72fab9",
    "name": "Leafy Helix / Second Stud - P2",
    "category": "EARRINGS",
    "price": 160,
    "mrp": 199,
    "discount": 19,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/pbxt1himqfOy9qT.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/72fab943-2e5b-46bd-8ab8-8898abea1320",
    "isFeatured": false
  },
  {
    "id": "81ff7759-4641-4a97-8e24-b4db37da7730",
    "slug": "leafy-invisible-chain-ic12-81ff77",
    "name": "Leafy invisible chain - IC12",
    "category": "CHAINS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Leafy invisible chain - IC12",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/nbxt1hmKlFY0itf.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/81ff7759-4641-4a97-8e24-b4db37da7730",
    "isFeatured": false
  },
  {
    "id": "f38deaca-c031-4856-8003-fa8d3fadee49",
    "slug": "magnetic-pendant-chain-c5-f38dea",
    "name": "Magnetic pendant chain C5",
    "category": "CHAINS",
    "price": 149,
    "mrp": 175,
    "discount": 14,
    "description": "Anti tarnished Stainless Steel Magnetic pendant chain",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/3bxt1xwV4YUoPVJ.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f38deaca-c031-4856-8003-fa8d3fadee49",
    "isFeatured": false
  },
  {
    "id": "13a2b85f-7dc2-4d27-b6c0-42fbb5af3fc4",
    "slug": "mangalsutra-m1-13a2b8",
    "name": "Mangalsutra M1",
    "category": "RINGS",
    "price": 249,
    "mrp": 290,
    "discount": 14,
    "description": "It’s traditional chain with imported pendant. Micro plated. perfect for daily wear.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ubxt1RKa4W8DOhN.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/13a2b85f-7dc2-4d27-b6c0-42fbb5af3fc4",
    "isFeatured": true
  },
  {
    "id": "db77d778-a955-49b6-84dd-91c12c8481fe",
    "slug": "meenakari-kada-b20-db77d7",
    "name": "Meenakari kada B20",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Meenakari kada",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1BVRp491tdV.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/db77d778-a955-49b6-84dd-91c12c8481fe",
    "isFeatured": false
  },
  {
    "id": "da245bc4-6afb-4e4e-82de-3727b5ff6975",
    "slug": "meenakari-kada-b21-da245b",
    "name": "Meenakari kada B21",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Meenakari kada",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1Rzszok3X1V.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/da245bc4-6afb-4e4e-82de-3727b5ff6975",
    "isFeatured": false
  },
  {
    "id": "b6ad18ca-85ca-4371-af75-b61a0198ab44",
    "slug": "mens-openable-bracelet-b6ad18",
    "name": "Men's Openable Bracelet",
    "category": "BRACELETS",
    "price": 299,
    "mrp": 299,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1Rmkh9gpWdg.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b6ad18ca-85ca-4371-af75-b61a0198ab44",
    "isFeatured": false
  },
  {
    "id": "2c9386eb-a836-4fd1-b966-3a533483f3bd",
    "slug": "mermaid-silver-chain-c6-2c9386",
    "name": "Mermaid silver chain  C6",
    "category": "CHAINS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Stainless steel chain",
    "material": "Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ibxt1h$pm$CQKQa.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/2c9386eb-a836-4fd1-b966-3a533483f3bd",
    "isFeatured": false
  },
  {
    "id": "5fd0a169-a3ee-44f8-8852-a78ac6348f0b",
    "slug": "moon-start-stud-p2-5fd0a1",
    "name": "Moon & Start Stud - P2",
    "category": "EARRINGS",
    "price": 190,
    "mrp": 199,
    "discount": 4,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1BRkeNzxNQk.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5fd0a169-a3ee-44f8-8852-a78ac6348f0b",
    "isFeatured": false
  },
  {
    "id": "b9352df4-f29e-4dab-99c0-aea0c69d046e",
    "slug": "moon-neckchain-b9352d",
    "name": "Moon Neckchain",
    "category": "CHAINS",
    "price": 219,
    "mrp": 250,
    "discount": 12,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/9bxt1RLXi3ISs62.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b9352df4-f29e-4dab-99c0-aea0c69d046e",
    "isFeatured": false
  },
  {
    "id": "5192ca42-1c21-4594-aefa-2e31d9cfb2d0",
    "slug": "moon-neckchain-c52-5192ca",
    "name": "Moon Neckchain - C52",
    "category": "CHAINS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Bbxt1x576bm2Qcj.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5192ca42-1c21-4594-aefa-2e31d9cfb2d0",
    "isFeatured": false
  },
  {
    "id": "c065c0cc-61d4-48d2-845f-a1afc419e141",
    "slug": "moon-press-on-nose-pin-earrings-c065c0",
    "name": "Moon Press On Nose Pin / Earrings",
    "category": "RINGS",
    "price": 115,
    "mrp": 150,
    "discount": 23,
    "description": "•⁠ ⁠Made with premium Brass – durable, rust-resistant &amp; skin-friendly •⁠ ⁠Water-resistant / Waterproof – safe for daily wear, sweat &amp; moisture •⁠ ⁠Finished with 18KT Gold Tone Plating for a rich luxury look •⁠ ⁠Extra E-Coating Layer on top – added protection &amp; shine (rare in most brands)",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/sbxt1xRNXPdKjCp.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c065c0cc-61d4-48d2-845f-a1afc419e141",
    "isFeatured": true
  },
  {
    "id": "a80719dd-1751-4d15-83cc-d0a7d47d735a",
    "slug": "moon-stud-small-ss2-a80719",
    "name": "Moon stud small - SS2",
    "category": "EARRINGS",
    "price": 219,
    "mrp": 219,
    "discount": 0,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1hfCggXgFTh.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a80719dd-1751-4d15-83cc-d0a7d47d735a",
    "isFeatured": false
  },
  {
    "id": "5779ca07-9f17-407f-97cd-d43c6748a73f",
    "slug": "multicolor-floral-earrings-e17-5779ca",
    "name": "Multicolor floral earrings - E17",
    "category": "RINGS",
    "price": 150,
    "mrp": 150,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Multicolor",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ybxt1Repwm4ihUS.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5779ca07-9f17-407f-97cd-d43c6748a73f",
    "isFeatured": true
  },
  {
    "id": "0e7e41f6-ccd9-4787-9b56-4711b28e53c6",
    "slug": "pastel-jumka-j5-0e7e41",
    "name": "Pastel Jumka - J5",
    "category": "EARRINGS",
    "price": 140,
    "mrp": 140,
    "discount": 0,
    "description": "Pastel Jumka - J5",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/tbxt1B-GSKY02Pn.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0e7e41f6-ccd9-4787-9b56-4711b28e53c6",
    "isFeatured": false
  },
  {
    "id": "e58d8ae3-e206-474f-9e91-f8a3b78313b8",
    "slug": "peacock-attigai-n2-e58d8a",
    "name": "Peacock Attigai N2",
    "category": "NECKLACES",
    "price": 350,
    "mrp": 399,
    "discount": 12,
    "description": "Peacock Attigai",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1hfuYVyOYPE.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e58d8ae3-e206-474f-9e91-f8a3b78313b8",
    "isFeatured": false
  },
  {
    "id": "1936572d-6eb2-404d-9460-3b3c0d0380e4",
    "slug": "peacock-earrings-e3-193657",
    "name": "Peacock earrings E3",
    "category": "RINGS",
    "price": 99,
    "mrp": 110,
    "discount": 10,
    "description": "Peacock earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/zbxt1hqa6g6gQGe.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1936572d-6eb2-404d-9460-3b3c0d0380e4",
    "isFeatured": true
  },
  {
    "id": "762ff215-59ab-4ec7-b101-2d76d2ecc2fd",
    "slug": "peacock-earrings-e5-762ff2",
    "name": "Peacock earrings E5",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Peacock earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1x5vGp1pQBi.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/762ff215-59ab-4ec7-b101-2d76d2ecc2fd",
    "isFeatured": true
  },
  {
    "id": "a3591cee-94d5-4f22-8026-757b922f5803",
    "slug": "peacock-earrings-e8-a3591c",
    "name": "Peacock earrings E8",
    "category": "RINGS",
    "price": 149,
    "mrp": 199,
    "discount": 25,
    "description": "Peacock earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ebxt1Rm4jHpqytL.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a3591cee-94d5-4f22-8026-757b922f5803",
    "isFeatured": true
  },
  {
    "id": "b513689f-ec41-44c4-976f-27b53d0c0ebd",
    "slug": "peacock-jumka-e9-b51368",
    "name": "Peacock jumka E9",
    "category": "RINGS",
    "price": 149,
    "mrp": 149,
    "discount": 0,
    "description": "Peacock jumka",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Vbxt1RoMjrSTgIK.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b513689f-ec41-44c4-976f-27b53d0c0ebd",
    "isFeatured": true
  },
  {
    "id": "07f3b763-6d48-4c60-9de0-7692cbdf4f97",
    "slug": "pink-heart-charm-neck-chain-c24-07f3b7",
    "name": "Pink heart charm neck chain C24",
    "category": "CHAINS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Pink heart charm neck chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1xSaVvHlOUH.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/07f3b763-6d48-4c60-9de0-7692cbdf4f97",
    "isFeatured": false
  },
  {
    "id": "47ca7225-7e7a-4b9b-a0d7-fdcb73abf661",
    "slug": "pink-heart-hoops-47ca72",
    "name": "Pink Heart Hoops",
    "category": "RINGS",
    "price": 239,
    "mrp": 250,
    "discount": 4,
    "description": "Premium 316L stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ubxt1B0$YLuHasR.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/47ca7225-7e7a-4b9b-a0d7-fdcb73abf661",
    "isFeatured": true
  },
  {
    "id": "9705231e-5f5b-43a0-9de3-5b11938a4dbd",
    "slug": "premium-anti-tarnish-watch-970523",
    "name": "Premium Anti Tarnish Watch",
    "category": "RINGS",
    "price": 549,
    "mrp": 699,
    "discount": 21,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/dbxt1BY63la$X5u.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9705231e-5f5b-43a0-9de3-5b11938a4dbd",
    "isFeatured": true
  },
  {
    "id": "c7b068d5-9172-48b1-83b9-3321b724f29d",
    "slug": "premium-anti-tarnished-watch-w2-c7b068",
    "name": "Premium Anti tarnished Watch - W2",
    "category": "RINGS",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/7bxt1hFBvC9AXEF.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c7b068d5-9172-48b1-83b9-3321b724f29d",
    "isFeatured": true
  },
  {
    "id": "1c889be5-8cd2-48e8-b62f-bcfafe16e7d9",
    "slug": "premium-black-bamboo-bracelet-baby-size-b64-1c889b",
    "name": "Premium Black Bamboo Bracelet (Baby Size) - B64",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Product Description Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/2bxt1R8ThpV2tRB.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1c889be5-8cd2-48e8-b62f-bcfafe16e7d9",
    "isFeatured": false
  },
  {
    "id": "c3e3b686-982f-42d0-8f53-d498330fb559",
    "slug": "premium-bracelet-b31-c3e3b6",
    "name": "Premium Bracelet - B31",
    "category": "BRACELETS",
    "price": 299,
    "mrp": 350,
    "discount": 14,
    "description": "Anti-tarnish &amp; long-lasting Water &amp; sweat resistant 💧 Hypoallergenic (safe for sensitive skin) Lightweight &amp; comfortable Perfect for daily wear",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Fbxt1RSLcLdQ5$e.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c3e3b686-982f-42d0-8f53-d498330fb559",
    "isFeatured": false
  },
  {
    "id": "58225aa1-87de-4fb2-b945-4505cf9d00fa",
    "slug": "premium-bracelet-b29-58225a",
    "name": "Premium Bracelet B29",
    "category": "BRACELETS",
    "price": 320,
    "mrp": 350,
    "discount": 8,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1RyNq25OCO0.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/58225aa1-87de-4fb2-b945-4505cf9d00fa",
    "isFeatured": false
  },
  {
    "id": "af6361d6-3837-4ac3-a424-c86900db4a9d",
    "slug": "premium-bracelet-b32-af6361",
    "name": "Premium Bracelet B32",
    "category": "BRACELETS",
    "price": 299,
    "mrp": 350,
    "discount": 14,
    "description": "Premium Bracelet B32",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1RtQdV9Gj9w.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/af6361d6-3837-4ac3-a424-c86900db4a9d",
    "isFeatured": false
  },
  {
    "id": "54a9582f-b21e-4359-9a97-3134af02c6e6",
    "slug": "premium-bracelet-with-ring-collection-b45-54a958",
    "name": "Premium Bracelet with ring collection - B45",
    "category": "BRACELETS",
    "price": 420,
    "mrp": 499,
    "discount": 15,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1RJSoOzH9IL.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/54a9582f-b21e-4359-9a97-3134af02c6e6",
    "isFeatured": true
  },
  {
    "id": "62068c6a-5181-4ef9-a2cc-9e0b6a7a76db",
    "slug": "premium-bracelet-with-ring-collection-b45-62068c",
    "name": "Premium Bracelet with ring collection - B45",
    "category": "BRACELETS",
    "price": 420,
    "mrp": 499,
    "discount": 15,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Gbxt1h$hwJMhSMc.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/62068c6a-5181-4ef9-a2cc-9e0b6a7a76db",
    "isFeatured": true
  },
  {
    "id": "653cb55d-ebaf-40e5-a853-2747ec0756f0",
    "slug": "premium-bracelet-with-ring-collection-b45-653cb5",
    "name": "Premium Bracelet with ring collection - B45",
    "category": "BRACELETS",
    "price": 420,
    "mrp": 499,
    "discount": 15,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/pbxt1xHT150rEQZ.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/653cb55d-ebaf-40e5-a853-2747ec0756f0",
    "isFeatured": true
  },
  {
    "id": "5a323f95-435e-42d0-9afa-fa5d46a62555",
    "slug": "premium-butterfly-earrings-k13-5a323f",
    "name": "Premium butterfly earrings K13",
    "category": "RINGS",
    "price": 120,
    "mrp": 150,
    "discount": 20,
    "description": "Premium butterfly earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1xfxLyfYIZ1.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5a323f95-435e-42d0-9afa-fa5d46a62555",
    "isFeatured": true
  },
  {
    "id": "6b9ddd7d-8355-4c8c-bab0-6ea6e3ff8acd",
    "slug": "premium-butterfly-earrings-k4-6b9ddd",
    "name": "Premium butterfly earrings K4",
    "category": "RINGS",
    "price": 149,
    "mrp": 199,
    "discount": 25,
    "description": "Premium butterfly earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/mbxt1xEaROxNgGJ.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6b9ddd7d-8355-4c8c-bab0-6ea6e3ff8acd",
    "isFeatured": true
  },
  {
    "id": "c8d4c83c-d217-40e4-947e-30dc5c3cee48",
    "slug": "premium-earrings-k20-c8d4c8",
    "name": "Premium earrings K20",
    "category": "RINGS",
    "price": 59,
    "mrp": 80,
    "discount": 26,
    "description": "Premium earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1Rtlvx4QpQH.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c8d4c83c-d217-40e4-947e-30dc5c3cee48",
    "isFeatured": true
  },
  {
    "id": "c9458da4-1070-425d-a34f-57ea336b3677",
    "slug": "premium-kada-bracelet-b45-c9458d",
    "name": "Premium Kada Bracelet  - B45",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Kbxt1xEZgGXefFV.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c9458da4-1070-425d-a34f-57ea336b3677",
    "isFeatured": true
  },
  {
    "id": "6ea11ffb-b89f-41b2-b283-3853bbaeed26",
    "slug": "premium-kada-bracelet-b45-6ea11f",
    "name": "Premium Kada Bracelet - B45",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Kiyuziyu Jewellery (often stylized as Kiyu Ziyu) is a premier global anti-tarnish and imitation jewelry brand, specializing in high-quality, waterproof, and hypoallergenic stainless steel, gold-plated, and fashion jewelry.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/2bxt1R28mkEQMb4.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6ea11ffb-b89f-41b2-b283-3853bbaeed26",
    "isFeatured": true
  },
  {
    "id": "8a344d17-41c4-4cb1-aae4-7891712a378d",
    "slug": "premium-korean-earrings-k10-8a344d",
    "name": "Premium Korean earrings K10",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Premium Korean earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/7bxt1RNMoE4fhQn.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8a344d17-41c4-4cb1-aae4-7891712a378d",
    "isFeatured": true
  },
  {
    "id": "51ceaaa8-6673-48c5-9d7a-1078fa621b33",
    "slug": "premium-korean-earrings-k12-51ceaa",
    "name": "Premium Korean earrings K12",
    "category": "RINGS",
    "price": 99,
    "mrp": 120,
    "discount": 17,
    "description": "Premium Korean earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/cbxt1Rh17fv-XbF.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/51ceaaa8-6673-48c5-9d7a-1078fa621b33",
    "isFeatured": true
  },
  {
    "id": "1d518f9b-3139-42ea-93f0-7f70ef2180e5",
    "slug": "premium-watch-w1-1d518f",
    "name": "Premium Watch - W1",
    "category": "RINGS",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Obxt1h5wOtMHnTp.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1d518f9b-3139-42ea-93f0-7f70ef2180e5",
    "isFeatured": true
  },
  {
    "id": "39d43464-de72-4524-be10-62d478c92a24",
    "slug": "premium-watch-w1-39d434",
    "name": "Premium Watch - W1",
    "category": "RINGS",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Tbxt1hCSUWzoRHh.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/39d43464-de72-4524-be10-62d478c92a24",
    "isFeatured": true
  },
  {
    "id": "480a4721-6008-4c15-9ee9-24c1eabfad6c",
    "slug": "premium-watch-w1-480a47",
    "name": "Premium Watch - W1",
    "category": "RINGS",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1BMuqsK$kXC.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/480a4721-6008-4c15-9ee9-24c1eabfad6c",
    "isFeatured": true
  },
  {
    "id": "5e3928b2-e06c-4e0b-a7b6-bfec79981aed",
    "slug": "premium-watch-w1-5e3928",
    "name": "Premium Watch - W1",
    "category": "RINGS",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1xBS4ocD6sw.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5e3928b2-e06c-4e0b-a7b6-bfec79981aed",
    "isFeatured": true
  },
  {
    "id": "8ba39d68-67e6-4e89-9296-9aba1f853acf",
    "slug": "premium-watch-w1-8ba39d",
    "name": "Premium Watch - W1",
    "category": "RINGS",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/abxt1B5yC6BOB77.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8ba39d68-67e6-4e89-9296-9aba1f853acf",
    "isFeatured": true
  },
  {
    "id": "b0e53844-4b59-4d17-9d67-6c925586ccb1",
    "slug": "premium-watch-w1-b0e538",
    "name": "Premium Watch - W1",
    "category": "RINGS",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/2bxt1hsJV0-lfXt.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b0e53844-4b59-4d17-9d67-6c925586ccb1",
    "isFeatured": true
  },
  {
    "id": "dec5dd82-d274-427f-88a3-25aadc0ff7a5",
    "slug": "premium-watch-w1-dec5dd",
    "name": "Premium Watch - W1",
    "category": "RINGS",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/rbxt1xx5kenQQBV.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/dec5dd82-d274-427f-88a3-25aadc0ff7a5",
    "isFeatured": true
  },
  {
    "id": "66592554-f81f-43b6-b169-d688884ab605",
    "slug": "pretty-heart-anklet-pair-a5-665925",
    "name": "Pretty heart anklet Pair - A5",
    "category": "ANKLETS",
    "price": 399,
    "mrp": 399,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Nbxt1BJffEK0RXM.jpg"
    ],
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/66592554-f81f-43b6-b169-d688884ab605",
    "isFeatured": false
  },
  {
    "id": "adb97e1e-ba99-424b-9b76-10d5fc5388af",
    "slug": "pretty-heart-bracelet-b54-adb97e",
    "name": "Pretty Heart Bracelet - B54",
    "category": "BRACELETS",
    "price": 259,
    "mrp": 299,
    "discount": 13,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1hTM$60xhZj.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/adb97e1e-ba99-424b-9b76-10d5fc5388af",
    "isFeatured": false
  },
  {
    "id": "02a24169-e8e6-46cf-be2d-d76ad5d2385d",
    "slug": "ring-02a241",
    "name": "Ring",
    "category": "RINGS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "It's a excellent quality free size (adjustable ring) finger ring.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1hLLwpalBuJ.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/02a24169-e8e6-46cf-be2d-d76ad5d2385d",
    "isFeatured": true
  },
  {
    "id": "06d4d715-4ed0-4e3a-9f2e-68ebcd9e4f05",
    "slug": "ring-06d4d7",
    "name": "Ring",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Ring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ybxt1RtnX9FLA9Z.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/06d4d715-4ed0-4e3a-9f2e-68ebcd9e4f05",
    "isFeatured": true
  },
  {
    "id": "1df72b03-46a1-4a32-b5e6-ed5894a6b973",
    "slug": "ring-1df72b",
    "name": "Ring",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Ring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/4bxt1RBOq78FjAS.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1df72b03-46a1-4a32-b5e6-ed5894a6b973",
    "isFeatured": true
  },
  {
    "id": "366dc8f8-13a4-473c-b17c-e192ea83a756",
    "slug": "ring-366dc8",
    "name": "Ring",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Ring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1xXFSai2I1L.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/366dc8f8-13a4-473c-b17c-e192ea83a756",
    "isFeatured": true
  },
  {
    "id": "3a3a5ace-61e7-43e1-ade5-d01af12ffc59",
    "slug": "ring-3a3a5a",
    "name": "Ring",
    "category": "RINGS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "It's a excellent quality free size (adjustable ring) finger ring.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/kbxt1hVfaONOw1S.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3a3a5ace-61e7-43e1-ade5-d01af12ffc59",
    "isFeatured": true
  },
  {
    "id": "590ee91a-4995-4037-b92f-d1280068b408",
    "slug": "ring-590ee9",
    "name": "Ring",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Ring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/4bxt1hy558JEfJm.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/590ee91a-4995-4037-b92f-d1280068b408",
    "isFeatured": true
  },
  {
    "id": "bacbcb60-39c2-419d-a533-23659e298824",
    "slug": "ring-bacbcb",
    "name": "Ring",
    "category": "RINGS",
    "price": 199,
    "mrp": 220,
    "discount": 9,
    "description": "Ring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/abxt1BZyFVDes0Y.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/bacbcb60-39c2-419d-a533-23659e298824",
    "isFeatured": true
  },
  {
    "id": "dde694ec-0567-44e6-895b-1071c8101d34",
    "slug": "ring-dde694",
    "name": "Ring",
    "category": "RINGS",
    "price": 199,
    "mrp": 220,
    "discount": 9,
    "description": "It's a excellent quality free size (adjustable ring) finger ring.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1x9nym2q$aS.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/dde694ec-0567-44e6-895b-1071c8101d34",
    "isFeatured": true
  },
  {
    "id": "e96beab8-8326-495b-b3f2-b61271b58ab9",
    "slug": "ring-e96bea",
    "name": "Ring",
    "category": "RINGS",
    "price": 215,
    "mrp": 215,
    "discount": 0,
    "description": "Ring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Jbxt1hJ3Fg-rij6.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e96beab8-8326-495b-b3f2-b61271b58ab9",
    "isFeatured": true
  },
  {
    "id": "d24f73a2-4f9f-4a87-9fa3-f22068bb11a8",
    "slug": "ring-r11-d24f73",
    "name": "Ring - R11",
    "category": "RINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Ring - R11",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/9bxt1xg1VMyALlx.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d24f73a2-4f9f-4a87-9fa3-f22068bb11a8",
    "isFeatured": true
  },
  {
    "id": "5a38c70c-78a0-4349-8fe6-f9fd3e356931",
    "slug": "ring-r14-5a38c7",
    "name": "Ring - R14",
    "category": "RINGS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Anti-tarnish &amp; long-lasting Water &amp; sweat resistant 💧 Hypoallergenic (safe for sensitive skin) Lightweight &amp; comfortable Perfect for daily wear",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/lbxt1R9ZFE6b6$z.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5a38c70c-78a0-4349-8fe6-f9fd3e356931",
    "isFeatured": true
  },
  {
    "id": "1058adad-bc84-4c24-ad0d-66ccace5295d",
    "slug": "ring-r1-1058ad",
    "name": "Ring R1",
    "category": "RINGS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Anti tarnished Ring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/xbxt1hcvvrfbz0r.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1058adad-bc84-4c24-ad0d-66ccace5295d",
    "isFeatured": true
  },
  {
    "id": "4332786d-075a-47d7-8aa5-ea17ade22870",
    "slug": "ring-r2-433278",
    "name": "Ring R2",
    "category": "RINGS",
    "price": 199,
    "mrp": 220,
    "discount": 9,
    "description": "It's a excellent quality free size (adjustable ring) finger ring.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ubxt1xDaGfWiX$S.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4332786d-075a-47d7-8aa5-ea17ade22870",
    "isFeatured": true
  },
  {
    "id": "52f35dc1-ec55-4488-af56-f6e19685bdf6",
    "slug": "rose-ball-back-stud-52f35d",
    "name": "Rose Ball Back Stud",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/bbxt1hDTnJTmbHm.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/52f35dc1-ec55-4488-af56-f6e19685bdf6",
    "isFeatured": false
  },
  {
    "id": "1e167ab4-5b3d-459b-8442-f68c0cd42efc",
    "slug": "rose-charm-neckchain-1e167a",
    "name": "Rose Charm Neckchain",
    "category": "CHAINS",
    "price": 239,
    "mrp": 260,
    "discount": 8,
    "description": "Stainless Steel anti tarnished Chain.",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1x5ZGuzDur5.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1e167ab4-5b3d-459b-8442-f68c0cd42efc",
    "isFeatured": false
  },
  {
    "id": "7d34c600-cfad-4b48-bec8-799155aaec66",
    "slug": "rose-gold-butterfly-chain-c9-7d34c6",
    "name": "Rose gold butterfly Chain C9",
    "category": "CHAINS",
    "price": 199,
    "mrp": 220,
    "discount": 9,
    "description": "Rose gold butterfly Chain",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Rose Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/6bxt1xys3T1tcDh.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7d34c600-cfad-4b48-bec8-799155aaec66",
    "isFeatured": false
  },
  {
    "id": "3b1277a4-dd50-415e-8955-488a3c96c24f",
    "slug": "rose-gold-neck-chain-c8-3b1277",
    "name": "Rose gold neck chain C8",
    "category": "CHAINS",
    "price": 199,
    "mrp": 240,
    "discount": 17,
    "description": "Anti tarnished Stainless Steel Rose gold neck chain",
    "material": "Stainless Steel",
    "colour": "Rose Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/gbxt1xuz6N5d-yI.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3b1277a4-dd50-415e-8955-488a3c96c24f",
    "isFeatured": false
  },
  {
    "id": "b9e237bd-f639-4fd5-9387-c5667b92d455",
    "slug": "rose-gold-watch-kada-b28-b9e237",
    "name": "Rose Gold Watch Kada B28",
    "category": "BRACELETS",
    "price": 299,
    "mrp": 299,
    "discount": 0,
    "description": "Stainless Steel",
    "material": "Stainless Steel",
    "colour": "Rose Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/jbxt1BWzA8td-re.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b9e237bd-f639-4fd5-9387-c5667b92d455",
    "isFeatured": false
  },
  {
    "id": "89df7c4f-83fc-48b9-b0f8-2b6e3c79c0bd",
    "slug": "second-srud-ss2-89df7c",
    "name": "Second Srud - SS2",
    "category": "EARRINGS",
    "price": 219,
    "mrp": 219,
    "discount": 0,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1hatm882TSt.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/89df7c4f-83fc-48b9-b0f8-2b6e3c79c0bd",
    "isFeatured": false
  },
  {
    "id": "597912f5-24c5-4b25-930b-b59dd6c0e24f",
    "slug": "second-stud-ss2-597912",
    "name": "Second stud - SS2",
    "category": "EARRINGS",
    "price": 249,
    "mrp": 399,
    "discount": 37,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Cbxt1hswzHoLIBd.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/597912f5-24c5-4b25-930b-b59dd6c0e24f",
    "isFeatured": false
  },
  {
    "id": "f26df913-cb27-4af9-837e-3f86a75de1e0",
    "slug": "second-stud-ss2-f26df9",
    "name": "Second Stud - SS2",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 219,
    "discount": 9,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Jbxt1BJ65vLW4sh.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f26df913-cb27-4af9-837e-3f86a75de1e0",
    "isFeatured": false
  },
  {
    "id": "8080388e-3598-4842-aa77-ff8ca6e0b1f5",
    "slug": "second-stud-pair-808038",
    "name": "Second stud pair",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 Surgical Steel Collection",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/cbxt1RRuoSWAFBn.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8080388e-3598-4842-aa77-ff8ca6e0b1f5",
    "isFeatured": false
  },
  {
    "id": "8b0d01e1-00a7-47dd-9ddd-d3220491fdab",
    "slug": "second-stud-pair-8b0d01",
    "name": "Second stud pair",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 Surgical Steel Collection",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ebxt1Rmg-GhKOVl.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8b0d01e1-00a7-47dd-9ddd-d3220491fdab",
    "isFeatured": false
  },
  {
    "id": "b182ac34-c0f2-4c08-a427-64578c74f3ca",
    "slug": "second-stud-pair-b182ac",
    "name": "Second stud pair",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 Surgical Steel Collection",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/rbxt1hlJaqfNDfq.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b182ac34-c0f2-4c08-a427-64578c74f3ca",
    "isFeatured": false
  },
  {
    "id": "b2e23dc6-97e7-490a-a5b6-d31a114299b4",
    "slug": "second-stud-pair-b2e23d",
    "name": "Second stud pair",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 Surgical Steel Collection",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/4bxt1BerSTpZ3vz.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b2e23dc6-97e7-490a-a5b6-d31a114299b4",
    "isFeatured": false
  },
  {
    "id": "f41db7d9-9e57-4bc6-914e-edbf8fd5ff04",
    "slug": "second-stud-pair-f41db7",
    "name": "Second Stud pair",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 Surgical Steel Collection",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1ByVY1rjXha.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f41db7d9-9e57-4bc6-914e-edbf8fd5ff04",
    "isFeatured": false
  },
  {
    "id": "38fdac0c-ed65-4bef-9f97-f59743c8eb70",
    "slug": "silver-bracelet-38fdac",
    "name": "Silver bracelet",
    "category": "BRACELETS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Stainless steel bracelet.",
    "material": "Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1RsxpEB9PW3.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/38fdac0c-ed65-4bef-9f97-f59743c8eb70",
    "isFeatured": false
  },
  {
    "id": "4448215c-f6e0-4dc5-8923-a5e1f246deb9",
    "slug": "silver-earrings-k14-444821",
    "name": "Silver earrings K14",
    "category": "RINGS",
    "price": 59,
    "mrp": 80,
    "discount": 26,
    "description": "Silver earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/6bxt1Rne9D0mcw1.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4448215c-f6e0-4dc5-8923-a5e1f246deb9",
    "isFeatured": true
  },
  {
    "id": "c248d102-3c27-4ae6-9319-e46cfa4aca16",
    "slug": "silver-earrings-k15-c248d1",
    "name": "Silver earrings K15",
    "category": "RINGS",
    "price": 59,
    "mrp": 99,
    "discount": 40,
    "description": "Silver earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/abxt1heDM9beTlt.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/c248d102-3c27-4ae6-9319-e46cfa4aca16",
    "isFeatured": true
  },
  {
    "id": "db94f933-46fa-4aa4-bdad-2b810378eb59",
    "slug": "silver-hoops-e2-db94f9",
    "name": "Silver hoops E2",
    "category": "RINGS",
    "price": 99,
    "mrp": 99,
    "discount": 0,
    "description": "Silver hoops",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Abxt1xARiAInyrg.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/db94f933-46fa-4aa4-bdad-2b810378eb59",
    "isFeatured": true
  },
  {
    "id": "857268ef-2ca6-45a5-a928-33da3ef57f92",
    "slug": "silver-hoops-e4-857268",
    "name": "Silver hoops E4",
    "category": "RINGS",
    "price": 99,
    "mrp": 120,
    "discount": 17,
    "description": "Silver hoops",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Platinum Silver",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ebxt1RTuruXsfq2.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/857268ef-2ca6-45a5-a928-33da3ef57f92",
    "isFeatured": true
  },
  {
    "id": "90e6e4b1-59cf-47c4-9373-740383b330ef",
    "slug": "snake-chain-c33-90e6e4",
    "name": "Snake Chain C33",
    "category": "CHAINS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel. 18k Gold Colour Plated.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/hbxt1BGae6Q8nac.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/90e6e4b1-59cf-47c4-9373-740383b330ef",
    "isFeatured": false
  },
  {
    "id": "5194903d-68dc-442a-8e01-231cc4364310",
    "slug": "solitaire-pendant-neckchain-c50-519490",
    "name": "Solitaire Pendant Neckchain C50",
    "category": "CHAINS",
    "price": 180,
    "mrp": 199,
    "discount": 9,
    "description": "Anti-tarnish &amp; long-lasting Water &amp; sweat resistant 💧 Hypoallergenic (safe for sensitive skin) Lightweight &amp; comfortable Perfect for daily wear",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/hbxt1Rp0DNNhNaf.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5194903d-68dc-442a-8e01-231cc4364310",
    "isFeatured": false
  },
  {
    "id": "439bc2f1-6018-4b00-b536-4d559aee88c2",
    "slug": "stainless-steel-bow-chain-c13-439bc2",
    "name": "Stainless steel Bow Chain C13",
    "category": "CHAINS",
    "price": 220,
    "mrp": 299,
    "discount": 26,
    "description": "Stainless steel Chain",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/cbxt1Rxc94MP6rU.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/439bc2f1-6018-4b00-b536-4d559aee88c2",
    "isFeatured": false
  },
  {
    "id": "7c27ed66-1b86-4d24-ac9b-5e72f9ef0268",
    "slug": "stainless-steel-chain-c4-7c27ed",
    "name": "Stainless steel chain C4",
    "category": "CHAINS",
    "price": 220,
    "mrp": 250,
    "discount": 12,
    "description": "Stainless steel chain",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Sbxt1hpo0aMIXzE.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/7c27ed66-1b86-4d24-ac9b-5e72f9ef0268",
    "isFeatured": false
  },
  {
    "id": "347ab267-46fa-4877-9f0b-832f05531a7f",
    "slug": "stainless-steel-hoops-e19-347ab2",
    "name": "Stainless Steel hoops - E19",
    "category": "RINGS",
    "price": 89,
    "mrp": 89,
    "discount": 0,
    "description": "Stainless Steel hoops - E19",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ibxt1RsRdFNvn8V.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/347ab267-46fa-4877-9f0b-832f05531a7f",
    "isFeatured": true
  },
  {
    "id": "a3249edd-1c38-4d36-84ba-16088891287d",
    "slug": "stainless-steel-hoops-e19-a3249e",
    "name": "Stainless steel Hoops E19",
    "category": "RINGS",
    "price": 89,
    "mrp": 89,
    "discount": 0,
    "description": "Stainless steel Hoops E19",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Mbxt1x8KraKISQa.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/a3249edd-1c38-4d36-84ba-16088891287d",
    "isFeatured": true
  },
  {
    "id": "0cda5855-1cd0-4ae3-a5a3-951e413b9e0c",
    "slug": "star-hoops-e37-0cda58",
    "name": "Star Hoops - E37",
    "category": "RINGS",
    "price": 189,
    "mrp": 189,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy and copper metals studded with CZ stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/lbxt1RXZmt3F5OZ.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0cda5855-1cd0-4ae3-a5a3-951e413b9e0c",
    "isFeatured": true
  },
  {
    "id": "00bae3c8-1e5f-4e00-b395-e1300173a885",
    "slug": "star-moon-neckchain-c51-00bae3",
    "name": "Star moon Neckchain - C51",
    "category": "CHAINS",
    "price": 209,
    "mrp": 209,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1xazy$jmggd.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/00bae3c8-1e5f-4e00-b395-e1300173a885",
    "isFeatured": false
  },
  {
    "id": "8506374b-194f-4095-95a2-17dc7a68b3ca",
    "slug": "star-neckchain-chain-c45-850637",
    "name": "Star Neckchain Chain - C45",
    "category": "CHAINS",
    "price": 239,
    "mrp": 260,
    "discount": 8,
    "description": "Anti Tarnished, Waterproof. 316L Grade Stainless Steel.",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/abxt1B00ySouQ7z.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/8506374b-194f-4095-95a2-17dc7a68b3ca",
    "isFeatured": false
  },
  {
    "id": "514d5db6-7346-40d0-8050-1d205be0591a",
    "slug": "stretchable-anti-tarnished-watch-514d5d",
    "name": "Stretchable Anti tarnished Watch",
    "category": "RINGS",
    "price": 499,
    "mrp": 599,
    "discount": 16,
    "description": "Anti tarnished Watch. Waterproof. Hypoallergenic.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ubxt1xOb--lg7gS.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/514d5db6-7346-40d0-8050-1d205be0591a",
    "isFeatured": true
  },
  {
    "id": "345c23c2-289b-4cb0-bc92-231c8a906dd6",
    "slug": "swan-earring-e5-345c23",
    "name": "Swan earring E5",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Swan earring",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Mbxt1hojFOXWKo6.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/345c23c2-289b-4cb0-bc92-231c8a906dd6",
    "isFeatured": true
  },
  {
    "id": "eee9d14d-ec13-4016-a9b2-e9c86753a6c3",
    "slug": "swan-earring-e5-eee9d1",
    "name": "Swan Earring E5",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Swan",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Bbxt1hx8kBYn23J.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/eee9d14d-ec13-4016-a9b2-e9c86753a6c3",
    "isFeatured": true
  },
  {
    "id": "ea2c6d7c-a9d5-4c57-a1d4-fc2e462d7eaa",
    "slug": "swan-earrings-e4-ea2c6d",
    "name": "Swan earrings E4",
    "category": "RINGS",
    "price": 99,
    "mrp": 110,
    "discount": 10,
    "description": "Swan earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/dbxt1RyGRvk$kun.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/ea2c6d7c-a9d5-4c57-a1d4-fc2e462d7eaa",
    "isFeatured": true
  },
  {
    "id": "439ae5ea-231a-452a-be06-850505a8d89e",
    "slug": "swan-earrings-e5-439ae5",
    "name": "Swan earrings E5",
    "category": "RINGS",
    "price": 99,
    "mrp": 120,
    "discount": 17,
    "description": "Swan earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1B5ChI$PQQO.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/439ae5ea-231a-452a-be06-850505a8d89e",
    "isFeatured": true
  },
  {
    "id": "91ba77ce-4bdc-4345-8038-d07b41e5e035",
    "slug": "swan-earrings-e5-91ba77",
    "name": "Swan earrings E5",
    "category": "RINGS",
    "price": 119,
    "mrp": 119,
    "discount": 0,
    "description": "Swan earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/rbxt1RDgLQ7zNru.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/91ba77ce-4bdc-4345-8038-d07b41e5e035",
    "isFeatured": true
  },
  {
    "id": "d831e671-1114-4e24-a5f9-b9a0de2b3914",
    "slug": "swan-earrings-e5-d831e6",
    "name": "Swan earrings E5",
    "category": "RINGS",
    "price": 120,
    "mrp": 120,
    "discount": 0,
    "description": "Swan earrings",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Ibxt1RpzDzdw9Sc.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d831e671-1114-4e24-a5f9-b9a0de2b3914",
    "isFeatured": true
  },
  {
    "id": "4c6cbb29-1db8-4b41-bcde-90c7a9618534",
    "slug": "teddy-neckchain-c48-4c6cbb",
    "name": "Teddy Neckchain - C48",
    "category": "CHAINS",
    "price": 279,
    "mrp": 279,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/fbxt1Ryd0ZAjnHt.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/4c6cbb29-1db8-4b41-bcde-90c7a9618534",
    "isFeatured": false
  },
  {
    "id": "9cc7b9c1-1b8b-4785-96d9-c9015ef76537",
    "slug": "trendy-ball-back-stud-p2-9cc7b9",
    "name": "Trendy Ball Back Stud - P2",
    "category": "EARRINGS",
    "price": 160,
    "mrp": 199,
    "discount": 19,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Xbxt1RhLoKi$izw.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9cc7b9c1-1b8b-4785-96d9-c9015ef76537",
    "isFeatured": false
  },
  {
    "id": "e13b5859-6c1c-4fba-8dc8-bf3a7751326c",
    "slug": "trendy-drops-neckchain-c73-e13b58",
    "name": "Trendy Drops Neckchain C73",
    "category": "CHAINS",
    "price": 209,
    "mrp": 230,
    "discount": 9,
    "description": "Anti tarnished chain Waterproof 18k gold plated",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Vbxt1hXDtAasRT5.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e13b5859-6c1c-4fba-8dc8-bf3a7751326c",
    "isFeatured": false
  },
  {
    "id": "38567da3-163e-4912-bf13-ccab4ed8e773",
    "slug": "trendy-ear-stud-p2-38567d",
    "name": "Trendy Ear Stud - P2",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Jbxt1xfLEzVpiSm.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/38567da3-163e-4912-bf13-ccab4ed8e773",
    "isFeatured": false
  },
  {
    "id": "9d646d47-f8d3-44cf-8874-2f86707c5b17",
    "slug": "trendy-ear-stud-p2-9d646d",
    "name": "Trendy Ear Stud - P2",
    "category": "EARRINGS",
    "price": 180,
    "mrp": 199,
    "discount": 9,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/hbxt1Rn4$pCiH54.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/9d646d47-f8d3-44cf-8874-2f86707c5b17",
    "isFeatured": false
  },
  {
    "id": "e7eb8be6-f453-4c86-8619-55feb6697aff",
    "slug": "trendy-earrings-e18-e7eb8b",
    "name": "Trendy earrings - E18",
    "category": "RINGS",
    "price": 160,
    "mrp": 160,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/0bxt1h8I601br29.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e7eb8be6-f453-4c86-8619-55feb6697aff",
    "isFeatured": true
  },
  {
    "id": "6a28dcd3-666b-43ab-94b2-6fe7336039ae",
    "slug": "trendy-floral-stud-p2-6a28dc",
    "name": "Trendy Floral Stud - P2",
    "category": "EARRINGS",
    "price": 165,
    "mrp": 199,
    "discount": 17,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Dbxt1hz5JNJHX2n.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6a28dcd3-666b-43ab-94b2-6fe7336039ae",
    "isFeatured": false
  },
  {
    "id": "0d01467c-5bef-4c14-b894-4cc3925f31ab",
    "slug": "trendy-hoops-0d0146",
    "name": "Trendy hoops",
    "category": "RINGS",
    "price": 199,
    "mrp": 199,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Bbxt1xhYDVbbQiQ.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/0d01467c-5bef-4c14-b894-4cc3925f31ab",
    "isFeatured": true
  },
  {
    "id": "01c22878-0ab7-49e8-b9b8-e55546a457eb",
    "slug": "trendy-ring-r17-01c228",
    "name": "Trendy Ring - R17",
    "category": "RINGS",
    "price": 249,
    "mrp": 249,
    "discount": 0,
    "description": "Anti-tarnish &amp; long-lasting Water &amp; sweat resistant 💧 Hypoallergenic (safe for sensitive skin) Lightweight &amp; comfortable Perfect for daily wear",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/kbxt1RIFIAxsKED.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/01c22878-0ab7-49e8-b9b8-e55546a457eb",
    "isFeatured": true
  },
  {
    "id": "5857357e-a803-4fc0-b67a-53b3664bda6c",
    "slug": "trendy-stud-p2-585735",
    "name": "Trendy Stud - P2",
    "category": "EARRINGS",
    "price": 160,
    "mrp": 199,
    "discount": 19,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Hbxt1RN$tnzdphe.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/5857357e-a803-4fc0-b67a-53b3664bda6c",
    "isFeatured": false
  },
  {
    "id": "112149ff-859f-455e-8895-145707d8289a",
    "slug": "trendy-studs-ss2-112149",
    "name": "Trendy studs - SS2",
    "category": "EARRINGS",
    "price": 249,
    "mrp": 399,
    "discount": 37,
    "description": "Luxury look ✨ Everyday wear 💧 Non Tarnish 💛 316L Surgical Steel Collection / Ball Back screw",
    "material": "316L Surgical Steel (Waterproof)",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Pbxt1RrkOtTFm7v.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/112149ff-859f-455e-8895-145707d8289a",
    "isFeatured": false
  },
  {
    "id": "22fb01a3-670d-4fed-a5be-3e4c860fce0e",
    "slug": "trendy-tulip-bracelet-22fb01",
    "name": "Trendy Tulip Bracelet",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 399,
    "discount": 37,
    "description": "Trendy Tulip Bracelet",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/sbxt1RAFkgwRCs5.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/22fb01a3-670d-4fed-a5be-3e4c860fce0e",
    "isFeatured": true
  },
  {
    "id": "adfbcc53-3a4d-4e6a-b9c9-e01ed63accf9",
    "slug": "trendy-tulip-bracelet-multicolor-adfbcc",
    "name": "Trendy Tulip Bracelet Multicolor",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 399,
    "discount": 37,
    "description": "Trendy Tulip Bracelet Multicolor",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Multicolor",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/vbxt1xxM5-xZa5n.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/adfbcc53-3a4d-4e6a-b9c9-e01ed63accf9",
    "isFeatured": true
  },
  {
    "id": "b9f389d4-2cb2-4ac9-8c0c-2cb16fdf2abb",
    "slug": "triple-layer-bracelet-b66-b9f389",
    "name": "Triple Layer Bracelet -  B66",
    "category": "BRACELETS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Premium stainless steel jewellery ✨ * Anti-tarnish &amp; long-lasting * Water-resistant * Hypoallergenic &amp; skin-friendly * Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ebxt1BjEnteu9Et.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b9f389d4-2cb2-4ac9-8c0c-2cb16fdf2abb",
    "isFeatured": false
  },
  {
    "id": "3f486e7b-1898-47bc-955d-a067253bdfcc",
    "slug": "tulip-adjustable-neckchain-3f486e",
    "name": "Tulip Adjustable Neckchain",
    "category": "CHAINS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Qbxt1R4CJhELRJD.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3f486e7b-1898-47bc-955d-a067253bdfcc",
    "isFeatured": true
  },
  {
    "id": "fccfb66a-571e-4119-9bb4-6f20666de815",
    "slug": "tulip-adjustable-neckchain-fccfb6",
    "name": "Tulip Adjustable Neckchain",
    "category": "CHAINS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Zbxt1R0SpBthjrF.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/fccfb66a-571e-4119-9bb4-6f20666de815",
    "isFeatured": true
  },
  {
    "id": "b4362cbd-6619-4878-9f79-e4626be4dd61",
    "slug": "tulip-ball-back-ear-stud-b4362c",
    "name": "Tulip Ball Back Ear Stud",
    "category": "EARRINGS",
    "price": 199,
    "mrp": 249,
    "discount": 20,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/xbxt1BmL90ziOXo.jpg"
    ],
    "modelKey": "earring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b4362cbd-6619-4878-9f79-e4626be4dd61",
    "isFeatured": true
  },
  {
    "id": "d91a7669-dab7-442e-89ac-f2da3c649be8",
    "slug": "tulip-earrings-e15-d91a76",
    "name": "Tulip earrings - E15",
    "category": "RINGS",
    "price": 130,
    "mrp": 130,
    "discount": 0,
    "description": "CZ earrings is crafted from a High Quality brass alloy metals,studded with CZ stones , Mother pearl &amp; other stones. To maintain your imitation jewelry, avoid exposure to water, perfumes, and lotions.&nbsp;",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/ibxt1hCnKx6NoBX.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/d91a7669-dab7-442e-89ac-f2da3c649be8",
    "isFeatured": true
  },
  {
    "id": "b05e38e0-0e85-43f6-85f8-5a83212c2b01",
    "slug": "tulip-neckchain-c60-b05e38",
    "name": "Tulip Neckchain - C60",
    "category": "CHAINS",
    "price": 220,
    "mrp": 220,
    "discount": 0,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Hbxt1B889CMy0Ve.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b05e38e0-0e85-43f6-85f8-5a83212c2b01",
    "isFeatured": true
  },
  {
    "id": "3ff1d247-fbdd-4270-aa63-9735e8efc52c",
    "slug": "unisex-neck-chain-3ff1d2",
    "name": "Unisex Neck Chain",
    "category": "CHAINS",
    "price": 199,
    "mrp": 240,
    "discount": 17,
    "description": "Premium stainless steel jewellery ✨ • Anti-tarnish &amp; long-lasting • Water-resistant • Hypoallergenic &amp; skin-friendly • Perfect for everyday wear",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1hsnOrtLqiM.jpg"
    ],
    "modelKey": "chain01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/3ff1d247-fbdd-4270-aa63-9735e8efc52c",
    "isFeatured": false
  },
  {
    "id": "50700d9e-eb76-4460-abf8-046f9e588b25",
    "slug": "watch-bracelet-b12-50700d",
    "name": "Watch bracelet B12",
    "category": "BRACELETS",
    "price": 499,
    "mrp": 499,
    "discount": 0,
    "description": "Anti tarnished Stainless Steel Watch bracelet",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Lbxt1BULsmESdIV.jpg"
    ],
    "modelKey": "bracelet01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/50700d9e-eb76-4460-abf8-046f9e588b25",
    "isFeatured": false
  },
  {
    "id": "1ff00e60-1c6b-4cea-b013-3791e90bba3e",
    "slug": "watch-bracelet-b13-1ff00e",
    "name": "Watch bracelet B13",
    "category": "RINGS",
    "price": 399,
    "mrp": 499,
    "discount": 20,
    "description": "Anti tarnished Stainless Steel Watch bracelet",
    "material": "Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Hbxt1xaBJXpK9Ch.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/1ff00e60-1c6b-4cea-b013-3791e90bba3e",
    "isFeatured": true
  },
  {
    "id": "f3fcd825-befc-4893-965f-70deaa2cf481",
    "slug": "xuping-hoops-e24-f3fcd8",
    "name": "Xuping Hoops - E24",
    "category": "RINGS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Elevate your everyday style with this versatile, high-quality Xuping Hoop.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/6bxt1RzVftmUFtX.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/f3fcd825-befc-4893-965f-70deaa2cf481",
    "isFeatured": true
  },
  {
    "id": "b80d93c9-f612-4888-ae41-feb78a0e6aac",
    "slug": "xuping-hoops-e25-b80d93",
    "name": "Xuping Hoops - E25",
    "category": "RINGS",
    "price": 249,
    "mrp": 299,
    "discount": 16,
    "description": "Elevate your everyday style with this versatile, high-quality Xuping Hoop.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/1bxt1h5CEypDEUz.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/b80d93c9-f612-4888-ae41-feb78a0e6aac",
    "isFeatured": true
  },
  {
    "id": "6b9d2f0e-a36c-4402-a32c-7222d5ab46cd",
    "slug": "xuping-hoops-e26-6b9d2f",
    "name": "Xuping Hoops - E26",
    "category": "RINGS",
    "price": 235,
    "mrp": 299,
    "discount": 21,
    "description": "Elevate your everyday style with this versatile, high-quality Xuping Hoop.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/tbxt1hTRVIzrI6t.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/6b9d2f0e-a36c-4402-a32c-7222d5ab46cd",
    "isFeatured": true
  },
  {
    "id": "de9a2610-36a7-4a73-a50d-2d826f3af90a",
    "slug": "xuping-hoops-e30-de9a26",
    "name": "Xuping Hoops - E30",
    "category": "RINGS",
    "price": 229,
    "mrp": 260,
    "discount": 11,
    "description": "Elevate your everyday style with this versatile, high-quality Xuping Hoop.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/dbxt1hNvPhxiJUw.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/de9a2610-36a7-4a73-a50d-2d826f3af90a",
    "isFeatured": true
  },
  {
    "id": "e22cc3b7-1f32-4b17-bec7-113654530841",
    "slug": "xuping-mini-hoops-e29-e22cc3",
    "name": "Xuping Mini Hoops - E29",
    "category": "RINGS",
    "price": 229,
    "mrp": 270,
    "discount": 15,
    "description": "Elevate your everyday style with this versatile, high-quality Xuping Hoop.",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Warm Champagne Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/9bxt1xAtHrlLIMw.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/e22cc3b7-1f32-4b17-bec7-113654530841",
    "isFeatured": true
  },
  {
    "id": "58d547dd-b30e-49e3-af08-87c88fdb836f",
    "slug": "xuping-rose-gold-hoops-k28-58d547",
    "name": "Xuping Rose Gold Hoops K28",
    "category": "RINGS",
    "price": 199,
    "mrp": 240,
    "discount": 17,
    "description": "Xuping Rose Gold Hoops",
    "material": "Anti-Tarnish Stainless Steel",
    "colour": "Rose Gold",
    "wear": "Daily & Occasion Wear",
    "delivery": "3–5 Business Days",
    "images": [
      "https://m.media-amazon.com/images/X/bxt1/M/Vbxt1R3mYm8a-dW.jpg"
    ],
    "modelKey": "ring01",
    "sourceUrl": "https://meeshinejewels.smartbiz.in/product/58d547dd-b30e-49e3-af08-87c88fdb836f",
    "isFeatured": true
  }
];

export const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.isFeatured).slice(0, 12);

export const SELECTOR_PRODUCTS: Record<string, Product> = {
  ring01: PRODUCTS.find(p => p.category === 'RINGS') || PRODUCTS[0],
  bracelet01: PRODUCTS.find(p => p.name.includes('B45') || (p.category === 'BRACELETS' && p.modelKey === 'bracelet01')) || PRODUCTS[1],
  chain01: PRODUCTS.find(p => p.name.includes('C10') || p.category === 'CHAINS') || PRODUCTS[2],
  earring01: PRODUCTS.find(p => p.name.includes('K4') || p.category === 'EARRINGS') || PRODUCTS[3],
  anklet01: PRODUCTS.find(p => p.category === 'ANKLETS') || PRODUCTS[4]
};
