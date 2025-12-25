'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations';

const FEATURES = [
  {
    key: 'precision',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: 'reliability',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    key: 'mobility',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    key: 'nato',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function Features() {
  const t = useTranslations('features');

  return (
    <section className="section-padding bg-tactical-rich relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-camo-olive/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-accent-gold/5 to-transparent blur-3xl" />

      <div className="container-tactical relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-display-md md:text-display-lg tracking-wide mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </FadeIn>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <FadeIn key={feature.key} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 bg-tactical-soft border border-camo-olive/20 rounded-lg hover:border-camo-olive/40 transition-colors group"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-camo-olive/20 text-accent-gold group-hover:bg-accent-gold/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl tracking-wide mb-3 group-hover:text-accent-gold transition-colors">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(`${feature.key}.description`)}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
