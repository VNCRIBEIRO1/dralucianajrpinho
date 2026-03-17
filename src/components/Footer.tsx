import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Scale, Globe } from 'lucide-react';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';

const areas = [
  'Direito Previdenciário',
  'Direitos Humanos',
  'Direitos PCD',
  'ESG & Sustentabilidade',
  'BPC/LOAS',
  'Aposentadorias',
];

const links = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Áreas de Atuação', href: '/areas-de-atuacao' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
  { name: 'Agendamento', href: '/agendamento' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-secondary-300 relative overflow-hidden">
      {/* Accent bar top — nogueira + dourado */}
      <div className="h-1 bg-gradient-to-r from-primary-800 via-gold-500 to-primary-800" />

      {/* Conteúdo principal */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1 - Sobre */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-serif font-bold text-lg">
                  Dra. Luciana Pinho
                </h3>
                <p className="text-xs tracking-wider uppercase text-gold-400 font-semibold">
                  Advocacia Previdenciária
                </p>
              </div>
            </div>
            <p className="text-secondary-400 text-sm leading-relaxed mb-4">
              23 anos de carreira dedicados à defesa dos direitos
              previdenciários e à Justiça Social. Uma advocacia
              comprometida com resultados e com o bem-estar de seus clientes.
            </p>
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="text-gold-400 font-medium">OAB/MT 7973-B</span>
              <span className="text-primary-600">•</span>
              <span className="text-gold-300 font-medium flex items-center gap-1">
                <Globe className="w-3 h-3" /> OAP Portugal
              </span>
            </div>
          </div>

          {/* Coluna 2 - Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Áreas */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">
              Áreas de Atuação
            </h4>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area}>
                  <Link
                    href="/areas-de-atuacao"
                    className="text-secondary-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-400 text-sm">
                  Av. Brasil, 200s
                  <br />
                  Alvorada
                  <br />
                  Lucas do Rio Verde - MT
                </span>
              </li>
              <li>
                <a
                  href="tel:+556599113429"
                  className="flex items-center gap-3 text-secondary-400 hover:text-gold-400 transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  (65) 9911-3429
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@lucianapinho.adv.br"
                  className="flex items-center gap-3 text-secondary-400 hover:text-gold-400 transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  contato@lucianapinho.adv.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-400 text-sm">
                  Seg a Sex, 08:00 às 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-primary-700/30 relative z-10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Dra. Luciana J. R. Pinho. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/politica-privacidade"
              className="text-secondary-500 hover:text-gold-400 text-xs transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="text-secondary-500 hover:text-gold-400 text-xs transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
          <p className="text-secondary-600 text-xs">
            Este site tem caráter informativo, nos termos do Provimento 205/2021 da OAB.
          </p>
        </div>
      </div>

      {/* Accent bar bottom */}
      <div className="h-1 bg-gradient-to-r from-primary-800 via-gold-500 to-primary-800" />
    </footer>
  );
}
