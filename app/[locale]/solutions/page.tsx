import { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Complects } from '@/components/sections/Complects';
import { FadeIn } from '@/components/animations';

interface SolutionsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: SolutionsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'solutions' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('solutions');

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

      <Complects locale={locale} />
    </div>
  );
}
