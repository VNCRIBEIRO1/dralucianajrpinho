'use client';

import Image from 'next/image';
import { IMAGES } from '@/lib/images';

interface LogoWithChildrenProps {
  className?: string;
  compact?: boolean;
  darkMode?: boolean;
}

/**
 * Logo profissional — Dra. Luciana J. R. Pinho
 * Ícone gerado por IA via Cloudinary
 */
export default function LogoWithChildren({
  className = '',
  compact = false,
  darkMode = true,
}: LogoWithChildrenProps) {
  const iconSize = compact ? 36 : 48;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Ícone logo gerado por IA */}
      <div className={`relative flex-shrink-0 ${compact ? 'w-9 h-9' : 'w-12 h-12'}`}>
        <Image
          src={IMAGES.logoHeader}
          alt="Logo Dra. Luciana Pinho"
          width={iconSize}
          height={iconSize}
          className={`rounded-full object-cover ${
            darkMode
              ? 'ring-2 ring-gold-500/40 shadow-lg shadow-primary-800/20'
              : 'ring-2 ring-gold-600/50 shadow-md shadow-primary-700/15'
          }`}
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-serif font-bold tracking-wide ${
            compact ? 'text-sm' : 'text-base md:text-lg'
          } ${darkMode ? 'text-white drop-shadow-lg' : 'text-primary-800'}`}
        >
          Dra. Luciana Pinho
        </span>
        <span
          className={`font-medium tracking-[0.18em] uppercase ${
            compact ? 'text-[9px]' : 'text-[10px] md:text-[11px]'
          } ${darkMode ? 'text-gold-400/90' : 'text-gold-600'}`}
        >
          Advocacia Previdenciária
        </span>
      </div>
    </div>
  );
}
