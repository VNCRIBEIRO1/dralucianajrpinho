import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutContent from '@/components/LayoutContent';
import { OG_IMAGE } from '@/lib/images';

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
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Dra. Luciana Pinho — Advogada Previdenciarista',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Luciana Pinho | Advogada Previdenciarista',
    description: 'Pioneira na integração de conhecimentos jurídicos com compromisso social. 23 anos de experiência.',
    images: [OG_IMAGE],
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
        {/* JSON-LD Structured Data — Attorney / Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Attorney',
              name: 'Dra. Luciana de Jesus Ribeiro Pinho',
              alternateName: 'Dra. Luciana Pinho',
              description:
                'Advogada Previdenciarista com 23 anos de experiência. Pioneira em sua região na integração de conhecimentos jurídicos com compromisso social. Especialista em Direito Previdenciário, Direitos Humanos, Direitos da Pessoa com Deficiência, Neurodiversidade e ESG.',
              url: 'https://dralucianajrpinho.vercel.app',
              telephone: '+5565999885275',
              email: 'contato@lucianapinho.adv.br',
              image: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_jpg,q_90,w_1200,h_630,c_fill,g_face/dralucianajrpinho/dra_luciana_photo',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Av. Brasil, 200s',
                addressLocality: 'Lucas do Rio Verde',
                addressRegion: 'MT',
                postalCode: '78455-000',
                addressCountry: 'BR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -13.05,
                longitude: -55.91,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
              areaServed: [
                { '@type': 'City', name: 'Lucas do Rio Verde' },
                { '@type': 'State', name: 'Mato Grosso' },
                { '@type': 'Country', name: 'Brasil' },
                { '@type': 'Country', name: 'Portugal' },
              ],
              knowsAbout: [
                'Direito Previdenciário',
                'Aposentadoria',
                'BPC/LOAS',
                'Auxílio por Incapacidade',
                'Pensão por Morte',
                'Direitos Humanos',
                'Direitos da Pessoa com Deficiência',
                'Autismo / TEA',
                'Neurodiversidade',
                'ESG',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '47',
                bestRating: '5',
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
