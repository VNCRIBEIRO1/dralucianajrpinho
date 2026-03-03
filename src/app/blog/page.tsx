import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, Scale } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';
import BlogCard from '@/components/BlogCard';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Blog Jurídico',
  description:
    'Artigos informativos sobre Direito Previdenciário, Direitos Humanos, Neurodiversidade e inclusão. Conteúdo da Dra. Luciana J. R. Pinho.',
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#07040f] via-[#150c2a] to-[#2d1b4e] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-autism-red via-autism-gold to-autism-blue" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-lavender-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-lavender-500/20 text-lavender-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Blog Jurídico
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Artigos <span className="text-lavender-400">Informativos</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Conteúdo educativo sobre seus direitos previdenciários, inclusão,
              neurodiversidade e mais. Informação de qualidade para empoderar você.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Artigos */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <BlogCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                readTime={article.readTime}
                slug={article.slug}
                category={article.category}
                delay={index * 0.1}
              />
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-16">
              <Scale className="w-12 h-12 text-secondary-300 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-secondary-500 mb-2">
                Em breve, novos artigos
              </h3>
              <p className="text-secondary-400">
                Estamos preparando conteúdo de qualidade para você.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Aviso */}
      <section className="py-8 bg-secondary-50">
        <div className="container-custom text-center">
          <p className="text-secondary-500 text-sm">
            Este blog tem caráter meramente informativo, nos termos do Provimento 205/2021 da OAB.
            Não substitui consulta jurídica individualizada.
          </p>
        </div>
      </section>
    </>
  );
}
