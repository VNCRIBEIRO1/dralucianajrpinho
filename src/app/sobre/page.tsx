'use client';

import Image from 'next/image';
import {
  Scale,
  GraduationCap,
  Award,
  Target,
  Heart,
  CheckCircle2,
  BookOpen,
  Star,
  Globe,
  LucideIcon,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/images';

const valores: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Scale,
    title: 'Justiça Social',
    desc: '23 anos de atuação integrando Direito com compromisso social — advocacia que transforma realidades.',
  },
  {
    icon: Heart,
    title: 'Empatia & Dedicação',
    desc: 'Cada cliente é tratado com acolhimento, competência e respeito. Advocacia humanizada e comprometida.',
  },
  {
    icon: Target,
    title: 'Especialização',
    desc: '23 anos focados em Direito Previdenciário, com mais de 5 pós-graduações e centenas de processos exitosos.',
  },
  {
    icon: Award,
    title: 'Reconhecimento',
    desc: 'Inscrição na OAP (Portugal), pós-graduação em Direitos Humanos por Coimbra, e referência na região.',
  },
];

const formacao = [
  { year: '2003', title: 'Início da Carreira Jurídica', institution: 'OAB/MT — Registro 7973-B, Lucas do Rio Verde' },
  { year: '2010', title: 'Especialização em Direito Previdenciário', institution: 'Planejamento previdenciário e benefícios INSS' },
  { year: '2015', title: 'Pós-Graduação em Direitos Humanos', institution: 'Aprofundamento em direitos fundamentais e dignidade humana' },
  { year: '2018', title: 'Especialização em ESG', institution: 'Integração jurídica com sustentabilidade e governança' },
  { year: '2023', title: 'Inscrição na OAP — Portugal', institution: 'Ordem dos Advogados Portugueses — Atuação internacional' },
  { year: '2024', title: '5ª Pós-Graduação', institution: 'Aprimoramento contínuo e excelência acadêmica' },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-800 via-gold-500 to-primary-800" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-300 border border-gold-500/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Sobre a Advogada
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Conheça a <br />
              <span className="text-gold-400">Dra. Luciana Pinho</span>
            </h1>
            <p className="text-secondary-300 text-lg max-w-2xl">
              23 anos de carreira dedicados à Justiça Social, Direitos
              Previdenciários e à defesa das Pessoas com Deficiência.
              Excelência técnica com compromisso social.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image
                    src={IMAGES.lawyer}
                    alt="Dra. Luciana de Jesus Ribeiro Pinho"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-primary-800 to-primary-700 text-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-sm font-medium">5.0 no Google</p>
                  <p className="text-xs opacity-80">47 avaliações</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="inline-block text-sm font-medium text-gold-700 bg-gold-500/10 px-4 py-1.5 rounded-full mb-4">
                Uma História de Dedicação e Competência
              </span>
              <h2 className="section-title">
                Excelência em Direito Previdenciário com <span className="text-gold-600">Compromisso Social</span>
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed mb-6">
                <p>
                  A Dra. Luciana de Jesus Ribeiro Pinho é uma advogada
                  previdenciarista de destaque em Mato Grosso, com 23 anos de
                  carreira iniciada em 06/02/2003. Desde Lucas do Rio Verde,
                  construiu uma reputação sólida baseada em competência
                  técnica e profunda dedicação a cada cliente.
                </p>
                <p>
                  Especialista em planejamento previdenciário, direitos humanos e
                  ESG, sua atuação integra de forma sistemática o Direito ao
                  compromisso social e à defesa de direitos. Sua atuação não se
                  limita aos tribunais — ela transforma a vida de cada cliente que
                  a procura.
                </p>
                <p>
                  Pós-graduada em Direitos Humanos pela Universidade de Coimbra,
                  a Dra. Luciana possui vasta experiência na defesa dos direitos
                  das pessoas com deficiência, combatendo o capacitismo e
                  promovendo a igualdade de acesso à justiça.
                </p>
              </div>

              <div className="bg-gold-500/5 border border-gold-500/20 rounded-xl p-4 mb-6">
                <p className="text-sm text-secondary-700 flex items-start gap-2">
                  <Scale className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Pós-Graduada em Direitos Humanos</strong> pela Universidade de
                    Coimbra — dedicada à defesa dos direitos fundamentais e à
                    promoção da dignidade humana.
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-sm bg-primary-800/10 text-primary-800 px-3 py-1.5 rounded-full">
                  <Scale className="w-4 h-4" /> OAB/MT 7973-B
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm bg-gold-500/10 text-gold-600 px-3 py-1.5 rounded-full">
                  <Globe className="w-4 h-4" /> OAP Portugal (2023)
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm bg-primary-700/10 text-primary-700 px-3 py-1.5 rounded-full">
                  <Heart className="w-4 h-4" /> Direitos Humanos
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gradient-to-br from-warm-100 to-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Valores & Missão"
              title="O Que Me Move"
              subtitle="Princípios que guiam cada caso, cada causa, cada vida que toco."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <AnimatedSection key={valor.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center h-full border border-secondary-200">
                  <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <valor.icon className="w-7 h-7 text-gold-600" />
                  </div>
                  <h3 className="font-serif font-bold text-primary-800 mb-3">
                    {valor.title}
                  </h3>
                  <p className="text-secondary-600 text-sm">{valor.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Formação */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Trajetória Profissional"
              title="Formação & Conquistas"
              subtitle="Uma carreira construída com dedicação, estudo e compromisso social."
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {formacao.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-800 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.year}
                    </div>
                    {index < formacao.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-primary-700 to-primary-700/10 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-serif font-bold text-primary-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-secondary-600 text-sm">
                      {item.institution}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Pronta Para Defender Seus Direitos
            </h2>
            <p className="text-secondary-300 text-lg max-w-2xl mx-auto mb-8">
              Entre em contato para uma consulta. Com dedicação e competência
              técnica, vamos defender seus direitos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg text-base">
                Agende uma Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
