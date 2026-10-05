// Marketing editorial copy for Mee Shine Jewels
// Clean, luxurious, fashion editorial tone without generic promotional buzzwords

export const content = {
  brand: {
    name: "Mee Shine Jewels",
    wordmarkFirst: "MEE SHINE",
    wordmarkSecond: "JEWELS",
    tagline: "Anti-Tarnish Everyday Luxury",
    city: "Chennai, Tamil Nadu",
    pincode: "600116",
    phone: "+91 72002 34400",
    phoneRaw: "917200234400",
    instagram: "https://www.instagram.com/meeshine_jewels",
    facebook: "https://www.facebook.com/share/1Btz7BU1Dv/?mibextid=wwXIfr",
    sourceUrl: "https://meeshinejewels.smartbiz.in/"
  },

  loader: {
    eyebrow: "MEE SHINE JEWELS",
    subtitle: "PREPARING YOUR SHINE"
  },

  hero: {
    eyebrow: "ANTI-TARNISH COLLECTION",
    title: ["MADE TO OUTLAST", "THE MOMENT."],
    alternativeTitle: ["SHINE THAT", "STAYS WITH YOU."],
    body: "Everyday jewellery designed to hold its glow — through celebrations, routines and everything between.",
    cta: "DISCOVER THE COLLECTION",
    secondaryCta: "EXPLORE IN 3D",
    dragHint: "DRAG TO EXPLORE"
  },

  storyChapter1: {
    label: "01 / ANTI-TARNISH",
    heading: ["BUILT FOR", "EVERYDAY SHINE."],
    body: "Anti-tarnish pieces designed for repeat wear, made for the days you never planned to take them off.",
    accent: "Stainless Steel Core"
  },

  storyChapter2: {
    label: "02 / CRAFT",
    heading: ["DETAIL,", "WITHOUT EXCESS."],
    body: "Clean silhouettes. Refined finishes. Jewellery designed to become part of your everyday.",
    callout: "POLISHED FINISH",
    annotation: "Micro-beveled mirror edge & precision prong setting"
  },

  storyChapter3: {
    label: "03 / FORM",
    heading: ["ONE MOOD.", "MANY FORMS."],
    categories: ["RINGS", "BRACELETS", "CHAINS", "EARRINGS", "ANKLETS"],
    subtitle: "Select a piece to inspect its architecture and verified details."
  },

  brandStory: {
    eyebrow: "OUR PHILOSOPHY",
    heading: ["JEWELLERY FOR", "THE MOMENTS", "THAT STAY."],
    body: "Mee Shine creates pieces for everyday rituals, celebrations, gifting and everything in between. Designed in Chennai, finished for everyday life.",
    antiTarnishHeading: ["SHINE, WITHOUT", "THE SPECIAL OCCASION."],
    antiTarnishBody: "Made to be reached for again and again — jewellery that belongs in your everyday story."
  },

  marquee: "ANTI-TARNISH / EVERYDAY / MEE SHINE / TIMELESS / EVERYDAY / MEE SHINE",

  newsletter: {
    heading: ["A LITTLE MORE", "SHINE IN YOUR INBOX."],
    placeholder: "Enter your email address",
    cta: "JOIN",
    success: "YOU'RE ON THE LIST."
  },

  contact: {
    heading: ["NEED HELP", "CHOOSING YOUR PIECE?"],
    subtitle: "Our jewellery stylists are available on WhatsApp for sizing guidance, gifting recommendations and custom inquiries.",
    whatsappCta: "WHATSAPP US",
    callCta: "CALL US",
    shopCta: "SHOP COLLECTION"
  },

  cart: {
    emptyTitle: "Your jewellery box is waiting.",
    emptyCta: "EXPLORE COLLECTION",
    deliveryNote: "Free shipping across India on orders above ₹999 with code FREESHIP999. Standard shipping: ₹50.",
    whatsappCheckoutCta: "CONTINUE ON WHATSAPP"
  }
} as const;

export type ContentType = typeof content;
