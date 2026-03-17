// ============================================================
// MAPEAMENTO DE IMAGENS — CLOUDINARY CDN
// Dra. Luciana J. R. Pinho
// Cloud: dwyrt2g1k
// Gerado automaticamente por scripts/upload-cloudinary.ts
// Imagens de artigos geradas por IA (Flux 2 DEV via apifree.ai)
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

  // Fallbacks antigos
  logo: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/dra_luciana_photo',
  logoAlt: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/dra_luciana_bracos_cruzados',
  logoMini: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/dra_luciana_photo',

  // Imagens temáticas (backgrounds decorativos — escritório jurídico)
  heroBg: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/hero-escritorio',
  heroInclusionBg: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/hero-escritorio',
  patternLight: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/hero-escritorio',
  patternDark: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/hero-escritorio',
  ctaBg: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/office',
  logoComposite: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/logo-composite',
  areasSectionBg: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/office',

  // Logos profissionais gerados por IA (novo header)
  logoHeader: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/logo-header',
  logoHeaderHorizontal: 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/logo-header-horizontal',
} as const;

// Imagens por área de atuação
export const AREA_IMAGES: Record<string, string> = {
  'Direito Previdenciário': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-previdenciario',
  'Direitos Humanos': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-direitos-humanos',
  'Direitos PCD': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-pcd-neurodiversidade',
  'ESG & Sustentabilidade': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-esg-sustentabilidade',
  'BPC/LOAS': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-bpc-loas',
  'Aposentadorias': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/area-aposentadorias',
};

// Imagens por slug de artigo (geradas por IA)
export const ARTICLE_IMAGES: Record<string, string> = {
  'bpc-loas-guia-completo': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/blog-bpc-loas',
  'autismo-e-direitos': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/blog-autismo-direitos',
  'planejamento-previdenciario': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/blog-planejamento-previdenciario',
  'capacitismo-o-que-e': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/blog-capacitismo',
  'aposentadoria-especial-insalubridade': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/blog-aposentadoria-especial',
  'pensao-por-morte-guia-dependentes': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/blog-pensao-morte',
  'auxilio-doenca-negado-o-que-fazer': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/blog-auxilio-doenca',
  'esg-compliance-juridico-empresas': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/blog-esg-compliance',
  'isencao-fiscal-pcd-veiculo-ir': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/blog-isencao-fiscal-pcd',
  'reforma-previdencia-regras-transicao': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/blog-reforma-previdencia',
  'inclusao-escolar-direito-acompanhante': 'https://res.cloudinary.com/dwyrt2g1k/image/upload/f_auto,q_auto/dralucianajrpinho/blog-inclusao-escolar',
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

// Helper para obter imagem por slug do artigo
export function getArticleImage(slug: string): string {
  return ARTICLE_IMAGES[slug] || DEFAULT_IMAGE;
}

// OG Image para redes sociais (com transformação Cloudinary)
export const OG_IMAGE = cldUrl('dralucianajrpinho/dra_luciana_photo', 'f_jpg,q_90,w_1200,h_630,c_fill,g_face');
