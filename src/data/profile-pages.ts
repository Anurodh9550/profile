import type { ProfilePageData } from "@/lib/profile-types";
import { BRAND, COMPANY, GROUP_BRANDS, defaultMeta } from "@/lib/profile-types";

export const profilePages: ProfilePageData[] = [
  {
    id: "cover",
    pageNumber: 1,
    title: "Corporate Profile",
    heading: "SPARS ELECTRIC — Company Profile 2026",
    intro: "",
    variant: "cover",
    meta: defaultMeta({
      images: [
        "Full-bleed premium electric scooter on dark gradient",
        "Noida factory exterior at dusk",
        "Abstract EV energy lines overlay",
      ],
      icons: ["Lightning bolt", "Shield", "Globe", "Factory"],
      designNotes:
        "Tesla-inspired hero cover: deep navy background, oversized brand wordmark, minimal copy, cinematic EV photography. Logo top-left; legal entity bottom-left.",
      layout: "Full-bleed hero · 60/40 visual-to-text ratio · Center-left typography alignment",
      footer: `${BRAND.brandName} · ${BRAND.legalName} · ${BRAND.factory}`,
    }),
  },
  {
    id: "index",
    pageNumber: 2,
    title: "Contents",
    heading: "Profile Index",
    intro:
      "A structured corporate narrative for investors, dealers, government stakeholders, academic institutions, fleet operators, and strategic partners.",
    meta: defaultMeta({
      images: ["Minimal index spread with thin green rules"],
      icons: ["List", "Bookmark", "Navigation"],
      layout: "Two-column index with page numbers right-aligned",
    }),
  },
  {
    id: "founder",
    pageNumber: 3,
    title: "Leadership",
    heading: "Chairman / Founder Message",
    intro:
      "India's electric mobility revolution is not a trend — it is a national imperative. At SPARS ELECTRIC, we are building a technology-led, quality-first electric vehicle enterprise that empowers dealers, delights customers, and creates sustainable manufacturing employment in Uttar Pradesh.",
    bullets: [
      "Our mission is to democratise premium electric two-wheeler mobility across Bharat.",
      "We invest in disciplined assembly, rigorous testing, and dealer success — not shortcuts.",
      "We invite investors, institutions, and partners to grow with a brand engineered for scale.",
    ],
    cards: [
      {
        title: "Founder commitment",
        body: "We will lead with integrity, compliance, and long-term value creation for every stakeholder in the SPARS ecosystem.",
      },
      {
        title: "Leadership signature",
        body: "[Chairman / Founder Name & Designation — To Be Updated]",
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Executive portrait · Signature block · Noida plant backdrop"],
      icons: ["User", "Quote", "Award"],
      layout: "Portrait left · Message right · Signature strip at bottom",
    }),
  },
  {
    id: "overview",
    pageNumber: 4,
    title: "Company Overview",
    heading: "Multi-Brand Group from Noida",
    intro: `${COMPANY.legalName} is a multi-brand company operating SPARS ELECTRIC, SPARS BATTERY, and KILLA ELECTRONICS from ${COMPANY.address}. SPARS ELECTRIC is the flagship electric vehicle brand focused on scooter manufacturing, dealer network development, and EV technology.`,
    stats: [
      { value: "3 Brands", label: "SPARS Electric · SPARS Battery · Killa Electronics" },
      { value: "Noida", label: "Sector 63A · Uttar Pradesh" },
      { value: "EV+", label: "Scooters, batteries & electronics" },
      { value: "Pan-India", label: "Dealer, fleet, and institutional partnership vision" },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Aerial factory view", "EV scooter lineup", "India map highlight on UP"],
      icons: ["Building", "MapPin", "Zap"],
    }),
  },
  {
    id: "about",
    pageNumber: 5,
    title: "About Us",
    heading: "About SPARS ELECTRIC & Group Brands",
    intro:
      "SPARS ELECTRIC is the flagship EV brand of Mass Kalpana Traders — supported by SPARS BATTERY (energy solutions) and KILLA ELECTRONICS (smart components). Together they form an integrated electric mobility ecosystem manufactured from Noida.",
    cards: [
      {
        title: "Group brands",
        bullets: GROUP_BRANDS.map((b) => `${b.name} — ${b.segment}`),
      },
      {
        title: "What we do",
        bullets: [
          "Electric scooter manufacturing & assembly",
          "EV battery packs & BMS solutions",
          "Electronics, controllers & displays",
          "Dealer network & institutional partnerships",
        ],
      },
      {
        title: "Who we serve",
        bullets: [
          "EV dealers & franchise partners",
          "Investors, banks & NBFCs",
          "Engineering colleges, ITIs & polytechnics",
          "Fleet operators & corporate clients",
        ],
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Brand story collage", "Assembly bay", "Dealer showroom concept"],
      icons: ["Layers", "Users", "Target"],
    }),
  },
  {
    id: "journey",
    pageNumber: 6,
    title: "Heritage",
    heading: "Company Journey",
    intro:
      "SPARS ELECTRIC is architected for structured, compliance-led growth — from Noida assembly excellence to a nationally recognised electric mobility brand.",
    timeline: [
      { year: "FOUND", text: "Mass Kalpana Traders establishes SPARS ELECTRIC as a focused EV brand." },
      { year: "SETUP", text: "Noida manufacturing & assembly infrastructure commissioned." },
      { year: "BUILD", text: "Product architecture, supplier qualification, and dealer framework developed." },
      { year: "LAUNCH", text: "Electric scooter portfolio rollout and channel onboarding initiated." },
      { year: "SCALE", text: "Pan-India expansion, institutional partnerships, and technology roadmap activation." },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Horizontal timeline graphic with milestone nodes"],
      icons: ["Clock", "Flag", "TrendingUp"],
      layout: "Central timeline with alternating milestone cards",
    }),
  },
  {
    id: "vision-mission",
    pageNumber: 7,
    title: "Purpose",
    heading: "Vision · Mission · Core Values",
    intro:
      "Our corporate purpose aligns national EV adoption with manufacturing excellence, dealer prosperity, and environmental responsibility.",
    cards: [
      {
        title: "Vision",
        body: "To become India's most trusted and technology-forward electric two-wheeler brand — engineered in Noida, embraced across Bharat.",
      },
      {
        title: "Mission",
        body: "To design, assemble, and distribute high-quality electric scooters through a disciplined manufacturing system, empowered dealer network, and customer-centric after-sales ecosystem.",
      },
      {
        title: "Core values",
        bullets: [
          "Integrity & compliance in every business transaction",
          "Quality without compromise at assembly and delivery",
          "Innovation with practical, road-ready engineering",
          "Partner success as a measure of our success",
          "Sustainability embedded in product and process",
        ],
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Three-pillar visual: Vision · Mission · Values"],
      icons: ["Eye", "Compass", "Heart"],
    }),
  },
  {
    id: "why-choose",
    pageNumber: 8,
    title: "Differentiation",
    heading: "Why Choose SPARS ELECTRIC",
    intro:
      "SPARS ELECTRIC offers a premium, partner-ready EV platform combining manufacturing discipline, commercial clarity, and long-term brand equity.",
    cards: [
      { title: "Manufacturing credibility", body: "Structured Noida assembly with documented QC and testing protocols." },
      { title: "Dealer-first economics", body: "Transparent margins, territory protection, and growth-oriented channel design." },
      { title: "Product confidence", body: "Electric scooters engineered for Indian road conditions and daily commute reliability." },
      { title: "Institutional readiness", body: "Campus hiring, industrial visits, and academia collaboration frameworks." },
      { title: "Investor alignment", body: "Scalable business model with clear expansion roadmap through 2030." },
      { title: "Compliance foundation", body: "Compliant commercial operations with certification roadmap for national standards." },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Six-icon value grid on white field"],
      icons: ["CheckCircle", "Handshake", "Settings", "GraduationCap"],
    }),
  },
  {
    id: "market",
    pageNumber: 9,
    title: "Market",
    heading: "Market Opportunity",
    intro:
      "India's electric two-wheeler segment is experiencing structural growth driven by total cost of ownership advantage, FAME policy tailwinds, urban pollution mandates, and rising consumer preference for silent, low-maintenance mobility.",
    stats: [
      { value: "₹100Cr+", label: "Addressable brand-scale opportunity in organised EV 2W" },
      { value: "Tier 2/3", label: "High-growth demand beyond metro markets" },
      { value: "Fleet+", label: "Last-mile delivery and corporate fleet electrification" },
      { value: "Finance", label: "NBFC-led retail penetration accelerating adoption" },
    ],
    bullets: [
      "Rising fuel costs continue to shift commuter economics toward electric scooters.",
      "Dealer networks remain the decisive last-mile for EV adoption in Bharat.",
      "Local assembly in NCR strengthens supply responsiveness for North India markets.",
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Market size infographic", "Growth curve", "Segment pie chart"],
      icons: ["BarChart", "PieChart", "ArrowUpRight"],
    }),
  },
  {
    id: "ev-india",
    pageNumber: 10,
    title: "Industry",
    heading: "Electric Vehicle Industry in India",
    intro:
      "India is transitioning from early EV adoption to mainstream electric mobility. Policy support, charging infrastructure expansion, and domestic manufacturing incentives are reshaping the competitive landscape.",
    cards: [
      {
        title: "Policy landscape",
        bullets: [
          "FAME II and state-level EV policies driving adoption",
          "PLI schemes strengthening domestic manufacturing",
          "GST advantages on electric vehicles",
        ],
      },
      {
        title: "Consumer drivers",
        bullets: [
          "Lower running cost per kilometre",
          "Reduced maintenance vs ICE scooters",
          "Urban air quality and noise reduction benefits",
        ],
      },
      {
        title: "Industry shift",
        bullets: [
          "From import-dependent to assemble-in-India models",
          "Dealer digitisation and lead management evolution",
          "Battery technology and safety standardisation",
        ],
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["India EV adoption map", "Policy timeline", "Charging station network"],
      icons: ["Globe", "FileText", "Battery"],
    }),
  },
  {
    id: "mfg-unit",
    pageNumber: 11,
    title: "Manufacturing",
    heading: "Manufacturing & Assembly Unit — Noida",
    intro:
      "The SPARS ELECTRIC facility in Noida, Uttar Pradesh is designed as a modern electric scooter assembly centre with segregated inbound, assembly, testing, and outbound zones — enabling controlled production flow and audit-ready operations.",
    bullets: [
      "Strategic NCR location for North India distribution efficiency",
      "Modular assembly bays supporting scalable throughput",
      "Dedicated QC, testing, and dispatch zones",
      "Warehouse integration for parts, finished goods, and spare inventory",
    ],
    stats: [
      { value: "Noida", label: "Primary manufacturing & assembly location" },
      { value: "Modular", label: "Expandable line architecture" },
      { value: "QC+", label: "In-line and end-of-line verification" },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Factory floor panorama", "Zone map diagram", "Noida location map"],
      icons: ["Factory", "Map", "Cog"],
      layout: "Hero factory image top · Zone breakdown below",
    }),
  },
  {
    id: "assembly",
    pageNumber: 12,
    title: "Production",
    heading: "Assembly Process & Production Line",
    intro:
      "Every SPARS electric scooter moves through a documented assembly sequence — from component validation to road-ready dispatch — ensuring repeatability, traceability, and quality consistency.",
    flow: {
      title: "Manufacturing flowchart",
      nodes: [
        "Inbound",
        "Component QC",
        "Frame Prep",
        "Powertrain",
        "Wiring",
        "Calibration",
        "Road Test",
        "Dispatch",
      ],
    },
    cards: [
      {
        title: "Production line design",
        bullets: [
          "Station-based assembly with defined takt time targets",
          "Skill-mapped operators at critical torque stations",
          "Digital production logging at key checkpoints",
        ],
      },
      {
        title: "Assembly excellence",
        bullets: [
          "Standard work instructions at each station",
          "Component lot traceability",
          "Final inspection sign-off before packaging",
        ],
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Assembly line diagram", "Technician at workstation", "Process flow infographic"],
      icons: ["GitBranch", "Tool", "ClipboardCheck"],
    }),
  },
  {
    id: "qc-testing",
    pageNumber: 13,
    title: "Quality",
    heading: "Quality Control · Testing · Safety",
    intro:
      "Quality is engineered into the SPARS production system — not inspected in at the end. Multi-stage verification ensures every vehicle meets defined performance, safety, and reliability benchmarks.",
    cards: [
      {
        title: "Quality control",
        bullets: [
          "Incoming material inspection (IMI)",
          "In-process quality checks (IPQC)",
          "End-of-line comprehensive inspection (FQC)",
        ],
      },
      {
        title: "Testing protocols",
        bullets: [
          "Electrical system validation",
          "Brake and lighting function tests",
          "Road simulation / track verification",
          "Battery management system checks",
        ],
      },
      {
        title: "Safety systems",
        bullets: [
          "Thermal management verification",
          "Water ingress protection checks",
          "Structural and fastener torque audits",
        ],
      },
    ],
    flow: {
      title: "Quality process",
      nodes: ["IMI", "IPQC", "Functional Test", "Road Test", "FQC Sign-off"],
    },
    variant: "inside",
    meta: defaultMeta({
      images: ["QC station photography", "Testing checklist visual", "Safety shield graphic"],
      icons: ["ShieldCheck", "TestTube", "AlertTriangle"],
    }),
  },
  {
    id: "dispatch",
    pageNumber: 14,
    title: "Operations",
    heading: "Packaging · Dispatch · Warehouse · Expansion",
    intro:
      "Outbound operations are designed for dealer-ready delivery — protected packaging, documented dispatch, and warehouse systems that support national scale.",
    cards: [
      {
        title: "Packaging",
        body: "Protective materials, VIN documentation, and accessory kit verification before sealing.",
      },
      {
        title: "Dispatch",
        body: "Logistics coordination with transporter SLAs, dealer intimation, and delivery confirmation workflows.",
      },
      {
        title: "Warehouse",
        body: "Segregated storage for components, finished vehicles, and fast-moving spare parts.",
      },
      {
        title: "Future expansion",
        body: "Planned capacity augmentation, additional assembly lines, and regional satellite warehouses across India.",
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Warehouse racking", "Dispatch bay", "Expansion roadmap graphic"],
      icons: ["Package", "Truck", "Warehouse", "Expand"],
    }),
  },
  {
    id: "rd-innovation",
    pageNumber: 15,
    title: "R&D",
    heading: "Research & Development · Innovation",
    intro:
      "SPARS ELECTRIC invests in applied R&D focused on real-world Indian mobility — balancing performance, safety, cost efficiency, and serviceability.",
    cards: [
      {
        title: "R&D focus areas",
        bullets: [
          "Battery efficiency and range optimisation",
          "Motor performance tuning for Indian gradients",
          "Lightweight chassis and ergonomics",
          "Connected vehicle feature development",
        ],
      },
      {
        title: "Innovation philosophy",
        bullets: [
          "Road-validated engineering over laboratory-only claims",
          "Modular architecture for faster model iterations",
          "Collaboration with academic institutions for live projects",
        ],
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["R&D lab", "Engineers at CAD workstation", "Prototype scooter"],
      icons: ["Flask", "Lightbulb", "Cpu"],
    }),
  },
  {
    id: "technology",
    pageNumber: 16,
    title: "Technology",
    heading: "EV Technology Platform",
    intro:
      "SPARS ELECTRIC integrates powertrain, energy, control, and connectivity technologies into a cohesive electric scooter platform engineered for Indian operating conditions.",
    cards: [
      { title: "Power electronics", body: "Efficient motor controllers with regenerative braking capability." },
      { title: "Energy management", body: "Intelligent BMS for cell balancing, thermal monitoring, and range optimisation." },
      { title: "Vehicle control", body: "Ride modes, display interfaces, and diagnostic readiness." },
      { title: "Connectivity", body: "Telematics-ready architecture for fleet and smart mobility services." },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Technology stack diagram", "Circuit board macro", "Dashboard UI mockup"],
      icons: ["Cpu", "Wifi", "Activity"],
    }),
  },
  {
    id: "battery-motor",
    pageNumber: 17,
    title: "Powertrain",
    heading: "Battery · Motor · Charging Technology",
    intro:
      "The SPARS powertrain architecture prioritises safety, efficiency, and serviceability — the three pillars of long-term EV ownership satisfaction.",
    cards: [
      {
        title: "Battery technology",
        bullets: [
          "Lithium-ion packs with certified cell sourcing",
          "Smart BMS with overcharge and thermal protection",
          "Swappable / fixed pack options per model architecture",
          "[Capacity & range specs — To Be Updated per model]",
        ],
      },
      {
        title: "Motor technology",
        bullets: [
          "High-efficiency BLDC hub or mid-drive configurations",
          "Optimised torque delivery for stop-start urban traffic",
          "Low-noise, low-vibration operation",
        ],
      },
      {
        title: "Charging technology",
        bullets: [
          "Standard home charging compatibility",
          "Fast-charge ready architecture on select models",
          "Charging safety interlocks and indicator systems",
        ],
      },
    ],
    flow: {
      title: "Battery architecture diagram",
      nodes: ["Cells", "BMS", "Thermal Layer", "Enclosure", "Controller", "Motor"],
    },
    variant: "inside",
    meta: defaultMeta({
      images: ["Battery pack cutaway", "Motor close-up", "Charger product shot"],
      icons: ["Battery", "Zap", "Plug"],
    }),
  },
  {
    id: "safety-features",
    pageNumber: 18,
    title: "Safety",
    heading: "Safety Features",
    intro:
      "Rider safety is non-negotiable. SPARS electric scooters incorporate active and passive safety systems aligned with Indian road realities.",
    cards: [
      { title: "Braking", body: "Combinational braking systems with reliable stopping performance." },
      { title: "Lighting", body: "High-visibility LED headlamp, tail lamp, and turn indicators." },
      { title: "Structure", body: "Reinforced chassis design for stability and impact resilience." },
      { title: "Electrical safety", body: "Insulation, waterproof connectors, and fault-detection systems." },
      { title: "Theft deterrence", body: "Keyless / immobiliser options on selected variants." },
      { title: "Rider alerts", body: "Dashboard warnings for system faults and service reminders." },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Safety feature callout diagram on scooter silhouette"],
      icons: ["Shield", "Disc", "Lightbulb", "Lock"],
    }),
  },
  {
    id: "products",
    pageNumber: 19,
    title: "Products",
    heading: "Product Portfolio",
    intro:
      "SPARS ELECTRIC offers a structured electric scooter portfolio designed for urban commuters, young professionals, and fleet operators — with a defined roadmap for commercial EV expansion.",
    cards: [
      {
        title: "Electric scooters — current",
        bullets: [
          "[Model A — City Commuter — To Be Updated]",
          "[Model B — Premium Range — To Be Updated]",
          "[Model C — Fleet Optimised — To Be Updated]",
        ],
      },
      {
        title: "Upcoming EV models",
        bullets: [
          "Extended range commuter series",
          "Connected smart scooter with app integration",
          "High-torque variant for hilly terrain",
        ],
      },
      {
        title: "Future products",
        bullets: [
          "Commercial three-wheeler EV platform",
          "Cargo last-mile electric solutions",
          "Battery ecosystem and energy services",
        ],
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Product lineup studio shot", "Three model angles", "Commercial EV concept render"],
      icons: ["Bike", "Rocket", "Truck"],
    }),
  },
  {
    id: "features",
    pageNumber: 20,
    title: "Features",
    heading: "Product Features",
    intro:
      "Every SPARS electric scooter is specified to deliver a premium ownership experience — intuitive controls, confident performance, and low total cost of ownership.",
    cards: [
      { title: "Performance", body: "[Top speed, acceleration, gradeability — To Be Updated]" },
      { title: "Range", body: "[IDC / real-world range per charge — To Be Updated]" },
      { title: "Comfort", body: "Ergonomic seating, optimised suspension, and balanced weight distribution." },
      { title: "Storage", body: "Under-seat storage and front compartment for daily utility." },
      { title: "Display", body: "Digital instrument cluster with speed, range, and mode indicators." },
      { title: "Connectivity", body: "App-ready models with GPS, ride history, and service alerts." },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Feature hotspot diagram", "Dashboard close-up", "Lifestyle commuter shot"],
      icons: ["Gauge", "Smartphone", "Star"],
    }),
  },
  {
    id: "quality-standards",
    pageNumber: 21,
    title: "Standards",
    heading: "Quality Standards",
    intro:
      "SPARS ELECTRIC adheres to structured quality management practices across sourcing, assembly, testing, and after-sales — with a certification roadmap aligned to Indian and international benchmarks.",
    bullets: [
      "Supplier qualification and incoming inspection standards",
      "Documented work instructions and operator certification",
      "Defect tracking, root-cause analysis, and corrective action",
      "Customer feedback loop integrated into product improvement",
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Quality certificate wall mockup", "ISO process cycle diagram"],
      icons: ["Award", "FileCheck", "RefreshCw"],
    }),
  },
  {
    id: "certifications",
    pageNumber: 22,
    title: "Compliance",
    heading: "Certifications & Approvals",
    intro:
      "SPARS ELECTRIC maintains a proactive compliance framework. Certifications below are presented as placeholders for documentation in progress or planned acquisition.",
    cards: [
      { title: "ISO", body: "[ISO 9001:2015 — Quality Management — Placeholder]" },
      { title: "BIS", body: "[Bureau of Indian Standards — Product Compliance — Placeholder]" },
      { title: "ARAI", body: "[Automotive Research Association of India — Testing & Homologation — Placeholder]" },
      { title: "ICAT", body: "[International Centre for Automotive Technology — Certification — Placeholder]" },
      {
        title: "Future certifications",
        body: "Additional environmental, safety, and export-readiness certifications as per expansion roadmap.",
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Certification badge grid", "Compliance timeline"],
      icons: ["Badge", "Stamp", "ShieldCheck"],
    }),
  },
  {
    id: "warranty",
    pageNumber: 23,
    title: "After-Sales",
    heading: "Warranty Policy · Spare Parts Support",
    intro:
      "SPARS ELECTRIC backs every vehicle with a structured warranty framework and a reliable spare parts supply system — ensuring dealer confidence and customer peace of mind.",
    cards: [
      {
        title: "Warranty policy",
        bullets: [
          "[Vehicle warranty period — To Be Updated]",
          "[Battery warranty terms — To Be Updated]",
          "Warranty registration via dealer at delivery",
          "Authorised service centres only for warranty claims",
        ],
      },
      {
        title: "Spare parts support",
        bullets: [
          "Genuine SPARS parts through authorised channels",
          "Regional parts distribution from Noida warehouse",
          "Dealer parts ordering portal (planned)",
          "Critical fast-moving parts inventory programme",
        ],
      },
    ],
    flow: {
      title: "Warranty flow",
      nodes: ["Purchase", "Registration", "Service Request", "Inspection", "Resolution", "Feedback"],
    },
    variant: "inside",
    meta: defaultMeta({
      images: ["Warranty card mockup", "Spare parts warehouse shelf"],
      icons: ["FileText", "Wrench", "Box"],
    }),
  },
  {
    id: "service",
    pageNumber: 24,
    title: "Service",
    heading: "Service Network",
    intro:
      "A premium EV brand is defined by after-sales excellence. SPARS ELECTRIC is building a structured service network with trained technicians, genuine parts, and responsive customer support.",
    cards: [
      { title: "Authorised service centres", body: "Dealer-linked and standalone ASC model for urban and semi-urban coverage." },
      { title: "Mobile service", body: "On-site support for fleet and priority customers in select cities." },
      { title: "Service training", body: "Certified technician programmes with periodic upskilling." },
      { title: "CRM integration", body: "Service ticket tracking, SLA monitoring, and customer satisfaction scoring." },
    ],
    flow: {
      title: "Service workflow",
      nodes: ["Book", "Diagnose", "Repair", "Quality Check", "Handover", "Follow-up"],
    },
    variant: "inside",
    meta: defaultMeta({
      images: ["Service bay photography", "Technician training session", "India service map"],
      icons: ["Tool", "Headphones", "MapPin"],
    }),
  },
  {
    id: "dealer-program",
    pageNumber: 25,
    title: "Channel",
    heading: "Dealer Program",
    intro:
      "The SPARS dealer programme is engineered for profitable, sustainable partnerships — combining exclusive territories, structured margins, and comprehensive business support.",
    cards: [
      { title: "Dealer benefits", body: "Brand equity, marketing support, training, and priority parts supply." },
      { title: "Dealer margin", body: "[Margin structure & incentive slabs — To Be Updated]" },
      { title: "Training", body: "Sales, service, and product training at onboarding and quarterly refresh." },
      { title: "Marketing support", body: "Co-branded collateral, digital campaigns, and launch event kits." },
      { title: "Exclusive territory", body: "Defined geographic exclusivity subject to performance milestones." },
      { title: "CRM support", body: "Lead management, enquiry tracking, and conversion analytics." },
      { title: "Technical support", body: "Dedicated helpline and field engineer access for complex cases." },
      { title: "Digital marketing", body: "Social media templates, performance ads guidance, and SEO support." },
      { title: "Lead generation", body: "Central digital leads routed to territory dealers with CRM attribution." },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Dealer showroom render", "Handshake partnership visual", "Dealer benefits infographic"],
      icons: ["Store", "Percent", "Megaphone", "Users"],
    }),
  },
  {
    id: "dealer-onboarding",
    pageNumber: 26,
    title: "Dealer Network",
    heading: "Dealer Selection · Onboarding · Growth Model",
    intro:
      "SPARS ELECTRIC follows a disciplined dealer lifecycle — from selection and onboarding to sustained growth and network expansion.",
    cards: [
      {
        title: "Selection process",
        bullets: [
          "Application and financial capability assessment",
          "Infrastructure and location evaluation",
          "Market potential and competitive landscape review",
          "Leadership interview and alignment check",
        ],
      },
      {
        title: "Onboarding process",
        bullets: [
          "Agreement execution and territory allocation",
          "Showroom branding and display standards",
          "Product, sales, and service training certification",
          "CRM access, inventory planning, and launch support",
        ],
      },
      {
        title: "Growth model",
        bullets: [
          "Quarterly performance reviews and incentive programmes",
          "Tiered dealer classification (Authorised → Premium → Flagship)",
          "Sub-dealer and satellite outlet development support",
        ],
      },
    ],
    flow: {
      title: "Dealer growth funnel",
      nodes: ["Enquiry", "Evaluation", "Onboarding", "Launch", "Scale", "Flagship"],
    },
    variant: "inside",
    meta: defaultMeta({
      images: ["Funnel infographic", "Onboarding checklist", "Dealer tier pyramid"],
      icons: ["Filter", "UserPlus", "TrendingUp"],
    }),
  },
  {
    id: "customer-journey",
    pageNumber: 27,
    title: "Experience",
    heading: "Customer Journey",
    intro:
      "From first enquiry to loyal advocacy, SPARS ELECTRIC designs every customer touchpoint for clarity, confidence, and delight.",
    flow: {
      title: "Customer journey map",
      nodes: ["Discover", "Visit", "Test Ride", "Finance", "Purchase", "Deliver", "Service", "Refer"],
    },
    cards: [
      { title: "Awareness", body: "Digital campaigns, dealer outreach, and word-of-mouth in local communities." },
      { title: "Consideration", body: "Showroom experience, product demonstration, and total cost of ownership counselling." },
      { title: "Ownership", body: "Delivery ceremony, warranty registration, and app onboarding." },
      { title: "Loyalty", body: "Service reminders, upgrade programmes, and referral incentives." },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Customer journey swimlane diagram", "Happy rider lifestyle shot"],
      icons: ["Smile", "ShoppingCart", "Repeat"],
    }),
  },
  {
    id: "business-model",
    pageNumber: 28,
    title: "Strategy",
    heading: "Business Model · Supply Chain · Sales Network",
    intro:
      "SPARS ELECTRIC operates a vertically integrated assembly model with a horizontally scaled sales and service network — optimised for capital efficiency and rapid market penetration.",
    cards: [
      {
        title: "Business model",
        bullets: [
          "Manufacturing & assembly revenue from owned production",
          "Dealer network margin sharing and incentive architecture",
          "Fleet and institutional bulk sales channel",
          "After-sales revenue from service and genuine parts",
        ],
      },
      {
        title: "Supply chain",
        bullets: [
          "Qualified domestic and import component suppliers",
          "Inbound logistics to Noida assembly hub",
          "Outbound distribution to regional dealer warehouses",
          "Vendor scorecard and alternate sourcing strategy",
        ],
      },
      {
        title: "Sales network",
        bullets: [
          "Authorised dealer showrooms across target states",
          "Fleet and corporate direct sales team",
          "Digital enquiry-to-dealer lead routing",
        ],
      },
    ],
    flow: {
      title: "Supply chain diagram",
      nodes: ["Suppliers", "Inbound", "Assembly", "QC", "Warehouse", "Dealers", "Customers"],
    },
    variant: "inside",
    meta: defaultMeta({
      images: ["Business model canvas", "Supply chain flow map", "India sales network map"],
      icons: ["Briefcase", "Link", "Network"],
    }),
  },
  {
    id: "marketing",
    pageNumber: 29,
    title: "Marketing",
    heading: "Marketing Strategy · Digital Presence",
    intro:
      "SPARS ELECTRIC deploys an integrated marketing engine — combining brand building, dealer co-marketing, and digital lead generation for measurable growth.",
    cards: [
      {
        title: "Marketing strategy",
        bullets: [
          "Brand positioning as premium, technology-driven Indian EV",
          "Launch campaigns in priority markets",
          "Dealer co-op advertising and event marketing",
          "Fleet and institutional B2B outreach",
        ],
      },
      {
        title: "Digital presence",
        bullets: [
          `Website: ${BRAND.website}`,
          "Mobile app for connected vehicle features (roadmap)",
          "Dealer portal for orders, leads, and inventory",
          "Customer portal for service booking and warranty",
        ],
      },
    ],
    flow: {
      title: "Sales funnel",
      nodes: ["Awareness", "Interest", "Enquiry", "Test Ride", "Conversion", "Retention"],
    },
    variant: "inside",
    meta: defaultMeta({
      images: ["Website mockup", "App screens", "Social media grid"],
      icons: ["Globe", "Smartphone", "Share2"],
    }),
  },
  {
    id: "ai-roadmap",
    pageNumber: 30,
    title: "Technology Roadmap",
    heading: "AI & Smart Technology Roadmap",
    intro:
      "SPARS ELECTRIC is investing in intelligent mobility capabilities — from connected vehicles to AI-assisted manufacturing and dealer analytics.",
    timeline: [
      { year: "2026", text: "Connected scooter app, OTA diagnostics readiness, dealer CRM launch." },
      { year: "2027", text: "Predictive maintenance, fleet telematics dashboard, AI lead scoring." },
      { year: "2028", text: "Smart factory IoT, automated QC vision systems, battery health AI." },
      { year: "2029", text: "Autonomous service scheduling, dynamic pricing intelligence, V2X readiness." },
      { year: "2030", text: "Integrated mobility platform — vehicle, energy, service, and data ecosystem." },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Technology roadmap timeline", "AI dashboard mockup", "IoT factory diagram"],
      icons: ["Brain", "Wifi", "Bot"],
    }),
  },
  {
    id: "product-roadmap",
    pageNumber: 31,
    title: "Product Roadmap",
    heading: "Future Product Roadmap · Sustainability · ESG · CSR",
    intro:
      "Long-term value at SPARS ELECTRIC is built through disciplined product evolution, environmental stewardship, and community impact.",
    cards: [
      {
        title: "Product roadmap",
        bullets: [
          "2026: Core electric scooter portfolio launch",
          "2027: Connected smart models and fleet variants",
          "2028: Extended range and commercial EV entry",
          "2029–2030: Multi-segment EV platform and energy services",
        ],
      },
      {
        title: "Sustainability",
        bullets: [
          "Zero tailpipe emissions across product range",
          "Energy-efficient assembly operations",
          "Battery recycling and responsible disposal partnerships",
        ],
      },
      {
        title: "ESG commitment",
        bullets: [
          "Environmental: carbon footprint reduction targets",
          "Social: safe workplaces and community employment",
          "Governance: transparent reporting and ethical sourcing",
        ],
      },
      {
        title: "CSR activities",
        bullets: [
          "EV awareness programmes in schools and colleges",
          "Skill development for youth in Noida region",
          "Green campus initiatives with partner institutions",
        ],
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Product roadmap Gantt", "Green leaf sustainability visual", "Community outreach photo"],
      icons: ["Leaf", "Recycle", "Heart"],
    }),
  },
  {
    id: "careers",
    pageNumber: 32,
    title: "Careers",
    heading: "Career at SPARS ELECTRIC",
    intro:
      "Join a high-growth Indian EV company where engineering talent, commercial excellence, and manufacturing skill converge to build national mobility infrastructure.",
    cards: [
      {
        title: "Open pathways",
        bullets: [
          "Campus hiring · Internships · GET · DET",
          "Industrial training & live projects",
          "Sales · Marketing · Production · Quality",
          "Mechanical · Electrical · ECE · CSE · MBA",
          "ITI · Polytechnic · Freshers · Experienced",
        ],
      },
      {
        title: "Why join SPARS",
        body: "Work on live EV products, gain factory-floor experience, and build a career in India's most transformative industry.",
      },
    ],
    flow: {
      title: "Campus hiring workflow",
      nodes: ["MoU", "Campus Visit", "Aptitude", "Interview", "Offer", "Onboarding", "Training"],
    },
    variant: "inside",
    meta: defaultMeta({
      images: ["Team at factory", "Campus recruitment booth", "Young engineers at work"],
      icons: ["GraduationCap", "Users", "Rocket"],
    }),
  },
  {
    id: "campus",
    pageNumber: 33,
    title: "Academia",
    heading: "Engineering Colleges · ITI · Polytechnic Partnership",
    intro:
      "SPARS ELECTRIC actively partners with academic institutions to bridge the industry-academia gap — creating skilled EV professionals for India's electric future.",
    cards: [
      { title: "Campus recruitment", body: "Structured placement drives for engineering, diploma, and ITI graduates." },
      { title: "Internship opportunities", body: "Semester and summer internships across R&D, production, and marketing." },
      { title: "Industrial & factory visits", body: "Guided tours of the Noida assembly facility for student batches." },
      { title: "Live projects", body: "Real-world EV engineering challenges mentored by SPARS technical teams." },
      { title: "Research collaboration", body: "Joint projects in battery, motor, and connected vehicle domains." },
      { title: "Training programmes", body: "Skill development workshops aligned to NSQF and industry requirements." },
      { title: "Placement partnership", body: "Priority hiring from partner institutions with MoU framework." },
      { title: "MoU framework", body: "Formal industry-academia collaboration agreements with defined deliverables." },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["College partnership handshake", "Students at factory tour", "MoU signing ceremony"],
      icons: ["School", "Handshake", "BookOpen"],
      layout: "Dedicated academia section · Two-column benefit grid · MoU callout strip",
    }),
  },
  {
    id: "hr",
    pageNumber: 34,
    title: "People",
    heading: "HR Policy · Benefits · Training · Career Growth",
    intro:
      "SPARS ELECTRIC invests in its people with fair policies, competitive benefits, and structured career progression — because a premium brand is built by premium teams.",
    cards: [
      {
        title: "HR policy overview",
        bullets: [
          "Equal opportunity and non-discrimination",
          "Defined code of conduct and POSH compliance",
          "Performance-linked appraisal cycles",
        ],
      },
      {
        title: "Employee benefits",
        bullets: [
          "Competitive compensation structures",
          "Health and accident insurance (as per policy)",
          "Festival bonuses and performance incentives",
          "Employee transport and meal provisions (as applicable)",
        ],
      },
      {
        title: "Training programme",
        bullets: [
          "Induction and safety training for all hires",
          "Technical upskilling for production and quality teams",
          "Leadership development for managerial roles",
        ],
      },
      {
        title: "Career growth",
        bullets: [
          "Clear progression paths: Executive → Senior → Lead → Manager",
          "Cross-functional rotation opportunities",
          "Recognition programmes for exceptional performance",
        ],
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Team culture photography", "Training classroom", "Career ladder graphic"],
      icons: ["UserCheck", "Gift", "TrendingUp"],
    }),
  },
  {
    id: "org-structure",
    pageNumber: 35,
    title: "Organisation",
    heading: "Organization Structure · Departments",
    intro:
      "SPARS ELECTRIC is structured for operational excellence — with clear accountability across manufacturing, commercial, technology, and support functions.",
    cards: [
      {
        title: "Leadership hierarchy",
        bullets: [
          "Chairman / Founder",
          "Managing Director",
          "CEO / COO",
          "Functional Heads → Department Managers → Teams",
        ],
      },
      {
        title: "Key departments",
        bullets: [
          "Manufacturing · Production · Quality · Purchase · Stores · Warehouse",
          "Sales · Marketing · HR · Accounts · Finance · IT",
          "R&D · Design · Customer Support · Service · Warranty · Spare Parts",
          "Legal · Admin · Operations · Business Development · Dealer Development",
          "Digital Marketing · CRM · AI Team · Software Team",
        ],
      },
    ],
    flow: {
      title: "Organization chart (simplified)",
      nodes: ["Board", "MD", "COO", "Sales", "Mfg", "R&D", "HR", "Finance"],
    },
    variant: "inside",
    meta: defaultMeta({
      images: ["Full organisation chart diagram", "Department icons grid"],
      icons: ["Sitemap", "Building", "Users"],
      layout: "Top-down org chart centre · Department grid below",
    }),
  },
  {
    id: "milestones",
    pageNumber: 36,
    title: "Growth",
    heading: "Awards · Milestones · Growth Timeline",
    intro:
      "SPARS ELECTRIC is on a defined growth trajectory. Awards and recognitions will be documented as the brand achieves industry milestones.",
    timeline: [
      { year: "M1", text: "[First production batch dispatched — Placeholder]" },
      { year: "M2", text: "[First dealer network city launch — Placeholder]" },
      { year: "M3", text: "[First institutional MoU signed — Placeholder]" },
      { year: "M4", text: "[Production milestone — units assembled — Placeholder]" },
      { year: "M5", text: "[Award / recognition — Placeholder]" },
    ],
    cards: [
      {
        title: "Awards & recognition",
        body: "Future placeholder for industry awards, government recognition, and media accolades.",
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Trophy placeholder graphic", "Milestone timeline", "Growth chart"],
      icons: ["Award", "Star", "Flag"],
    }),
  },
  {
    id: "expansion",
    pageNumber: 37,
    title: "Expansion",
    heading: "Expansion Plan 2026 – 2030",
    intro:
      "SPARS ELECTRIC's five-year expansion roadmap targets manufacturing scale, geographic coverage, product diversification, and technology leadership.",
    timeline: [
      { year: "2026", text: "Noida capacity optimisation · Core scooter launch · Initial dealer network in North & West India." },
      { year: "2027", text: "Pan-India dealer expansion · Connected vehicle launch · Second assembly line evaluation." },
      { year: "2028", text: "Commercial EV entry · Regional warehouse network · Export market feasibility." },
      { year: "2029", text: "Multi-plant strategy · Advanced battery partnership · 100+ dealer milestone target." },
      { year: "2030", text: "National EV brand recognition · Integrated mobility platform · IPO readiness evaluation." },
    ],
    flow: {
      title: "Expansion map of India",
      nodes: ["Noida HQ", "North", "West", "South", "East", "Northeast"],
    },
    variant: "inside",
    meta: defaultMeta({
      images: ["India expansion heat map", "Five-year roadmap graphic", "Capacity growth chart"],
      icons: ["Map", "Calendar", "Expand"],
    }),
  },
  {
    id: "investor",
    pageNumber: 38,
    title: "Investors",
    heading: "Investor Opportunity · Financial Strength",
    intro:
      "SPARS ELECTRIC presents a compelling investment thesis: a manufacturing-led EV company in India's highest-growth mobility segment, with a scalable dealer model and clear expansion roadmap.",
    cards: [
      {
        title: "Investment highlights",
        bullets: [
          "Structurally growing Indian EV two-wheeler market",
          "Asset-light scalable assembly model in Noida",
          "Dealer network as a capital-efficient distribution engine",
          "After-sales revenue stream from service and parts",
          "Defined 2026–2030 expansion and product roadmap",
        ],
      },
      {
        title: "Financial strength",
        bullets: [
          "Compliant commercial operations",
          "[Revenue figures — To Be Updated]",
          "[EBITDA trajectory — To Be Updated]",
          "[Funding requirements & use of funds — To Be Updated]",
        ],
      },
      {
        title: "Use of funds (indicative)",
        bullets: [
          "Capacity expansion and production line automation",
          "Working capital for inventory and dealer support",
          "R&D and connected vehicle technology",
          "Marketing and pan-India dealer onboarding",
        ],
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Investor pitch visual", "Financial growth chart", "Use of funds pie chart"],
      icons: ["DollarSign", "TrendingUp", "PieChart"],
      layout: "Investor-friendly · Data-forward · Clean financial visual hierarchy",
    }),
  },
  {
    id: "competitive",
    pageNumber: 39,
    title: "Partnership",
    heading: "Competitive Advantages · Why Partner With SPARS ELECTRIC",
    intro:
      "SPARS ELECTRIC combines the agility of a focused EV startup with the discipline of a manufacturing enterprise — creating durable advantages for dealers, investors, and institutional partners.",
    cards: [
      {
        title: "Competitive advantages",
        bullets: [
          "Noida manufacturing proximity to North India demand centres",
          "Dealer-centric business architecture with territory protection",
          "Structured quality and testing protocols from day one",
          "Academia partnership pipeline for talent and innovation",
          "Technology roadmap aligned to connected and smart mobility",
        ],
      },
      {
        title: "Why partner with us",
        bullets: [
          "Dealers: profitable territory, training, and marketing support",
          "Investors: scalable model in a high-growth sector",
          "Banks / NBFCs: finance-ready product for retail lending",
          "Suppliers: long-term volume partnership opportunity",
          "Institutions: MoU-driven placement and research collaboration",
          "Government: compliant manufacturing and employment generation in UP",
        ],
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Competitive matrix", "Partner logos placeholder strip", "Handshake premium visual"],
      icons: ["Trophy", "Handshake", "Star"],
    }),
  },
  {
    id: "contact",
    pageNumber: 40,
    title: "Contact",
    heading: "Contact Details",
    intro:
      "Connect with SPARS ELECTRIC for dealer partnerships, investor relations, institutional collaboration, fleet enquiries, and career opportunities.",
    cards: [
      { title: "Brand", body: BRAND.brandName },
      { title: "Legal entity", body: BRAND.legalName },
      { title: "Website", body: BRAND.website },
      { title: "Email", body: BRAND.email },
      { title: "Phone", body: BRAND.phone },
      { title: "Address", body: COMPANY.address },
      { title: "Corporate office", body: COMPANY.address },
      {
        title: "QR code",
        body: "[QR Code Placeholder — Link to website / dealer enquiry form]",
      },
      {
        title: "Social media",
        body: "[LinkedIn · Instagram · Facebook · YouTube — To Be Updated]",
      },
    ],
    variant: "inside",
    meta: defaultMeta({
      images: ["Contact card layout", "QR code placeholder", "Social media icon row", "Noida factory exterior"],
      icons: ["Mail", "Phone", "MapPin", "QrCode", "Share2"],
      layout: "Contact grid · QR code bottom-right · Social icons footer strip",
      footer: `${BRAND.brandName} · Thank you for your interest · ${BRAND.website}`,
    }),
  },
];

export const indexEntries = profilePages
  .filter((p) => p.id !== "cover" && p.id !== "index")
  .map((p) => ({ n: p.pageNumber, t: p.heading }));
