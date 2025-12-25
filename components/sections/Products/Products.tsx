'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations';
import { PRODUCTS } from '@/lib/constants';

interface ProductsProps {
  locale: string;
}

export function Products({ locale }: ProductsProps) {
  const t = useTranslations('products');
  const tBadges = useTranslations('common.badges');

  return (
    <section className="section-padding bg-tactical-muted relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

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

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.1}>
              <Link href={`/${locale}/products/${product.id}`}>
                <Card
                  variant="bordered"
                  className="h-full group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative aspect-square p-6 bg-gradient-to-b from-tactical-elevated to-tactical-soft overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={product.image}
                        alt={t(`${product.id}.name`)}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </div>

                  <CardContent>
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.badges.map((badge) => (
                        <Badge key={badge} size="sm">
                          {tBadges(badge)}
                        </Badge>
                      ))}
                    </div>

                    {/* Name */}
                    <h3 className="font-display text-2xl tracking-wide text-white mb-1 group-hover:text-accent-gold transition-colors">
                      {t(`${product.id}.name`)}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm text-gray-400 mb-4">
                      {t(`${product.id}.tagline`)}
                    </p>

                    {/* Specs */}
                    {'range' in product.specs && (
                      <div className="space-y-1 font-mono text-sm">
                        <div className="flex justify-between text-gray-500">
                          <span>{t('specs.range')}:</span>
                          <span className="text-camo-sand">
                            {product.specs.range} {t('specs.unit.meters')}
                          </span>
                        </div>
                        <div className="flex justify-between text-gray-500">
                          <span>{t('specs.weight')}:</span>
                          <span className="text-camo-sand">
                            {product.specs.weight} {t('specs.unit.kg')}
                          </span>
                        </div>
                        {product.specs.ammo && (
                          <div className="flex justify-between text-gray-500">
                            <span>{t('specs.ammo')}:</span>
                            <span className="text-camo-sand">
                              {product.specs.ammo} {t('specs.unit.rounds')}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Arrow */}
                    <div className="mt-4 flex items-center text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm">{locale === 'uk' ? 'Детальніше' : 'Learn more'}</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
