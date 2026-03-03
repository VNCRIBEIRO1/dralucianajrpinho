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
  Puzzle,
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
    desc: 'Pioneira na região em integrar Direito com impacto social — advocacia que transforma realidades e rompe barreiras.',
  },
  {
    icon: Heart,
    title: 'Empatia & Inclusão',
    desc: 'Como autista com diagnóstico tardio, a Dra. Luciana traz uma perspectiva única de acolhimento e compreensão.',
  },
  {
    icon: Target,
    title: 'Especialização',
    desc: '23 anos focados em Direito Previdenciário, com mais de 5 pós-graduações e centenas de processos exitosos.',
  },
  {
    icon: Award,
    title: 'Reconhecimento',
    desc: 'Inscrição na OAP (Portugal), membro da ALFAA e referência em Direitos Humanos na região.',
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#07040f] via-[#150c2a] to-[#2d1b4e] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-autism-red via-autism-gold to-autism-blue" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-lavender-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-lavender-500/20 text-lavender-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Puzzle className="w-4 h-4" />
              Sobre a Advogada
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Conheça a <br />
              <span className="text-lavender-400">Dra. Luciana Pinho</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Pioneira em sua região na integração de conhecimentos jurídicos
              com compromisso social. 23 anos de carreira dedicados à Justiça
              Social, Direitos Previdenciários e à luta incansável pela
              inclusão de Pessoas com Deficiência.
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
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-lavender-500 to-lavender-600 text-white p-4 rounded-xl shadow-lg">
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
              <span className="inline-block text-sm font-medium text-lavender-600 bg-lavender-500/10 px-4 py-1.5 rounded-full mb-4">
                Uma História de Luta e Transformação
              </span>
              <h2 className="section-title">
                Pioneira na Integração do Direito com <span className="text-lavender-500">Impacto Social</span>
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed mb-6">
                <p>
                  A Dra. Luciana de Jesus Ribeiro Pinho é uma advogada
                  previdenciarista de destaque em Mato Grosso, com 23 anos de
                  carreira iniciada em 06/02/2003. Pioneira em sua região na
                  integração de conhecimentos jurídicos com compromisso social,
                  construiu desde Lucas do Rio Verde uma reputação sólida baseada
                  em competência técnica e profunda empatia.
                </p>
                <p>
                  Especialista em planejamento previdenciário, direitos humanos e
                  ESG, foi a primeira advogada da região a integrar de forma
                  sistemática o Direito ao compromisso social e à inclusão. Sua
                  atuação não se limita aos tribunais — ela transforma a vida de
                  cada cliente que a procura.
                </p>
                <p>
                  Como autista com diagnóstico tardio, a Dra. Luciana traz uma
                  perspectiva única para a advocacia. Sua vivência pessoal a torna
                  não apenas uma profissional competente, mas uma aliada genuína na
                  luta por inclusão e dignidade.
                </p>
              </div>

              <div className="bg-lavender-500/5 border border-lavender-500/20 rounded-xl p-4 mb-6">
                <p className="text-sm text-secondary-700 flex items-start gap-2">
                  <Puzzle className="w-5 h-5 text-lavender-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Membro ativo da ALFAA</strong> (Associação Luverdense
                    dos Familiares, Amigos e Autistas) — utilizando sua experiência
                    para promover inclusão e combater o capacitismo.
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-sm bg-primary-500/10 text-primary-500 px-3 py-1.5 rounded-full">
                  <Scale className="w-4 h-4" /> OAB/MT 7973-B
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm bg-gold-500/10 text-gold-600 px-3 py-1.5 rounded-full">
                  <Globe className="w-4 h-4" /> OAP Portugal (2023)
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm bg-rose-500/10 text-rose-500 px-3 py-1.5 rounded-full">
                  <Heart className="w-4 h-4" /> ALFAA
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-secondary-50">
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
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center h-full border border-secondary-100">
                  <div className="w-14 h-14 bg-lavender-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <valor.icon className="w-7 h-7 text-lavender-500" />
                  </div>
                  <h3 className="font-serif font-bold text-primary-500 mb-3">
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
                    <div className="w-12 h-12 bg-gradient-to-br from-lavender-500 to-lavender-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.year}
                    </div>
                    {index < formacao.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-lavender-500 to-lavender-500/10 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-serif font-bold text-primary-500 mb-1">
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
      <section className="py-20 bg-gradient-to-br from-[#07040f] via-[#150c2a] to-[#2d1b4e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-lavender-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-400 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Sua Luta é a Minha Luta
            </h2>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto mb-8">
              Entre em contato para uma consulta. Juntos, vamos defender seus
              direitos com dedicação, técnica e coração.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-medium rounded-md hover:from-lavender-400 hover:to-lavender-500 transition-all shadow-lg text-base">
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
