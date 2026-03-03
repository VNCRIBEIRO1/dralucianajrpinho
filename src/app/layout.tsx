import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutContent from '@/components/LayoutContent';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://dralucianajrpinho.vercel.app'
  ),
  title: {
    default: 'Dra. Luciana Pinho | Advogada Previdenciarista — Lucas do Rio Verde, MT',
    template: '%s | Dra. Luciana Pinho — Advocacia Previdenciária',
  },
  description:
    'Dra. Luciana J. R. Pinho — Advogada Previdenciarista com 23 anos de carreira em Lucas do Rio Verde, MT. Especialista em Direitos Humanos, ESG e Inclusão de PCDs. OAB/MT 7973-B.',
  keywords: [
    'advogada previdenciarista',
    'direito previdenciário',
    'aposentadoria',
    'BPC LOAS',
    'INSS',
    'direitos humanos',
    'ESG',
    'PCD',
    'autismo',
    'neurodiversidade',
    'Lucas do Rio Verde',
    'Mato Grosso',
    'OAP Portugal',
  ],
  authors: [{ name: 'Dra. Luciana de Jesus Ribeiro Pinho' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Dra. Luciana Pinho — Advocacia Previdenciária',
    title: 'Dra. Luciana Pinho | Advogada Previdenciarista — Lucas do Rio Verde, MT',
    description:
      'Advocacia Previdenciária, Direitos Humanos e ESG. 23 anos transformando vidas com justiça e inclusão.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#2d1b4e" />
      </head>
      <body className="min-h-screen flex flex-col">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
