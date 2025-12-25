'use client';

import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  locale: string;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 p-1 bg-tactical-soft rounded border border-camo-olive/30">
      <button
        onClick={() => switchLocale('uk')}
        className={cn(
          'px-2.5 py-1 text-xs font-medium rounded transition-all duration-200',
          locale === 'uk'
            ? 'bg-camo-olive text-white'
            : 'text-gray-400 hover:text-white'
        )}
      >
        UA
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'px-2.5 py-1 text-xs font-medium rounded transition-all duration-200',
          locale === 'en'
            ? 'bg-camo-olive text-white'
            : 'text-gray-400 hover:text-white'
        )}
      >
        EN
      </button>
    </div>
  );
}
