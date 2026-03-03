/**
 * Script para gerar imagens com IA via apifree.ai (Flux 2 DEV)
 * e fazer upload automático para Cloudinary
 *
 * Uso:
 *   npx tsx scripts/generate-images.ts
 */

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

// ============================================================
// CONFIG
// ============================================================
const API_KEY = 'sk-pHCx51BmPZdpnjJMXEP1yxm2XP47p';
const API_URL = 'https://api.apifree.ai/v1/chat/completions';
const MODEL = 'black-forest-labs/flux-2-dev';
const CLOUD_NAME = 'dwyrt2g1k';
const FOLDER = 'dralucianajrpinho';

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: '883982642416381',
  api_secret: 'wVhAOkz_DAeFoWwnz2xinUBpDeo',
  secure: true,
});

// ============================================================
// IMAGE DEFINITIONS
// ============================================================
interface ImageJob {
  name: string;
  publicId: string;
  prompt: string;
  width?: number;
  height?: number;
}

const LOGO_IMAGES: ImageJob[] = [
  {
    name: 'Logo Girl (autism)',
    publicId: `${FOLDER}/logo-girl-autism`,
    prompt: 'Cute cartoon illustration of a cheerful little girl with red hair and round glasses, sitting cross-legged, lovingly hugging a large heart made of colorful puzzle pieces (red, blue, yellow, green), autism awareness symbol, flat vector illustration style, soft pastel background, child-friendly, vibrant warm colors, clean modern design, no text, high quality',
    width: 1024,
    height: 1024,
  },
  {
    name: 'Logo Boy (autism)',
    publicId: `${FOLDER}/logo-boy-autism`,
    prompt: 'Cute cartoon illustration of a happy little boy with dark curly hair, standing and tenderly hugging a large heart made of colorful puzzle pieces (blue, green, yellow, red), autism awareness symbol, flat vector illustration style, soft pastel background, child-friendly, vibrant warm colors, clean modern design, no text, high quality',
    width: 1024,
    height: 1024,
  },
];

const ARTICLE_IMAGES: ImageJob[] = [
  {
    name: 'BPC/LOAS Guia',
    publicId: `${FOLDER}/blog-bpc-loas`,
    prompt: 'Professional modern illustration about social security disability benefits BPC LOAS in Brazil, a compassionate female lawyer with dark hair helping an elderly person and a person with disability review documents, government office setting, warm lavender and gold color tones, modern flat illustration style, legal justice theme, Brazilian context, no text',
    width: 1200,
    height: 630,
  },
  {
    name: 'Autismo e Direitos',
    publicId: `${FOLDER}/blog-autismo-direitos`,
    prompt: 'Colorful modern illustration about autism rights and inclusion, diverse happy children with colorful puzzle pieces forming a heart, a scale of justice in background, rainbow infinity symbol, inclusive classroom setting, warm welcoming colors with lavender and gold accents, modern flat illustration style, hopeful, no text',
    width: 1200,
    height: 630,
  },
  {
    name: 'Planejamento Previdenciário',
    publicId: `${FOLDER}/blog-planejamento-previdenciario`,
    prompt: 'Professional illustration about retirement planning and pension strategy, a person reviewing financial charts and documents with a calculator, pension growth graph going upward, clock calendar golden coins, warm lavender and gold color scheme, modern flat illustration style, Brazilian INSS social security context, no text',
    width: 1200,
    height: 630,
  },
  {
    name: 'Capacitismo',
    publicId: `${FOLDER}/blog-capacitismo`,
    prompt: 'Powerful modern illustration about fighting ableism and disability discrimination, diverse people with different disabilities (wheelchair user, person with prosthetic limb, visually impaired person) standing strong together breaking barriers, inclusion symbols, warm lavender tones, modern flat illustration style, empowerment theme, no text',
    width: 1200,
    height: 630,
  },
  {
    name: 'Aposentadoria Especial',
    publicId: `${FOLDER}/blog-aposentadoria-especial`,
    prompt: 'Professional illustration about special early retirement for workers in hazardous conditions, workers wearing protective equipment in construction chemical and healthcare settings, justice scales and legal documents, safety symbols hard hat, warm lavender and gold tones, modern flat illustration style, no text',
    width: 1200,
    height: 630,
  },
  {
    name: 'Pensão por Morte',
    publicId: `${FOLDER}/blog-pensao-morte`,
    prompt: 'Sensitive professional illustration about death pension benefits for dependents, a compassionate female lawyer supporting a family consisting of a widow and children, legal documents and protective shield symbol, compassionate warm tone, lavender and soft purple tones, modern flat illustration style, respectful dignified hopeful, no text',
    width: 1200,
    height: 630,
  },
  {
    name: 'Auxílio-Doença Negado',
    publicId: `${FOLDER}/blog-auxilio-doenca`,
    prompt: 'Professional illustration about appealing denied disability benefits, split scene showing a worried person receiving denial letter on left side and a confident lawyer helping them file an appeal on right side, justice gavel medical reports, warm lavender and gold tones, modern flat illustration style, hope and resolution theme, no text',
    width: 1200,
    height: 630,
  },
  {
    name: 'ESG Compliance',
    publicId: `${FOLDER}/blog-esg-compliance`,
    prompt: 'Modern corporate illustration about ESG compliance and sustainability law, green eco-friendly building with plants, diverse professional team in meeting, environmental earth symbols, governance charts and social responsibility icons, corporate office setting, lavender and green tones, clean modern flat illustration style, no text',
    width: 1200,
    height: 630,
  },
  {
    name: 'Isenção Fiscal PCD',
    publicId: `${FOLDER}/blog-isencao-fiscal-pcd`,
    prompt: 'Professional illustration about tax exemptions for people with disabilities in Brazil, showing a new car with accessibility wheelchair symbol, tax documents with discount percentage symbols, happy family with disabled member, calculator and money saved, lavender and gold tones, modern flat illustration style, no text',
    width: 1200,
    height: 630,
  },
  {
    name: 'Reforma Previdência',
    publicId: `${FOLDER}/blog-reforma-previdencia`,
    prompt: 'Professional illustration about pension reform and transition rules in Brazil, showing the Brazilian Constitution book, before and after comparison with arrows, clock with transition symbols, retirement age timeline, people of different ages planning future, lavender and gold tones, modern flat illustration style, no text',
    width: 1200,
    height: 630,
  },
  {
    name: 'Inclusão Escolar',
    publicId: `${FOLDER}/blog-inclusao-escolar`,
    prompt: 'Warm heartfelt illustration about school inclusion and right to an educational aide for children with special needs, showing a diverse classroom with children learning together including one child with special needs being supported by a caring aide, colorful school environment with books and art, autism puzzle pieces subtly present, lavender and warm tones, modern flat illustration style, no text',
    width: 1200,
    height: 630,
  },
];

// ============================================================
// API CALL — Queue-based (apifree.ai → fal.run)
// ============================================================
async function generateImage(job: ImageJob): Promise<string | null> {
  console.log(`🎨 Gerando: ${job.name}...`);

  try {
    // Step 1: Submit job
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        prompt: job.prompt,
        width: job.width || 1024,
        height: job.height || 1024,
        num_inference_steps: 28,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ Erro API (${response.status}): ${errorText}`);
      return null;
    }

    const queueData = await response.json() as any;
    const statusUrl = queueData.status_url;
    const responseUrl = queueData.response_url;

    if (!statusUrl || !responseUrl) {
      console.error(`❌ Sem URLs de fila:`, JSON.stringify(queueData).substring(0, 300));
      return null;
    }

    console.log(`⏳ Na fila: ${job.name} (${queueData.id})`);

    // Step 2: Poll for completion
    let completed = false;
    let attempts = 0;
    const maxAttempts = 60; // 2 min max

    while (!completed && attempts < maxAttempts) {
      await new Promise(r => setTimeout(r, 2000));
      attempts++;

      const statusRes = await fetch(statusUrl, {
        headers: { 'Authorization': `Bearer ${API_KEY}` },
      });
      const statusData = await statusRes.json() as any;

      if (statusData.status === 'COMPLETED') {
        completed = true;
      } else if (statusData.status === 'FAILED') {
        console.error(`❌ Falhou: ${job.name}`, statusData);
        return null;
      }
      // else IN_QUEUE or IN_PROGRESS — keep polling
    }

    if (!completed) {
      console.error(`❌ Timeout: ${job.name}`);
      return null;
    }

    // Step 3: Get result
    const resultRes = await fetch(responseUrl, {
      headers: { 'Authorization': `Bearer ${API_KEY}` },
    });
    const resultData = await resultRes.json() as any;

    if (resultData.images && resultData.images[0]?.url) {
      console.log(`✅ Imagem gerada: ${job.name}`);
      return resultData.images[0].url;
    }

    console.error(`❌ Sem imagem no resultado:`, JSON.stringify(resultData).substring(0, 300));
    return null;
  } catch (err: any) {
    console.error(`❌ Erro ao gerar ${job.name}:`, err.message);
    return null;
  }
}

// ============================================================
// UPLOAD TO CLOUDINARY
// ============================================================
async function uploadToCloudinary(
  source: string,
  publicId: string,
  name: string,
): Promise<string | null> {
  try {
    const result = await cloudinary.uploader.upload(source, {
      public_id: publicId,
      overwrite: true,
      resource_type: 'image',
    });
    console.log(`☁️  Upload OK: ${name} → ${result.secure_url}`);
    return result.secure_url;
  } catch (err: any) {
    console.error(`❌ Upload falhou: ${name}:`, err.message);
    return null;
  }
}

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log('========================================================');
  console.log('  GERAÇÃO DE IMAGENS — Dra. Luciana J. R. Pinho');
  console.log('  API: apifree.ai (Flux 2 DEV) | CDN: Cloudinary');
  console.log('========================================================\n');

  const allJobs = [...LOGO_IMAGES, ...ARTICLE_IMAGES];
  const results: { name: string; publicId: string; url: string }[] = [];

  for (const job of allJobs) {
    const imageUrl = await generateImage(job);
    if (!imageUrl) continue;

    const cloudinaryUrl = await uploadToCloudinary(imageUrl, job.publicId, job.name);
    if (cloudinaryUrl) {
      results.push({ name: job.name, publicId: job.publicId, url: cloudinaryUrl });
    }

    // Pequeno delay entre jobs
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log('\n========================================================');
  console.log(`  RESULTADO: ${results.length}/${allJobs.length} imagens`);
  console.log('========================================================\n');

  results.forEach(r => {
    console.log(`✅ ${r.name}: ${r.url}`);
  });

  // Salvar resultado em JSON
  const outputPath = path.join(process.cwd(), 'generated-images.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n📝 Resultado salvo em: generated-images.json`);
}

main().catch(console.error);
