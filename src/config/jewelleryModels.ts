// Jewellery 3D Model Configuration
// Allows dynamic model swapping without rewriting animation logic

export interface JewelleryModelConfig {
  type: string;
  name: string;
  src: string;
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  // Optional offset so the piece turns/sways around its focal point (e.g. a pendant) instead of its centre
  pivot?: [number, number, number];
  cameraPosition: [number, number, number];
  materialPreset: "champagneGold" | "roseGold" | "platinumSilver";
  calloutTarget?: [number, number, number];
  chapterRotations?: {
    hero: [number, number, number];
    antiTarnish: [number, number, number];
    detail: [number, number, number];
    collection: [number, number, number];
  };
}

export type ModelKey = "ring01" | "bracelet01" | "chain01" | "earring01";

export const jewelleryModels: Record<ModelKey, JewelleryModelConfig> = {
  ring01: {
    type: "ring",
    name: "Anti-Tarnish Solitaire Gold Ring",
    src: `${import.meta.env.BASE_URL}models/ring.glb`,
    scale: 0.85,
    position: [0, -0.1, 0],
    // Design (leaf + teardrop) sits on top (+Y) of the model; tip it toward the camera so it faces front
    // (Y turns the band so leaf and teardrop sit side by side on screen)
    rotation: [1.1, 1.571, 0],
    cameraPosition: [0, 0, 4.8],
    materialPreset: "champagneGold",
    calloutTarget: [0, 1.25, 0],
    chapterRotations: {
      hero: [1.1, 1.571, 0],
      antiTarnish: [0.15, 1.2, 0.1],
      detail: [-0.1, 2.4, 0.2],
      collection: [0.2, 0.5, 0]
    }
  },

  bracelet01: {
    type: "bracelet",
    name: "Premium Kada Bracelet â€” B45",
    src: `${import.meta.env.BASE_URL}models/bracelet.glb`,
    scale: 0.85,
    position: [0, 0.1, 0],
    // Model lies flat (XZ plane) with stones at front; tilt toward camera
    rotation: [0.85, 0, 0],
    cameraPosition: [0, 0, 5.2],
    materialPreset: "champagneGold",
    calloutTarget: [0, 0, 1.2],
    chapterRotations: {
      hero: [0.85, 0, 0],
      antiTarnish: [0.2, 1.1, 0],
      detail: [-0.2, 2.2, 0.1],
      collection: [0.1, 0.6, 0]
    }
  },

  chain01: {
    type: "chain",
    name: "Rose Gold Pendant Chain â€” C10",
    src: `${import.meta.env.BASE_URL}models/chain.glb`,
    // Necklace is modelled lying flat and long, so stand it up, zoom in on the
    // heart pendant and pivot around it; the chain rises off-screen
    scale: 2.8,
    position: [0, -0.6, 0],
    pivot: [0, 1.073, 0],
    rotation: [1.571, 0, 0],
    cameraPosition: [0, 0, 5.0],
    materialPreset: "champagneGold",
    calloutTarget: [0, -1.35, 0],
    chapterRotations: {
      hero: [1.571, 0, 0],
      antiTarnish: [0.2, 0.8, 0],
      detail: [0, 1.8, 0.1],
      collection: [0.1, 0.4, 0]
    }
  },

  earring01: {
    type: "earring",
    name: "Premium Butterfly Drop Earring â€” K4",
    src: `${import.meta.env.BASE_URL}models/earring.glb`,
    scale: 0.9,
    position: [0, 0, 0],
    // Pair of studs already faces +Z (posts point back); just a slight tilt
    rotation: [0.1, 0, 0],
    cameraPosition: [0, 0, 4.6],
    materialPreset: "champagneGold",
    calloutTarget: [0, -1.2, 0],
    chapterRotations: {
      hero: [0.1, 0, 0],
      antiTarnish: [0.2, 1.3, 0],
      detail: [-0.1, 2.5, 0.1],
      collection: [0.15, 0.5, 0]
    }
  }
};
