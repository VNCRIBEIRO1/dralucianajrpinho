'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, Shield, Heart, Puzzle, Globe } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#07040f] via-[#150c2a] to-[#2d1b4e] overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Justiça"
          fill
          className="object-cover opacity-[0.08]"
          priority
          sizes="100vw"
        />
      </div>

      {/* Decorative: neurodiversity rainbow bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-autism-red via-autism-gold to-autism-blue z-20" />

      {/* Decorative blurs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-lavender-500/15 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge: Neurodiversity infinity */}
            <div className="inline-flex items-center gap-2 bg-lavender-500/20 text-lavender-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-lg infinity-gradient font-bold">∞</span>
              Advocacia Previdenciária • Direitos Humanos • ESG
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              <span className="text-lavender-400">23 Anos</span> Transformando{' '}
              <span className="text-gold-400">Vidas</span> com Justiça e{' '}
              <span className="text-rose-400">Inclusão</span>
            </h1>

            <p className="text-lg text-primary-200 leading-relaxed mb-4 max-w-lg">
              Dra. Luciana J. R. Pinho — Advogada Previdenciarista em
              Lucas do Rio Verde, MT. Especialista em Direitos Humanos, ESG
              e defensora incansável dos direitos das Pessoas com Deficiência.
            </p>

            <p className="text-sm text-lavender-400/80 mb-8 max-w-lg flex items-center gap-2">
              <Puzzle className="w-4 h-4" />
              Autista com diagnóstico tardio — Membro ativo da ALFAA
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/agendamento" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-medium rounded-md hover:from-lavender-400 hover:to-lavender-500 transition-all duration-300 shadow-lg shadow-lavender-500/25">
                Agende sua Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/areas-de-atuacao"
                className="btn-outline border-primary-300 text-primary-100 hover:bg-primary-100/10 hover:text-white text-base"
              >
                Áreas de Atuação
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <p className="text-primary-400 text-xs">
                OAB/MT 7973-B • OAP Portugal (2023)
              </p>
              <div className="h-3 w-px bg-primary-700" />
              <p className="text-primary-400 text-xs">
                CNPJ: 31.430.307/0001-56
              </p>
            </div>
          </motion.div>

          {/* Cards de destaque */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-1 gap-6"
          >
            {[
              {
                icon: Scale,
                title: '23 Anos de Experiência',
                desc: 'Desde 2003 dedicada ao Direito Previdenciário, com mais de 500 processos conduzidos com excelência.',
                accent: 'bg-gold-500/20',
                iconColor: 'text-gold-400',
              },
              {
                icon: Heart,
                title: 'Luta pela Inclusão',
                desc: 'Autista com diagnóstico tardio, membro da ALFAA, transforma vivência pessoal em luta jurídica pelos direitos de PCDs.',
                accent: 'bg-rose-500/20',
                iconColor: 'text-rose-400',
              },
              {
                icon: Globe,
                title: 'Atuação Internacional',
                desc: 'Inscrita na OAP (Portugal, 2023). Atendimento remoto global para brasileiros no exterior.',
                accent: 'bg-lavender-500/20',
                iconColor: 'text-lavender-400',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${item.accent} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80V30C240 60 480 10 720 30C960 50 1200 0 1440 30V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
