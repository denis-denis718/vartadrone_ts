'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/constants';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MobileMenuProps {
  locale: string;
  onClose: () => void;
}

export function MobileMenu({ locale, onClose }: MobileMenuProps) {
  const t = useTranslations('nav');
  const tCta = useTranslations('common.cta');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-tactical-rich border-l border-camo-olive/30"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-camo-olive/30">
            <span className="font-display text-xl text-white">VARTA</span>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-4">
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/${locale}${item.href}`}
                    onClick={onClose}
                    className="block py-3 text-lg text-gray-300 hover:text-accent-gold transition-colors border-b border-camo-olive/20"
                  >
                    {t(item.key)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-camo-olive/30 space-y-4">
            <LanguageSwitcher locale={locale} />
            <Link
              href={`/${locale}/contact`}
              onClick={onClose}
              className="block w-full py-3 bg-accent-gold text-tactical-rich font-medium text-center rounded hover:bg-accent-amber transition-colors"
            >
              {tCta('request')}
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
