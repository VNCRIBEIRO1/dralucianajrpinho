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
  index?: number;
}

export default function AreaCard({
  iconName,
  title,
  description,
  href = '/areas-de-atuacao',
  delay = 0,
  index = 0,
}: AreaCardProps) {
  const Icon = iconMap[iconName] || Briefcase;
  const num = String(index + 1).padStart(2, '0');

  return (
    <AnimatedSection delay={delay}>
      <Link href={href} className="block group h-full">
        <div className="relative h-full rounded-2xl overflow-hidden transition-all duration-700 group-hover:-translate-y-2">
          {/* Animated border — all 4 sides reveal on hover */}
          <div className="absolute inset-0 rounded-2xl">
            {/* Top border */}
            <div className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-gold-400/80 to-gold-400/20 w-0 group-hover:w-full transition-all duration-700 ease-out" />
            {/* Right border */}
            <div className="absolute top-0 right-0 w-[1px] bg-gradient-to-b from-gold-400/80 to-gold-400/20 h-0 group-hover:h-full transition-all duration-700 ease-out delay-100" />
            {/* Bottom border */}
            <div className="absolute bottom-0 right-0 h-[1px] bg-gradient-to-l from-gold-400/80 to-gold-400/20 w-0 group-hover:w-full transition-all duration-700 ease-out delay-200" />
            {/* Left border */}
            <div className="absolute bottom-0 left-0 w-[1px] bg-gradient-to-t from-gold-400/80 to-gold-400/20 h-0 group-hover:h-full transition-all duration-700 ease-out delay-300" />
          </div>

          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent rounded-2xl border border-white/[0.04]" />

          {/* Hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 to-gold-400/0 group-hover:from-gold-400/[0.06] group-hover:to-transparent transition-all duration-700 rounded-2xl" />

          {/* Corner accent — top-left */}
          <div className="absolute top-0 left-0">
            <div className="w-12 h-[1px] bg-gold-400/30 group-hover:bg-gold-400/70 transition-colors duration-500" />
            <div className="w-[1px] h-12 bg-gold-400/30 group-hover:bg-gold-400/70 transition-colors duration-500" />
          </div>

          {/* Corner accent — bottom-right */}
          <div className="absolute bottom-0 right-0">
            <div className="w-12 h-[1px] bg-gold-400/20 group-hover:bg-gold-400/50 transition-colors duration-500 ml-auto" />
            <div className="w-[1px] h-12 bg-gold-400/20 group-hover:bg-gold-400/50 transition-colors duration-500 ml-auto" />
          </div>

          <div className="relative z-10 p-8 lg:p-9 flex flex-col h-full">
            {/* Top row: number + icon */}
            <div className="flex items-start justify-between mb-8">
              {/* Number watermark */}
              <span className="text-[3.5rem] font-serif font-bold leading-none text-gold-400/[0.07] group-hover:text-gold-400/[0.15] transition-colors duration-700 select-none">
                {num}
              </span>
              {/* Icon */}
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/15 to-gold-400/5 border border-gold-400/10 group-hover:border-gold-400/30 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-7 h-7 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div className="absolute -inset-3 bg-gold-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-serif font-bold text-white mb-2 tracking-tight group-hover:text-gold-100 transition-colors duration-300">
              {title}
            </h3>

            {/* Gold divider */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-gradient-to-r from-gold-400 to-gold-400/40 group-hover:w-14 transition-all duration-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400/40 group-hover:bg-gold-400 transition-colors duration-500" />
            </div>

            {/* Description */}
            <p className="text-warm-300/45 text-sm leading-relaxed mb-auto group-hover:text-warm-300/70 transition-colors duration-500">
              {description}
            </p>

            {/* CTA row */}
            <div className="flex items-center justify-between mt-8 pt-5 border-t border-gold-400/[0.05] group-hover:border-gold-400/15 transition-colors duration-500">
              <span className="text-xs font-semibold text-gold-400/60 tracking-[0.15em] uppercase group-hover:text-gold-400 transition-colors duration-300">
                Saiba mais
              </span>
              <div className="w-9 h-9 rounded-full border border-gold-400/10 group-hover:border-gold-400/40 group-hover:bg-gold-400/10 flex items-center justify-center transition-all duration-500">
                <ArrowRight className="w-4 h-4 text-gold-400/40 group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}
