'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  DollarSign,
  Calendar,
  User,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Shield,
  Heart,
} from 'lucide-react';

type TipoBeneficio =
  | 'aposentadoria-idade'
  | 'aposentadoria-tempo'
  | 'bpc-loas'
  | 'auxilio-doenca'
  | 'aposentadoria-pcd';

interface FormData {
  tipoBeneficio: TipoBeneficio | '';
  idade: string;
  tempoContribuicao: string;
  mediaSalarial: string;
  sexo: 'M' | 'F';
  pcd: boolean;
  rendaFamiliar: string;
}

interface Resultado {
  beneficio: string;
  valorEstimado: number;
  requisitos: string[];
  observacoes: string[];
  elegivel: boolean;
}

const SALARIO_MINIMO = 1412;
const TETO_INSS = 7786.02;

export default function CalculadoraClient() {
  const [formData, setFormData] = useState<FormData>({
    tipoBeneficio: '',
    idade: '',
    tempoContribuicao: '',
    mediaSalarial: '',
    sexo: 'F',
    pcd: false,
    rendaFamiliar: '',
  });

  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const beneficios = [
    {
      id: 'aposentadoria-idade' as TipoBeneficio,
      label: 'Aposentadoria por Idade',
      icon: Calendar,
      desc: 'Idade mínima + tempo de contribuição',
    },
    {
      id: 'aposentadoria-tempo' as TipoBeneficio,
      label: 'Aposentadoria por Tempo',
      icon: Calculator,
      desc: 'Regras de transição pós-reforma',
    },
    {
      id: 'bpc-loas' as TipoBeneficio,
      label: 'BPC/LOAS',
      icon: Heart,
      desc: 'Benefício assistencial – não exige contribuição',
    },
    {
      id: 'auxilio-doenca' as TipoBeneficio,
      label: 'Auxílio por Incapacidade',
      icon: Shield,
      desc: 'Temporário ou permanente',
    },
    {
      id: 'aposentadoria-pcd' as TipoBeneficio,
      label: 'Aposentadoria PCD',
      icon: User,
      desc: 'Regras especiais para PCD (LC 142/13)',
    },
  ];

  function calcular() {
    const idade = parseInt(formData.idade) || 0;
    const tempo = parseInt(formData.tempoContribuicao) || 0;
    const media = parseFloat(formData.mediaSalarial) || 0;
    const renda = parseFloat(formData.rendaFamiliar) || 0;
    const isFeminino = formData.sexo === 'F';

    let res: Resultado = {
      beneficio: '',
      valorEstimado: 0,
      requisitos: [],
      observacoes: [],
      elegivel: false,
    };

    switch (formData.tipoBeneficio) {
      case 'aposentadoria-idade': {
        const idadeMinima = isFeminino ? 62 : 65;
        const tempoMinimo = 15;
        const elegivelIdade = idade >= idadeMinima;
        const elegivelTempo = tempo >= tempoMinimo;

        // Cálculo: 60% + 2% por ano que excede 15 (mulher) ou 20 (homem) anos
        const base = isFeminino ? 15 : 20;
        const excedente = Math.max(0, tempo - base);
        const percentual = 0.6 + excedente * 0.02;
        const valor = Math.min(media * percentual, TETO_INSS);

        res = {
          beneficio: 'Aposentadoria por Idade',
          valorEstimado: Math.max(valor, SALARIO_MINIMO),
          elegivel: elegivelIdade && elegivelTempo,
          requisitos: [
            `Idade mínima: ${idadeMinima} anos (você tem ${idade})`,
            `Tempo mínimo de contribuição: ${tempoMinimo} anos (você tem ${tempo})`,
          ],
          observacoes: [
            `Coeficiente aplicado: ${(percentual * 100).toFixed(0)}% da média`,
            elegivelIdade && elegivelTempo
              ? 'Você pode ter direito a esse benefício.'
              : 'Ainda não preenche todos os requisitos.',
          ],
        };
        break;
      }

      case 'aposentadoria-tempo': {
        // Regra de pontos (transição)
        const pontosMinimo = isFeminino ? 91 : 101; // 2024
        const pontos = idade + tempo;
        const tempoMinimo = isFeminino ? 30 : 35;

        const base = isFeminino ? 15 : 20;
        const excedente = Math.max(0, tempo - base);
        const percentual = 0.6 + excedente * 0.02;
        const valor = Math.min(media * percentual, TETO_INSS);

        res = {
          beneficio: 'Aposentadoria por Tempo de Contribuição (Pontos)',
          valorEstimado: Math.max(valor, SALARIO_MINIMO),
          elegivel: pontos >= pontosMinimo && tempo >= tempoMinimo,
          requisitos: [
            `Pontuação mínima: ${pontosMinimo} pontos (você tem ${pontos})`,
            `Tempo mínimo: ${tempoMinimo} anos (você tem ${tempo})`,
          ],
          observacoes: [
            `Regra de pontos: idade + tempo = ${pontos}`,
            `Coeficiente: ${(percentual * 100).toFixed(0)}% da média`,
            pontos >= pontosMinimo
              ? 'Pontuação atingida!'
              : `Faltam ${pontosMinimo - pontos} pontos.`,
          ],
        };
        break;
      }

      case 'bpc-loas': {
        const rendaPerCapita = renda;
        const limite = SALARIO_MINIMO / 4;
        const elegivelRenda = rendaPerCapita <= limite;
        const elegivelIdadeOuPCD = idade >= 65 || formData.pcd;

        res = {
          beneficio: 'BPC/LOAS',
          valorEstimado: SALARIO_MINIMO,
          elegivel: elegivelRenda && elegivelIdadeOuPCD,
          requisitos: [
            `Renda per capita familiar até R$ ${limite.toFixed(2)} (informada: R$ ${rendaPerCapita.toFixed(2)})`,
            formData.pcd
              ? 'Pessoa com deficiência: Sim ✓'
              : `Idade mínima 65 anos OU deficiência (idade: ${idade})`,
          ],
          observacoes: [
            'Não exige contribuição ao INSS.',
            'O valor é de 1 salário mínimo.',
            formData.pcd
              ? 'Pessoas com TEA/deficiência têm direito ao BPC independente da idade.'
              : '',
            'Requer avaliação social e, se PCD, perícia médica.',
          ].filter(Boolean),
        };
        break;
      }

      case 'auxilio-doenca': {
        const carencia = tempo >= 1; // mínimo 12 contribuições (simplificado como 1 ano)
        const base2 = isFeminino ? 15 : 20;
        const excedente2 = Math.max(0, tempo - base2);
        const percentual2 = 0.6 + excedente2 * 0.02;
        // Auxílio doença: 91% da média
        const valor2 = Math.min(media * 0.91, TETO_INSS);

        res = {
          beneficio: 'Auxílio por Incapacidade Temporária',
          valorEstimado: Math.max(valor2, SALARIO_MINIMO),
          elegivel: carencia,
          requisitos: [
            `Carência mínima: 12 contribuições (você tem ~${tempo} anos)`,
            'Incapacidade atestada por perícia médica do INSS',
          ],
          observacoes: [
            'Cálculo: 91% da média dos salários de contribuição.',
            'Exige afastamento mínimo de 15 dias.',
            'Algumas doenças dispensam carência (ex: acidente, HIV, neoplasia).',
          ],
        };
        break;
      }

      case 'aposentadoria-pcd': {
        // LC 142/2013 – tempo reduzido para PCD
        const tempoMinimoPCD = isFeminino ? 20 : 25; // deficiência grave
        const tempoMinimoModerado = isFeminino ? 24 : 29;
        const tempoMinimoLeve = isFeminino ? 28 : 33;

        const elegivel =
          tempo >= tempoMinimoPCD || tempo >= tempoMinimoModerado || tempo >= tempoMinimoLeve;

        const grau =
          tempo >= tempoMinimoPCD
            ? 'grave'
            : tempo >= tempoMinimoModerado
              ? 'moderado'
              : tempo >= tempoMinimoLeve
                ? 'leve'
                : 'insuficiente';

        const percentual3 = 1.0; // PCD = 100% da média

        const valor3 = Math.min(media * percentual3, TETO_INSS);

        res = {
          beneficio: 'Aposentadoria da Pessoa com Deficiência',
          valorEstimado: Math.max(valor3, SALARIO_MINIMO),
          elegivel,
          requisitos: [
            `Grave: ${tempoMinimoPCD} anos (seu tempo: ${tempo})`,
            `Moderado: ${tempoMinimoModerado} anos`,
            `Leve: ${tempoMinimoLeve} anos`,
            'Deficiência comprovada por perícia biopsicossocial',
          ],
          observacoes: [
            grau !== 'insuficiente'
              ? `Grau estimado de enquadramento: ${grau}.`
              : 'Tempo de contribuição insuficiente para qualquer grau.',
            'PCD recebe 100% da média (sem redutor).',
            'Prevista na LC 142/2013 – direito fundamental da PCD.',
          ],
        };
        break;
      }
    }

    setResultado(res);
    setMostrarResultado(true);
  }

  function resetar() {
    setFormData({
      tipoBeneficio: '',
      idade: '',
      tempoContribuicao: '',
      mediaSalarial: '',
      sexo: 'F',
      pcd: false,
      rendaFamiliar: '',
    });
    setResultado(null);
    setMostrarResultado(false);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {!mostrarResultado ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-2xl shadow-lg border border-secondary-100 p-8"
          >
            {/* Tipo de Benefício */}
            <div className="mb-8">
              <label className="block text-secondary-700 font-semibold mb-4">
                Tipo de Benefício
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {beneficios.map((b) => {
                  const Icon = b.icon;
                  return (
                    <button
                      key={b.id}
                      onClick={() =>
                        setFormData({ ...formData, tipoBeneficio: b.id })
                      }
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                        formData.tipoBeneficio === b.id
                          ? 'border-lavender-500 bg-lavender-50 shadow-md'
                          : 'border-secondary-200 hover:border-lavender-300'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 mt-0.5 ${formData.tipoBeneficio === b.id ? 'text-lavender-600' : 'text-secondary-400'}`}
                      />
                      <div>
                        <span className="font-medium text-secondary-700 text-sm">
                          {b.label}
                        </span>
                        <p className="text-xs text-secondary-400 mt-0.5">
                          {b.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {formData.tipoBeneficio && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-6"
              >
                {/* Sexo */}
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">
                    Sexo
                  </label>
                  <div className="flex gap-4">
                    {[
                      { v: 'F' as const, l: 'Feminino' },
                      { v: 'M' as const, l: 'Masculino' },
                    ].map((s) => (
                      <button
                        key={s.v}
                        onClick={() =>
                          setFormData({ ...formData, sexo: s.v })
                        }
                        className={`px-6 py-2 rounded-lg border-2 font-medium text-sm transition-all ${
                          formData.sexo === s.v
                            ? 'border-lavender-500 bg-lavender-50 text-lavender-700'
                            : 'border-secondary-200 text-secondary-500'
                        }`}
                      >
                        {s.l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* PCD */}
                {(formData.tipoBeneficio === 'bpc-loas' ||
                  formData.tipoBeneficio === 'aposentadoria-pcd') && (
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="pcd"
                      checked={formData.pcd}
                      onChange={(e) =>
                        setFormData({ ...formData, pcd: e.target.checked })
                      }
                      className="w-5 h-5 text-lavender-600 border-secondary-300 rounded focus:ring-lavender-500"
                    />
                    <label htmlFor="pcd" className="text-secondary-700">
                      Pessoa com deficiência (PCD / TEA / Neurodivergente)
                    </label>
                  </div>
                )}

                {/* Idade */}
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">
                    Idade (anos)
                  </label>
                  <input
                    type="number"
                    value={formData.idade}
                    onChange={(e) =>
                      setFormData({ ...formData, idade: e.target.value })
                    }
                    placeholder="Ex: 55"
                    className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:ring-2 focus:ring-lavender-500 focus:border-transparent"
                  />
                </div>

                {/* Tempo de Contribuição */}
                {formData.tipoBeneficio !== 'bpc-loas' && (
                  <div>
                    <label className="block text-secondary-700 font-medium mb-2">
                      Tempo de Contribuição (anos)
                    </label>
                    <input
                      type="number"
                      value={formData.tempoContribuicao}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          tempoContribuicao: e.target.value,
                        })
                      }
                      placeholder="Ex: 25"
                      className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:ring-2 focus:ring-lavender-500 focus:border-transparent"
                    />
                  </div>
                )}

                {/* Média Salarial */}
                {formData.tipoBeneficio !== 'bpc-loas' && (
                  <div>
                    <label className="block text-secondary-700 font-medium mb-2">
                      Média Salarial de Contribuição (R$)
                    </label>
                    <input
                      type="number"
                      value={formData.mediaSalarial}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mediaSalarial: e.target.value,
                        })
                      }
                      placeholder="Ex: 3500"
                      className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:ring-2 focus:ring-lavender-500 focus:border-transparent"
                    />
                  </div>
                )}

                {/* Renda Per Capita */}
                {formData.tipoBeneficio === 'bpc-loas' && (
                  <div>
                    <label className="block text-secondary-700 font-medium mb-2">
                      Renda Per Capita Familiar (R$)
                    </label>
                    <input
                      type="number"
                      value={formData.rendaFamiliar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          rendaFamiliar: e.target.value,
                        })
                      }
                      placeholder={`Até R$ ${(SALARIO_MINIMO / 4).toFixed(2)}`}
                      className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:ring-2 focus:ring-lavender-500 focus:border-transparent"
                    />
                  </div>
                )}

                {/* Calcular */}
                <button
                  onClick={calcular}
                  className="w-full btn-lavender py-4 text-lg font-semibold flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Simular Benefício
                </button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          resultado && (
            <motion.div
              key="resultado"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Card Resultado */}
              <div
                className={`rounded-2xl p-8 shadow-lg border-2 ${
                  resultado.elegivel
                    ? 'bg-green-50 border-green-200'
                    : 'bg-amber-50 border-amber-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {resultado.elegivel ? (
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-serif font-bold text-secondary-800">
                      {resultado.beneficio}
                    </h3>
                    <p
                      className={`text-sm font-medium ${resultado.elegivel ? 'text-green-600' : 'text-amber-600'}`}
                    >
                      {resultado.elegivel
                        ? 'Possível elegibilidade identificada'
                        : 'Requisitos ainda não preenchidos'}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <p className="text-sm text-secondary-500 mb-1">
                    Valor Estimado
                  </p>
                  <p className="text-4xl font-bold text-lavender-600">
                    R${' '}
                    {resultado.valorEstimado.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <p className="text-xs text-secondary-400 mt-1">por mês</p>
                </div>

                {/* Requisitos */}
                <div className="mb-4">
                  <h4 className="font-semibold text-secondary-700 mb-2">
                    Requisitos
                  </h4>
                  <ul className="space-y-1">
                    {resultado.requisitos.map((r, i) => (
                      <li
                        key={i}
                        className="text-sm text-secondary-600 flex items-start gap-2"
                      >
                        <span className="text-lavender-500 mt-1">•</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Observações */}
                <div>
                  <h4 className="font-semibold text-secondary-700 mb-2">
                    Observações
                  </h4>
                  <ul className="space-y-1">
                    {resultado.observacoes.map((o, i) => (
                      <li
                        key={i}
                        className="text-sm text-secondary-500 flex items-start gap-2"
                      >
                        <span className="text-gold-500 mt-1">→</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Aviso importante */}
              <div className="bg-lavender-50 border border-lavender-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-lavender-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-lavender-800 mb-1">
                      Simulação Informativa
                    </h4>
                    <p className="text-sm text-lavender-700">
                      Este cálculo é uma estimativa simplificada. O valor real
                      depende de análise completa do CNIS, regras de transição
                      aplicáveis e perícia (quando necessária). Agende um
                      planejamento previdenciário para uma análise precisa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-4">
                <button
                  onClick={resetar}
                  className="flex-1 py-3 rounded-xl border-2 border-secondary-200 text-secondary-600 font-medium flex items-center justify-center gap-2 hover:bg-secondary-50 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Nova Simulação
                </button>
                <a
                  href="https://wa.me/556599113429?text=Olá%2C%20Dra.%20Luciana!%20Fiz%20uma%20simulação%20no%20site%20e%20gostaria%20de%20agendar%20um%20planejamento%20previdenciário."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-lavender py-3 flex items-center justify-center gap-2"
                >
                  Falar com a Dra. Luciana
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}
