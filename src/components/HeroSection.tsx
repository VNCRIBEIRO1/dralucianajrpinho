'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, Shield, Heart, Puzzle, Globe, Star, Award } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#07040f] via-[#150c2a] to-[#2d1b4e] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          className="object-cover"
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-lavender-500/20 text-lavender-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              Pioneira em Advocacia Social — Desde 2003
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Seus <span className="text-lavender-400">Direitos</span> em{' '}
              <span className="text-gold-400">Boas Mãos</span>
            </h1>

            <p className="text-lg text-primary-200 leading-relaxed mb-4 max-w-lg">
              Dra. Luciana J. R. Pinho — Advogada Previdenciarista,
              pioneira em sua região na integração de conhecimentos
              jurídicos com compromisso social. Mais de 23 anos
              transformando vidas com justiça, inclusão e acolhimento.
            </p>

            <p className="text-sm text-lavender-400/80 mb-8 max-w-lg flex items-center gap-2">
              <Puzzle className="w-4 h-4" />
              Autista com diagnóstico tardio — Membro ativa da ALFAA
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/agendamento" className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-semibold rounded-xl hover:from-lavender-400 hover:to-lavender-500 transition-all duration-300 shadow-lg shadow-lavender-500/25 hover:shadow-lavender-500/40 hover:-translate-y-0.5">
                Agende sua Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '5565999885275'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-primary-300/40 text-primary-100 rounded-xl font-semibold hover:bg-white/5 hover:border-primary-300/60 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>

            {/* Badges de credenciais — estilo similar à referência */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Scale className="w-4 h-4 text-lavender-400" />
                <span className="text-primary-200 text-xs font-medium">OAB/MT 7973-B</span>
              </div>
              <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Globe className="w-4 h-4 text-lavender-400" />
                <span className="text-primary-200 text-xs font-medium">OAP Portugal</span>
              </div>
              <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                <span className="text-primary-200 text-xs font-medium">5★ Google (47+)</span>
              </div>
            </div>
          </motion.div>

          {/* FOTO DA DRA. LUCIANA — lado direito, destaque principal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow atrás da foto */}
            <div className="absolute inset-0 bg-gradient-to-tr from-lavender-500/20 via-transparent to-gold-500/15 rounded-3xl blur-3xl scale-90" />

            {/* Container da foto */}
            <div className="relative w-[320px] md:w-[380px] lg:w-[420px]">
              {/* Foto principal */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={IMAGES.lawyerAlt}
                    alt="Dra. Luciana J. R. Pinho — Advogada Previdenciarista"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                  />
                  {/* Gradient overlay no rodapé da foto */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#150c2a]/90 via-[#150c2a]/40 to-transparent" />

                  {/* Nome + título sobre a foto (rodapé) */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="text-white font-serif font-bold text-xl mb-0.5">
                      Dra. Luciana Pinho
                    </h2>
                    <p className="text-lavender-300 text-sm">
                      Advogada Previdenciarista • Direitos Humanos
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge flutuante — 23+ Anos (superior direito) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-3 -right-3 md:-right-6 bg-white rounded-xl px-4 py-3 shadow-xl shadow-black/15 border border-secondary-100"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-lavender-500/15 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-lavender-600" />
                  </div>
                  <div>
                    <p className="text-secondary-800 font-bold text-sm leading-tight">23+ Anos</p>
                    <p className="text-secondary-500 text-[11px]">de Experiência</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge flutuante — Especialista (esquerdo) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute top-1/4 -left-4 md:-left-8 bg-white rounded-xl px-4 py-3 shadow-xl shadow-black/15 border border-secondary-100"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-rose-500/15 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <p className="text-secondary-800 font-bold text-sm leading-tight">Pioneira</p>
                    <p className="text-secondary-500 text-[11px]">Direito + Impacto Social</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge flutuante — Neurodiversidade (inferior esquerdo) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute bottom-20 -left-4 md:-left-8 bg-white rounded-xl px-4 py-3 shadow-xl shadow-black/15 border border-secondary-100"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-gradient-to-br from-autism-red/20 via-autism-gold/20 to-autism-blue/20 rounded-lg flex items-center justify-center">
                    <Puzzle className="w-5 h-5 text-lavender-600" />
                  </div>
                  <div>
                    <p className="text-secondary-800 font-bold text-sm leading-tight">ALFAA</p>
                    <p className="text-secondary-500 text-[11px]">Neurodiversidade</p>
                  </div>
                </div>
              </motion.div>

              {/* Barra decorativa neurodiversidade embaixo da foto */}
              <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-autism-red via-autism-gold to-autism-blue opacity-60" />
            </div>
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
