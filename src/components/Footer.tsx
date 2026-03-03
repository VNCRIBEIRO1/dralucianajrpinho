import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Puzzle, Globe } from 'lucide-react';
import CanvasLogo from './CanvasLogo';

const areas = [
  'Direito Previdenciário',
  'Direitos Humanos',
  'Direitos PCD & Neurodiversidade',
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
    <footer className="bg-gradient-to-b from-[#150c2a] to-[#07040f] text-primary-100">
      {/* Neurodiversity rainbow bar */}
      <div className="h-1 bg-gradient-to-r from-autism-red via-autism-gold to-autism-blue" />

      {/* Conteúdo principal */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1 - Sobre */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <CanvasLogo
                src="/images/dra_luciana_logo.webp"
                alt="Dra. Luciana Pinho"
                width={40}
                height={40}
                className="brightness-0 invert"
              />
              <div>
                <h3 className="text-white font-serif font-bold text-lg">
                  Dra. Luciana Pinho
                </h3>
                <p className="text-xs tracking-wider uppercase text-lavender-400">
                  Advocacia Previdenciária
                </p>
              </div>
            </div>
            <p className="text-primary-300 text-sm leading-relaxed mb-4">
              Pioneira em sua região na integração de conhecimentos jurídicos
              com compromisso social. 23 anos de carreira dedicados à Justiça
              Social e à inclusão. Uma advocacia que transforma vidas.
            </p>
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="text-lavender-400 font-medium">OAB/MT 7973-B</span>
              <span className="text-primary-600">•</span>
              <span className="text-lavender-400 font-medium flex items-center gap-1">
                <Globe className="w-3 h-3" /> OAP Portugal
              </span>
            </div>
            <p className="text-primary-500 text-xs flex items-center gap-1.5 mt-3">
              <Puzzle className="w-3 h-3 text-gold-400" />
              Membro ALFAA — Neurodiversidade e Inclusão
            </p>
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
                    className="text-primary-300 hover:text-lavender-400 transition-colors text-sm"
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
                    className="text-primary-300 hover:text-lavender-400 transition-colors text-sm"
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
                <MapPin className="w-5 h-5 text-lavender-400 flex-shrink-0 mt-0.5" />
                <span className="text-primary-300 text-sm">
                  Av. Brasil, 200s
                  <br />
                  Alvorada
                  <br />
                  Lucas do Rio Verde - MT
                </span>
              </li>
              <li>
                <a
                  href="tel:+5565999885275"
                  className="flex items-center gap-3 text-primary-300 hover:text-lavender-400 transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-lavender-400 flex-shrink-0" />
                  (65) 99988-5275
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@lucianapinho.adv.br"
                  className="flex items-center gap-3 text-primary-300 hover:text-lavender-400 transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-lavender-400 flex-shrink-0" />
                  contato@lucianapinho.adv.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-lavender-400 flex-shrink-0 mt-0.5" />
                <span className="text-primary-300 text-sm">
                  Seg a Sex, 08:00 às 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-primary-700/30">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Dra. Luciana J. R. Pinho. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/politica-privacidade"
              className="text-primary-400 hover:text-lavender-400 text-xs transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="text-primary-400 hover:text-lavender-400 text-xs transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
          <p className="text-primary-500 text-xs">
            Este site tem caráter informativo, nos termos do Provimento 205/2021 da OAB.
          </p>
        </div>
      </div>
    </footer>
  );
}
