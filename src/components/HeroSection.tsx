'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, Globe, Star, Briefcase } from 'lucide-react';
import { IMAGES } from '@/lib/images';
import GoldParticles from './GoldParticles';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary-950 overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          className="object-cover opacity-[0.12]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-950/95 to-primary-900/90" />
      </div>

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent z-20" />

      {/* Canvas particles */}
      <GoldParticles particleCount={40} maxSize={2.5} color="gold" className="z-[1]" />

      {/* Radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/[0.04] rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-800/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container-custom relative z-10 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Luxury badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-gold-400/10 via-gold-400/5 to-transparent px-6 py-2.5 rounded-full text-sm font-medium mb-8 border border-gold-400/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-300 tracking-wider uppercase text-xs font-semibold">Advocacia Previdenciária • Desde 2003</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-serif font-bold text-white leading-[1.1] mb-7 tracking-tight">
              Seus{' '}
              <span className="relative inline-block">
                <span className="text-gold-400">Direitos</span>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-gold-400/80 to-transparent" />
              </span>{' '}
              em{' '}
              <span className="text-gold-300">Boas Mãos</span>
            </h1>

            <p className="text-lg text-warm-400/90 leading-relaxed mb-5 max-w-lg font-light">
              Dra. Luciana J. R. Pinho — Advogada Previdenciarista
              com mais de <span className="text-gold-300 font-medium">23 anos de experiência</span> em Lucas do Rio Verde, MT.
            </p>

            <p className="text-sm text-gold-400/70 mb-10 max-w-lg flex items-center gap-2 tracking-wide">
              <Briefcase className="w-4 h-4" />
              OAB/MT 7973-B • Direitos Humanos • ESG
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/agendamento"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-primary-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-500 shadow-xl shadow-gold-500/20 hover:shadow-gold-400/40 hover:-translate-y-1 text-sm tracking-wide uppercase"
              >
                <Scale className="w-4 h-4 mr-2.5" />
                Agende sua Consulta
                <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '556599113429'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/15 text-white/90 rounded-xl font-semibold hover:bg-white/5 hover:border-white/25 transition-all duration-300 text-sm backdrop-blur-sm"
              >
                <svg className="w-4 h-4 mr-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>

            {/* Credential badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: Scale, label: 'OAB/MT 7973-B' },
                { icon: Globe, label: 'OAP Portugal' },
                { icon: Star, label: '5★ Google (47+)', fill: true },
              ].map(({ icon: Icon, label, fill }) => (
                <div key={label} className="flex items-center gap-2 bg-white/[0.04] backdrop-blur-sm px-4 py-2 rounded-full border border-white/[0.08]">
                  <Icon className={`w-3.5 h-3.5 text-gold-400 ${fill ? 'fill-gold-400' : ''}`} />
                  <span className="text-warm-300/80 text-[11px] font-medium tracking-wide">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo — Premium framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] md:w-[360px] lg:w-[400px]">
              {/* Glow behind photo */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-gold-400/10 via-transparent to-gold-400/5 rounded-3xl blur-2xl" />

              {/* Gold corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold-400/40 rounded-tl-2xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold-400/40 rounded-br-2xl" />

              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-gold-400/20">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={IMAGES.lawyerAlt}
                    alt="Dra. Luciana J. R. Pinho — Advogada Previdenciarista"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 360px, 400px"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-primary-950 via-primary-950/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-gold-400/60 to-transparent" />
                    </div>
                    <h2 className="text-white font-serif font-bold text-xl tracking-tight">
                      Dra. Luciana Pinho
                    </h2>
                    <p className="text-gold-300/90 text-sm tracking-wide">
                      Advogada Previdenciarista • Direitos Humanos
                    </p>
                  </div>
                </div>
              </div>

              {/* Gold bar below */}
              <div className="mt-4 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V20C360 45 720 0 1080 20C1260 30 1380 25 1440 20V60H0Z" fill="#FDFCFA" />
        </svg>
      </div>
    </section>
  );
}
