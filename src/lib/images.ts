export const IMAGES = {
  logo: "/brands/kalpana-traders-logo.svg",
  hero: "/images/sections/hero.jpg",
  factory: "/images/scooters/scooter-lineup-4colors.png",
  team: "/images/sections/team.jpg",
  about: "/images/scooters/scooter-lineup-3colors.png",
  battery: "/images/battery/spars-battery-premium.png",
  batteryAssembly: "/images/battery/spars-battery-assembly.png",
  batteryLithium: "/images/battery/spars-battery-lithium.png",
  batteryPacks: "/images/battery/spars-battery-packs.png",
  electronics: "/images/sections/electronics.jpg",
  warehouse: "/images/sections/warehouse.jpg",
  dealer: "/images/sections/dealer.jpg",
  scooters: {
    blueBlack: "/images/scooters/scooter-blue-black.png",
    lineup3: "/images/scooters/scooter-lineup-3colors.png",
    lineup4: "/images/scooters/scooter-lineup-4colors.png",
    lineup6: "/images/scooters/scooter-lineup-6colors.png",
  },
} as const;

export const BRAND_LOGOS = {
  "kalpana-traders": "/brands/kalpana-traders-logo.svg",
  "spars-electric": "/brands/spars-electric-logo.svg",
  "spars-battery": "/brands/spars-battery-logo.svg",
  "killa-electronics": "/brands/killa-electronics-logo.svg",
} as const;

const SCOOTER_IMAGES: Record<string, string> = {
  "se-city": IMAGES.scooters.blueBlack,
  "se-pro": IMAGES.scooters.lineup3,
  "se-fleet": IMAGES.scooters.lineup6,
  "se-lite": IMAGES.scooters.lineup4,
  "se-max": IMAGES.scooters.blueBlack,
  "se-cargo": IMAGES.scooters.lineup6,
};

/** SPARS Battery — user-provided product photos */
const BATTERY_IMAGES: Record<string, string> = {
  "sb-pack-48": IMAGES.battery,
  "sb-pack-60": IMAGES.batteryPacks,
  "sb-pack-72": IMAGES.batteryPacks,
  "sb-bms": IMAGES.batteryAssembly,
  "sb-solar": IMAGES.batteryLithium,
  "sb-swap": IMAGES.batteryPacks,
};

const ELECTRONICS_IMAGES: Record<string, string> = {
  "ke-motor-ctrl": "/images/products/ke-motor-ctrl.jpg",
  "ke-display": "/images/products/ke-display.jpg",
  "ke-charger": "/images/products/ke-charger.jpg",
  "ke-dcdc": "/images/products/ke-dcdc.jpg",
  "ke-iot": "/images/products/ke-iot.jpg",
  "ke-throttle": "/images/products/ke-throttle.jpg",
  "ke-converter": "/images/products/ke-converter.jpg",
  "ke-led": "/images/products/ke-led.jpg",
};

export const PRODUCT_IMAGES: Record<string, string> = {
  ...SCOOTER_IMAGES,
  ...BATTERY_IMAGES,
  ...ELECTRONICS_IMAGES,
};

export const BRAND_HERO_IMAGES: Record<string, string> = {
  "spars-electric": IMAGES.scooters.lineup6,
  "spars-battery": IMAGES.battery,
  "killa-electronics": IMAGES.electronics,
};
