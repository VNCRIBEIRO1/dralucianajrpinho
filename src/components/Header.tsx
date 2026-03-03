'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronRight, Puzzle } from 'lucide-react';
import CanvasLogo from './CanvasLogo';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Áreas de Atuação', href: '/areas-de-atuacao' },
  { name: 'Simulador INSS', href: '/calculadora-de-direitos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gradient-to-r from-[#0e081e] via-[#150c2a] to-[#0e081e] shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-lavender-500/20'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent'
      }`}
    >
      {/* Neurodiversity rainbow top bar */}
      <div className="h-[3px] bg-gradient-to-r from-autism-red via-autism-gold to-autism-blue" />

      {/* Barra superior */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="bg-gradient-to-r from-[#2d1b4e]/90 via-lavender-600/90 to-[#2d1b4e]/90 backdrop-blur-sm">
          <div className="container-custom py-1.5 flex justify-between items-center text-xs">
            <span className="text-white/90 font-medium tracking-wide flex items-center gap-1.5">
              <Puzzle className="w-3 h-3 text-gold-400" />
              OAB/MT 7973-B • Advocacia Previdenciária & Direitos Humanos
            </span>
            <a
              href="tel:+5565999885275"
              className="flex items-center gap-1.5 text-white hover:text-white/80 transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              (65) 99988-5275
            </a>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-auto flex items-center gap-2">
              <CanvasLogo
                src="https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto,w_400/dralucianajrpinho/dra_luciana_photo"
                alt="Dra. Luciana Pinho"
                width={200}
                height={56}
                className={`object-contain h-14 w-auto transition-all duration-500 ${
                  scrolled
                    ? 'brightness-0 invert drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]'
                    : 'brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
                }`}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 text-white/90 hover:text-lavender-400 hover:bg-white/5 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-lavender-400 to-transparent transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
            <Link
              href="/agendamento"
              className="ml-4 inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-lg bg-gradient-to-r from-lavender-600 via-lavender-500 to-lavender-600 text-white shadow-lg shadow-lavender-500/25 hover:shadow-lavender-500/40 hover:from-lavender-500 hover:via-lavender-400 hover:to-lavender-500 transition-all duration-300 hover:-translate-y-0.5"
            >
              Agende sua Consulta
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Linha decorativa inferior */}
      {scrolled && (
        <div className="h-[1px] bg-gradient-to-r from-transparent via-lavender-500/50 to-transparent" />
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#150c2a]/95 backdrop-blur-lg border-t border-lavender-500/20"
          >
            <div className="container-custom py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-white/90 hover:text-lavender-400 hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/agendamento"
                className="block px-4 py-3 mt-2 text-center bg-gradient-to-r from-lavender-600 to-lavender-500 text-white rounded-lg font-semibold text-sm"
                onClick={() => setIsOpen(false)}
              >
                Agende sua Consulta
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
