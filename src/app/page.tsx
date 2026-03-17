import Link from 'next/link';
import Image from 'next/image';
import {
  Scale,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
  Heart,
  Globe,
  Shield,
  Award,
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import AreaCard from '@/components/AreaCard';
import BlogCard from '@/components/BlogCard';
import AnimatedSection from '@/components/AnimatedSection';
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider';
import { IMAGES } from '@/lib/images';

const areas = [
  {
    iconName: 'Shield',
    title: 'Direito Previdenciário',
    description:
      'Planejamento previdenciário, aposentadorias, revisões de benefícios, auxílio-doença, pensão por morte e defesa junto ao INSS com 23 anos de experiência.',
  },
  {
    iconName: 'Heart',
    title: 'Direitos Humanos',
    description:
      'Defesa intransigente da dignidade humana, combate à discriminação e promoção da igualdade. Atuação em casos de violação de direitos fundamentais.',
  },
  {
    iconName: 'Users',
    title: 'Direitos PCD',
    description:
      'BPC/LOAS, inclusão escolar, cotas, acessibilidade e combate ao capacitismo. Defesa especializada dos direitos das pessoas com deficiência.',
  },
  {
    iconName: 'Landmark',
    title: 'ESG & Sustentabilidade',
    description:
      'Consultoria jurídica em práticas ambientais, sociais e de governança. Integração de responsabilidade social com compliance jurídico.',
  },
  {
    iconName: 'Scale',
    title: 'BPC/LOAS',
    description:
      'Benefício de Prestação Continuada para pessoas com deficiência e idosos. Assessoria completa desde o requerimento até recurso judicial.',
  },
  {
    iconName: 'Briefcase',
    title: 'Aposentadorias',
    description:
      'Aposentadoria por tempo de contribuição, idade, especial, rural e por invalidez. Cálculos e planejamento para o melhor benefício possível.',
  },
];

const blogPosts = [
  {
    title: 'BPC/LOAS: Guia Completo para Pessoas com Deficiência',
    excerpt:
      'Entenda quem tem direito ao BPC, como solicitar, documentação necessária e o que fazer em caso de negativa do INSS.',
    date: '25 Fev 2026',
    readTime: '8 min',
    slug: 'bpc-loas-guia-completo',
    category: 'Direito Previdenciário',
  },
  {
    title: 'Direitos PCD: O Que a Lei Garante',
    excerpt:
      'Conheça os direitos das pessoas com deficiência no Brasil — BPC, isenções, inclusão escolar, trabalho e acessibilidade.',
    date: '18 Fev 2026',
    readTime: '6 min',
    slug: 'autismo-e-direitos',
    category: 'Direitos Humanos',
  },
  {
    title: 'Planejamento Previdenciário: Como Garantir a Melhor Aposentadoria',
    excerpt:
      'Saiba como um planejamento previdenciário adequado pode aumentar significativamente o valor da sua aposentadoria.',
    date: '10 Fev 2026',
    readTime: '7 min',
    slug: 'planejamento-previdenciario',
    category: 'Direito Previdenciário',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Seção Destaque: Causas que importam */}
      <section className="py-16 bg-warm-100 relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.08]">
          <Image src={IMAGES.patternLight} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-700 bg-gradient-to-r from-gold-100/50 via-secondary-100 to-gold-100/50 px-5 py-2 rounded-full mb-4 border border-gold-200/30">
              <Scale className="w-4 h-4 text-gold-600" />
              O Que Nos Move
            </span>
            <h2 className="section-title">
              Advocacia com <span className="text-gold-600">Propósito</span>
            </h2>
            <p className="section-subtitle mx-auto">
              23 anos dedicados à defesa dos seus direitos. Cada caso é uma história. Cada vitória é uma vida transformada.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Experiência Sólida',
                desc: 'Com mais de duas décadas de atuação em Direito Previdenciário, a Dra. Luciana possui profundo conhecimento das nuances jurídicas que fazem a diferença para seu caso.',
                gradient: 'from-primary-800/10 to-primary-700/15',
                iconColor: 'text-primary-700',
                borderColor: 'border-primary-200',
              },
              {
                icon: Heart,
                title: 'Compromisso Social',
                desc: 'Defesa intransigente dos direitos das pessoas com deficiência, combate ao capacitismo e promoção da igualdade de acesso à justiça em Lucas do Rio Verde e região.',
                gradient: 'from-gold-400/10 to-gold-500/15',
                iconColor: 'text-gold-600',
                borderColor: 'border-gold-200',
              },
              {
                icon: Globe,
                title: 'Alcance Internacional',
                desc: 'Com inscrição na OAP (Portugal, 2023), atende brasileiros em qualquer lugar do mundo. A justiça não tem fronteiras.',
                gradient: 'from-secondary-200/30 to-secondary-100/20',
                iconColor: 'text-primary-600',
                borderColor: 'border-secondary-200',
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${item.borderColor} h-full backdrop-blur-sm`}>
                  <div className={`w-14 h-14 bg-white/80 rounded-xl flex items-center justify-center mb-6 shadow-sm`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">{item.title}</h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background image decorativa */}
        <div className="absolute inset-0 opacity-[0.06]">
          <Image src={IMAGES.areasSectionBg} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <SectionHeader
              badge="Áreas de Atuação"
              title="Como Posso Ajudar"
              subtitle="Especialização em Direito Previdenciário com atuação multidisciplinar em Direitos Humanos, ESG e inclusão de PCDs."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <AreaCard
                key={area.title}
                iconName={area.iconName}
                title={area.title}
                description={area.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/areas-de-atuacao"
              className="btn-primary inline-flex items-center"
            >
              Ver Todas as Áreas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Sobre - Prévia */}
      <section className="py-20 bg-gradient-to-br from-warm-100 via-secondary-50 to-warm-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                  {/* Elegant gold border */}
                  <div className="absolute inset-0 rounded-2xl p-[3px] bg-gradient-to-br from-gold-400 via-primary-600 to-gold-500">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                      <Image
                        src={IMAGES.lawyer}
                        alt="Dra. Luciana de Jesus Ribeiro Pinho"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                {/* Stats badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-800 to-primary-700 text-white p-6 rounded-2xl shadow-xl shadow-primary-900/20">
                  <p className="text-3xl font-bold">23</p>
                  <p className="text-sm font-medium">Anos de Carreira</p>
                  <p className="text-xs opacity-80 mt-1">Desde 2003</p>
                </div>
                {/* Scale badge */}
                <div className="absolute -top-4 -left-4 bg-white text-gold-600 p-3 rounded-2xl shadow-lg border border-secondary-200">
                  <Scale className="w-6 h-6" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-700 bg-gradient-to-r from-gold-100/50 to-secondary-100 px-4 py-1.5 rounded-full mb-4 border border-gold-200/30">
                <Award className="w-3.5 h-3.5 text-gold-600" />
                Sobre a Dra. Luciana Pinho
              </span>
              <h2 className="section-title">
                Excelência em <span className="text-gold-600">Direito Previdenciário</span> com <span className="text-primary-700">Compromisso Social</span>
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6">
                A Dra. Luciana de Jesus Ribeiro Pinho é uma advogada previdenciarista
                de destaque em Mato Grosso. Com 23 anos de carreira
                em Lucas do Rio Verde, sua atuação une excelência técnica com
                compromisso social — dedicada à defesa dos direitos previdenciários,
                das pessoas com deficiência e dos direitos humanos.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { text: 'Mais de 500 processos conduzidos com excelência', color: 'text-gold-600' },
                  { text: '5+ pós-graduações em múltiplas áreas do Direito', color: 'text-primary-600' },
                  { text: 'Inscrição na OAP — Atuação internacional em Portugal', color: 'text-gold-700' },
                  { text: 'Especialista em Direitos Humanos — Universidade de Coimbra', color: 'text-primary-700' },
                  { text: 'Atuação multidisciplinar: Previdenciário, PCD, ESG e Direitos Humanos', color: 'text-gold-600' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${item.color} flex-shrink-0`} />
                    <span className="text-secondary-700">{item.text}</span>
                  </li>
                ))}
              </ul>

              <Link href="/sobre" className="btn-primary">
                Conheça Minha História
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950 relative overflow-hidden">
        {/* Pattern dark background */}
        <div className="absolute inset-0 opacity-[0.15]">
          <Image src={IMAGES.patternDark} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '23', label: 'Anos de Carreira', color: 'text-gold-400' },
              { number: '500+', label: 'Processos Conduzidos', color: 'text-gold-300' },
              { number: '5+', label: 'Pós-Graduações', color: 'text-gold-400' },
              { number: 'OAP', label: 'Atuação Internacional', color: 'text-gold-300' },
            ].map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                delay={index * 0.1}
                className="text-center"
              >
                <p className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </p>
                <p className="text-secondary-300 text-sm">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <GoogleReviewsSlider />

      {/* Blog */}
      <section className="py-20 bg-gradient-to-br from-warm-100 to-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Blog Jurídico"
              title="Artigos Informativos"
              subtitle="Conteúdo educativo sobre direitos previdenciários, direitos PCD e legislação social."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} {...post} delay={index * 0.1} />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/blog"
              className="btn-outline inline-flex items-center"
            >
              Ver Todos os Artigos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden">
        {/* CTA background image */}
        <div className="absolute inset-0 opacity-[0.15]">
          <Image src={IMAGES.ctaBg} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        {/* Warm glows */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <Scale className="w-10 h-10 text-gold-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Precisa de Orientação Previdenciária?
            </h2>
            <p className="text-secondary-300 text-lg max-w-2xl mx-auto mb-8">
              Com 23 anos de experiência em Direito Previdenciário,
              a Dra. Luciana Pinho está pronta para analisar seu caso.
              Entre em contato para uma consulta personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:-translate-y-0.5 text-base">
                <Scale className="w-5 h-5 mr-2" />
                Agende uma Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '556599113429'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-gold-500/40 text-warm-100 rounded-xl font-semibold hover:bg-gold-500/10 hover:border-gold-500/60 transition-all duration-300 text-base"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 mt-8 text-secondary-400 text-sm">
              <MapPin className="w-4 h-4" />
              Lucas do Rio Verde, MT • OAB/MT 7973-B • OAP Portugal
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
