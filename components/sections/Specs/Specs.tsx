'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations';
import { PRODUCTS } from '@/lib/constants';

interface ProductWithRange {
  id: string;
  image: string;
  specs: {
    range: number;
    weight: number;
    ammo: number;
    reloadTime: number;
  };
  badges: readonly string[];
}

export function Specs() {
  const t = useTranslations('products');

  const productsWithSpecs = PRODUCTS.filter(
    (p) => 'range' in p.specs
  ) as unknown as ProductWithRange[];

  return (
    <section className="section-padding bg-tactical-muted">
      <div className="container-tactical">
        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <h2 className="font-display text-display-md tracking-wide mb-4">
            {t('specs.range').toUpperCase()}
          </h2>
        </FadeIn>

        {/* Specs Table */}
        <FadeIn delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full border border-camo-olive/30 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-tactical-elevated">
                  <th className="px-6 py-4 text-left font-mono text-sm text-gray-400 uppercase tracking-wider">
                    {locale === 'uk' ? 'Параметр' : 'Parameter'}
                  </th>
                  {productsWithSpecs.map((product) => (
                    <th
                      key={product.id}
                      className="px-6 py-4 text-center font-display text-lg text-accent-gold tracking-wide"
                    >
                      {product.id.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-camo-olive/20">
                <tr className="hover:bg-tactical-elevated/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm text-gray-300">
                    {t('specs.range')}
                  </td>
                  {productsWithSpecs.map((product) => (
                    <td
                      key={product.id}
                      className="px-6 py-4 text-center font-mono text-camo-sand"
                    >
                      {product.specs.range} {t('specs.unit.meters')}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-tactical-elevated/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm text-gray-300">
                    {t('specs.weight')}
                  </td>
                  {productsWithSpecs.map((product) => (
                    <td
                      key={product.id}
                      className="px-6 py-4 text-center font-mono text-camo-sand"
                    >
                      {product.specs.weight} {t('specs.unit.kg')}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-tactical-elevated/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm text-gray-300">
                    {t('specs.ammo')}
                  </td>
                  {productsWithSpecs.map((product) => (
                    <td
                      key={product.id}
                      className="px-6 py-4 text-center font-mono text-camo-sand"
                    >
                      {product.specs.ammo} {t('specs.unit.rounds')}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-tactical-elevated/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm text-gray-300">
                    {t('specs.reloadTime')}
                  </td>
                  {productsWithSpecs.map((product) => (
                    <td
                      key={product.id}
                      className="px-6 py-4 text-center font-mono text-camo-sand"
                    >
                      {product.specs.reloadTime} {t('specs.unit.seconds')}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* NATO Badge */}
        <FadeIn delay={0.3} className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-mono">
            * {locale === 'uk' ? 'Всі продукти відповідають стандартам NATO' : 'All products comply with NATO standards'}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

const locale = 'uk'; // This would normally come from context
