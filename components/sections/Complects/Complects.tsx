'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations';
import { COMPLECTS } from '@/lib/constants';

interface ComplectsProps {
  locale: string;
}

const complectKeys = ['basic', 'pro', 'tactical'] as const;

export function Complects({ locale }: ComplectsProps) {
  const t = useTranslations('solutions');
  const tCta = useTranslations('common.cta');

  return (
    <section className="section-padding bg-tactical-soft relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-camo-dark/50 via-transparent to-camo-olive/10" />

      <div className="container-tactical relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <Badge variant="gold" className="mb-4">LuckyStrike</Badge>
          <h2 className="font-display text-display-md md:text-display-lg tracking-wide mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </FadeIn>

        {/* Complects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {COMPLECTS.map((complect, index) => {
            const key = complectKeys[index];
            return (
              <FadeIn key={complect.id} delay={index * 0.15}>
                <Card variant="bordered" className="h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[4/3] p-4 bg-gradient-to-b from-tactical-elevated to-tactical-muted">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={complect.image}
                        alt={t(`${key}.name`)}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </div>

                  <CardContent className="flex-1 flex flex-col">
                    {/* Name */}
                    <h3 className="font-display text-2xl tracking-wide text-white mb-2">
                      {t(`${key}.name`)}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">
                      {t(`${key}.description`)}
                    </p>

                    {/* Products included */}
                    <div className="mb-6">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {t('includes')}:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {complect.products.map((product) => (
                          <Badge key={product} size="sm" variant="default">
                            {product.toUpperCase()}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Link href={`/${locale}/solutions`}>
                        <Button variant="outline" className="w-full">
                          {tCta('learnMore')}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
