import { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';

interface NewsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('news');

  // Placeholder news items
  const news = [
    {
      id: 1,
      date: '2024-12-20',
      category: locale === 'uk' ? 'Продукти' : 'Products',
      title: locale === 'uk' ? 'Запуск нового продукту BULAVA' : 'New BULAVA Product Launch',
      excerpt: locale === 'uk'
        ? 'Представляємо новий важкий антидроновий комплекс з покращеними характеристиками'
        : 'Introducing the new heavy anti-drone complex with improved specifications',
    },
    {
      id: 2,
      date: '2024-12-15',
      category: locale === 'uk' ? 'Партнерство' : 'Partnership',
      title: locale === 'uk' ? 'Нове стратегічне партнерство' : 'New Strategic Partnership',
      excerpt: locale === 'uk'
        ? 'VARTA підписує угоду про співпрацю з провідними виробниками FPV дронів'
        : 'VARTA signs cooperation agreement with leading FPV drone manufacturers',
    },
    {
      id: 3,
      date: '2024-12-10',
      category: locale === 'uk' ? 'Технології' : 'Technology',
      title: locale === 'uk' ? 'Оновлення системи стабілізації' : 'Stabilization System Update',
      excerpt: locale === 'uk'
        ? 'Нова версія системи стабілізації забезпечує ще вищу точність'
        : 'New version of stabilization system provides even higher accuracy',
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
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

      {/* News Grid */}
      <section className="py-20 bg-tactical-rich">
        <div className="container-tactical">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <Card variant="bordered" className="h-full group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge size="sm">{item.category}</Badge>
                      <span className="text-xs text-gray-500 font-mono">
                        {new Date(item.date).toLocaleDateString(locale, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>

                    <h3 className="font-display text-xl tracking-wide mb-3 group-hover:text-accent-gold transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {item.excerpt}
                    </p>

                    <span className="text-accent-gold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {t('readMore')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
