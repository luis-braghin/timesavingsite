import React, { useState, useEffect } from 'react'

const technologies = [
  { name: 'n8n', abbreviation: 'n8', category: 'Automacao' },
  { name: 'Claude AI', abbreviation: 'AI', category: 'IA' },
  { name: 'Supabase', abbreviation: 'Sb', category: 'Backend' },
  { name: 'React', abbreviation: 'Re', category: 'Frontend' },
  { name: 'TypeScript', abbreviation: 'TS', category: 'Frontend' },
  { name: 'Power Automate', abbreviation: 'PA', category: 'Automacao' },
  { name: 'Python', abbreviation: 'Py', category: 'Backend' },
  { name: 'PostgreSQL', abbreviation: 'Pg', category: 'Banco de Dados' },
  { name: 'Vercel', abbreviation: 'Vc', category: 'Deploy' },
  { name: 'Stripe', abbreviation: 'St', category: 'Pagamentos' },
  { name: 'WhatsApp API', abbreviation: 'WA', category: 'Integracao' },
  { name: 'Google Sheets API', abbreviation: 'GS', category: 'Integracao' },
]

export default function TechStack() {
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, entry.target.dataset.index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-tech-card]')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stack" className="relative py-32 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-sm tracking-wider uppercase mb-4 block">
            // Stack que Usamos
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Tecnologias que{' '}
            <span className="gradient-text">dominamos</span>
          </h2>
          <p className="text-lg text-[#8b8b9e] max-w-2xl mx-auto">
            Escolhemos as melhores ferramentas do mercado para cada problema
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              data-tech-card
              data-index={index}
              className={`bg-[#12121a] border border-[#1e1e2e] rounded-xl p-4 text-center hover:border-[#00d4ff]/30 hover:-translate-y-1 transition-all duration-300 cursor-default ${
                visibleCards.includes(String(index))
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Abbreviation icon */}
              <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center font-display font-bold text-[#00d4ff] bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20">
                {tech.abbreviation}
              </div>
              {/* Tech name */}
              <p className="text-white text-sm font-medium mb-1">{tech.name}</p>
              {/* Category */}
              <p className="text-[#8b8b9e] text-xs">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
