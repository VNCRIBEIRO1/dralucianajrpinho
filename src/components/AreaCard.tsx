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
  Users: 'from-autism-purple to-lavender-600',
  ShieldCheck: 'from-autism-blue to-autism-purple',
  Briefcase: 'from-autism-green to-autism-blue',
  Building2: 'from-autism-gold to-autism-orange',
  Landmark: 'from-lavender-500 to-lavender-700',
  Scale: 'from-gold-500 to-gold-600',
  Shield: 'from-autism-blue to-lavender-600',
  Heart: 'from-autism-red to-rose-500',
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
  const gradient = colorMap[iconName] || 'from-primary-500 to-primary-600';

  return (
    <AnimatedSection delay={delay}>
      <Link href={href} className="block group">
        <div className="card p-0 h-full border border-inclusion-lilac/30 hover:border-lavender-400/50 group-hover:-translate-y-1 overflow-hidden">
          {/* Decorative header bar */}
          <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

          <div className="p-8">
            <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-500 mb-3">
              {title}
            </h3>
            <p className="text-secondary-600 text-sm leading-relaxed mb-4">
              {description}
            </p>
            <span className="inline-flex items-center text-sm font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
              Saiba mais
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}
