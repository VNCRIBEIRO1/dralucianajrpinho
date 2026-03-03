/**
 * Script de Upload para Cloudinary
 * Dra. Luciana J. R. Pinho — Identidade Visual Completa
 *
 * Uso:
 *   npx tsx scripts/upload-cloudinary.ts
 *
 * Requer variáveis de ambiente:
 *   CLOUDINARY_CLOUD_NAME
 *   CLOUDINARY_API_KEY
 *   CLOUDINARY_API_SECRET
 */

import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import fs from 'fs';

// ============================================================
// CONFIGURAÇÃO
// ============================================================
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const FOLDER = 'dralucianajrpinho';

// ============================================================
// IMAGENS LOCAIS (public/images)
// ============================================================
const LOCAL_IMAGES = [
  {
    file: 'public/images/dra_luciana_photo.jpg',
    publicId: `${FOLDER}/dra_luciana_photo`,
    tags: ['perfil', 'advogada', 'principal'],
  },
  {
    file: 'public/images/dra_luciana_bracos_cruzados.jpg',
    publicId: `${FOLDER}/dra_luciana_bracos_cruzados`,
    tags: ['perfil', 'advogada', 'bracos-cruzados'],
  },
  {
    file: 'public/images/dra_luciana_comissao_mt.jpg',
    publicId: `${FOLDER}/dra_luciana_comissao_mt`,
    tags: ['comissao', 'brasilia', 'honorarios'],
  },
];

// ============================================================
// IMAGENS REMOTAS (Unsplash → Cloudinary)
// ============================================================
const REMOTE_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80',
    publicId: `${FOLDER}/hero-escritorio`,
    tags: ['hero', 'background', 'escritorio'],
  },
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    publicId: `${FOLDER}/office`,
    tags: ['escritorio', 'office'],
  },
  {
    url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    publicId: `${FOLDER}/area-previdenciario`,
    tags: ['area', 'previdenciario'],
  },
  {
    url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80',
    publicId: `${FOLDER}/area-direitos-humanos`,
    tags: ['area', 'direitos-humanos'],
  },
  {
    url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
    publicId: `${FOLDER}/area-pcd-neurodiversidade`,
    tags: ['area', 'pcd', 'neurodiversidade'],
  },
  {
    url: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&q=80',
    publicId: `${FOLDER}/area-esg-sustentabilidade`,
    tags: ['area', 'esg', 'sustentabilidade'],
  },
  {
    url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    publicId: `${FOLDER}/area-bpc-loas`,
    tags: ['area', 'bpc', 'loas'],
  },
  {
    url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
    publicId: `${FOLDER}/area-aposentadorias`,
    tags: ['area', 'aposentadorias'],
  },
  {
    url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
    publicId: `${FOLDER}/default-juridico`,
    tags: ['default', 'juridico', 'fallback'],
  },
];

// ============================================================
// UPLOAD
// ============================================================
async function uploadLocal(item: (typeof LOCAL_IMAGES)[0]) {
  const filePath = path.resolve(process.cwd(), item.file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Arquivo não encontrado: ${filePath}`);
    return null;
  }

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: item.publicId,
      overwrite: true,
      tags: item.tags,
      folder: undefined, // já incluído no publicId
      resource_type: 'image',
      transformation: [
        { quality: 'auto:best', fetch_format: 'auto' },
      ],
    });
    console.log(`✅ ${item.file} → ${result.secure_url}`);
    return { publicId: item.publicId, url: result.secure_url };
  } catch (err) {
    console.error(`❌ Erro ao enviar ${item.file}:`, err);
    return null;
  }
}

async function uploadRemote(item: (typeof REMOTE_IMAGES)[0]) {
  try {
    const result = await cloudinary.uploader.upload(item.url, {
      public_id: item.publicId,
      overwrite: true,
      tags: item.tags,
      folder: undefined,
      resource_type: 'image',
      transformation: [
        { quality: 'auto:best', fetch_format: 'auto' },
      ],
    });
    console.log(`✅ ${item.publicId} → ${result.secure_url}`);
    return { publicId: item.publicId, url: result.secure_url };
  } catch (err) {
    console.error(`❌ Erro ao enviar ${item.publicId}:`, err);
    return null;
  }
}

async function main() {
  console.log('================================================');
  console.log('  CLOUDINARY UPLOAD — Dra. Luciana J. R. Pinho');
  console.log('================================================\n');

  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('❌ Defina as variáveis de ambiente:');
    console.error('   CLOUDINARY_CLOUD_NAME');
    console.error('   CLOUDINARY_API_KEY');
    console.error('   CLOUDINARY_API_SECRET');
    console.error('\nExemplo:');
    console.error('   $env:CLOUDINARY_CLOUD_NAME="seu-cloud-name"');
    console.error('   $env:CLOUDINARY_API_KEY="sua-api-key"');
    console.error('   $env:CLOUDINARY_API_SECRET="seu-api-secret"');
    console.error('   npx tsx scripts/upload-cloudinary.ts');
    process.exit(1);
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  console.log(`☁️  Cloud Name: ${cloudName}\n`);

  // Upload imagens locais
  console.log('📁 Enviando imagens locais...\n');
  const localResults = [];
  for (const img of LOCAL_IMAGES) {
    const result = await uploadLocal(img);
    if (result) localResults.push(result);
  }

  // Upload imagens remotas
  console.log('\n🌐 Enviando imagens remotas (Unsplash → Cloudinary)...\n');
  const remoteResults = [];
  for (const img of REMOTE_IMAGES) {
    const result = await uploadRemote(img);
    if (result) remoteResults.push(result);
  }

  // Gerar mapeamento
  const allResults = [...localResults, ...remoteResults];

  console.log('\n================================================');
  console.log('  RESULTADO DO UPLOAD');
  console.log('================================================\n');
  console.log(`✅ ${allResults.length} imagens enviadas com sucesso\n`);

  // Gerar o arquivo images.ts atualizado
  const imagesTs = generateImagesTs(cloudName, allResults);
  const outputPath = path.resolve(process.cwd(), 'src/lib/images.ts');
  fs.writeFileSync(outputPath, imagesTs, 'utf-8');
  console.log(`📝 Arquivo atualizado: src/lib/images.ts`);

  console.log('\n🎉 Upload concluído! Faça o build: npm run build');
}

function cldUrl(cloudName: string, publicId: string, transforms = 'f_auto,q_auto') {
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicId}`;
}

function generateImagesTs(cloudName: string, results: { publicId: string; url: string }[]): string {
  const find = (id: string) => {
    const r = results.find((r) => r.publicId.endsWith(id));
    return r ? `'${cldUrl(cloudName, r.publicId)}'` : `'${cldUrl(cloudName, `${FOLDER}/${id}`)}'`;
  };

  return `// ============================================================
// MAPEAMENTO DE IMAGENS — CLOUDINARY CDN
// Dra. Luciana J. R. Pinho
// Cloud: ${cloudName}
// Gerado automaticamente por scripts/upload-cloudinary.ts
// ============================================================

const CLOUD_NAME = '${cloudName}';
const BASE = \`https://res.cloudinary.com/\${CLOUD_NAME}/image/upload\`;

/** Helper: gera URL Cloudinary com transformações */
export function cldUrl(publicId: string, transforms = 'f_auto,q_auto'): string {
  return \`\${BASE}/\${transforms}/\${publicId}\`;
}

/** Helper: gera URL com largura específica */
export function cldUrlW(publicId: string, width: number, quality = 'auto'): string {
  return \`\${BASE}/f_auto,q_\${quality},w_\${width},c_limit/\${publicId}\`;
}

export const IMAGES = {
  // Foto da advogada (perfil)
  lawyer: ${find('dra_luciana_photo')},

  // Foto braços cruzados (profissional)
  lawyerAlt: ${find('dra_luciana_bracos_cruzados')},

  // Foto na Comissão MT em Brasília
  comissao: ${find('dra_luciana_comissao_mt')},

  // Hero background — escritório jurídico
  hero: ${find('hero-escritorio')},

  // Escritório
  office: ${find('office')},

  // Logo (usa foto de perfil como fallback)
  logo: ${find('dra_luciana_photo')},
  logoAlt: ${find('dra_luciana_bracos_cruzados')},
  logoMini: ${find('dra_luciana_photo')},
} as const;

// Imagens por área de atuação
export const AREA_IMAGES: Record<string, string> = {
  'Direito Previdenciário': ${find('area-previdenciario')},
  'Direitos Humanos': ${find('area-direitos-humanos')},
  'Direitos PCD & Neurodiversidade': ${find('area-pcd-neurodiversidade')},
  'ESG & Sustentabilidade': ${find('area-esg-sustentabilidade')},
  'BPC/LOAS': ${find('area-bpc-loas')},
  'Aposentadorias': ${find('area-aposentadorias')},
};

// Imagens por categoria de blog
export const BLOG_IMAGES: Record<string, string> = {
  ...AREA_IMAGES,
  'Direito Previdenciário': ${find('area-previdenciario')},
  Direito: ${find('default-juridico')},
};

// Imagem padrão (fallback)
export const DEFAULT_IMAGE = ${find('default-juridico')};

// Helper para obter imagem por categoria
export function getCategoryImage(category: string): string {
  return BLOG_IMAGES[category] || AREA_IMAGES[category] || DEFAULT_IMAGE;
}

// OG Image para redes sociais (com transformação Cloudinary)
export const OG_IMAGE = cldUrl('${FOLDER}/dra_luciana_photo', 'f_jpg,q_90,w_1200,h_630,c_fill,g_face');
`;
}

main().catch(console.error);
