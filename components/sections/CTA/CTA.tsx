'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations';

interface CTAProps {
  locale: string;
}

export function CTA({ locale }: CTAProps) {
  const t = useTranslations('about');
  const tCta = useTranslations('common.cta');

  return (
    <section className="section-padding bg-tactical-rich relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute -right-64 -top-64 w-[600px] h-[600px] bg-gradient-radial from-accent-gold/10 via-transparent to-transparent blur-3xl" />

      <div className="container-tactical relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-camo-olive/30">
              <Image
                src="/images/droneSecondHunterVarta.svg"
                alt="VARTA DroneHunter"
                fill
                className="object-contain p-8 bg-gradient-to-br from-tactical-soft to-tactical-muted"
              />
              {/* Overlay badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-accent-gold/90 text-tactical-rich text-xs font-mono uppercase tracking-wider rounded">
                {locale === 'uk' ? 'Новий продукт' : 'New Product'}
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right">
            <div>
              <h2 className="font-display text-display-md md:text-display-lg tracking-wide mb-6">
                {t('mission.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                {t('mission.description')}
              </p>
              <p className="text-gray-400 mb-8">
                {t('description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg">{tCta('request')}</Button>
                </Link>
                <Link href={`/${locale}/about`}>
                  <Button variant="ghost" size="lg">
                    {tCta('learnMore')}
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-camo-olive/30">
                <div>
                  <div className="font-display text-3xl text-accent-gold">800m</div>
                  <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                    {locale === 'uk' ? 'Дальність' : 'Range'}
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl text-accent-gold">NATO</div>
                  <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                    {locale === 'uk' ? 'Стандарт' : 'Standard'}
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl text-accent-gold">24/7</div>
                  <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                    {locale === 'uk' ? 'Підтримка' : 'Support'}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
