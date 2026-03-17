'use client';

import Link from 'next/link';
import {
  Briefcase,
  Users,
  Heart,
  Landmark,
  ShieldCheck,
  Building2,
  Scale,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Users,
  Heart,
  Landmark,
  ShieldCheck,
  Building2,
  Scale,
};

interface AreaCardProps {
  iconName: string;
  title: string;
  description: string;
  href?: string;
  delay?: number;
}

export default function AreaCard({
  iconName,
  title,
  description,
  href = '/areas-de-atuacao',
  delay = 0,
}: AreaCardProps) {
  const Icon = iconMap[iconName] || Briefcase;

  return (
    <AnimatedSection delay={delay}>
      <Link href={href} className="block group h-full">
        <div className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-gold-400/10">
          {/* Card background with glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-md" />
          {/* Border glow on hover */}
          <div className="absolute inset-0 rounded-2xl border border-gold-400/[0.08] group-hover:border-gold-400/30 transition-all duration-500" />
          {/* Gold shimmer overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 via-gold-400/0 to-gold-400/0 group-hover:from-gold-400/[0.04] group-hover:via-transparent group-hover:to-gold-400/[0.02] transition-all duration-700" />

          {/* Top accent line */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent group-hover:via-gold-400/60 transition-all duration-500" />

          <div className="relative z-10 p-8 flex flex-col h-full">
            {/* Icon with premium gold ring */}
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-400/25 group-hover:shadow-gold-400/40 group-hover:scale-105 transition-all duration-500">
                <Icon className="w-8 h-8 text-primary-950" strokeWidth={1.5} />
              </div>
              {/* Subtle glow behind icon */}
              <div className="absolute -inset-2 bg-gold-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-serif font-bold text-white mb-3 tracking-tight group-hover:text-gold-100 transition-colors duration-300">
              {title}
            </h3>

            {/* Divider */}
            <div className="w-10 h-px bg-gradient-to-r from-gold-400/60 to-transparent mb-4 group-hover:w-16 transition-all duration-500" />

            {/* Description */}
            <p className="text-warm-300/50 text-sm leading-relaxed mb-6 flex-1 group-hover:text-warm-300/70 transition-colors duration-300">
              {description}
            </p>

            {/* CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-gold-400/[0.06] group-hover:border-gold-400/15 transition-colors duration-500">
              <span className="text-sm font-semibold text-gold-400 tracking-wide group-hover:text-gold-300 transition-colors duration-300">
                Saiba mais
              </span>
              <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}
