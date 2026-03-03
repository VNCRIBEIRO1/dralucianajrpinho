/**
 * Gera imagens decorativas/temáticas para o site
 * npx tsx scripts/generate-theme-images.ts
 */
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

const API_KEY = 'sk-pHCx51BmPZdpnjJMXEP1yxm2XP47p';
const API_URL = 'https://api.apifree.ai/v1/chat/completions';
const MODEL = 'black-forest-labs/flux-2-dev';
const FOLDER = 'dralucianajrpinho';

cloudinary.config({
  cloud_name: 'dwyrt2g1k',
  api_key: '883982642416381',
  api_secret: 'wVhAOkz_DAeFoWwnz2xinUBpDeo',
  secure: true,
});

interface ImageJob { name: string; publicId: string; prompt: string; width: number; height: number; }

const JOBS: ImageJob[] = [
  {
    name: 'Hero BG Inclusion',
    publicId: `${FOLDER}/hero-inclusion-bg`,
    prompt: 'Wide panoramic abstract watercolor background with soft colorful puzzle pieces floating gently, autism awareness colors (red, blue, yellow, green, purple), soft lavender and cream tones, delicate rainbow infinity symbol subtly blended, warm welcoming professional atmosphere, gentle bokeh lights, no text, no people, elegant minimalist, high quality',
    width: 1920, height: 1080,
  },
  {
    name: 'Section Pattern Light',
    publicId: `${FOLDER}/pattern-inclusion-light`,
    prompt: 'Seamless subtle watercolor pattern with tiny colorful puzzle pieces scattered on soft cream white background, autism awareness colors (pastel red, blue, yellow, green), very light and delicate, elegant professional wallpaper texture, no text, tileable, minimal, high quality',
    width: 1200, height: 800,
  },
  {
    name: 'Section Pattern Dark',
    publicId: `${FOLDER}/pattern-inclusion-dark`,
    prompt: 'Seamless subtle pattern with tiny colorful puzzle pieces and infinity symbols scattered on deep dark purple background (#150c2a), autism awareness colors glowing softly (red, blue, gold, green), elegant professional dark wallpaper texture, no text, tileable, minimal, high quality',
    width: 1200, height: 800,
  },
  {
    name: 'CTA Background',
    publicId: `${FOLDER}/cta-inclusion-bg`,
    prompt: 'Abstract artistic background combining colorful puzzle pieces forming a heart shape, autism awareness colors (red, blue, yellow, green, purple), soft lavender and deep purple gradient, bokeh lights, warm and hopeful atmosphere, professional and elegant, no text, no people, wide format, high quality',
    width: 1920, height: 800,
  },
  {
    name: 'Logo Composite',
    publicId: `${FOLDER}/logo-composite`,
    prompt: 'Professional logo design composition: two cute cartoon children (one girl with red hair and glasses, one boy with dark curly hair) sitting together hugging a large colorful puzzle piece heart between them, autism awareness colors (red, blue, yellow, green), soft pastel lavender background, warm caring illustration, clean flat vector style, symmetrical composition, no text, high quality',
    width: 1024, height: 512,
  },
  {
    name: 'Areas Section BG',
    publicId: `${FOLDER}/areas-section-bg`,
    prompt: 'Wide abstract professional background with colorful puzzle pieces arranged as a gentle border frame, soft gradient from white to light lavender, autism awareness colors (pastel red, blue, yellow, green) as accents, warm and welcoming, professional law office atmosphere, no text, no people, elegant minimalist, high quality',
    width: 1920, height: 900,
  },
];

async function generateImage(job: ImageJob): Promise<string | null> {
  console.log(`Gerando: ${job.name}...`);
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${API_KEY}` },
      body: JSON.stringify({ model: MODEL, prompt: job.prompt, width: job.width, height: job.height, num_inference_steps: 28 }),
    });
    if (!response.ok) { console.error(`Erro API (${response.status})`); return null; }
    const q = await response.json() as any;
    if (!q.status_url) { console.error('Sem URLs de fila'); return null; }
    console.log(`Na fila: ${job.name}`);
    for (let i = 0; i < 60; i++) {
      await new Promise(r => setTimeout(r, 2000));
      const s = await (await fetch(q.status_url, { headers: { 'Authorization': `Bearer ${API_KEY}` } })).json() as any;
      if (s.status === 'COMPLETED') break;
      if (s.status === 'FAILED') { console.error(`FALHOU: ${job.name}`); return null; }
    }
    const result = await (await fetch(q.response_url, { headers: { 'Authorization': `Bearer ${API_KEY}` } })).json() as any;
    if (result.images?.[0]?.url) { console.log(`OK: ${job.name}`); return result.images[0].url; }
    return null;
  } catch (e: any) { console.error(`Erro ${job.name}:`, e.message); return null; }
}

async function main() {
  console.log('=== GERANDO IMAGENS TEMÁTICAS ===');
  const results: any[] = [];
  for (const job of JOBS) {
    const url = await generateImage(job);
    if (!url) continue;
    try {
      const r = await cloudinary.uploader.upload(url, { public_id: job.publicId, overwrite: true, resource_type: 'image' });
      console.log(`Upload OK: ${job.name} -> ${r.secure_url}`);
      results.push({ name: job.name, publicId: job.publicId, url: r.secure_url });
    } catch (e: any) { console.error(`Upload falhou: ${job.name}`, e.message); }
    await new Promise(r => setTimeout(r, 1000));
  }
  const outputPath = path.join(process.cwd(), 'theme-images.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n=== TOTAL: ${results.length}/${JOBS.length} ===`);
  results.forEach(r => console.log(`${r.name}: ${r.url}`));
}

main().catch(console.error);
