'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, Shield, Heart, Globe, Star, Award, Briefcase } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
      {/* Background texture — sutil */}
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src={IMAGES.heroBg}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Accent bar topo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-800 via-gold-500 to-primary-800 z-20" />

      {/* Decorative blurs — tons amadeirados */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/8 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gold-400/6 rounded-full blur-3xl animate-float" />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/15 text-gold-300 px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-gold-500/20">
              <Scale className="w-4 h-4" />
              Advocacia Previdenciária — Desde 2003
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Seus <span className="text-gold-400">Direitos</span> em{' '}
              <span className="text-gold-300">Boas Mãos</span>
            </h1>

            <p className="text-lg text-secondary-300 leading-relaxed mb-4 max-w-lg">
              Dra. Luciana J. R. Pinho — Advogada Previdenciarista
              com mais de 23 anos de experiência em Lucas do Rio Verde, MT.
              Especialista em Direitos Humanos, ESG e defesa de
              direitos previdenciários.
            </p>

            <p className="text-sm text-gold-400/80 mb-8 max-w-lg flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              OAB/MT 7973-B • Compromisso com a Justiça Social
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/agendamento" className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-500 transition-all duration-300 shadow-lg shadow-primary-900/25 hover:shadow-primary-900/40 hover:-translate-y-0.5 border border-gold-600/20">
                <Scale className="w-5 h-5 mr-2" />
                Agende sua Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '556599113429'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-green-600/40 text-white rounded-xl font-semibold hover:bg-green-600/10 hover:border-green-500/60 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>

            {/* Badges de credenciais */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Scale className="w-4 h-4 text-gold-400" />
                <span className="text-secondary-200 text-xs font-medium">OAB/MT 7973-B</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Globe className="w-4 h-4 text-gold-400" />
                <span className="text-secondary-200 text-xs font-medium">OAP Portugal</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                <span className="text-secondary-200 text-xs font-medium">5★ Google (47+)</span>
              </div>
            </div>
          </motion.div>

          {/* FOTO DA DRA. LUCIANA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow sutil */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/8 via-primary-600/5 to-gold-400/6 rounded-3xl blur-3xl scale-90" />

            {/* Container da foto */}
            <div className="relative w-[320px] md:w-[380px] lg:w-[420px]">
              {/* Foto principal */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border-2 border-gold-600/30">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={IMAGES.lawyerAlt}
                    alt="Dra. Luciana J. R. Pinho — Advogada Previdenciarista"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-950/90 via-primary-950/40 to-transparent" />

                  {/* Nome sobre foto */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="text-white font-serif font-bold text-xl mb-0.5">
                      Dra. Luciana Pinho
                    </h2>
                    <p className="text-gold-300 text-sm">
                      Advogada Previdenciarista • Direitos Humanos
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge — 23+ Anos */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="hidden md:block absolute -top-3 -right-3 md:-right-5 bg-white rounded-xl px-3 py-2 shadow-lg shadow-black/10 border border-secondary-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-gold-50 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-gold-600" />
                  </div>
                  <div>
                    <p className="text-primary-900 font-bold text-xs leading-tight">23+ Anos</p>
                    <p className="text-secondary-500 text-[10px]">de Experiência</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge — Compromisso Social */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="hidden md:block absolute top-1/4 -left-3 md:-left-7 bg-white rounded-xl px-3 py-2 shadow-lg shadow-black/10 border border-secondary-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-primary-50 rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-primary-900 font-bold text-xs leading-tight">Justiça Social</p>
                    <p className="text-secondary-500 text-[10px]">Compromisso + Impacto</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge — Especialista */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="hidden md:block absolute bottom-20 -left-3 md:-left-7 bg-white rounded-xl px-3 py-2 shadow-lg shadow-black/10 border border-secondary-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-gold-50 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-gold-600" />
                  </div>
                  <div>
                    <p className="text-primary-900 font-bold text-xs leading-tight">Especialista</p>
                    <p className="text-secondary-500 text-[10px]">Direito Previdenciário</p>
                  </div>
                </div>
              </motion.div>

              {/* Mobile: badges compactos */}
              <div className="flex md:hidden justify-center gap-2 mt-3 flex-wrap">
                <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md border border-secondary-200">
                  <Award className="w-3.5 h-3.5 text-gold-600" />
                  <span className="text-primary-800 font-semibold text-[11px]">23+ Anos</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md border border-secondary-200">
                  <Heart className="w-3.5 h-3.5 text-primary-600" />
                  <span className="text-primary-800 font-semibold text-[11px]">Justiça Social</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md border border-secondary-200">
                  <Shield className="w-3.5 h-3.5 text-gold-600" />
                  <span className="text-primary-800 font-semibold text-[11px]">Especialista</span>
                </div>
              </div>

              {/* Accent bar embaixo da foto */}
              <div className="mt-3 h-1 rounded-full bg-gradient-to-r from-primary-700 via-gold-500 to-primary-700 opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80V30C240 60 480 10 720 30C960 50 1200 0 1440 30V80H0Z"
            fill="#FAF8F5"
          />
        </svg>
      </div>
    </section>
  );
}
