import { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface InvestorsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: InvestorsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'investors' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function InvestorsPage({ params }: InvestorsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('investors');
  const tCta = await getTranslations('common.cta');

  const highlights = [
    {
      value: '800m',
      label: locale === 'uk' ? 'Ефективна дальність' : 'Effective Range',
    },
    {
      value: 'NATO',
      label: locale === 'uk' ? 'Сертифікація' : 'Certification',
    },
    {
      value: '2024',
      label: locale === 'uk' ? 'Бойовий досвід' : 'Combat Experience',
    },
    {
      value: '5+',
      label: locale === 'uk' ? 'Продуктів' : 'Products',
    },
  ];

  const benefits = [
    {
      title: locale === 'uk' ? 'Зростаючий ринок' : 'Growing Market',
      description: locale === 'uk'
        ? 'Глобальний попит на антидронові системи зростає щороку'
        : 'Global demand for anti-drone systems is growing every year',
    },
    {
      title: locale === 'uk' ? 'Унікальна технологія' : 'Unique Technology',
      description: locale === 'uk'
        ? 'Запатентовані рішення з доведеною ефективністю в бою'
        : 'Patented solutions with proven combat effectiveness',
    },
    {
      title: locale === 'uk' ? 'Сильна команда' : 'Strong Team',
      description: locale === 'uk'
        ? 'Досвідчені інженери та військові експерти'
        : 'Experienced engineers and military experts',
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-tactical-muted to-tactical-rich relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute -right-64 -top-64 w-[600px] h-[600px] bg-gradient-radial from-accent-gold/10 via-transparent to-transparent blur-3xl" />

        <div className="container-tactical relative z-10">
          <FadeIn>
            <Badge variant="gold" className="mb-4">
              {locale === 'uk' ? 'Інвестиції' : 'Investment'}
            </Badge>
            <h1 className="font-display text-display-lg md:text-display-xl tracking-wide mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-6">
              {t('subtitle')}
            </p>
            <p className="text-gray-400 max-w-3xl mb-8">
              {t('description')}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button size="lg">{tCta('contact')}</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-tactical-soft border-y border-camo-olive/30">
        <div className="container-tactical">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="font-display text-display-md text-accent-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-tactical-rich">
        <div className="container-tactical">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-display-md tracking-wide">
              {locale === 'uk' ? 'Чому інвестувати' : 'Why Invest'}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-6 bg-tactical-soft border border-camo-olive/30 rounded-lg">
                  <h3 className="font-display text-xl tracking-wide mb-3 text-accent-gold">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-tactical-muted">
        <div className="container-tactical text-center">
          <FadeIn>
            <h2 className="font-display text-display-md tracking-wide mb-6">
              {locale === 'uk' ? 'Готові обговорити?' : 'Ready to discuss?'}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              {locale === 'uk'
                ? 'Зв\'яжіться з нами для отримання детальної інформації про інвестиційні можливості'
                : 'Contact us to get detailed information about investment opportunities'}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button size="lg">{tCta('contact')}</Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
