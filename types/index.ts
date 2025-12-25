export interface Product {
  id: string;
  image: string;
  specs: ProductSpecs;
  badges: string[];
}

export interface ProductSpecs {
  range?: number;
  weight?: number;
  ammo?: number;
  reloadTime?: number;
  caliber?: string;
  types?: string[];
}

export interface Complect {
  id: string;
  image: string;
  products: string[];
}

export interface NavItem {
  key: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  type: 'inquiry' | 'partnership' | 'investor' | 'other';
}

export interface NewsletterFormData {
  email: string;
}

export type Locale = 'uk' | 'en';

export interface PageProps {
  params: Promise<{ locale: Locale }>;
}
