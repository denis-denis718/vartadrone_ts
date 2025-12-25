'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  type: z.enum(['inquiry', 'partnership', 'investor', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const t = useTranslations('contact');
  const tCta = useTranslations('common.cta');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      type: 'inquiry',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setIsSuccess(true);
      reset();
    } catch {
      setError(t('form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const requestTypes = [
    { value: 'inquiry', label: t('form.type.inquiry') },
    { value: 'partnership', label: t('form.type.partnership') },
    { value: 'investor', label: t('form.type.investor') },
    { value: 'other', label: t('form.type.other') },
  ];

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

      {/* Form Section */}
      <section className="py-20 bg-tactical-rich">
        <div className="container-tactical">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <FadeIn direction="left">
              <div>
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
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="right">
              <div className="bg-tactical-soft border border-camo-olive/30 rounded-lg p-8">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-accent-green/20 rounded-full text-accent-green">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl mb-2">{t('form.success')}</h3>
                    <Button
                      variant="outline"
                      onClick={() => setIsSuccess(false)}
                      className="mt-4"
                    >
                      {t('form.type.other')}
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label={t('form.name')}
                        placeholder={t('form.name')}
                        error={errors.name?.message}
                        {...register('name')}
                      />
                      <Input
                        label={t('form.email')}
                        type="email"
                        placeholder="email@example.com"
                        error={errors.email?.message}
                        {...register('email')}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label={t('form.phone')}
                        placeholder="+380 XX XXX XXXX"
                        {...register('phone')}
                      />
                      <Input
                        label={t('form.company')}
                        placeholder={t('form.company')}
                        {...register('company')}
                      />
                    </div>

                    <Select
                      label={t('form.type.label')}
                      options={requestTypes}
                      {...register('type')}
                    />

                    <Textarea
                      label={t('form.message')}
                      placeholder={t('form.message')}
                      rows={5}
                      error={errors.message?.message}
                      {...register('message')}
                    />

                    {error && (
                      <p className="text-accent-red text-sm">{error}</p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      {t('form.submit')}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
