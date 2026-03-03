// ============================================================
// MAPEAMENTO DE IMAGENS — CLOUDINARY CDN
// Dra. Luciana J. R. Pinho
// Cloud: dwyrt2g1k
// Gerado automaticamente por scripts/upload-cloudinary.ts
// ============================================================

const CLOUD_NAME = 'dwyrt2g1k';
const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/** Helper: gera URL Cloudinary com transformações */
export function cldUrl(publicId: string, transforms = 'f_auto,q_auto'): string {
  return `${BASE}/${transforms}/${publicId}`;
}

/** Helper: gera URL com largura específica */
export function cldUrlW(publicId: string, width: number, quality = 'auto'): string {
  return `${BASE}/f_auto,q_${quality},w_${width},c_limit/${publicId}`;
}

export const IMAGES = {
  // Foto da advogada (perfil)
  lawyer: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/dra_luciana_photo',

  // Foto braços cruzados (profissional)
  lawyerAlt: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/dra_luciana_bracos_cruzados',

  // Foto na Comissão MT em Brasília
  comissao: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/dra_luciana_comissao_mt',

  // Hero background — escritório jurídico
  hero: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/hero-escritorio',

  // Escritório
  office: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/office',

  // Logo (usa foto de perfil como fallback)
  logo: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/dra_luciana_photo',
  logoAlt: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/dra_luciana_bracos_cruzados',
  logoMini: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/dra_luciana_photo',
} as const;

// Imagens por área de atuação
export const AREA_IMAGES: Record<string, string> = {
  'Direito Previdenciário': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-previdenciario',
  'Direitos Humanos': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-direitos-humanos',
  'Direitos PCD & Neurodiversidade': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-pcd-neurodiversidade',
  'ESG & Sustentabilidade': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-esg-sustentabilidade',
  'BPC/LOAS': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-bpc-loas',
  'Aposentadorias': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-aposentadorias',
};

// Imagens por categoria de blog
export const BLOG_IMAGES: Record<string, string> = {
  ...AREA_IMAGES,
  'Direito Previdenciário': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-previdenciario',
  Direito: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/default-juridico',
};

// Imagem padrão (fallback)
export const DEFAULT_IMAGE = 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/default-juridico';

// Helper para obter imagem por categoria
export function getCategoryImage(category: string): string {
  return BLOG_IMAGES[category] || AREA_IMAGES[category] || DEFAULT_IMAGE;
}

// OG Image para redes sociais (com transformação Cloudinary)
export const OG_IMAGE = cldUrl('dralucianajrpinho/dra_luciana_photo', 'f_jpg,q_90,w_1200,h_630,c_fill,g_face');
