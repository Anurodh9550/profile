export type Product = {
  id: string;
  brandId: string;
  name: string;
  category: string;
  description: string;
  specs?: string;
  features: string[];
};

export const stats = [
  { value: "3 Brands", label: "SPARS Electric · Battery · Killa Electronics" },
  { value: "50+", label: "Products across manufacturing divisions" },
  { value: "Noida", label: "Manufacturing hub in Uttar Pradesh" },
  { value: "Noida", label: "Manufacturing hub · Sector 63A" },
];

export const brandProducts: Record<string, Product[]> = {
  "spars-electric": [
    {
      id: "se-city",
      brandId: "spars-electric",
      name: "SPARS City",
      category: "Electric Scooter",
      description: "Urban commuter electric scooter for daily city rides.",
      specs: "Range 85–100 km · Speed 45 km/h",
      features: ["LED lighting", "Digital display", "Regenerative braking", "Comfort suspension"],
    },
    {
      id: "se-pro",
      brandId: "spars-electric",
      name: "SPARS Pro",
      category: "Electric Scooter",
      description: "Premium range scooter with connected features.",
      specs: "Range 110–130 km · Speed 55 km/h",
      features: ["Smart display", "App connectivity", "Fast charge ready", "Premium finish"],
    },
    {
      id: "se-fleet",
      brandId: "spars-electric",
      name: "SPARS Fleet",
      category: "Fleet Scooter",
      description: "Fleet-optimised electric scooter for delivery & corporate use.",
      specs: "Range 95–115 km · Speed 50 km/h",
      features: ["Telematics ready", "Heavy-duty build", "Easy service", "Bulk pricing"],
    },
    {
      id: "se-lite",
      brandId: "spars-electric",
      name: "SPARS Lite",
      category: "Electric Scooter",
      description: "Affordable entry-level electric scooter for mass market.",
      specs: "Range 70–85 km · Speed 40 km/h",
      features: ["Lightweight frame", "Low maintenance", "USB charging port", "Under-seat storage"],
    },
    {
      id: "se-max",
      brandId: "spars-electric",
      name: "SPARS Max",
      category: "Electric Scooter",
      description: "High-torque scooter for hilly terrain and heavy riders.",
      specs: "Range 100–120 km · Speed 60 km/h",
      features: ["High torque motor", "Dual disc brakes", "Hill assist", "Extended warranty"],
    },
    {
      id: "se-cargo",
      brandId: "spars-electric",
      name: "SPARS Cargo",
      category: "Commercial EV",
      description: "Last-mile cargo electric scooter for logistics.",
      specs: "Payload 80 kg · Range 80–100 km",
      features: ["Cargo rack", "Reinforced chassis", "Fleet dashboard", "GPS ready"],
    },
  ],
  "spars-battery": [
    {
      id: "sb-pack-48",
      brandId: "spars-battery",
      name: "SPARS Li-Ion 48V 28Ah",
      category: "EV Battery Pack",
      description:
        "Flagship 48V lithium-ion battery pack engineered for daily e-scooter commuters. Built with grade-A cells, integrated smart BMS, and thermal management — delivering reliable ~45 km range. Ideal for retail replacement, new vehicle fitment, and dealer stock programmes.",
      specs: "48V · 28Ah · ~45 km range",
      features: ["Smart BMS", "Fast charge ready", "2-year warranty", "Made in India", "Dealer margin support", "Bulk OEM pricing"],
    },
    {
      id: "sb-pack-60",
      brandId: "spars-battery",
      name: "SPARS Li-Ion 48V 32Ah",
      category: "EV Battery Pack",
      description:
        "Mid-range high-capacity pack designed for delivery fleets, corporate mobility, and premium scooter models. Manufactured on SPARS automated assembly lines with full load-cycle testing before dispatch. Trusted by dealers for consistent performance and low return rates.",
      specs: "48V · 32Ah · Extended range",
      features: ["Fleet grade cells", "Maintenance free", "Thermal protection", "IP65 enclosure", "Volume discounts", "Pan-India supply"],
    },
    {
      id: "sb-pack-72",
      brandId: "spars-battery",
      name: "SPARS Li-Ion 48V 45Ah",
      category: "EV Battery Pack",
      description:
        "Top-of-line maximum range battery for premium EV models and long-distance commercial use. SPARS Battery's highest capacity 48V pack — engineered for extended duty cycles, superior cell balancing, and maximum rider confidence on Indian road conditions.",
      specs: "48V · 45Ah · Maximum range",
      features: ["Max range capacity", "Long cycle life 800+ cycles", "Advanced BMS", "Fleet telematics ready", "Priority warranty support", "Premium packaging"],
    },
    {
      id: "sb-bms",
      brandId: "spars-battery",
      name: "SPARS Smart BMS",
      category: "Battery Management System",
      description:
        "In-house developed Battery Management System for 48V EV applications. Monitors individual cell voltage, temperature, and state of charge in real time — preventing overcharge, deep discharge, and thermal runaway. Used across all SPARS battery packs and available for OEM integration.",
      specs: "48V · Smart BMS · CAN ready",
      features: ["Cell-level monitoring", "Overcharge protection", "Temperature sensing", "Fault code diagnostics", "OEM integration support", "Firmware upgradable"],
    },
    {
      id: "sb-solar",
      brandId: "spars-battery",
      name: "SPARS Lithium Cells",
      category: "Battery Cells",
      description:
        "Premium grade lithium-ion cells sourced and validated for SPARS pack manufacturing. Each cell lot undergoes incoming quality inspection, capacity testing, and internal resistance verification before entering our Noida assembly line — ensuring every SPARS pack meets strict performance standards.",
      specs: "Li-Ion · 18650/21700 grade · EV certified",
      features: ["Grade-A cell sourcing", "Lot traceability", "Capacity matched grouping", "Long life cycles", "Bulk supply for OEMs", "Quality certificate per lot"],
    },
    {
      id: "sb-swap",
      brandId: "spars-battery",
      name: "SPARS EV Battery Pack Range",
      category: "Complete Battery Range",
      description:
        "Full SPARS Battery product catalogue covering 48V packs from 28Ah to 45Ah — designed for electric scooters, e-bikes, and light commercial EVs. Available in standard and custom configurations for OEM partners, dealer networks, and fleet operators with dedicated account management and after-sales support.",
      specs: "48V · 28 / 32 / 36 / 42 / 45 Ah",
      features: ["5 capacity options", "1 yr replacement warranty", "1 yr service warranty", "Dealer training included", "Marketing support kits", "Technical helpline"],
    },
  ],
  "killa-electronics": [
    {
      id: "ke-motor-ctrl",
      brandId: "killa-electronics",
      name: "KILLA Motor Controller",
      category: "Motor Controller",
      description: "BLDC motor controller for electric two-wheelers.",
      specs: "48V–72V · 30–60A",
      features: ["Regenerative braking", "Multi ride modes", "Thermal protection", "CAN protocol"],
    },
    {
      id: "ke-display",
      brandId: "killa-electronics",
      name: "KILLA Digital Display",
      category: "Instrument Cluster",
      description: "Smart digital dashboard for electric scooters.",
      specs: "3.5\" – 7\" TFT",
      features: ["Speed & range", "Fault codes", "Bluetooth link", "Day/night mode"],
    },
    {
      id: "ke-charger",
      brandId: "killa-electronics",
      name: "KILLA EV Charger",
      category: "Charging System",
      description: "Smart charger for lithium-ion EV battery packs.",
      specs: "48V–72V · 5–10A",
      features: ["Auto cut-off", "LED indicators", "Overheat protection", "Portable design"],
    },
    {
      id: "ke-dcdc",
      brandId: "killa-electronics",
      name: "KILLA DC-DC Converter",
      category: "Power Electronics",
      description: "Voltage converter for EV auxiliary systems.",
      specs: "48V–72V to 12V",
      features: ["High efficiency", "Short circuit protection", "Compact size", "Automotive grade"],
    },
    {
      id: "ke-iot",
      brandId: "killa-electronics",
      name: "KILLA IoT Telematics",
      category: "Connected Mobility",
      description: "GPS and telematics module for fleet tracking.",
      specs: "4G · GPS · BLE",
      features: ["Real-time tracking", "Geo-fencing", "Ride analytics", "Cloud dashboard"],
    },
    {
      id: "ke-throttle",
      brandId: "killa-electronics",
      name: "KILLA Throttle & Wiring Kit",
      category: "EV Components",
      description: "Complete throttle, wiring harness, and connector kit.",
      specs: "Universal fit",
      features: ["Waterproof connectors", "Plug & play", "Copper wiring", "Quality tested"],
    },
    {
      id: "ke-converter",
      brandId: "killa-electronics",
      name: "KILLA Inverter Board",
      category: "Power Electronics",
      description: "Inverter PCB for solar and backup applications.",
      specs: "500W – 3000W",
      features: ["Pure sine wave", "Overload protection", "Cooling fan", "LED status"],
    },
    {
      id: "ke-led",
      brandId: "killa-electronics",
      name: "KILLA LED Lighting Kit",
      category: "Automotive Lighting",
      description: "LED headlamp, tail lamp, and indicator kit for EVs.",
      specs: "12V · High brightness",
      features: ["Energy efficient", "Long life LEDs", "Easy install", "DOT compliant design"],
    },
  ],
};

/** All products flat list */
export const allProducts = Object.values(brandProducts).flat();

/** Legacy export for backward compatibility */
export const products = brandProducts["spars-electric"];

export const whyChoose = [
  {
    title: "Multi-Brand Manufacturing",
    description:
      "SPARS Electric, SPARS Battery, and Killa Electronics — integrated production from Noida.",
  },
  {
    title: "Dealer-First Growth",
    description:
      "Exclusive territories, training, marketing support, and CRM-enabled lead generation.",
  },
  {
    title: "Quality Engineering",
    description:
      "Battery, motor, electronics, and safety systems validated for Indian conditions.",
  },
  {
    title: "50+ Product Range",
    description:
      "Electric scooters, battery packs, controllers, displays, chargers, and EV components.",
  },
  {
    title: "Investor Aligned",
    description:
      "Scalable business model with defined 2026–2030 expansion and product roadmap.",
  },
  {
    title: "After-Sales Excellence",
    description:
      "Warranty framework, genuine spare parts, and growing authorised service network.",
  },
];

export const manufacturingSteps = [
  { step: "01", title: "Inbound QC", text: "Component validation and lot traceability" },
  { step: "02", title: "Assembly", text: "Station-based production with standard work" },
  { step: "03", title: "Testing", text: "Electrical, functional, and road verification" },
  { step: "04", title: "Dispatch", text: "Dealer-ready packaging and documented delivery" },
];

export const dealerBenefits = [
  "Exclusive territory protection",
  "Structured dealer margins & incentives",
  "Sales & service training programmes",
  "Co-branded marketing collateral",
  "CRM & lead generation support",
  "Technical helpline & field support",
  "Genuine spare parts supply",
  "Launch event & digital marketing kits",
];

export const careerPaths = [
  "Campus hiring & internships",
  "Graduate Engineer Trainee (GET)",
  "Diploma Engineer Trainee (DET)",
  "Production & quality roles",
  "Sales & marketing positions",
  "R&D & software engineering",
];

export const expansionTimeline = [
  { year: "2026", text: "Core portfolio launch · North & West dealer network" },
  { year: "2027", text: "Pan-India expansion · Connected smart models" },
  { year: "2028", text: "Commercial EV entry · Regional warehouses" },
  { year: "2029", text: "Multi-plant evaluation · 100+ dealer milestone" },
  { year: "2030", text: "National brand recognition · Integrated mobility platform" },
];
