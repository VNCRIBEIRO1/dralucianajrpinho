import Link from 'next/link';
import Image from 'next/image';
import {
  Scale,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
  Heart,
  Puzzle,
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
    title: 'Direitos PCD & Neurodiversidade',
    description:
      'BPC/LOAS, inclusão escolar, cotas, acessibilidade e combate ao capacitismo. Experiência pessoal como autista com diagnóstico tardio.',
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
    title: 'Autismo e Direitos: O Que a Lei Garante',
    excerpt:
      'Conheça os direitos das pessoas autistas no Brasil — BPC, isenções, inclusão escolar, trabalho e acessibilidade.',
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
      <section className="py-16 bg-inclusion-cream relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.08]">
          <Image src={IMAGES.patternLight} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-lavender-600 bg-gradient-to-r from-inclusion-lilac/30 via-inclusion-blush/30 to-inclusion-sky/30 px-5 py-2 rounded-full mb-4 border border-inclusion-lilac/20">
              <span className="text-lg infinity-gradient font-bold">∞</span>
              O Que Nos Move
            </span>
            <h2 className="section-title">
              Advocacia com <span className="infinity-gradient">Propósito</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Pioneira em sua região na integração de conhecimentos jurídicos com compromisso social. Cada caso é uma história. Cada vitória é uma vida transformada.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Puzzle,
                title: 'Neurodiversidade',
                desc: 'Como autista com diagnóstico tardio, a Dra. Luciana entende na pele as barreiras que pessoas neurodivergentes enfrentam. Sua luta é pessoal e profissional.',
                gradient: 'from-autism-purple/10 to-inclusion-lilac/20',
                iconColor: 'text-autism-purple',
                borderColor: 'border-autism-purple/20',
              },
              {
                icon: Heart,
                title: 'Inclusão Social',
                desc: 'Membro ativa da ALFAA, defende o acesso igualitário a direitos, combatendo o capacitismo e promovendo políticas de inclusão em Lucas do Rio Verde e região.',
                gradient: 'from-autism-red/10 to-inclusion-blush/20',
                iconColor: 'text-autism-red',
                borderColor: 'border-autism-red/20',
              },
              {
                icon: Globe,
                title: 'Alcance Global',
                desc: 'Com inscrição na OAP (Portugal, 2023), atende brasileiros em qualquer lugar do mundo. A justiça não tem fronteiras.',
                gradient: 'from-autism-blue/10 to-inclusion-sky/20',
                iconColor: 'text-autism-blue',
                borderColor: 'border-autism-blue/20',
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${item.borderColor} h-full backdrop-blur-sm`}>
                  <div className={`w-14 h-14 bg-white/80 rounded-xl flex items-center justify-center mb-6 shadow-sm`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary-500 mb-3">{item.title}</h3>
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
      <section className="py-20 bg-gradient-to-br from-inclusion-cream via-inclusion-lilac/10 to-inclusion-blush/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                  {/* Rainbow border via wrapper */}
                  <div className="absolute inset-0 rounded-2xl p-[3px] bg-gradient-to-br from-autism-red via-autism-gold to-autism-blue">
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
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-lavender-500 to-lavender-600 text-white p-6 rounded-2xl shadow-xl shadow-lavender-500/20">
                  <p className="text-3xl font-bold">23</p>
                  <p className="text-sm font-medium">Anos de Carreira</p>
                  <p className="text-xs opacity-80 mt-1">Desde 2003</p>
                </div>
                {/* Autism awareness badge */}
                <div className="absolute -top-4 -left-4 bg-white text-primary-500 p-3 rounded-2xl shadow-lg border border-inclusion-lilac/30">
                  <span className="text-2xl infinity-gradient font-bold">∞</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-lavender-600 bg-gradient-to-r from-inclusion-lilac/30 to-inclusion-blush/30 px-4 py-1.5 rounded-full mb-4 border border-inclusion-lilac/20">
                <Puzzle className="w-3.5 h-3.5 text-autism-purple" />
                Sobre a Dra. Luciana Pinho
              </span>
              <h2 className="section-title">
                Pioneira na Integração do <span className="infinity-gradient">Direito</span> com <span className="text-gold-500">Impacto Social</span>
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6">
                A Dra. Luciana de Jesus Ribeiro Pinho é uma advogada previdenciarista
                de destaque em Mato Grosso, pioneira em sua região na integração de
                conhecimentos jurídicos com compromisso social. Com 23 anos de carreira
                em Lucas do Rio Verde, sua atuação une excelência técnica com uma
                sensibilidade única — moldada por sua própria vivência como autista
                com diagnóstico tardio.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { text: 'Mais de 500 processos conduzidos com excelência', color: 'text-autism-blue' },
                  { text: '5+ pós-graduações em múltiplas áreas do Direito', color: 'text-autism-green' },
                  { text: 'Inscrição na OAP — Atuação internacional em Portugal', color: 'text-autism-gold' },
                  { text: 'Membro ativo da ALFAA — Combate ao capacitismo', color: 'text-autism-purple' },
                  { text: 'Pioneira na região: Direito integrado a impacto social, ESG e Direitos Humanos', color: 'text-autism-red' },
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
      <section className="py-16 bg-gradient-to-r from-[#07040f] via-[#150c2a] to-[#07040f] relative overflow-hidden">
        {/* Pattern dark background */}
        <div className="absolute inset-0 opacity-[0.15]">
          <Image src={IMAGES.patternDark} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '23', label: 'Anos de Carreira', color: 'text-autism-blue' },
              { number: '500+', label: 'Processos Conduzidos', color: 'text-autism-green' },
              { number: '5+', label: 'Pós-Graduações', color: 'text-autism-gold' },
              { number: '1ª', label: 'Pioneira — Direito + Impacto Social na Região', color: 'text-autism-red' },
            ].map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                delay={index * 0.1}
                className="text-center"
              >
                <p className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </p>
                <p className="text-primary-200 text-sm">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <GoogleReviewsSlider />

      {/* Blog */}
      <section className="py-20 bg-gradient-to-br from-inclusion-cream to-inclusion-lilac/10">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Blog Jurídico"
              title="Artigos Informativos"
              subtitle="Conteúdo educativo sobre direitos previdenciários, inclusão e neurodiversidade."
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
      <section className="py-20 bg-gradient-to-br from-[#07040f] via-[#150c2a] to-[#2d1b4e] relative overflow-hidden">
        {/* CTA background image */}
        <div className="absolute inset-0 opacity-[0.15]">
          <Image src={IMAGES.ctaBg} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        {/* Colorful glows */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-autism-blue/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-autism-red/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-autism-gold/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <div className="text-4xl mb-4 infinity-gradient font-bold inline-block">∞</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Precisa de Orientação Previdenciária?
            </h2>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto mb-8">
              Pioneira na integração de conhecimentos jurídicos com compromisso
              social. Entre em contato para uma consulta personalizada. Sua luta
              é a minha luta — por justiça, inclusão e dignidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-semibold rounded-xl hover:from-lavender-400 hover:to-lavender-500 transition-all duration-300 shadow-lg shadow-lavender-500/25 hover:shadow-lavender-500/40 hover:-translate-y-0.5 text-base">
                <Puzzle className="w-5 h-5 mr-2" />
                Agende uma Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '556599113429'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-autism-green/40 text-primary-100 rounded-xl font-semibold hover:bg-autism-green/10 hover:border-autism-green/60 transition-all duration-300 text-base"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 mt-8 text-primary-400 text-sm">
              <MapPin className="w-4 h-4" />
              Lucas do Rio Verde, MT • OAB/MT 7973-B • OAP Portugal
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
