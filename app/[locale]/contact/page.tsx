'use client';

import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-tactical-muted">
        <div className="container-tactical">
          <FadeIn>
            <h1 className="font-display text-display-lg md:text-display-xl tracking-wide mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              {t('subtitle')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-tactical-rich">
        <div className="container-tactical">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <Badge variant="gold" className="mb-6">
                {t('title')}
              </Badge>

              <h2 className="font-display text-display-md tracking-wide mb-8">
                {t('subtitle')}
              </h2>

              <div className="space-y-6 mb-12">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 p-4 bg-tactical-soft border border-camo-olive/30 rounded-lg hover:border-accent-gold/30 transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-camo-olive/20 rounded-lg text-accent-gold group-hover:bg-accent-gold/20 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white group-hover:text-accent-gold transition-colors">
                      {CONTACT_INFO.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 bg-tactical-soft border border-camo-olive/30 rounded-lg hover:border-accent-gold/30 transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-camo-olive/20 rounded-lg text-accent-gold group-hover:bg-accent-gold/20 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white group-hover:text-accent-gold transition-colors">
                      {CONTACT_INFO.phone}
                    </div>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                  Social
                </h3>
                <div className="flex gap-4">
                  {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded bg-tactical-soft border border-camo-olive/30 text-gray-400 hover:text-accent-gold hover:border-accent-gold/30 transition-colors"
                    >
                      {name.charAt(0).toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
