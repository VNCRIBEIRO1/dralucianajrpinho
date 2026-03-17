'use client'

interface StatsCardProps {
  titulo: string
  valor: string | number
  subtitulo?: string
  cor?: 'gold' | 'green' | 'red' | 'blue' | 'purple' | 'orange'
  icon: string
}

const cores = {
  gold: { card: 'from-[#BFA76A]/15 to-[#1A0F0A] border-[#BFA76A]/25', text: 'text-[#BFA76A]', icon: 'bg-[#BFA76A]/15', glow: 'shadow-[#BFA76A]/5' },
  green: { card: 'from-emerald-500/15 to-[#1A0F0A] border-emerald-500/25', text: 'text-emerald-400', icon: 'bg-emerald-500/15', glow: 'shadow-emerald-500/5' },
  red: { card: 'from-red-500/15 to-[#1A0F0A] border-red-500/25', text: 'text-red-400', icon: 'bg-red-500/15', glow: 'shadow-red-500/5' },
  blue: { card: 'from-blue-500/15 to-[#1A0F0A] border-blue-500/25', text: 'text-blue-400', icon: 'bg-blue-500/15', glow: 'shadow-blue-500/5' },
  purple: { card: 'from-purple-500/15 to-[#1A0F0A] border-purple-500/25', text: 'text-purple-400', icon: 'bg-purple-500/15', glow: 'shadow-purple-500/5' },
  orange: { card: 'from-orange-500/15 to-[#1A0F0A] border-orange-500/25', text: 'text-orange-400', icon: 'bg-orange-500/15', glow: 'shadow-orange-500/5' },
}

export default function StatsCard({ titulo, valor, subtitulo, cor = 'gold', icon }: StatsCardProps) {
  const c = cores[cor]
  return (
    <div className={`bg-gradient-to-br ${c.card} border rounded-2xl p-5 shadow-lg ${c.glow} transition-all duration-300 hover:scale-[1.02]`}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-[#BCAAA4] text-xs font-semibold uppercase tracking-wider">{titulo}</p>
          <p className="text-[28px] font-bold text-white leading-tight tracking-tight">{valor}</p>
          {subtitulo && <p className="text-xs text-[#8D6E63] font-medium">{subtitulo}</p>}
        </div>
        <div className={`p-2.5 rounded-xl ${c.icon}`}>
          <svg className={`w-6 h-6 ${c.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
      </div>
    </div>
  )
}
