'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Briefcase,
  Users,
  ShieldCheck,
  Building2,
  Landmark,
  Scale,
  ArrowRight,
  CheckCircle2,
  FileText,
  Handshake,
  Gavel,
  Heart,
  Globe,
  Puzzle,
  LucideIcon,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';
import { AREA_IMAGES, DEFAULT_IMAGE } from '@/lib/images';

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Users,
  ShieldCheck,
  Building2,
  Landmark,
  Scale,
  FileText,
  Handshake,
  Gavel,
  Heart,
  Globe,
  Puzzle,
  Shield: ShieldCheck,
};

const areas = [
  {
    iconName: 'Shield',
    title: 'Direito Previdenciário',
    description:
      'Principal área de atuação com 23 anos de experiência. Planejamento previdenciário estratégico, revisão de benefícios, aposentadorias, pensões e defesa integral junto ao INSS.',
    topics: [
      'Planejamento Previdenciário',
      'Aposentadoria por Tempo/Idade',
      'Aposentadoria Especial',
      'Revisão de Benefícios',
      'Pensão por Morte',
      'Auxílio-Doença / Acidente',
    ],
    color: 'from-[#2d1b4e] to-[#4a2d7a]',
  },
  {
    iconName: 'Heart',
    title: 'Direitos Humanos',
    description:
      'Defesa intransigente da dignidade humana. Combate à discriminação, promoção da igualdade e proteção dos direitos fundamentais de grupos vulneráveis.',
    topics: [
      'Dignidade da Pessoa Humana',
      'Combate à Discriminação',
      'Proteção de Vulneráveis',
      'Direitos Fundamentais',
      'Ações contra o Estado',
      'Inclusão e Igualdade',
    ],
    color: 'from-[#4a1942] to-[#7a2d6e]',
  },
  {
    iconName: 'Puzzle',
    title: 'Direitos PCD & Neurodiversidade',
    description:
      'BPC/LOAS, inclusão escolar e laboral, cotas, acessibilidade e combate ao capacitismo. Experiência pessoal como autista — a luta é pessoal e profissional.',
    topics: [
      'BPC/LOAS para PCDs',
      'Inclusão Escolar',
      'Cotas e Acessibilidade',
      'Direitos do Autista',
      'Combate ao Capacitismo',
      'Lei Brasileira de Inclusão',
    ],
    color: 'from-[#1b2d4e] to-[#2d4a7a]',
  },
  {
    iconName: 'Globe',
    title: 'ESG & Sustentabilidade',
    description:
      'Consultoria jurídica em práticas ambientais, sociais e de governança corporativa. Integração de responsabilidade social com compliance jurídico.',
    topics: [
      'Compliance Ambiental',
      'Governança Corporativa',
      'Responsabilidade Social',
      'Due Diligence ESG',
      'Relatórios de Sustentabilidade',
      'Políticas de Inclusão',
    ],
    color: 'from-[#1b4e2d] to-[#2d7a4a]',
  },
  {
    iconName: 'Scale',
    title: 'BPC/LOAS',
    description:
      'Benefício de Prestação Continuada para pessoas com deficiência e idosos de baixa renda. Assessoria completa desde o requerimento administrativo até recurso judicial.',
    topics: [
      'Requerimento Administrativo',
      'Recurso ao CRPS',
      'Ação Judicial BPC',
      'Revisão de Benefício',
      'BPC na Escola',
      'BPC Trabalho',
    ],
    color: 'from-[#4e1b1b] to-[#7a2d2d]',
  },
  {
    iconName: 'Briefcase',
    title: 'Aposentadorias',
    description:
      'Análise completa do histórico contributivo e cálculos para o melhor benefício possível. Todas as modalidades de aposentadoria, incluindo rural e especial.',
    topics: [
      'Tempo de Contribuição',
      'Idade',
      'Especial (Insalubridade)',
      'Rural',
      'Invalidez',
      'Cálculos Previdenciários',
    ],
    color: 'from-[#4e3d1b] to-[#7a5e2d]',
  },
];

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#07040f] via-[#150c2a] to-[#2d1b4e] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-autism-red via-autism-gold to-autism-blue" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-lavender-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-lavender-500/20 text-lavender-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Especialidades
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Áreas de <span className="text-lavender-400">Atuação</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Pioneira em sua região na integração de conhecimentos jurídicos
              com compromisso social. Especialização em Direito Previdenciário
              com atuação multidisciplinar em Direitos Humanos, ESG e inclusão
              de PCDs. 23 anos de experiência a seu serviço.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Áreas Detalhadas */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {areas.map((area, index) => {
              const IconComponent = iconMap[area.iconName] || Scale;
              const areaImage = AREA_IMAGES[area.title] || DEFAULT_IMAGE;
              const isReversed = index % 2 !== 0;

              return (
                <AnimatedSection key={area.title} delay={0.1}>
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      isReversed ? 'lg:grid-flow-dense' : ''
                    }`}
                  >
                    <div className={isReversed ? 'lg:col-start-2' : ''}>
                      <div className="aspect-video rounded-2xl overflow-hidden shadow-xl relative">
                        <Image
                          src={areaImage}
                          alt={area.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${area.color} opacity-60`}
                        />
                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-white font-serif font-bold text-xl">
                            {area.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-secondary-600 leading-relaxed mb-6">
                        {area.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {area.topics.map((topic) => (
                          <div
                            key={topic}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-lavender-500 flex-shrink-0" />
                            <span className="text-secondary-700 text-sm">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/contato"
                        className="inline-flex items-center gap-2 text-sm font-medium text-lavender-600 hover:text-lavender-500 transition-colors"
                      >
                        Consulte sobre {area.title}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#07040f] via-[#150c2a] to-[#2d1b4e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-lavender-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Precisa de Orientação Especializada?
            </h2>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto mb-8">
              Com 23 anos de experiência, estou pronta para analisar seu caso
              com a atenção e o cuidado que ele merece.
            </p>
            <Link href="/contato" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-medium rounded-md hover:from-lavender-400 hover:to-lavender-500 transition-all shadow-lg text-base">
              Fale Comigo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
