import { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations';
import { Badge } from '@/components/ui/Badge';

interface TechnologyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TechnologyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'technology' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function TechnologyPage({ params }: TechnologyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('technology');

  const technologies = [
    {
      title: locale === 'uk' ? 'Система стабілізації' : 'Stabilization System',
      description: locale === 'uk'
        ? 'Автоматична система стабілізації для точного наведення навіть під час руху'
        : 'Automatic stabilization system for precise targeting even while moving',
      icon: '⊕',
    },
    {
      title: locale === 'uk' ? 'Модульна конструкція' : 'Modular Design',
      description: locale === 'uk'
        ? 'Легка інтеграція з FPV дронами та іншими платформами'
        : 'Easy integration with FPV drones and other platforms',
      icon: '⬡',
    },
    {
      title: locale === 'uk' ? 'Швидке перезарядження' : 'Fast Reload',
      description: locale === 'uk'
        ? 'Інноваційний механізм для швидкої зміни боєкомплекту в бойових умовах'
        : 'Innovative mechanism for quick ammunition change in combat conditions',
      icon: '↻',
    },
    {
      title: locale === 'uk' ? 'Бойові випробування' : 'Combat Tested',
      description: locale === 'uk'
        ? 'Всі продукти пройшли реальні бойові випробування на передовій'
        : 'All products have undergone real combat testing on the front line',
      icon: '✓',
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-tactical-muted to-tactical-rich relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container-tactical relative z-10">
          <FadeIn>
            <Badge variant="gold" className="mb-4">R&D</Badge>
            <h1 className="font-display text-display-lg md:text-display-xl tracking-wide mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-6">
              {t('subtitle')}
            </p>
            <p className="text-gray-400 max-w-3xl">
              {t('description')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 bg-tactical-rich">
        <div className="container-tactical">
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-8 bg-tactical-soft border border-camo-olive/30 rounded-lg hover:border-accent-gold/30 transition-colors group">
                  <div className="w-16 h-16 flex items-center justify-center text-3xl text-accent-gold bg-camo-olive/20 rounded-lg mb-6 group-hover:bg-accent-gold/20 transition-colors">
                    {tech.icon}
                  </div>
                  <h3 className="font-display text-2xl tracking-wide mb-3 group-hover:text-accent-gold transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-gray-400">
                    {tech.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-tactical-muted">
        <div className="container-tactical">
          <FadeIn>
            <div className="relative aspect-[21/9] rounded-lg overflow-hidden border border-camo-olive/30">
              <Image
                src="/images/shevrones_carousel.svg"
                alt="VARTA Technology"
                fill
                className="object-contain p-8 bg-gradient-to-br from-tactical-elevated to-tactical-soft"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
