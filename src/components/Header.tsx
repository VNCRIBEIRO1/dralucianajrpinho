'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronRight, Puzzle } from 'lucide-react';
import LogoWithChildren from './LogoWithChildren';
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
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-lavender-500/5 border-b border-inclusion-lilac/20'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent'
      }`}
    >
      {/* Rainbow inclusion bar — 6 cores do espectro */}
      <div className="h-1 rainbow-bar" />

      {/* Barra superior info */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="bg-gradient-to-r from-primary-500/90 via-lavender-600/90 to-primary-500/90 backdrop-blur-sm">
          <div className="container-custom py-1.5 flex justify-between items-center text-xs">
            <span className="text-white/90 font-medium tracking-wide flex items-center gap-1.5">
              <Puzzle className="w-3 h-3 text-gold-400" />
              OAB/MT 7973-B • Advocacia Previdenciária & Inclusão
            </span>
            <a
              href="tel:+556599113429"
              className="flex items-center gap-1.5 text-white hover:text-gold-300 transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              (65) 9911-3429
            </a>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <LogoWithChildren
              className={`transition-all duration-500 ${
                scrolled ? 'scale-90' : 'scale-100'
              }`}
              darkMode={!scrolled}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 group ${
                  scrolled
                    ? 'text-secondary-700 hover:text-lavender-600 hover:bg-inclusion-lilac/20'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-3/4 ${
                  scrolled
                    ? 'bg-gradient-to-r from-transparent via-lavender-500 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-gold-400 to-transparent'
                }`} />
              </Link>
            ))}
            <Link
              href="/agendamento"
              className={`ml-4 inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
                scrolled
                  ? 'bg-gradient-to-r from-lavender-500 to-lavender-600 text-white shadow-lg shadow-lavender-500/20 hover:shadow-lavender-500/30'
                  : 'bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:bg-white/25'
              }`}
            >
              <Puzzle className="w-4 h-4" />
              Agende sua Consulta
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled ? 'hover:bg-inclusion-lilac/20' : 'hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-primary-500' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-primary-500' : 'text-white'}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-xl border-t ${
              scrolled
                ? 'bg-white/95 border-inclusion-lilac/20'
                : 'bg-primary-800/95 border-lavender-500/20'
            }`}
          >
            <div className="container-custom py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl transition-colors text-sm font-medium ${
                    scrolled
                      ? 'text-secondary-700 hover:text-lavender-600 hover:bg-inclusion-lilac/20'
                      : 'text-white/90 hover:text-lavender-300 hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/agendamento"
                className="block px-4 py-3 mt-2 text-center bg-gradient-to-r from-lavender-500 to-lavender-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-lavender-500/20"
                onClick={() => setIsOpen(false)}
              >
                <Puzzle className="w-4 h-4 inline mr-2" />
                Agende sua Consulta
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
