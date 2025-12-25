'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'gold';
  size?: 'sm' | 'md';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center font-mono uppercase tracking-wider rounded',

          // Sizes
          {
            'px-2 py-0.5 text-[10px]': size === 'sm',
            'px-3 py-1 text-xs': size === 'md',
          },

          // Variants
          {
            'bg-camo-olive/20 text-camo-sand border border-camo-olive/40':
              variant === 'default',
            'bg-accent-green/20 text-green-400 border border-accent-green/40':
              variant === 'success',
            'bg-yellow-900/20 text-yellow-400 border border-yellow-700/40':
              variant === 'warning',
            'bg-accent-red/20 text-red-400 border border-accent-red/40':
              variant === 'danger',
            'bg-accent-gold/20 text-accent-gold border border-accent-gold/40':
              variant === 'gold',
          },

          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
