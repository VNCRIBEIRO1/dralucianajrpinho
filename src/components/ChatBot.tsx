'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  Send,
  Scale,
  Bot,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Clock,
  CheckCircle,
  Puzzle,
} from 'lucide-react';

// ============================================================
// TIPOS
// ============================================================
type Mensagem = {
  id: number;
  tipo: 'bot' | 'user';
  texto: string;
  opcoes?: Opcao[];
  timestamp: Date;
};

type Opcao = {
  label: string;
  valor: string;
};

type DadosTriagem = {
  area: string;
  subarea: string;
  urgencia: string;
  detalhes: string[];
  nome: string;
  telefone: string;
};

type Pergunta = {
  id: string;
  texto: string;
  opcoes?: Opcao[];
  livre?: boolean;
  campo?: keyof DadosTriagem;
  campoArray?: boolean;
};

type Fluxo = {
  saudacao: string;
  perguntas: Pergunta[];
};

// ============================================================
// PERGUNTA DE URGÊNCIA
// ============================================================
const PERGUNTA_URGENCIA: Pergunta = {
  id: 'urgencia',
  texto: 'Qual o nível de urgência da sua situação?',
  opcoes: [
    { label: '🔴 Urgente — preciso de atendimento imediato', valor: 'URGENTE' },
    { label: '🟡 Moderado — preciso resolver em breve', valor: 'MODERADO' },
    { label: '🟢 Consulta — quero entender meus direitos', valor: 'CONSULTA' },
  ],
  campo: 'urgencia',
};

// ============================================================
// FLUXOS — DRA. LUCIANA J. R. PINHO
// ============================================================
const FLUXOS: Record<string, Fluxo> = {
  aposentadoria: {
    saudacao:
      'Entendi! Vamos conversar sobre sua *aposentadoria*. Com 23 anos de experiência e como pioneira na integração do Direito com compromisso social, a Dra. Luciana vai analisar seu caso pessoalmente. Me conte mais:',
    perguntas: [
      {
        id: 'sub',
        texto: 'Qual tipo de aposentadoria você busca?',
        opcoes: [
          { label: '📅 Aposentadoria por Idade', valor: 'Aposentadoria por idade' },
          { label: '⏰ Aposentadoria por Tempo de Contribuição', valor: 'Aposentadoria por tempo de contribuição' },
          { label: '⚠️ Aposentadoria Especial (insalubridade/periculosidade)', valor: 'Aposentadoria especial' },
          { label: '🌾 Aposentadoria Rural', valor: 'Aposentadoria rural' },
          { label: '🏥 Aposentadoria por Invalidez', valor: 'Aposentadoria por invalidez' },
          { label: '🔄 Revisão de Aposentadoria', valor: 'Revisão de aposentadoria' },
          { label: '📊 Planejamento Previdenciário', valor: 'Planejamento previdenciário' },
          { label: '📋 Outro assunto previdenciário', valor: 'Outro assunto previdenciário' },
        ],
        campo: 'subarea',
      },
      PERGUNTA_URGENCIA,
      {
        id: 'contribuicao',
        texto: 'Há quanto tempo você contribui para o INSS?',
        opcoes: [
          { label: '📅 Menos de 10 anos', valor: 'Menos de 10 anos de contribuição' },
          { label: '📅 Entre 10 e 20 anos', valor: 'Entre 10 e 20 anos' },
          { label: '📅 Entre 20 e 30 anos', valor: 'Entre 20 e 30 anos' },
          { label: '📅 Mais de 30 anos', valor: 'Mais de 30 anos' },
          { label: '❓ Não sei informar', valor: 'Tempo de contribuição não informado' },
        ],
        campoArray: true,
      },
      {
        id: 'situacao',
        texto: 'Qual sua situação atual junto ao INSS?',
        opcoes: [
          { label: '✅ Nunca solicitei — quero saber se tenho direito', valor: 'Nunca solicitou' },
          { label: '⏳ Já solicitei e aguardo resposta', valor: 'Aguardando resposta do INSS' },
          { label: '❌ Tive benefício negado', valor: 'Benefício negado pelo INSS' },
          { label: '💰 Já recebo mas acho que o valor está errado', valor: 'Possível revisão de valor' },
          { label: '🔄 Benefício cessado/cortado', valor: 'Benefício cessado ou cortado' },
        ],
        campoArray: true,
      },
      {
        id: 'detalhe',
        texto: 'Descreva brevemente sua situação previdenciária:',
        livre: true,
        campoArray: true,
      },
    ],
  },

  bpc: {
    saudacao:
      'Vamos falar sobre o *BPC/LOAS*! Este é um dos temas que a Dra. Luciana mais atua — com vasta experiência em conseguir esse benefício. Vou fazer algumas perguntas:',
    perguntas: [
      {
        id: 'sub',
        texto: 'Para quem é o BPC/LOAS?',
        opcoes: [
          { label: '♿ Pessoa com Deficiência (qualquer idade)', valor: 'BPC para PCD' },
          { label: '🧓 Idoso com 65 anos ou mais', valor: 'BPC para idoso' },
          { label: '🧩 Pessoa com Autismo / TEA', valor: 'BPC para pessoa com autismo' },
          { label: '👶 Criança com deficiência', valor: 'BPC para criança com deficiência' },
          { label: '❓ Não sei se tenho direito', valor: 'Dúvida sobre direito ao BPC' },
        ],
        campo: 'subarea',
      },
      PERGUNTA_URGENCIA,
      {
        id: 'renda',
        texto: 'Qual a renda familiar per capita (por pessoa)?',
        opcoes: [
          { label: '💲 Até ¼ do salário mínimo', valor: 'Renda até 1/4 do salário mínimo' },
          { label: '💲 Até ½ salário mínimo', valor: 'Renda até 1/2 salário mínimo' },
          { label: '💲 Acima de ½ salário mínimo', valor: 'Renda acima de 1/2 salário mínimo' },
          { label: '❓ Não sei calcular', valor: 'Não sabe informar renda per capita' },
        ],
        campoArray: true,
      },
      {
        id: 'cadunico',
        texto: 'Já possui inscrição no CadÚnico?',
        opcoes: [
          { label: '✅ Sim, CadÚnico atualizado', valor: 'CadÚnico atualizado' },
          { label: '⚠️ Sim, mas desatualizado', valor: 'CadÚnico desatualizado' },
          { label: '❌ Não possuo CadÚnico', valor: 'Sem CadÚnico' },
          { label: '❓ Não sei', valor: 'Não sabe sobre CadÚnico' },
        ],
        campoArray: true,
      },
      {
        id: 'tentativa',
        texto: 'Já tentou solicitar o BPC antes?',
        opcoes: [
          { label: '❌ Nunca solicitei', valor: 'Primeira solicitação' },
          { label: '🚫 Sim, mas foi negado', valor: 'BPC já negado anteriormente' },
          { label: '🔄 Recebia e foi cortado', valor: 'BPC cortado / cessado' },
          { label: '📊 Quero revisão', valor: 'Revisão de BPC' },
        ],
        campoArray: true,
      },
      {
        id: 'detalhe',
        texto: 'Conte brevemente sobre a situação:',
        livre: true,
        campoArray: true,
      },
    ],
  },

  pcd: {
    saudacao:
      'Você está no lugar certo! 💜 A Dra. Luciana é autista com diagnóstico tardio, membro ativa da ALFAA e *pioneira em sua região na integração de conhecimentos jurídicos com compromisso social*. Ela entende *na pele* as barreiras enfrentadas por PCDs:',
    perguntas: [
      {
        id: 'sub',
        texto: 'Qual situação melhor descreve o que você precisa?',
        opcoes: [
          { label: '🧩 Direitos do Autista (TEA)', valor: 'Direitos da pessoa autista' },
          { label: '📚 Inclusão escolar negada', valor: 'Inclusão escolar negada' },
          { label: '💼 Cotas de emprego / discriminação', valor: 'Cotas PCD / discriminação' },
          { label: '♿ Falta de acessibilidade', valor: 'Falta de acessibilidade' },
          { label: '🚫 Capacitismo / discriminação', valor: 'Capacitismo e discriminação' },
          { label: '💊 Negativa de tratamento / terapia', valor: 'Negativa de tratamento' },
          { label: '🚗 Isenção fiscal (IPI/ICMS/IR)', valor: 'Isenção fiscal para PCD' },
          { label: '🏥 Plano de saúde negando cobertura', valor: 'Plano negando cobertura PCD' },
          { label: '📋 Outro assunto PCD', valor: 'Outro assunto PCD' },
        ],
        campo: 'subarea',
      },
      PERGUNTA_URGENCIA,
      {
        id: 'diagnostico',
        texto: 'A pessoa possui laudo médico de deficiência?',
        opcoes: [
          { label: '✅ Sim, laudo atualizado', valor: 'Possui laudo atualizado' },
          { label: '⚠️ Sim, mas desatualizado', valor: 'Laudo desatualizado' },
          { label: '❌ Não possui laudo', valor: 'Sem laudo médico' },
          { label: '🔍 Em processo de diagnóstico', valor: 'Em diagnóstico' },
        ],
        campoArray: true,
      },
      {
        id: 'detalhe',
        texto: 'Descreva a situação com detalhes:',
        livre: true,
        campoArray: true,
      },
    ],
  },

  auxilio: {
    saudacao:
      'Compreendo sua situação. Vamos tratar do seu *auxílio por incapacidade*. A Dra. Luciana tem ampla experiência nesse benefício:',
    perguntas: [
      {
        id: 'sub',
        texto: 'Qual benefício você busca?',
        opcoes: [
          { label: '🏥 Auxílio por Incapacidade Temporária', valor: 'Auxílio por incapacidade temporária' },
          { label: '⚠️ Auxílio-Acidente', valor: 'Auxílio-acidente' },
          { label: '🔄 Prorrogação de benefício', valor: 'Prorrogação de auxílio' },
          { label: '❌ Benefício negado na perícia', valor: 'Auxílio negado na perícia' },
          { label: '🏭 Doença ocupacional / acidente de trabalho', valor: 'Doença ocupacional' },
          { label: '📋 Outro', valor: 'Outro assunto de auxílio' },
        ],
        campo: 'subarea',
      },
      PERGUNTA_URGENCIA,
      {
        id: 'afastamento',
        texto: 'Há quanto tempo está afastado(a)?',
        opcoes: [
          { label: '📅 Menos de 15 dias', valor: 'Menos de 15 dias' },
          { label: '📅 Entre 15 dias e 3 meses', valor: '15 dias a 3 meses' },
          { label: '📅 Entre 3 meses e 1 ano', valor: '3 meses a 1 ano' },
          { label: '📅 Mais de 1 ano', valor: 'Mais de 1 ano' },
          { label: '💼 Ainda estou trabalhando', valor: 'Ainda trabalhando' },
        ],
        campoArray: true,
      },
      {
        id: 'detalhe',
        texto: 'Descreva sua condição de saúde e o que aconteceu:',
        livre: true,
        campoArray: true,
      },
    ],
  },

  pensao: {
    saudacao:
      'Entendo que este é um momento delicado. A Dra. Luciana vai cuidar do seu caso com toda a sensibilidade necessária:',
    perguntas: [
      {
        id: 'sub',
        texto: 'Qual sua situação em relação à pensão por morte?',
        opcoes: [
          { label: '📋 Quero solicitar pensão por morte', valor: 'Solicitar pensão por morte' },
          { label: '❌ Pensão negada pelo INSS', valor: 'Pensão negada' },
          { label: '💰 Quero revisar o valor', valor: 'Revisão de pensão' },
          { label: '🔄 Pensão cessada — quero recorrer', valor: 'Pensão cessada' },
          { label: '👨‍👩‍👧 Dúvida sobre dependentes', valor: 'Dúvida sobre dependentes' },
        ],
        campo: 'subarea',
      },
      PERGUNTA_URGENCIA,
      {
        id: 'relacao',
        texto: 'Qual sua relação com o(a) falecido(a)?',
        opcoes: [
          { label: '💍 Cônjuge / companheiro(a)', valor: 'Cônjuge' },
          { label: '👶 Filho(a) menor de 21 anos', valor: 'Filho(a) menor' },
          { label: '👨‍👩‍👧 Filho(a) com deficiência', valor: 'Filho(a) com deficiência' },
          { label: '👴 Pai/mãe dependente', valor: 'Pai ou mãe dependente' },
        ],
        campoArray: true,
      },
      {
        id: 'detalhe',
        texto: 'Descreva brevemente a situação:',
        livre: true,
        campoArray: true,
      },
    ],
  },

  humanos: {
    saudacao:
      'A Dra. Luciana é pós-graduada em *Direitos Humanos* pela Universidade de Coimbra e *pioneira em sua região na integração de conhecimentos jurídicos com compromisso social*. Vamos entender seu caso:',
    perguntas: [
      {
        id: 'sub',
        texto: 'Qual situação se aplica?',
        opcoes: [
          { label: '🚫 Discriminação (racial, gênero, deficiência)', valor: 'Discriminação' },
          { label: '⚖️ Violação de direitos fundamentais', valor: 'Violação de direitos' },
          { label: '🏥 Negativa de acesso à saúde', valor: 'Negativa de saúde' },
          { label: '📚 Negativa de acesso à educação', valor: 'Negativa de educação' },
          { label: '👨‍👩‍👧 Violência doméstica', valor: 'Violência doméstica' },
          { label: '🌍 Direitos de imigrantes', valor: 'Direitos de imigrantes' },
          { label: '📋 Outro assunto', valor: 'Outro assunto de DH' },
        ],
        campo: 'subarea',
      },
      PERGUNTA_URGENCIA,
      {
        id: 'detalhe',
        texto: 'Descreva o que aconteceu (todas as informações são tratadas com *total sigilo*):',
        livre: true,
        campoArray: true,
      },
    ],
  },

  esg: {
    saudacao:
      'A Dra. Luciana é especialista em *ESG* e *pioneira na região na integração de sustentabilidade com o Direito*. Vamos entender sua necessidade:',
    perguntas: [
      {
        id: 'sub',
        texto: 'Qual é a principal necessidade?',
        opcoes: [
          { label: '🌱 Consultoria ESG', valor: 'Consultoria ESG' },
          { label: '📊 Compliance ambiental', valor: 'Compliance ambiental' },
          { label: '🏢 Governança corporativa', valor: 'Governança corporativa' },
          { label: '♿ Políticas de inclusão', valor: 'Políticas de inclusão' },
          { label: '📋 Outro assunto ESG', valor: 'Outro assunto ESG' },
        ],
        campo: 'subarea',
      },
      PERGUNTA_URGENCIA,
      {
        id: 'detalhe',
        texto: 'Descreva sua necessidade:',
        livre: true,
        campoArray: true,
      },
    ],
  },
};

// ============================================================
// ÁREAS DO MENU INICIAL
// ============================================================
const AREAS: Opcao[] = [
  { label: '🏛️ Aposentadoria / Previdenciário', valor: 'aposentadoria' },
  { label: '🤝 BPC/LOAS', valor: 'bpc' },
  { label: '🏥 Auxílio-Doença / Acidente', valor: 'auxilio' },
  { label: '💜 Pensão por Morte', valor: 'pensao' },
  { label: '🧩 Direitos PCD & Autismo', valor: 'pcd' },
  { label: '⚖️ Direitos Humanos', valor: 'humanos' },
  { label: '🌱 ESG & Sustentabilidade', valor: 'esg' },
  { label: '🧮 Simulador INSS', valor: 'calculadora' },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '556599113429';

const getUrgenciaMarcador = (nivel: string) => {
  switch (nivel) {
    case 'URGENTE': return '[!!!]';
    case 'MODERADO': return '[!!]';
    case 'CONSULTA': return '[!]';
    default: return '[-]';
  }
};

const getUrgenciaTexto = (nivel: string) => {
  switch (nivel) {
    case 'URGENTE': return 'URGENTE — Atendimento imediato';
    case 'MODERADO': return 'MODERADO — Resolver em breve';
    case 'CONSULTA': return 'CONSULTA — Orientação';
    default: return 'Não informado';
  }
};

const getUrgenciaCor = (nivel: string) => {
  switch (nivel) {
    case 'URGENTE': return 'text-red-600 bg-red-50 border-red-200';
    case 'MODERADO': return 'text-yellow-700 bg-yellow-50 border-yellow-200';
    case 'CONSULTA': return 'text-green-700 bg-green-50 border-green-200';
    default: return 'text-secondary-600 bg-secondary-50 border-secondary-200';
  }
};

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export default function ChatBot() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [inputTexto, setInputTexto] = useState('');
  const [etapa, setEtapa] = useState<'inicio' | 'fluxo' | 'nome' | 'telefone' | 'resumo'>('inicio');
  const [areaAtual, setAreaAtual] = useState('');
  const [perguntaIdx, setPerguntaIdx] = useState(0);
  const [dados, setDados] = useState<DadosTriagem>({
    area: '', subarea: '', urgencia: '', detalhes: [], nome: '', telefone: '',
  });
  const [digitando, setDigitando] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idCounter = useRef(0);
  const nextId = () => ++idCounter.current;

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [mensagens, digitando]);

  useEffect(() => {
    if (aberto && inputRef.current) inputRef.current.focus();
  }, [aberto, etapa, mensagens]);

  const iniciar = useCallback(() => {
    idCounter.current = 0;
    setMensagens([]);
    setEtapa('inicio');
    setAreaAtual('');
    setPerguntaIdx(0);
    setDados({ area: '', subarea: '', urgencia: '', detalhes: [], nome: '', telefone: '' });

    setTimeout(() => {
      setDigitando(true);
      setTimeout(() => {
        setDigitando(false);
        setMensagens([{
          id: nextId(),
          tipo: 'bot',
          texto: 'Olá! 👋 Sou a assistente virtual da *Dra. Luciana Pinho*, advogada previdenciarista com 23 anos de experiência em Lucas do Rio Verde, MT.\n\n🏆 *Pioneira em sua região na integração de conhecimentos jurídicos com compromisso social.*\n\n💜 Especialista em Direito Previdenciário, Direitos Humanos, PCD & Neurodiversidade e ESG.\n\n🧩 Como autista com diagnóstico tardio, a Dra. Luciana entende *na pele* a luta por direitos.\n\nComo posso ajudá-lo(a)?',
          opcoes: AREAS,
          timestamp: new Date(),
        }]);
      }, 800);
    }, 300);
  }, []);

  useEffect(() => {
    if (aberto && mensagens.length === 0) iniciar();
  }, [aberto, mensagens.length, iniciar]);

  useEffect(() => {
    const handleAbrirChatbot = () => setAberto(true);
    window.addEventListener('abrir-chatbot', handleAbrirChatbot);
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('.abrir-chatbot-btn')) { e.preventDefault(); setAberto(true); }
    };
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('abrir-chatbot', handleAbrirChatbot);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const addBotMsg = (texto: string, opcoes?: Opcao[]) => {
    setDigitando(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setDigitando(false);
        setMensagens((prev) => [...prev, { id: nextId(), tipo: 'bot', texto, opcoes, timestamp: new Date() }]);
        resolve();
      }, 600 + Math.random() * 400);
    });
  };

  const addUserMsg = (texto: string) => {
    setMensagens((prev) => [...prev, { id: nextId(), tipo: 'user', texto, timestamp: new Date() }]);
  };

  const selecionarArea = async (valor: string) => {
    if (valor === 'calculadora') {
      addUserMsg('🧮 Simulador INSS');
      await addBotMsg('✅ Vou te direcionar para o *Simulador de Direitos Previdenciários*.\n\n👉 A página será aberta em instantes...');
      setTimeout(() => { window.open('/calculadora-de-direitos', '_blank'); }, 1500);
      return;
    }
    const areaLabel = AREAS.find((a) => a.valor === valor)?.label || valor;
    addUserMsg(areaLabel);
    const fluxo = FLUXOS[valor];
    if (!fluxo) return;
    setAreaAtual(valor);
    setDados((prev) => ({ ...prev, area: areaLabel.replace(/^[^\s]+\s/, '') }));
    setPerguntaIdx(0);
    setEtapa('fluxo');
    await addBotMsg(fluxo.saudacao);
    const p = fluxo.perguntas[0];
    await addBotMsg(p.texto, p.opcoes);
  };

  const responderPergunta = async (resposta: string, label?: string) => {
    addUserMsg(label || resposta);
    const fluxo = FLUXOS[areaAtual];
    if (!fluxo) return;
    const pAtual = fluxo.perguntas[perguntaIdx];
    if (pAtual.campo) setDados((prev) => ({ ...prev, [pAtual.campo!]: resposta }));
    if (pAtual.campoArray) setDados((prev) => ({ ...prev, detalhes: [...prev.detalhes, `${pAtual.texto}\n→ ${resposta}`] }));
    const nextIdx = perguntaIdx + 1;
    if (nextIdx < fluxo.perguntas.length) {
      setPerguntaIdx(nextIdx);
      const prox = fluxo.perguntas[nextIdx];
      await addBotMsg(prox.texto, prox.opcoes);
    } else {
      setEtapa('nome');
      await addBotMsg('Obrigada pelas informações! 💜 Para a Dra. Luciana retornar seu contato, qual o seu *nome completo*?');
    }
  };

  const enviarNome = async (nome: string) => {
    addUserMsg(nome);
    setDados((prev) => ({ ...prev, nome }));
    setEtapa('telefone');
    await addBotMsg(`Prazer, ${nome.split(' ')[0]}! Agora informe seu *telefone* com DDD:`);
  };

  const enviarTelefone = async (telefone: string) => {
    addUserMsg(telefone);
    setDados((prev) => ({ ...prev, telefone }));
    setEtapa('resumo');
    await addBotMsg('Perfeito! 🎯 Preparei o resumo da sua consulta. Clique abaixo para enviar ao *WhatsApp da Dra. Luciana*!');
    setDigitando(true);
    setTimeout(() => {
      setDigitando(false);
      setMensagens((prev) => [...prev, { id: nextId(), tipo: 'bot', texto: '__RESUMO__', timestamp: new Date() }]);
    }, 500);
  };

  const gerarMensagemWhatsApp = () => {
    const d = dados;
    const urgMarcador = getUrgenciaMarcador(d.urgencia);
    const urgTexto = getUrgenciaTexto(d.urgencia);
    const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Cuiaba' });
    const detalhes = d.detalhes.map((item, idx) => {
      const parts = item.split('\n→ ');
      return parts.length === 2 ? `${idx + 1}. _${parts[0]}_\n   > *${parts[1]}*` : `${idx + 1}. ${item}`;
    }).join('\n\n');
    const linha = '________________________________';
    return `${urgMarcador} *${urgTexto.toUpperCase()}*\n${linha}\n\n*NOVA CONSULTA — Dra. Luciana Pinho*\n*OAB/MT 7973-B*\n${linha}\n\n*Área:* ${d.area}\n*Assunto:* ${d.subarea}\n*Urgência:* ${urgMarcador} ${urgTexto}\n${linha}\n\n*DETALHES*\n${linha}\n\n${detalhes}\n${linha}\n\n*DADOS DO CLIENTE*\n${linha}\n\n*Nome:* ${d.nome}\n*Telefone:* ${d.telefone}\n${linha}\n\n*Data/Hora:* ${dataHora}\n_Enviado via Assistente Virtual — dralucianajrpinho.vercel.app_`.trim();
  };

  const enviarTriagemAPI = async () => {
    try {
      const detalhesObj: Record<string, string> = {};
      dados.detalhes.forEach((item, idx) => {
        const parts = item.split('\n→ ');
        if (parts.length === 2) detalhesObj[parts[0]] = parts[1];
        else detalhesObj[`Detalhe ${idx + 1}`] = item;
      });
      await fetch('/api/triagem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: dados.nome, telefone: dados.telefone, area: dados.area, subarea: dados.subarea,
          urgencia: dados.urgencia === 'URGENTE' ? 'alta' : dados.urgencia === 'MODERADO' ? 'media' : 'baixa',
          detalhes: JSON.stringify(detalhesObj),
        }),
      });
    } catch { /* silencioso */ }
  };

  const abrirWhatsApp = () => {
    enviarTriagemAPI();
    const msg = encodeURIComponent(gerarMensagemWhatsApp());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = inputTexto.trim();
    if (!texto) return;
    setInputTexto('');
    if (etapa === 'nome') enviarNome(texto);
    else if (etapa === 'telefone') enviarTelefone(texto);
    else if (etapa === 'fluxo') {
      const fluxo = FLUXOS[areaAtual];
      if (fluxo?.perguntas[perguntaIdx]?.livre) responderPergunta(texto);
    }
  };

  const inputAtivo = etapa === 'nome' || etapa === 'telefone' || (etapa === 'fluxo' && FLUXOS[areaAtual]?.perguntas[perguntaIdx]?.livre === true);

  return (
    <>
      <AnimatePresence>
        {!aberto && (
          <motion.button
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
            onClick={() => setAberto(true)}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-br from-lavender-500 to-lavender-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-lavender-500/40 transition-shadow group"
            aria-label="Abrir assistente virtual da Dra. Luciana Pinho"
            title="Assistente Virtual — Dra. Luciana Pinho"
          >
            <Puzzle className="w-7 h-7 text-white" />
            <span className="absolute inset-0 rounded-full bg-lavender-400 animate-ping opacity-20" />
            <span className="absolute right-full mr-3 bg-white text-secondary-700 text-sm px-4 py-2 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Fale com a Dra. Luciana
            </span>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow">1</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-4rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-secondary-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#150c2a] via-[#2d1b4e] to-[#150c2a] px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-lavender-500/20 rounded-full flex items-center justify-center">
                <Puzzle className="w-5 h-5 text-lavender-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm truncate">Dra. Luciana Pinho</h3>
                <p className="text-primary-300 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
                  Assistente online • OAB/MT 7973-B
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={iniciar} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-primary-300 hover:text-white" title="Reiniciar"><ArrowLeft className="w-4 h-4" /></button>
                <button onClick={() => setAberto(false)} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-primary-300 hover:text-white" title="Fechar"><X className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-lavender-500 to-transparent flex-shrink-0" />

            {/* Chat body */}
            <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-secondary-50 to-white">
              {mensagens.map((msg) => (
                <div key={msg.id}>
                  {msg.texto === '__RESUMO__' ? (
                    <div className="bg-gradient-to-br from-lavender-50 to-rose-50 border border-lavender-200 rounded-xl p-4 space-y-3">
                      <p className="font-semibold text-sm text-secondary-800 flex items-center gap-2">
                        <Scale className="w-4 h-4 text-lavender-600" /> Resumo da Consulta
                      </p>
                      {dados.urgencia && (
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getUrgenciaCor(dados.urgencia)}`}>
                          {dados.urgencia === 'URGENTE' && <AlertTriangle className="w-3 h-3" />}
                          {dados.urgencia === 'MODERADO' && <Clock className="w-3 h-3" />}
                          {dados.urgencia === 'CONSULTA' && <CheckCircle className="w-3 h-3" />}
                          {getUrgenciaMarcador(dados.urgencia)} {getUrgenciaTexto(dados.urgencia)}
                        </div>
                      )}
                      <div className="text-xs text-secondary-600 space-y-1">
                        <p><strong>Área:</strong> {dados.area}</p>
                        <p><strong>Assunto:</strong> {dados.subarea}</p>
                        <p><strong>Cliente:</strong> {dados.nome}</p>
                        <p><strong>Telefone:</strong> {dados.telefone}</p>
                      </div>
                      <button onClick={abrirWhatsApp} className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2.5 rounded-lg transition-colors shadow">
                        <MessageCircle className="w-5 h-5" /> Enviar para Dra. Luciana <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                      <a href={`/agendamento?tipo=${encodeURIComponent(dados.area)}&nome=${encodeURIComponent(dados.nome)}&telefone=${encodeURIComponent(dados.telefone)}&assunto=${encodeURIComponent(dados.subarea)}#agendar-online`}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-400 hover:to-lavender-500 text-white font-semibold text-sm py-2.5 rounded-lg transition-colors shadow">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2}/><line x1="16" y1="2" x2="16" y2="6" strokeWidth={2}/><line x1="8" y1="2" x2="8" y2="6" strokeWidth={2}/></svg>
                        Agendar Consulta Online
                      </a>
                      <p className="text-[10px] text-secondary-400 text-center flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Escolha WhatsApp ou agende com data e horário
                      </p>
                    </div>
                  ) : msg.tipo === 'bot' ? (
                    <div className="flex gap-2 items-start">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2d1b4e] to-[#4a2d7a] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-lavender-400" />
                      </div>
                      <div className="max-w-[85%] space-y-2">
                        <div className="bg-white border border-secondary-100 rounded-2xl rounded-tl-sm px-3.5 py-2.5 shadow-sm">
                          <p className="text-sm text-secondary-700 leading-relaxed whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: msg.texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\*([^*]+)\*/g, '<strong class="text-secondary-800">$1</strong>') }} />
                        </div>
                        {msg.opcoes && msg.id === mensagens[mensagens.length - 1]?.id && (
                          <div className="space-y-1.5">
                            {msg.opcoes.map((op) => (
                              <button key={op.valor} onClick={() => { if (etapa === 'inicio') selecionarArea(op.valor); else responderPergunta(op.valor, op.label); }}
                                className="block w-full text-left text-sm px-3 py-2 rounded-xl bg-lavender-50 hover:bg-lavender-100 border border-lavender-200 hover:border-lavender-300 text-secondary-700 transition-all hover:shadow-sm">
                                {op.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <div className="max-w-[80%] bg-gradient-to-br from-[#2d1b4e] to-[#4a2d7a] text-white px-3.5 py-2.5 rounded-2xl rounded-tr-sm shadow-sm">
                        <p className="text-sm leading-relaxed">{msg.texto}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {digitando && (
                <div className="flex gap-2 items-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2d1b4e] to-[#4a2d7a] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-lavender-400" />
                  </div>
                  <div className="bg-white border border-secondary-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-lavender-300 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 bg-lavender-300 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-lavender-300 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-secondary-100 p-3 flex-shrink-0 bg-white">
              {etapa === 'resumo' ? (
                <div className="flex gap-2">
                  <button onClick={abrirWhatsApp} className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
                    <MessageCircle className="w-4 h-4" /> Enviar via WhatsApp
                  </button>
                  <button onClick={iniciar} className="px-3 py-2.5 rounded-xl border border-secondary-200 hover:bg-secondary-50 text-secondary-600 text-sm transition-colors" title="Nova consulta">
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input ref={inputRef} type="text" value={inputTexto} onChange={(e) => setInputTexto(e.target.value)}
                    placeholder={inputAtivo ? (etapa === 'nome' ? 'Digite seu nome completo...' : etapa === 'telefone' ? '(65) 99999-9999' : 'Digite sua resposta...') : 'Selecione uma opção acima'}
                    disabled={!inputAtivo}
                    className="flex-1 text-sm px-3 py-2.5 rounded-xl border border-secondary-200 focus:border-lavender-400 focus:ring-1 focus:ring-lavender-400 outline-none disabled:bg-secondary-50 disabled:text-secondary-400 transition-colors" />
                  <button type="submit" disabled={!inputAtivo || !inputTexto.trim()}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-lavender-500 to-lavender-600 text-white disabled:opacity-40 transition-opacity hover:shadow-lg">
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
            <div className="px-3 pb-2 flex-shrink-0 bg-white">
              <p className="text-[9px] text-secondary-400 text-center leading-tight">
                Assistente informativo da Dra. Luciana J. R. Pinho — OAB/MT 7973-B. Não constitui aconselhamento jurídico. Provimento 205/2021 OAB.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
