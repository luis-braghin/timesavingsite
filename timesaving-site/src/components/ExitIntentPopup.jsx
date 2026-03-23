import React, { useState, useEffect, useRef } from 'react'
import { X, CheckCircle2 } from 'lucide-react'

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const mountTimeRef = useRef(Date.now())

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Only trigger when mouse exits from the top of the viewport
      if (e.clientY > 0) return

      // Only on desktop
      if (window.innerWidth <= 768) return

      // Only show once per session
      if (localStorage.getItem('ts_exit_shown')) return

      // Don't show in the first 30 seconds
      const elapsed = Date.now() - mountTimeRef.current
      if (elapsed < 30000) return

      setShowPopup(true)
      localStorage.setItem('ts_exit_shown', 'true')
    }

    document.documentElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleClose = () => {
    setShowPopup(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Lead capturado:', email)
    setSubmitted(true)
  }

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div
        className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-8 max-w-md w-full mx-4 relative animate-popup-in"
        style={{
          animation: 'popupIn 0.3s ease-out forwards',
        }}
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-t-2xl"></div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#8b8b9e] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success state */
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-[#00d4ff] mx-auto mb-4" />
            <p className="font-display font-bold text-xl text-white">
              Enviado! Verifique seu email.
            </p>
          </div>
        ) : (
          /* Form state */
          <>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Antes de sair...
            </h3>
            <p className="text-[#8b8b9e] mb-4">Baixe grátis nosso guia:</p>
            <div className="font-display font-semibold text-lg text-[#00d4ff] mb-6 bg-[#00d4ff]/5 border border-[#00d4ff]/20 rounded-xl p-4">
              10 Processos que Toda PME Pode Automatizar Hoje
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl text-white placeholder-[#8b8b9e] focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
              />
              <button type="submit" className="btn-primary w-full mt-3">
                Quero o guia grátis
              </button>
            </form>

            <span
              onClick={handleClose}
              className="text-center mt-4 block text-[#8b8b9e] text-sm hover:text-white cursor-pointer transition-colors"
            >
              Não, obrigado
            </span>
          </>
        )}
      </div>

      {/* Inline keyframe animation */}
      <style>{`
        @keyframes popupIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
