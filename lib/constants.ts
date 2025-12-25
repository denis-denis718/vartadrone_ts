export const SITE_CONFIG = {
  name: 'VARTA DroneHunter',
  domain: 'vartadrone.com',
  description: 'Ukrainian manufacturer of anti-drone defense systems',
} as const;

export const NAV_ITEMS = [
  { key: 'products', href: '/products' },
  { key: 'solutions', href: '/solutions' },
  { key: 'technology', href: '/technology' },
  { key: 'investors', href: '/investors' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const;

export const PRODUCTS = [
  {
    id: 'kozak',
    image: '/images/droneHunterVarta.svg',
    specs: {
      range: 800,
      weight: 1.2,
      ammo: 6,
      reloadTime: 8,
    },
    badges: ['NATO', 'COMBAT_TESTED'],
  },
  {
    id: 'sich',
    image: '/images/sich_complect.svg',
    specs: {
      range: 600,
      weight: 0.8,
      ammo: 4,
      reloadTime: 6,
    },
    badges: ['NATO', 'COMPACT'],
  },
  {
    id: 'bulava',
    image: '/images/droneSecondHunterVarta.svg',
    specs: {
      range: 1200,
      weight: 2.4,
      ammo: 12,
      reloadTime: 15,
    },
    badges: ['NATO', 'HEAVY_DUTY'],
  },
  {
    id: 'spys',
    image: '/images/forComplect.webp',
    specs: {
      caliber: '20mm',
      types: ['SPYS20', 'SPYS2K'],
    },
    badges: ['SPECIALIZED'],
  },
] as const;

export const COMPLECTS = [
  {
    id: 'lucky-strike-basic',
    image: '/images/sich_complect.svg',
    products: ['kozak', 'spys20'],
  },
  {
    id: 'lucky-strike-pro',
    image: '/images/sich_complect2.svg',
    products: ['kozak', 'sich', 'spys20', 'spys2k'],
  },
  {
    id: 'lucky-strike-tactical',
    image: '/images/forComplect2.webp',
    products: ['bulava', 'kozak', 'sich', 'spys20', 'spys2k'],
  },
] as const;

export const SOCIAL_LINKS = {
  telegram: 'https://t.me/vartadrone',
  instagram: 'https://instagram.com/vartadrone',
  facebook: 'https://facebook.com/vartadrone',
  youtube: 'https://youtube.com/@vartadrone',
} as const;

export const CONTACT_INFO = {
  email: 'info@vartadrone.com',
  phone: '+380 XX XXX XXXX',
} as const;
