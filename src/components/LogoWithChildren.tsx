'use client';

import Image from 'next/image';

interface LogoWithChildrenProps {
  className?: string;
  compact?: boolean;
  darkMode?: boolean;
}

/**
 * Logo com as crianças autismo + nome da Dra. Luciana Pinho
 * Usa imagens geradas por IA no Cloudinary
 */
export default function LogoWithChildren({
  className = '',
  compact = false,
  darkMode = true,
}: LogoWithChildrenProps) {
  const girlUrl =
    'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto,w_120,h_120,c_fill/dralucianajrpinho/logo-girl-autism';
  const boyUrl =
    'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto,w_120,h_120,c_fill/dralucianajrpinho/logo-boy-autism';

  if (compact) {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        <div className="relative flex items-center -space-x-2">
          <Image
            src={girlUrl}
            alt=""
            width={28}
            height={28}
            className="rounded-full ring-1 ring-autism-red/30 shadow-sm"
          />
          <Image
            src={boyUrl}
            alt=""
            width={28}
            height={28}
            className="rounded-full ring-1 ring-autism-blue/30 shadow-sm"
          />
        </div>
        <span className={`font-serif font-bold text-sm leading-tight ${darkMode ? 'text-white' : 'text-primary-500'}`}>
          Dra. Luciana
          <br />
          <span className={`text-[10px] font-normal tracking-wider uppercase ${darkMode ? 'text-lavender-400' : 'text-lavender-500'}`}>
            Pinho
          </span>
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Menina */}
      <div className="relative flex-shrink-0">
        <Image
          src={girlUrl}
          alt="Criança com coração de quebra-cabeça autismo"
          width={44}
          height={44}
          className="rounded-full ring-2 ring-autism-red/40 shadow-lg shadow-autism-red/20"
        />
      </div>

      {/* Nome */}
      <div className="flex flex-col leading-tight">
        <span className={`font-serif font-bold text-base md:text-lg tracking-wide drop-shadow-lg ${darkMode ? 'text-white' : 'text-primary-500'}`}>
          Dra. Luciana Pinho
        </span>
        <span className={`text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase ${darkMode ? 'text-lavender-400/90' : 'text-lavender-500'}`}>
          Advocacia Previdenciária
        </span>
      </div>

      {/* Menino */}
      <div className="relative flex-shrink-0">
        <Image
          src={boyUrl}
          alt="Criança com coração de quebra-cabeça autismo"
          width={44}
          height={44}
          className="rounded-full ring-2 ring-autism-blue/40 shadow-lg shadow-autism-blue/20"
        />
      </div>
    </div>
  );
}
