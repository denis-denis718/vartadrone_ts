import { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations';
import { Badge } from '@/components/ui/Badge';
import { BASE_PATH } from '@/lib/constants';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');

  const values = [
    {
      title: locale === 'uk' ? 'Інновації' : 'Innovation',
      description: locale === 'uk'
        ? 'Постійний розвиток та вдосконалення технологій на основі бойового досвіду'
        : 'Continuous development and improvement of technologies based on combat experience',
    },
    {
      title: locale === 'uk' ? 'Якість' : 'Quality',
      description: locale === 'uk'
        ? 'Кожен продукт проходить ретельне тестування перед постачанням'
        : 'Every product undergoes thorough testing before delivery',
    },
    {
      title: locale === 'uk' ? 'Надійність' : 'Reliability',
      description: locale === 'uk'
        ? 'Наші системи працюють в найскладніших бойових умовах'
        : 'Our systems work in the most challenging combat conditions',
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-tactical-muted to-tactical-rich relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />

        <div className="container-tactical relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <Badge variant="gold" className="mb-4">
                {locale === 'uk' ? 'Про компанію' : 'About Us'}
              </Badge>
              <h1 className="font-display text-display-lg md:text-display-xl tracking-wide mb-4">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {t('subtitle')}
              </p>
              <p className="text-gray-400">
                {t('description')}
              </p>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-camo-olive/30">
                <Image
                  src={`${BASE_PATH}/images/varta_logo.webp`}
                  alt="VARTA DroneHunter"
                  fill
                  className="object-contain p-12 bg-gradient-to-br from-tactical-elevated to-tactical-soft"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-tactical-soft border-y border-camo-olive/30">
        <div className="container-tactical">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-display-md tracking-wide mb-6">
              {t('mission.title')}
            </h2>
            <p className="text-2xl text-accent-gold font-display tracking-wide">
              {t('mission.description')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-tactical-rich">
        <div className="container-tactical">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-display-md tracking-wide">
              {locale === 'uk' ? 'Наші цінності' : 'Our Values'}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-8 bg-tactical-soft border border-camo-olive/30 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-3xl text-accent-gold bg-camo-olive/20 rounded-full">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-xl tracking-wide mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20 bg-tactical-muted">
        <div className="container-tactical">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-camo-olive/30">
                <Image
                  src={`${BASE_PATH}/images/droneHunterVarta.svg`}
                  alt="VARTA Products"
                  fill
                  className="object-contain p-8 bg-gradient-to-br from-tactical-elevated to-tactical-soft"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-camo-olive/30">
                <Image
                  src={`${BASE_PATH}/images/sich_complect.svg`}
                  alt="VARTA Complects"
                  fill
                  className="object-contain p-8 bg-gradient-to-br from-tactical-elevated to-tactical-soft"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
