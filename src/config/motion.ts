// Global Motion & Timing Philosophy
// Physical plausibility, purposeful easing, no random animation

export const motion = {
  ease: {
    luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
    cinematic: "cubic-bezier(0.76, 0, 0.24, 1)",
    standard: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    // GSAP compatible strings
    gsapLuxury: "power3.out",
    gsapCinematic: "power4.inOut"
  },
  duration: {
    fast: 0.3,
    medium: 0.5,
    normal: 0.7,
    slow: 1.0,
    cinematic: 1.4
  },
  stagger: {
    text: 0.08,
    cards: 0.05,
    drawer: 0.04
  }
} as const;
