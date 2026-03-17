'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)
  const [modoRegistro, setModoRegistro] = useState(false)
  const [nome, setNome] = useState('')
  const [chaveAdmin, setChaveAdmin] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErro('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErro(data.error || 'Erro ao fazer login')
        return
      }

      router.push('/painel')
      router.refresh()
    } catch {
      setErro('Erro de conexão')
    } finally {
      setLoading(false)
    }
  }

  const handleRegistro = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErro('')

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha, chaveAdmin }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErro(data.error || 'Erro ao registrar')
        return
      }

      // Após registro, fazer login automático
      setModoRegistro(false)
      setErro('')
      const loginRes = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      })
      if (!loginRes.ok) {
        setErro('Conta criada. Faça login manualmente.')
        return
      }
      router.push('/painel')
      router.refresh()
    } catch {
      setErro('Erro de conexão')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050905] via-[#120B07] to-[#1A0F0A] flex items-center justify-center p-4">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2C1A15]/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="w-full max-w-md relative">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#BFA76A] to-[#9A8A4C] flex items-center justify-center mx-auto mb-5 shadow-2xl shadow-[#BFA76A]/20 ring-1 ring-[#BFA76A]/30">
            <span className="text-white font-bold text-3xl tracking-tight">C&O</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Dra. Luciana Pinho</h1>
          <p className="text-[#8D6E63] text-sm mt-2 font-medium">Painel de Gestão Jurídica</p>
        </div>

        {/* Form Card */}
        <div className="bg-[#1A0F0A]/80 backdrop-blur-xl border border-[#3E2723] rounded-2xl p-8 shadow-2xl shadow-black/40">
          <h2 className="text-lg font-semibold text-white mb-6 tracking-tight">
            {modoRegistro ? 'Criar Conta de Acesso' : 'Acessar Painel'}
          </h2>

          {erro && (
            <div className="mb-4 p-3.5 rounded-xl bg-red-950/30 border border-red-800/30 text-red-400 text-sm font-medium">
              {erro}
            </div>
          )}

          <form onSubmit={modoRegistro ? handleRegistro : handleLogin} className="space-y-4">
            {modoRegistro && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-[#D7CCC8] mb-1.5">Nome Completo</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-[#1E1410] border border-[#3E2723] rounded-xl text-white text-sm placeholder-[#6D4C41] focus:outline-none focus:border-[#BFA76A]/50 focus:ring-1 focus:ring-[#BFA76A]/20 transition-all"
                    placeholder="Dr(a). Nome Completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#D7CCC8] mb-1.5">Chave de Administrador</label>
                  <input
                    type="password"
                    value={chaveAdmin}
                    onChange={(e) => setChaveAdmin(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-[#1E1410] border border-[#3E2723] rounded-xl text-white text-sm placeholder-[#6D4C41] focus:outline-none focus:border-[#BFA76A]/50 focus:ring-1 focus:ring-[#BFA76A]/20 transition-all"
                    placeholder="Chave de segurança"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-semibold text-[#D7CCC8] mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#1E1410] border border-[#3E2723] rounded-xl text-white text-sm placeholder-[#6D4C41] focus:outline-none focus:border-[#BFA76A]/50 focus:ring-1 focus:ring-[#BFA76A]/20 transition-all"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#D7CCC8] mb-1.5">Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-3 bg-[#1E1410] border border-[#3E2723] rounded-xl text-white text-sm placeholder-[#6D4C41] focus:outline-none focus:border-[#BFA76A]/50 focus:ring-1 focus:ring-[#BFA76A]/20 transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#BFA76A] to-[#9A8A4C] text-white font-semibold text-sm hover:from-[#D4B55A] hover:to-[#BFA76A] disabled:opacity-50 transition-all duration-200 shadow-lg shadow-[#BFA76A]/20 active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processando...
                </span>
              ) : modoRegistro ? 'Criar Conta' : 'Entrar'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => { setModoRegistro(!modoRegistro); setErro('') }}
              className="text-sm text-[#BFA76A] hover:text-[#D4B55A] transition-colors"
            >
              {modoRegistro ? 'Já tenho conta - Fazer login' : 'Primeiro acesso - Criar conta'}
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-[#3a4f3e] mt-8 font-medium">
          Sistema restrito. Acesso apenas para membros autorizados.
        </p>
      </div>
    </div>
  )
}
