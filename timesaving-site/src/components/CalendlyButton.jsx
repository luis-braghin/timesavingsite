import React from 'react'
import { Calendar, ArrowRight } from 'lucide-react'

export default function CalendlyButton() {
  return (
    <div className="bg-gradient-to-br from-[#7c3aed]/10 to-[#00d4ff]/10 border border-[#1e1e2e] rounded-2xl p-6">
      {/* Calendar icon */}
      <div className="w-14 h-14 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center border border-[#7c3aed]/20 mb-4">
        <Calendar className="w-7 h-7 text-[#7c3aed]" />
      </div>

      <h3 className="font-display font-semibold text-lg text-white mb-2">
        Prefere agendar direto?
      </h3>
      <p className="text-[#8b8b9e] text-sm mb-4">
        30 minutos gratuitos. Sem compromisso.
      </p>
      <a
        href="https://calendly.com/timesavingtech"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#7c3aed] text-[#7c3aed] font-semibold hover:bg-[#7c3aed]/10 transition-all duration-300 hover:scale-105"
      >
        Agendar conversa
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )
}
