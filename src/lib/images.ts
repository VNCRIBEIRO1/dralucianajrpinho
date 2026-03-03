// Mapeamento central de imagens — Dra. Luciana J. R. Pinho

export const IMAGES = {
  // Foto da advogada
  lawyer: '/images/dra_luciana_photo.jpg',

  // Hero background
  hero: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80',

  // Escritório
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',

  // Logo
  logo: '/images/dra_luciana_logo.webp',
  logoAlt: '/images/dra_luciana_logo.webp',
  logoMini: '/images/dra_luciana_logo.webp',
} as const;

// Imagens por área de atuação
export const AREA_IMAGES: Record<string, string> = {
  'Direito Previdenciário':
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
  'Direitos Humanos':
    'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80',
  'Direitos PCD & Neurodiversidade':
    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
  'ESG & Sustentabilidade':
    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&q=80',
  'BPC/LOAS':
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  'Aposentadorias':
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
};

// Imagens por categoria de blog
export const BLOG_IMAGES: Record<string, string> = {
  ...AREA_IMAGES,
  'Direito Previdenciário':
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
  Direito:
    'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
};

// Imagem padrão (fallback)
export const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80';

// Helper
export function getCategoryImage(category: string): string {
  return BLOG_IMAGES[category] || AREA_IMAGES[category] || DEFAULT_IMAGE;
}
