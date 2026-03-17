'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronRight, Scale } from 'lucide-react';
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
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gold-400/10'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent'
      }`}
    >
      {/* Accent bar — gold luxury */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      {/* Barra superior info */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="bg-primary-950/95 backdrop-blur-sm">
          <div className="container-custom py-1.5 flex justify-between items-center text-xs">
            <span className="text-warm-400/80 font-medium tracking-wider flex items-center gap-1.5">
              <Scale className="w-3 h-3 text-gold-400" />
              OAB/MT 7973-B • Advocacia Previdenciária
            </span>
            <a
              href="tel:+556599113429"
              className="flex items-center gap-1.5 text-gold-300/80 hover:text-gold-300 transition-colors font-medium tracking-wide"
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
                    ? 'text-primary-800 hover:text-primary-950 hover:bg-warm-200'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-3/4 ${
                  scrolled
                    ? 'bg-gradient-to-r from-transparent via-gold-400 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-gold-400 to-transparent'
                }`} />
              </Link>
            ))}
            <Link
              href="/agendamento"
              className={`ml-4 inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-500 hover:-translate-y-0.5 tracking-wide uppercase ${
                scrolled
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-primary-950 shadow-lg shadow-gold-500/15 hover:shadow-gold-500/30'
                  : 'bg-gold-400/15 backdrop-blur-sm text-gold-300 border border-gold-400/25 hover:bg-gold-400/25'
              }`}
            >
              <Scale className="w-4 h-4" />
              Agende sua Consulta
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled ? 'hover:bg-secondary-100' : 'hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-primary-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-primary-900' : 'text-white'}`} />
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
                ? 'bg-white/98 border-gold-400/10'
                : 'bg-primary-950/98 border-gold-400/10'
            }`}
          >
            <div className="container-custom py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl transition-colors text-sm font-medium ${
                    scrolled
                      ? 'text-primary-700 hover:text-primary-900 hover:bg-secondary-100'
                      : 'text-white/90 hover:text-gold-300 hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/agendamento"
                className="block px-4 py-3 mt-2 text-center bg-gradient-to-r from-gold-500 to-gold-600 text-primary-950 rounded-xl font-bold text-sm shadow-lg shadow-gold-500/15 tracking-wide uppercase"
                onClick={() => setIsOpen(false)}
              >
                <Scale className="w-4 h-4 inline mr-2" />
                Agende sua Consulta
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
