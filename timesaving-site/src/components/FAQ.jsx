import React, { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'Quanto tempo leva um projeto?',
    answer:
      'Depende da complexidade, mas a maioria dos projetos de automação e integração fica pronta em 2 a 6 semanas. Somos diretos: se vai demorar mais, avisamos antes de começar.',
  },
  {
    question: 'Preciso ter equipe técnica para contratar a Time Saving Tech?',
    answer:
      'Não. Cuidamos de toda a parte técnica. Você só precisa saber qual problema quer resolver — a gente descobre como.',
  },
  {
    question: 'Vocês atendem empresas de qual tamanho?',
    answer:
      'Atendemos desde pequenos negócios com 5 pessoas até médias empresas com centenas de funcionários. O que importa é ter um problema real para resolver.',
  },
  {
    question: 'Como funciona o suporte após a entrega?',
    answer:
      'Oferecemos suporte contínuo após a implementação. Bugs são corrigidos sem custo. Evoluções e novas features são tratadas como novos projetos com orçamento separado.',
  },
  {
    question: 'Vocês trabalham com contrato?',
    answer:
      'Sim. Todo projeto tem contrato com escopo, prazo e valor definidos. Sem surpresas.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'Cada projeto é orçado individualmente. Oferecemos diagnóstico gratuito de 30 minutos — só após entender o problema apresentamos uma proposta com valor fechado.',
  },
  {
    question: 'Vocês trabalham remoto ou presencial?',
    answer: '100% remoto. Atendemos clientes em todo o Brasil.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-32 bg-[#0a0a0f] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30"></div>

      <div
        className={`relative z-10 max-w-3xl mx-auto px-6 transition-all duration-700 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-sm tracking-wider uppercase mb-4 block">
            // Perguntas Frequentes
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Dúvidas? Temos as{' '}
            <span className="gradient-text">respostas</span>
          </h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="bg-[#12121a] border border-[#1e1e2e] rounded-xl"
              >
                {/* Question */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="text-white font-semibold pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00d4ff] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="text-[#8b8b9e] mt-3 pb-2 px-5 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
