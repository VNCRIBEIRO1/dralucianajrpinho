'use client';

import { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full mb-4 ${
            light
              ? 'bg-white/20 text-white border border-white/10'
              : 'bg-gradient-to-r from-gold-100/50 via-secondary-100 to-gold-100/50 text-gold-700 border border-gold-200/30'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`section-title ${
          light ? 'text-white' : ''
        } ${centered ? 'mx-auto' : ''}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-subtitle ${
            light ? 'text-secondary-300' : ''
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
