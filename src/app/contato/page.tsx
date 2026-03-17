import type { Metadata } from 'next';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Scale,
  MessageCircle,
  Globe,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Dra. Luciana J. R. Pinho em Lucas do Rio Verde, MT. Agende uma consulta em Direito Previdenciário, Direitos Humanos e PCDs.',
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    lines: [
      'Av. Brasil, 200s',
      'Alvorada',
      'Lucas do Rio Verde - MT',
    ],
  },
  {
    icon: Phone,
    title: 'Telefone / WhatsApp',
    lines: ['(65) 9911-3429'],
    href: 'tel:+556599113429',
  },
  {
    icon: Mail,
    title: 'E-mail',
    lines: ['contato@lucianapinho.adv.br'],
    href: 'mailto:contato@lucianapinho.adv.br',
  },
  {
    icon: Clock,
    title: 'Horário',
    lines: ['Segunda a Sexta', '08:00 às 18:00'],
  },
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-800 via-gold-500 to-primary-800" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-300 border border-gold-500/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Fale Comigo
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Entre em <span className="text-gold-400">Contato</span>
            </h1>
            <p className="text-secondary-300 text-lg max-w-2xl">
              Estou pronta para esclarecer suas dúvidas com ética e
              profissionalismo. Atendimento presencial em Lucas do Rio Verde e
              remoto para todo o Brasil e Portugal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <div className="bg-warm-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 h-full border border-secondary-200">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="font-serif font-bold text-primary-800 mb-2">
                    {info.title}
                  </h3>
                  {info.lines.map((line) => (
                    <p key={line} className="text-secondary-600 text-sm">
                      {info.href ? (
                        <a
                          href={info.href}
                          className="hover:text-gold-600 transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Destaque atendimento internacional */}
          <AnimatedSection>
            <div className="bg-gradient-to-r from-gold-500/5 to-primary-700/5 border border-gold-500/20 rounded-2xl p-8 mb-16 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-gold-600" />
                <h3 className="font-serif font-bold text-primary-800 text-xl">
                  Atendimento Remoto Internacional
                </h3>
              </div>
              <p className="text-secondary-600 max-w-xl mx-auto mb-2">
                Com inscrição na OAP (Portugal, 2023), atendo brasileiros em qualquer
                lugar do mundo. Consultas por videoconferência com a mesma qualidade do
                atendimento presencial.
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Scale className="w-4 h-4 text-gold-500" />
                <span className="text-sm text-secondary-500">Atendimento profissional e acessível</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Formulário */}
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <SectionHeader
                badge="Formulário de Contato"
                title="Envie sua Mensagem"
                subtitle="Preencha o formulário abaixo e retornarei o mais breve possível."
              />
              <ContactForm />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-warm-100 rounded-2xl p-8 h-full border border-secondary-200">
                <h3 className="font-serif font-bold text-primary-800 text-xl mb-6">
                  Localização
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden bg-secondary-200 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.0!2d-55.91!3d-13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzAwLjAiUyA1NcKwNTQnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do escritório"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-secondary-600 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-600" />
                    Av. Brasil, 200s - Alvorada, Lucas do Rio Verde - MT
                  </p>
                  <p className="text-sm text-secondary-600 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-gold-600" />
                    OAB/MT 7973-B • CNPJ: 31.430.307/0001-56
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
