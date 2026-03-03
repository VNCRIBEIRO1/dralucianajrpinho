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
              : 'bg-gradient-to-r from-inclusion-lilac/30 via-inclusion-blush/20 to-inclusion-sky/30 text-lavender-600 border border-inclusion-lilac/20'
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
            light ? 'text-primary-200' : ''
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
