'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, type = 'text', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {icon}
            </div>
          )}
          <input
            type={type}
            ref={ref}
            className={cn(
              'w-full px-4 py-3 bg-tactical-elevated border rounded',
              'text-white placeholder-gray-500',
              'focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold',
              'transition-all duration-200',
              error
                ? 'border-accent-red focus:ring-accent-red/50 focus:border-accent-red'
                : 'border-camo-olive/30 hover:border-camo-olive/50',
              icon && 'pl-10',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-accent-red">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-tactical-elevated border rounded',
            'text-white placeholder-gray-500',
            'focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold',
            'transition-all duration-200 resize-none',
            error
              ? 'border-accent-red focus:ring-accent-red/50 focus:border-accent-red'
              : 'border-camo-olive/30 hover:border-camo-olive/50',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-accent-red">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-tactical-elevated border rounded',
            'text-white',
            'focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold',
            'transition-all duration-200',
            error
              ? 'border-accent-red focus:ring-accent-red/50 focus:border-accent-red'
              : 'border-camo-olive/30 hover:border-camo-olive/50',
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-tactical-rich">
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1.5 text-sm text-accent-red">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
