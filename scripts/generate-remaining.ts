/**
 * Script para gerar imagens restantes (a partir do Planejamento Previdenciário)
 * npx tsx scripts/generate-remaining.ts
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

interface ImageJob {
  name: string;
  publicId: string;
  prompt: string;
  width?: number;
  height?: number;
}

const REMAINING: ImageJob[] = [
  {
    name: 'Planejamento Previdenciário',
    publicId: `${FOLDER}/blog-planejamento-previdenciario`,
    prompt: 'Professional illustration about retirement planning and pension strategy, a person reviewing financial charts and documents with a calculator, pension growth graph going upward, clock calendar golden coins, warm lavender and gold color scheme, modern flat illustration style, Brazilian INSS social security context, no text',
    width: 1200, height: 630,
  },
  {
    name: 'Capacitismo',
    publicId: `${FOLDER}/blog-capacitismo`,
    prompt: 'Powerful modern illustration about fighting ableism and disability discrimination, diverse people with different disabilities (wheelchair user, person with prosthetic limb, visually impaired person) standing strong together breaking barriers, inclusion symbols, warm lavender tones, modern flat illustration style, empowerment theme, no text',
    width: 1200, height: 630,
  },
  {
    name: 'Aposentadoria Especial',
    publicId: `${FOLDER}/blog-aposentadoria-especial`,
    prompt: 'Professional illustration about special early retirement for workers in hazardous conditions, workers wearing protective equipment in construction chemical and healthcare settings, justice scales and legal documents, safety symbols hard hat, warm lavender and gold tones, modern flat illustration style, no text',
    width: 1200, height: 630,
  },
  {
    name: 'Pensão por Morte',
    publicId: `${FOLDER}/blog-pensao-morte`,
    prompt: 'Sensitive professional illustration about death pension benefits for dependents, a compassionate female lawyer supporting a family consisting of a widow and children, legal documents and protective shield symbol, compassionate warm tone, lavender and soft purple tones, modern flat illustration style, respectful dignified hopeful, no text',
    width: 1200, height: 630,
  },
  {
    name: 'Auxílio-Doença Negado',
    publicId: `${FOLDER}/blog-auxilio-doenca`,
    prompt: 'Professional illustration about appealing denied disability benefits, split scene showing a worried person receiving denial letter on left side and a confident lawyer helping them file an appeal on right side, justice gavel medical reports, warm lavender and gold tones, modern flat illustration style, hope and resolution theme, no text',
    width: 1200, height: 630,
  },
  {
    name: 'ESG Compliance',
    publicId: `${FOLDER}/blog-esg-compliance`,
    prompt: 'Modern corporate illustration about ESG compliance and sustainability law, green eco-friendly building with plants, diverse professional team in meeting, environmental earth symbols, governance charts and social responsibility icons, corporate office setting, lavender and green tones, clean modern flat illustration style, no text',
    width: 1200, height: 630,
  },
  {
    name: 'Isenção Fiscal PCD',
    publicId: `${FOLDER}/blog-isencao-fiscal-pcd`,
    prompt: 'Professional illustration about tax exemptions for people with disabilities in Brazil, showing a new car with accessibility wheelchair symbol, tax documents with discount percentage symbols, happy family with disabled member, calculator and money saved, lavender and gold tones, modern flat illustration style, no text',
    width: 1200, height: 630,
  },
  {
    name: 'Reforma Previdência',
    publicId: `${FOLDER}/blog-reforma-previdencia`,
    prompt: 'Professional illustration about pension reform and transition rules in Brazil, showing the Brazilian Constitution book, before and after comparison with arrows, clock with transition symbols, retirement age timeline, people of different ages planning future, lavender and gold tones, modern flat illustration style, no text',
    width: 1200, height: 630,
  },
  {
    name: 'Inclusão Escolar',
    publicId: `${FOLDER}/blog-inclusao-escolar`,
    prompt: 'Warm heartfelt illustration about school inclusion and right to an educational aide for children with special needs, showing a diverse classroom with children learning together including one child with special needs being supported by a caring aide, colorful school environment with books and art, autism puzzle pieces subtly present, lavender and warm tones, modern flat illustration style, no text',
    width: 1200, height: 630,
  },
];

async function generateImage(job: ImageJob): Promise<string | null> {
  console.log(`Gerando: ${job.name}...`);
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${API_KEY}` },
      body: JSON.stringify({ model: MODEL, prompt: job.prompt, width: job.width || 1024, height: job.height || 1024, num_inference_steps: 28 }),
    });
    if (!response.ok) { console.error(`Erro API (${response.status})`); return null; }
    const queueData = await response.json() as any;
    const statusUrl = queueData.status_url;
    const responseUrl = queueData.response_url;
    if (!statusUrl) { console.error('Sem URLs de fila'); return null; }
    console.log(`Na fila: ${job.name}`);

    // Poll
    for (let i = 0; i < 60; i++) {
      await new Promise(r => setTimeout(r, 2000));
      const s = await (await fetch(statusUrl, { headers: { 'Authorization': `Bearer ${API_KEY}` } })).json() as any;
      if (s.status === 'COMPLETED') break;
      if (s.status === 'FAILED') { console.error(`FALHOU: ${job.name}`); return null; }
    }

    const result = await (await fetch(responseUrl, { headers: { 'Authorization': `Bearer ${API_KEY}` } })).json() as any;
    if (result.images?.[0]?.url) { console.log(`OK gerada: ${job.name}`); return result.images[0].url; }
    return null;
  } catch (e: any) { console.error(`Erro ${job.name}:`, e.message); return null; }
}

async function main() {
  console.log('=== GERANDO IMAGENS RESTANTES ===');
  const results: any[] = [];

  // Load previously saved results if any
  const outputPath = path.join(process.cwd(), 'generated-images.json');
  if (fs.existsSync(outputPath)) {
    const prev = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
    results.push(...prev);
  }

  for (const job of REMAINING) {
    const url = await generateImage(job);
    if (!url) continue;
    try {
      const r = await cloudinary.uploader.upload(url, { public_id: job.publicId, overwrite: true, resource_type: 'image' });
      console.log(`Upload OK: ${job.name} -> ${r.secure_url}`);
      results.push({ name: job.name, publicId: job.publicId, url: r.secure_url });
    } catch (e: any) { console.error(`Upload falhou: ${job.name}`, e.message); }
    await new Promise(r => setTimeout(r, 1000));
  }

  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n=== TOTAL: ${results.length} imagens ===`);
  results.forEach(r => console.log(`${r.name}: ${r.url}`));
}

main().catch(console.error);
