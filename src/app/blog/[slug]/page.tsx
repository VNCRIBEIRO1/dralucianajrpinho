import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Scale, User } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { getArticleImage } from '@/lib/images';
import { getAllArticles, getArticleBySlug } from '@/lib/articles';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const image = getArticleImage(slug);
  return {
    title: article?.title || 'Artigo não encontrado',
    description: article?.excerpt || '',
    openGraph: {
      title: article?.title,
      description: article?.excerpt,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article?.title,
      description: article?.excerpt,
      images: [image],
    },
  };
}

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

function renderMarkdown(content: string) {
  const lines = content.trim().split('\n');
  const elements: { type: 'h2' | 'p' | 'li'; text: string }[] = [];
  let buffer = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (buffer) {
        elements.push({ type: 'p', text: buffer });
        buffer = '';
      }
      continue;
    }
    if (trimmed.startsWith('## ')) {
      if (buffer) {
        elements.push({ type: 'p', text: buffer });
        buffer = '';
      }
      elements.push({ type: 'h2', text: trimmed.slice(3) });
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (buffer) {
        elements.push({ type: 'p', text: buffer });
        buffer = '';
      }
      elements.push({ type: 'li', text: trimmed.slice(2) });
    } else {
      buffer = buffer ? buffer + ' ' + trimmed : trimmed;
    }
  }
  if (buffer) elements.push({ type: 'p', text: buffer });
  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-serif font-bold text-secondary-800 mb-4">
            Artigo não encontrado
          </h1>
          <Link href="/blog" className="text-lavender-600 hover:underline">
            Voltar para o Blog
          </Link>
        </div>
      </section>
    );
  }

  const parsed = renderMarkdown(article.content);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#07040f] via-[#150c2a] to-[#2d1b4e] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-autism-red via-autism-gold to-autism-blue" />
        <div className="absolute inset-0">
          <Image
            src={getArticleImage(slug)}
            alt={article.title}
            fill
            className="object-cover opacity-[0.08]"
            sizes="100vw"
          />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-200 hover:text-lavender-400 transition-colors text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o Blog
            </Link>

            <span className="inline-block text-xs font-medium text-lavender-400 bg-lavender-500/20 px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 max-w-4xl">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-primary-200 text-sm">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} de leitura
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Conteudo */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <article className="prose prose-lg max-w-none">
                {parsed.map((item, index) =>
                  item.type === 'h2' ? (
                    <h2
                      key={index}
                      className="text-2xl font-serif font-bold text-secondary-800 mt-10 mb-4 pb-2 border-b border-lavender-200"
                    >
                      {item.text}
                    </h2>
                  ) : item.type === 'li' ? (
                    <div key={index} className="flex items-start gap-2 mb-2 text-secondary-600">
                      <span className="text-lavender-500 mt-1.5">•</span>
                      <span>{item.text}</span>
                    </div>
                  ) : (
                    <p
                      key={index}
                      className="text-secondary-600 leading-relaxed mb-6"
                    >
                      {item.text}
                    </p>
                  )
                )}
              </article>

              <div className="mt-12 bg-lavender-50 border border-lavender-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-lavender-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lavender-700 mb-1">
                      Aviso Legal
                    </p>
                    <p className="text-lavender-600 text-sm">
                      Este artigo tem caráter meramente informativo e educativo,
                      nos termos do Provimento 205/2021 da OAB. Não constitui
                      aconselhamento jurídico. Para orientação específica,
                      procure um advogado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-secondary-600 mb-4">
                  Ficou com dúvidas sobre este tema?
                </p>
                <Link href="/contato" className="btn-lavender inline-block px-8 py-3">
                  Fale com a Dra. Luciana
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
