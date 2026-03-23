import React, { useState, useEffect } from 'react'
import { Search, FileText, Rocket, HeadphonesIcon } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Search,
    title: 'Diagnostico',
    description: 'Entendemos o problema real antes de propor qualquer solucao',
  },
  {
    number: 2,
    icon: FileText,
    title: 'Proposta',
    description: 'Solucao clara, prazo definido e preco fechado em 48h',
  },
  {
    number: 3,
    icon: Rocket,
    title: 'Implementacao',
    description: 'Entregamos em semanas, nao meses. Voce acompanha tudo',
  },
  {
    number: 4,
    icon: HeadphonesIcon,
    title: 'Suporte',
    description: 'Nao sumimos apos a entrega. Evoluimos junto com voce',
  },
]

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => [...new Set([...prev, entry.target.dataset.index])])
          }
        })
      },
      { threshold: 0.15 }
    )

    const items = document.querySelectorAll('[data-step-card]')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="como-funciona" className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-sm tracking-wider uppercase mb-4 block">
            // Como Funciona
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Do problema a{' '}
            <span className="gradient-text">solucao</span>
          </h2>
          <p className="text-lg text-[#8b8b9e] max-w-2xl mx-auto">
            Um processo claro e transparente para transformar seus desafios em resultados concretos.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Desktop horizontal connector line */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] z-0"></div>

          {/* Mobile vertical connector line */}
          <div className="lg:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-[#00d4ff] to-[#7c3aed] z-0"></div>

          {/* Steps */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                data-step-card
                data-index={index}
                className={`relative z-10 flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:flex-1 transition-all duration-700 ${
                  visibleSteps.includes(String(index))
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step number circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#00d4ff] flex items-center justify-center text-[#00d4ff] font-display font-bold bg-[#0a0a0f] lg:mb-6">
                  {step.number}
                </div>

                {/* Step content card */}
                <div className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-6 lg:text-center flex-1 lg:flex-none lg:w-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#7c3aed]/10 flex items-center justify-center mb-4 border border-[#1e1e2e] lg:mx-auto">
                    <step.icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#8b8b9e] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
