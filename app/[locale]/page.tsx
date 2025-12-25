import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { Features } from '@/components/sections/Features';
import { Complects } from '@/components/sections/Complects';
import { CTA } from '@/components/sections/CTA';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero locale={locale} />
      <Products locale={locale} />
      <Features />
      <Complects locale={locale} />
      <CTA locale={locale} />
    </>
  );
}
