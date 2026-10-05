# Mee Shine Jewels — Immersive 3D Luxury Jewellery Experience

> Bespoke WebGL e-commerce experience inspired by high-fashion editorial digital storytelling and cinematic product interactions.

---

## 00. Overview & Architecture

**Mee Shine Jewels** is a production-grade 3D jewellery commerce website created with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, **Three.js / React Three Fiber**, and **GSAP ScrollTrigger**.

The project delivers an immersive, product-first WebGL journey without generic e-commerce templates:
- **Central 3D Jewellery Hero**: Normalised, photorealistic PBR metallic champagne gold jewellery with dynamic studio lighting and specular highlights.
- **Continuous Scroll Choreography**: Seamless transitions across 5 distinct chapters (Hero, Anti-Tarnish Story, Craft & Macro Detail, Interactive Product Selector, Full Storefront Collection).
- **Interactive Drag with Inertia**: Fluid pointer rotation on desktop and touch devices, damping, and automatic return to a 2.6°/s gentle idle rotation.
- **BrewDistrict-Inspired Product Selector**: Numbered selector (`01 RING`, `02 BRACELET`, `03 CHAIN`, `04 EARRING`) driving real-time 650ms model crossfading, attribute updates, and INR pricing.
- **629 Authentic Catalogue Pieces**: Ingested directly from Mee Shine Jewels live catalogue with verified Indian Rupee (`₹`) pricing, MRP strike-throughs, real discounts, and CloudFront imagery.
- **Full Commerce Engine**:
  - Category filters (Rings, Bracelets, Chains, Earrings, Anklets, Bangles, Necklaces).
  - Sorting (Featured, Price Low-to-High, Price High-to-Low, Highest Discount).
  - Full-screen product inspection modal with technical specifications.
  - Persistent shopping bag (`localStorage`) with quantity controls and free shipping progress.
  - Authentic WhatsApp checkout messaging directly connecting customers to the Mee Shine atelier in Chennai, Tamil Nadu.
  - Full-screen instant search overlay with live filtering.
  - Desktop custom cursor with interactive `DRAG` and `MOVE` contextual labels.
  - Development model switcher (`import.meta.env.DEV`) for rapid 3D testing.

---

## 01. Directory Structure

```
mee-shine-jewels/
├── public/
│   ├── models/
│   │   ├── ring.glb          # Solitaire anti-tarnish gold ring
│   │   ├── bracelet.glb      # Premium kada cuff bracelet
│   │   ├── chain.glb         # Teardrop pendant gold chain
│   │   └── earring.glb       # Chandelier drop earring
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Loader.tsx             # 00-100% asset loader with rotating gold ring
│   │   ├── CustomCursor.tsx       # Desktop custom cursor (DRAG/MOVE badges)
│   │   ├── Navigation.tsx         # Fixed luxury glassmorphic navbar
│   │   ├── MobileMenu.tsx         # Full-screen editorial mobile navigation
│   │   ├── JewelleryCanvas.tsx    # Fixed WebGL canvas, inertia & drag handlers
│   │   ├── JewelleryModel.tsx     # Bounding-box normalization & PBR shaders
│   │   ├── ModelStage.tsx         # 650ms crossfade between models
│   │   ├── JewelleryLightRig.tsx  # Dynamic key, rim, and metallic sweep light
│   │   ├── CameraRig.tsx          # Smooth lerp camera choreography
│   │   ├── Hero.tsx               # Editorial headline & asymmetrical copy layout
│   │   ├── StoryChapter.tsx       # Chapters 1 & 2 (Anti-tarnish, macro craft)
│   │   ├── ProductSelector.tsx    # 01-04 Numbered piece switcher
│   │   ├── ProductGrid.tsx        # 4-col desktop / 2-col mobile storefront
│   │   ├── ProductCard.tsx        # Card with 900ms ADDED feedback
│   │   ├── ProductDetail.tsx      # Full-screen modal with verified specs
│   │   ├── CartDrawer.tsx         # Slide-out bag with WhatsApp checkout generator
│   │   ├── SearchOverlay.tsx      # Full-screen instant search overlay
│   │   ├── FeaturedSlider.tsx     # Horizontal editorial track with snap drag
│   │   ├── BrandStory.tsx         # Atelier story & floating watermark motif
│   │   ├── Marquee.tsx            # Subtle 0.18 opacity outline marquee
│   │   ├── Newsletter.tsx         # Gold line transition newsletter subscription
│   │   ├── ContactSection.tsx     # WhatsApp, phone, and Chennai location details
│   │   ├── Footer.tsx             # Large serif wordmark, links, policies
│   │   ├── ScrollProgress.tsx     # Desktop 01-05 vertical section tracker
│   │   ├── DevModelSwitcher.tsx   # Dev-only quick 3D model switcher
│   │   └── RevealText.tsx         # Masked line-by-line text reveals
│   ├── config/
│   │   ├── jewelleryModels.ts     # Replaceable 3D model registry & camera configs
│   │   ├── theme.ts               # Midnight black, champagne gold design tokens
│   │   ├── motion.ts              # Luxury easing curves & durations
│   │   └── content.ts             # Centralised editorial copywriting
│   ├── data/
│   │   └── products.ts            # 629 authentic live products with INR prices
│   ├── App.tsx                    # Root application choreography
│   ├── main.tsx                   # React 18 DOM mount
│   └── index.css                  # Custom luxury styling and Tailwind base
├── scripts/
│   ├── generate_models.cjs        # Procedural 3D model generator & exporter
│   └── build_products_ts.cjs      # Catalogue transformation script
├── index.html                     # HTML5 shell with Cormorant Garamond & Inter
├── tailwind.config.js             # Custom tokens and responsive breakpoints
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## 02. Getting Started & Commands

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation
```bash
# Navigate to the project directory
cd mee-shine-jewels

# Install dependencies (React 18, Three.js, R3F, GSAP, Tailwind CSS, Lucide)
npm install
```

### Development Server
```bash
# Start local development server with Hot Module Replacement (HMR)
npm run dev
```
The application will be accessible at: `http://localhost:5173/`

### Production Build & Validation
```bash
# Type check and build optimized static production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 03. How to Replace 3D Jewellery Models (Section 10 & 65)

The 3D engine is completely decoupled from individual model geometries. To replace or add a new jewellery piece:

1. **Place your `.glb` file** into the `public/models/` directory:
   ```
   public/models/my-new-necklace.glb
   ```
2. **Register the model** in `src/config/jewelleryModels.ts`:
   ```ts
   export const jewelleryModels: Record<string, JewelleryModelConfig> = {
     // ... existing models
     necklace01: {
       type: "necklace",
       name: "Celestial Diamond Pendant Necklace",
       src: "/models/my-new-necklace.glb",
       scale: 1.1,
       position: [0, 0, 0],
       rotation: [0.15, -0.2, 0],
       cameraPosition: [0, 0, 5.0],
       materialPreset: "champagneGold",
       chapterRotations: {
         hero: [0.15, -0.2, 0],
         antiTarnish: [0.1, 0.9, 0],
         detail: [-0.1, 2.1, 0.1],
         collection: [0.15, 0.4, 0]
       }
     }
   };
   ```
3. **Automatic Normalisation**:
   When loaded, `JewelleryModel.tsx` automatically calculates the model's bounding box, centers its geometry to `(0, 0, 0)`, and scales it into a normalised unit space before applying `config.scale`. This guarantees that replacing a ring with a bracelet or necklace will **never break layout or clipping**.

---

## 04. How to Update Products & Copy (Section 83 & 63)

### Updating Editorial Copy
All marketing headlines, subtitles, and contact numbers are consolidated in `src/config/content.ts`. Modify values there without editing component templates:
```ts
export const content = {
  brand: {
    phone: "+91 72002 34400",
    phoneRaw: "917200234400",
    city: "Chennai, Tamil Nadu",
    // ...
  },
  hero: {
    eyebrow: "ANTI-TARNISH COLLECTION",
    title: ["MADE TO OUTLAST", "THE MOMENT."],
    // ...
  }
};
```

### Ingesting Catalogue Data
Live store products are defined in `src/data/products.ts`. You can re-run the ingestion pipeline anytime:
```bash
node scripts/build_products_ts.cjs
```
This extracts items with verified prices, categories, and CloudFront images.

---

## 05. Deployment Instructions

### Static Web Hosting (Vercel, Netlify, Cloudflare Pages, AWS S3)
Because the site compiles to static HTML/JS/CSS with WebGL assets, it can be deployed to any modern CDN or static host:

1. **Build the production bundle**:
   ```bash
   npm run build
   ```
2. **Output directory**: Deploy the generated `dist/` directory.

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 06. Verified Acceptance Criteria

- [x] **Luxury Aesthetic**: Midnight black (`#050505`) with metallic champagne gold (`#C9A55C`, `#E7CF91`, `#FFF0BD`) and editorial serif typography.
- [x] **No Generic E-commerce Template**: Custom WebGL canvas hero, scroll choreography, and editorial layout.
- [x] **No Age Restriction / 18+ Barrier**: Direct entry through luxury loading experience.
- [x] **Replaceable 3D Models**: Dynamic model registry in `src/config/jewelleryModels.ts` with bounding box auto-normalization.
- [x] **Real Mee Shine Catalogue**: 629 products with accurate INR (`₹`) prices, real discounts, and CloudFront photography.
- [x] **Functional Cart & WhatsApp Order Flow**: Complete persistent cart drawer and encoded WhatsApp message generator connecting directly to Mee Shine Jewels in Chennai.
