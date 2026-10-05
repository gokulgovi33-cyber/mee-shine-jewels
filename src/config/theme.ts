// Brand Design Tokens & Palette for Mee Shine Jewels
// Haute Joaillerie Light Luxury: Ivory Alabaster & Burnished Champagne Gold

export const theme = {
  black: "#111111",
  blackSoft: "#1A1A1A",
  blackElevated: "#2D2D2D",

  white: "#FFFFFF",
  whiteSoft: "#FAF9F6",
  whiteMuted: "#F4F1EA",

  textPrimary: "#111111",
  textSecondary: "#3D3B38",
  textMuted: "#716D66",

  gold: "#C9A55C",
  goldRich: "#9E7B34",
  goldDark: "#7C5D1F",
  goldLight: "#E7CF91",

  border: "#E8E4DC",
  borderGold: "rgba(182, 141, 64, 0.25)",

  // Three.js material presets
  materials: {
    champagneGold: {
      color: "#C9A55C",
      metalness: 0.98,
      roughness: 0.18,
      envMapIntensity: 1.4
    },
    roseGold: {
      color: "#D99B85",
      metalness: 0.96,
      roughness: 0.18,
      envMapIntensity: 1.4
    },
    platinumSilver: {
      color: "#E5E7EB",
      metalness: 0.98,
      roughness: 0.14,
      envMapIntensity: 1.5
    }
  }
} as const;

export type ThemeType = typeof theme;
