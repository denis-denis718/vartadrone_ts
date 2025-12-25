import { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Products } from '@/components/sections/Products';
import { FadeIn } from '@/components/animations';

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'products' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('products');

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="py-16 bg-tactical-muted">
        <div className="container-tactical">
          <FadeIn>
            <h1 className="font-display text-display-lg md:text-display-xl tracking-wide mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              {t('subtitle')}
            </p>
          </FadeIn>
        </div>
      </section>

      <Products locale={locale} />
    </div>
  );
}
