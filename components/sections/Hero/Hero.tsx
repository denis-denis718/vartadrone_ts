'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { TextReveal } from '@/components/animations';
import { BASE_PATH } from '@/lib/constants';

interface HeroProps {
  locale: string;
}

export function Hero({ locale }: HeroProps) {
  const t = useTranslations('hero');
  const tCta = useTranslations('common.cta');
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-tactical-rich via-transparent to-tactical-rich" />
      <div className="absolute inset-0 bg-gradient-radial from-camo-olive/10 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container-tactical pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="badge-tactical">
                {locale === 'uk' ? 'Зроблено в Україні' : 'Made in Ukraine'}
              </span>
            </motion.div>

            <h1 className="font-display text-display-lg md:text-display-xl lg:text-7xl tracking-wide mb-2">
              <TextReveal text={t('title')} delay={0.3} />
            </h1>
            <h2 className="font-display text-display-md md:text-display-lg text-accent-gold tracking-wide mb-6">
              <TextReveal text={t('titleAccent')} delay={0.5} />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              {t('subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {t('description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href={`/${locale}/contact`}>
                <Button size="lg">{tCta('request')}</Button>
              </Link>
              <Link href={`/${locale}/products`}>
                <Button variant="outline" size="lg">
                  {tCta('viewCatalog')}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Drone Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-square max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative w-full h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-accent-gold/20 via-transparent to-transparent blur-3xl" />

              {/* Main image */}
              <Image
                src={`${BASE_PATH}/images/droneHunterVarta.svg`}
                alt="VARTA DroneHunter"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">
          {t('scrollToExplore')}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-accent-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
