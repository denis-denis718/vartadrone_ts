import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations';
import { PRODUCTS } from '@/lib/constants';

interface ProductPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'products' });

  const product = PRODUCTS.find((p) => p.id === slug);
  if (!product) return {};

  return {
    title: t(`${slug}.name`),
    description: t(`${slug}.description`),
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = PRODUCTS.find((p) => p.id === slug);
  if (!product) {
    notFound();
  }

  const t = await getTranslations('products');
  const tBadges = await getTranslations('common.badges');
  const tCta = await getTranslations('common.cta');

  return (
    <div className="pt-24 min-h-screen">
      <div className="container-tactical py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <FadeIn direction="left">
            <div className="sticky top-32">
              <div className="relative aspect-square bg-gradient-to-br from-tactical-elevated to-tactical-soft rounded-lg border border-camo-olive/30 p-8">
                <Image
                  src={product.image}
                  alt={t(`${slug}.name`)}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </FadeIn>

          {/* Product Info */}
          <FadeIn direction="right">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.badges.map((badge) => (
                  <Badge key={badge} variant="gold">
                    {tBadges(badge)}
                  </Badge>
                ))}
              </div>

              {/* Name */}
              <h1 className="font-display text-display-lg md:text-display-xl tracking-wide mb-2">
                {t(`${slug}.name`)}
              </h1>

              {/* Tagline */}
              <p className="text-xl text-accent-gold mb-6">
                {t(`${slug}.tagline`)}
              </p>

              {/* Description */}
              <p className="text-gray-300 mb-8 leading-relaxed">
                {t(`${slug}.description`)}
              </p>

              {/* Specs Table */}
              {'range' in product.specs && (
                <div className="bg-tactical-soft border border-camo-olive/30 rounded-lg p-6 mb-8">
                  <h3 className="font-display text-lg tracking-wide mb-4 text-white">
                    {locale === 'uk' ? 'Технічні характеристики' : 'Technical Specifications'}
                  </h3>
                  <div className="space-y-3 font-mono">
                    <div className="flex justify-between py-2 border-b border-camo-olive/20">
                      <span className="text-gray-400">{t('specs.range')}</span>
                      <span className="text-camo-sand font-medium">
                        {product.specs.range} {t('specs.unit.meters')}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-camo-olive/20">
                      <span className="text-gray-400">{t('specs.weight')}</span>
                      <span className="text-camo-sand font-medium">
                        {product.specs.weight} {t('specs.unit.kg')}
                      </span>
                    </div>
                    {product.specs.ammo && (
                      <div className="flex justify-between py-2 border-b border-camo-olive/20">
                        <span className="text-gray-400">{t('specs.ammo')}</span>
                        <span className="text-camo-sand font-medium">
                          {product.specs.ammo} {t('specs.unit.rounds')}
                        </span>
                      </div>
                    )}
                    {product.specs.reloadTime && (
                      <div className="flex justify-between py-2">
                        <span className="text-gray-400">{t('specs.reloadTime')}</span>
                        <span className="text-camo-sand font-medium">
                          {product.specs.reloadTime} {t('specs.unit.seconds')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="w-full sm:w-auto">
                    {tCta('request')}
                  </Button>
                </Link>
                <Link href={`/${locale}/products`}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    {tCta('viewCatalog')}
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
