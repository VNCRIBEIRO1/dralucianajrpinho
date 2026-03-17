import type { Metadata } from 'next';
import { Calculator, Scale } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import CalculadoraClient from './CalculadoraClient';

export const metadata: Metadata = {
  title: 'Simulador Previdenciário',
  description:
    'Simulador de benefícios previdenciários. Calcule uma estimativa do seu benefício do INSS com a Dra. Luciana Pinho.',
};

export default function CalculadoraPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Ferramenta Gratuita
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Simulador <span className="text-gold-400">Previdenciário</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Calcule uma estimativa do seu benefício previdenciário. Esta
              ferramenta é informativa — para um cálculo preciso, agende uma
              consulta de planejamento previdenciário.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Calculadora */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <CalculadoraClient />
        </div>
      </section>

      {/* Aviso */}
      <section className="py-8 bg-secondary-50">
        <div className="container-custom text-center">
          <p className="text-secondary-500 text-sm">
            Os valores calculados são estimativas baseadas na legislação vigente
            e servem apenas como referência. Para um planejamento previdenciário
            preciso, consulte a Dra. Luciana Pinho.
          </p>
        </div>
      </section>
    </>
  );
}
