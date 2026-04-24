export const SITE = {
  name: "evverywhere",
  legalName: "evverywhere",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://evverywhere.com",
  description:
    "evverywhere is a Cape Town creative agency delivering world-class strategy, paid advertising, creative media content, business analysis, and website development. Full creative packages delivered in 10 days.",
  shortDescription:
    "Cape Town creative agency. Strategy, paid ads, creative content, analysis, web development.",
  positioning: "A creative agency for the everywhere generation.",
  email: "hello@evverywhere.com",
  phone: "+27",
  instagram: "https://instagram.com/The.evverywhere",
  instagramHandle: "@The.evverywhere",
  contactEndpoint:
    process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ||
    "https://formsubmit.co/ajax/hello@evverywhere.com",
  founded: "2024",
  city: "Cape Town",
  region: "Western Cape",
  country: "South Africa",
  countryCode: "ZA",
  coordinates: { lat: -33.9249, lng: 18.4241 },
  keywords: [
    "creative agency Cape Town",
    "content strategy agency South Africa",
    "social media agency Cape Town",
    "brand strategy South Africa",
    "paid advertising agency Cape Town",
    "creative agency South Africa",
    "evverywhere",
    "content creation Cape Town",
    "media production South Africa",
    "website development Cape Town",
  ],
} as const;

export const NAV_LINKS = [
  { href: "#origin", label: "About" },
  { href: "#now", label: "Services" },
  { href: "#eras", label: "Work" },
  { href: "#next", label: "Contact" },
] as const;
