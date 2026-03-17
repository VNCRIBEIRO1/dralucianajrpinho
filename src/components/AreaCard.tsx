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

const colorMap: Record<string, string> = {
  Users: 'from-gold-400 to-gold-500',
  ShieldCheck: 'from-gold-500 to-gold-600',
  Briefcase: 'from-gold-400 to-gold-500',
  Building2: 'from-gold-500 to-gold-600',
  Landmark: 'from-gold-400 to-gold-600',
  Scale: 'from-gold-500 to-gold-600',
  Shield: 'from-gold-400 to-gold-500',
  Heart: 'from-gold-400 to-gold-600',
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
  const gradient = colorMap[iconName] || 'from-primary-700 to-primary-800';

  return (
    <AnimatedSection delay={delay}>
      <Link href={href} className="block group">
        <div className="card p-0 h-full bg-white/[0.06] backdrop-blur-sm border border-gold-400/10 hover:border-gold-400/30 group-hover:-translate-y-1 overflow-hidden">
          {/* Decorative header bar */}
          <div className={`h-[2px] bg-gradient-to-r ${gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

          <div className="p-8">
            <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-gold-400/20 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-7 h-7 text-primary-950" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 tracking-tight">
              {title}
            </h3>
            <p className="text-warm-400/60 text-sm leading-relaxed mb-4">
              {description}
            </p>
            <span className="inline-flex items-center text-sm font-semibold text-gold-400 group-hover:text-gold-300 transition-colors tracking-wide">
              Saiba mais
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}
