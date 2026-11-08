export type GroupBrand = {
  id: string;
  name: string;
  tagline: string;
  segment: string;
  description: string;
  manufacturing: string;
  productCount: number;
  focus: string[];
  accent: "green" | "blue" | "orange";
  websiteUrl?: string;
};

export const COMPANY = {
  legalName: "Mass Kalpana Traders",
  tradeName: "Kalpana Traders",
  tagline: "Multi-Brand Manufacturing · Trading · Technology Group",
  address: "C-77, Sector 63A, Noida, Uttar Pradesh, India",
  website: "www.kalpanatraders.in",
  email: "contact@kalpanatraders.in",
  phone: "+91 92899 75453",
} as const;

export const SPARS_ELECTRIC_WEBSITE = "https://www.sparselectric.com/" as const;
export const KILLA_ELECTRONICS_WEBSITE = "https://kilaelectronics.com/" as const;

export const GROUP_BRANDS: GroupBrand[] = [
  {
    id: "spars-electric",
    name: "SPARS ELECTRIC",
    tagline: "Premium Electric Mobility",
    segment: "Electric Vehicles",
    description:
      "Electric scooter manufacturing, assembly, dealer network development, and EV technology solutions from Noida.",
    manufacturing: "Electric scooter assembly line, road testing & QC — Noida",
    productCount: 6,
    focus: [
      "Electric scooters",
      "EV assembly & manufacturing",
      "Dealer & fleet network",
      "Connected mobility",
    ],
    accent: "green",
    websiteUrl: SPARS_ELECTRIC_WEBSITE,
  },
  {
    id: "spars-battery",
    name: "SPARS BATTERY",
    tagline: "Power · Performance · Reliability",
    segment: "Energy & Battery",
    description:
      "SPARS Battery is a dedicated lithium-ion manufacturing division of Mass Kalpana Traders — producing premium EV battery packs at scale from Noida. With automated assembly lines, smart BMS integration, multi-capacity 48V range, and pan-India dealer supply, SPARS Battery is built to power India's electric mobility revolution.",
    manufacturing: "Large-scale battery cell assembly, pack manufacturing & BMS integration — Noida, UP",
    productCount: 6,
    focus: [
      "10,000+ packs annual capacity",
      "48V · 28Ah to 45Ah range",
      "OEM, dealer & fleet supply",
      "2-year warranty programme",
    ],
    accent: "blue",
  },
  {
    id: "killa-electronics",
    name: "KILLA ELECTRONICS",
    tagline: "Smart Electronics & Components",
    segment: "Electronics",
    description:
      "Electronic components, controllers, displays, and smart mobility electronics for automotive and industrial use.",
    manufacturing: "PCB assembly, electronics manufacturing & functional testing — Noida",
    productCount: 8,
    focus: [
      "Motor controllers",
      "Digital displays & IoT",
      "EV electronics",
      "Component trading",
    ],
    accent: "orange",
    websiteUrl: KILLA_ELECTRONICS_WEBSITE,
  },
];

/** Primary website brand — SPARS ELECTRIC */
export const BRAND = {
  legalName: COMPANY.legalName,
  brandName: "SPARS ELECTRIC",
  tagline: "Engineering India's Next Generation of Electric Mobility",
  shortTagline: "Premium Electric Scooters · Made in Noida",
  address: COMPANY.address,
  factory: COMPANY.address,
  corporateOffice: COMPANY.address,
  website: "www.sparselectric.com",
  websiteUrl: SPARS_ELECTRIC_WEBSITE,
  email: "contact@sparselectric.in",
  phone: COMPANY.phone,
  dealerEmail: "dealers@sparselectric.in",
  careersEmail: "careers@sparselectric.in",
  investorEmail: "investors@sparselectric.in",
  parentCompany: COMPANY,
} as const;

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

/** Clean header menu with dropdown groups */
export const NAV_MENU: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Brands", href: "/brands" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Company Profile", href: "/profile" },
      { label: "Company Profile PDF", href: "/company-profile" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "All Products", href: "/products" },
      { label: "SPARS Electric", href: "/products#spars-electric" },
      { label: "SPARS Electric Website", href: SPARS_ELECTRIC_WEBSITE },
      { label: "SPARS Battery", href: "/products#spars-battery" },
      { label: "Killa Electronics", href: "/products#killa-electronics" },
      { label: "Killa Electronics Website", href: KILLA_ELECTRONICS_WEBSITE },
    ],
  },
  {
    label: "Partners",
    children: [
      { label: "Dealer Program", href: "/dealers" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/** Flat links for footer */
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/brands", label: "Our Brands" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/dealers", label: "Dealers" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
] as const;
