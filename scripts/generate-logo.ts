/**
 * Gera novo logo profissional para o Header
 * npx tsx scripts/generate-logo.ts
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

const JOBS = [
  {
    name: 'Logo Header Principal',
    publicId: `${FOLDER}/logo-header`,
    prompt: `Professional law firm logo icon design: elegant golden balance scales intertwined with a colorful infinity loop symbol made of puzzle pieces in autism awareness colors (red, blue, yellow, green, purple), deep purple and lavender gradient background circle, clean modern vector style, premium corporate, sophisticated, symmetrical, strong visual identity, isolated on pure white background, no text, high resolution`,
    width: 512,
    height: 512,
  },
  {
    name: 'Logo Header Horizontal',
    publicId: `${FOLDER}/logo-header-horizontal`,
    prompt: `Horizontal professional law firm emblem: elegant circular seal with golden justice scales at center, surrounded by colorful infinity symbol made of rainbow puzzle pieces in autism awareness colors, deep purple background for the seal, gold accents, premium and sophisticated corporate legal identity, clean flat vector illustration style, white outer background, no text, wide format, high quality`,
    width: 800,
    height: 400,
  },
];

async function generateImage(job: typeof JOBS[0]): Promise<string | null> {
  console.log(`\nGerando: ${job.name}...`);
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        prompt: job.prompt,
        width: job.width,
        height: job.height,
        num_inference_steps: 28,
      }),
    });

    if (!response.ok) {
      console.error(`Erro API (${response.status}):`, await response.text());
      return null;
    }

    const q = await response.json() as any;
    console.log('Resposta da fila:', JSON.stringify(q).substring(0, 200));

    if (!q.status_url && !q.response_url) {
      // Resposta direta?
      if (q.images?.[0]?.url) return q.images[0].url;
      if (q.data?.[0]?.url) return q.data[0].url;
      console.error('Formato inesperado:', JSON.stringify(q).substring(0, 500));
      return null;
    }

    console.log(`Na fila... aguardando resultado para: ${job.name}`);
    for (let i = 0; i < 90; i++) {
      await new Promise(r => setTimeout(r, 3000));
      process.stdout.write('.');

      if (q.status_url) {
        const s = await (await fetch(q.status_url, {
          headers: { 'Authorization': `Bearer ${API_KEY}` }
        })).json() as any;
        if (s.status === 'COMPLETED') { console.log('\nCOMPLETED!'); break; }
        if (s.status === 'FAILED') { console.error(`\nFALHOU: ${job.name}`); return null; }
      }
    }

    const result = await (await fetch(q.response_url, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    })).json() as any;

    if (result.images?.[0]?.url) return result.images[0].url;
    if (result.data?.[0]?.url) return result.data[0].url;
    console.error('Resultado sem URL:', JSON.stringify(result).substring(0, 500));
    return null;
  } catch (e: any) {
    console.error(`Erro ${job.name}:`, e.message);
    return null;
  }
}

async function main() {
  console.log('=== GERANDO NOVO LOGO PROFISSIONAL ===');
  const results: any[] = [];

  for (const job of JOBS) {
    const url = await generateImage(job);
    if (!url) { console.log(`PULANDO upload de ${job.name} (sem URL)`); continue; }

    try {
      const r = await cloudinary.uploader.upload(url, {
        public_id: job.publicId,
        overwrite: true,
        resource_type: 'image',
      });
      console.log(`\nUpload OK: ${job.name}\n  -> ${r.secure_url}`);
      results.push({ name: job.name, publicId: job.publicId, url: r.secure_url });
    } catch (e: any) {
      console.error(`Upload falhou: ${job.name}`, e.message);
    }

    await new Promise(r => setTimeout(r, 1000));
  }

  const outputPath = path.join(process.cwd(), 'logo-output.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n=== TOTAL: ${results.length}/${JOBS.length} ===`);
  results.forEach(r => console.log(`  ${r.name}: ${r.url}`));
}

main().catch(console.error);
