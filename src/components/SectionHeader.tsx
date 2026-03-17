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
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-6 ${
            light
              ? 'bg-gold-400/10 text-gold-400 border border-gold-400/20 shadow-lg shadow-gold-400/5'
              : 'bg-gold-100/50 text-gold-700 border border-gold-200/30'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`section-title ${
          light ? '!text-white drop-shadow-[0_2px_12px_rgba(212,175,55,0.15)]' : ''
        } ${centered ? 'mx-auto' : ''}`}
      >
        {title}
      </h2>
      {subtitle && (
        <>
          {light && (
            <div className={`w-16 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent my-5 ${centered ? 'mx-auto' : ''}`} />
          )}
          <p
            className={`section-subtitle ${
              light ? '!text-warm-300/60 !max-w-xl' : ''
            } ${centered ? 'mx-auto' : ''}`}
          >
            {subtitle}
          </p>
        </>
      )}
    </div>
  );
}
