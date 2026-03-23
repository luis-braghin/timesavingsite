import React, { useState, useEffect } from 'react'
import {
  Menu,
  X,
  Zap,
  Brain,
  Workflow,
  BarChart3,
  Bot,
  Code2,
  Mail,
  Phone,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Clock,
  Target,
  Users,
  BadgeCheck,
  ExternalLink,
  CheckCircle2,
  Smartphone,
  Mic
} from 'lucide-react'

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#parceiros', label: 'Parceiros' },
    { href: '#cases', label: 'Cases' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#1e1e2e]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img src="/logo.svg" alt="Time Saving Tech" className="h-10 w-auto" />
            <span className="font-display font-bold text-xl text-white group-hover:text-[#00d4ff] transition-colors">
              Time Saving<span className="text-[#00d4ff]">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-[#8b8b9e] hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="#contato" className="btn-primary text-sm">
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#1e1e2e] pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#8b8b9e] hover:text-white transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contato" className="btn-primary text-sm text-center mt-2">
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial"></div>
      <div className="float-element w-96 h-96 bg-[#00d4ff] top-20 -left-48 animate-float"></div>
      <div className="float-element w-72 h-72 bg-[#7c3aed] bottom-20 -right-36 animate-float" style={{ animationDelay: '-3s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Partner badge — prova social imediata */}
        <div className="inline-flex items-center gap-2 bg-[#0a0a0f]/80 border border-[#00d4ff]/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up opacity-0 backdrop-blur-sm">
          <BadgeCheck className="w-4 h-4 text-[#00d4ff]" />
          <span className="text-sm text-[#8b8b9e]">Parceiro Oficial</span>
          <img src="/clientes/simetrik-logo.png" alt="Simetrik" className="h-4 w-auto opacity-90" />
        </div>

        {/* Badge secundário */}
        <div className="inline-flex items-center gap-2 bg-[#12121a] border border-[#1e1e2e] rounded-full px-4 py-2 mb-8 animate-fade-in-up opacity-0 ml-3">
          <span className="text-sm text-[#8b8b9e]">Transformando negócios com tecnologia</span>
        </div>

        {/* Main headline */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in-up opacity-0 stagger-1">
          Economize{' '}
          <span className="gradient-text">tempo</span>
          <br />
          Multiplique{' '}
          <span className="gradient-text">resultados</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#8b8b9e] max-w-3xl mx-auto mb-12 animate-fade-in-up opacity-0 stagger-2">
          Desenvolvemos soluções em <span className="text-white">automação</span> e{' '}
          <span className="text-white">inteligência artificial</span> que eliminam 
          tarefas repetitivas e potencializam sua operação.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 stagger-3">
          <a href="#contato" className="btn-primary inline-flex items-center justify-center gap-2">
            Agende uma conversa
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#servicos" className="btn-secondary inline-flex items-center justify-center gap-2">
            Conheça nossos serviços
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-fade-in-up opacity-0 stagger-4">
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-[#00d4ff] mb-2">70%</div>
            <div className="text-sm text-[#8b8b9e]">Redução de tempo</div>
          </div>
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-[#00d4ff] mb-2">24/7</div>
            <div className="text-sm text-[#8b8b9e]">Automação contínua</div>
          </div>
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-[#00d4ff] mb-2">100%</div>
            <div className="text-sm text-[#8b8b9e]">Personalizado</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#8b8b9e]" />
        </div>
      </div>
    </section>
  )
}

// About Section
function About() {
  const founders = [
    {
      name: 'Luis Braghin',
      role: 'Co-fundador',
      description: 'Responsável pela engenharia de soluções da Time Saving Tech. Economista com experiência em estruturação tecnológica no setor bancário, incluindo áreas de Riscos e Planejamento Comercial. Especialista em automação inteligente de processos, integrações via API e desenvolvimento de sistemas RAG. Trabalha com Python, n8n e JavaScript para construir soluções que processam grandes volumes de dados e operam de forma autônoma.',
    },
    {
      name: 'Felipe Von Pressentin',
      role: 'Co-fundador',
      description: 'Responsável pela arquitetura de soluções e estratégia de negócios da Time Saving Tech. Construiu expertise em análise de crédito corporativo e inteligência de negócios, liderando expansão no setor de tecnologia há mais de 10 anos. Especialista em growth, go-to-market e estruturação de soluções corporativas.',
    },
  ]

  return (
    <section className="relative py-32 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <span className="font-mono text-[#00d4ff] text-sm tracking-wider uppercase mb-4 block">
              // Quem Somos
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Tecnologia com{' '}
              <span className="gradient-text">propósito</span>
            </h2>
            <p className="text-lg text-[#8b8b9e] mb-8 leading-relaxed">
              A <span className="text-white font-semibold">Time Saving Tech</span> nasceu da 
              convicção de que empresas podem fazer mais com menos — menos tempo desperdiçado, 
              menos trabalho manual, menos erros humanos. Combinamos expertise técnica com 
              entendimento de negócios para entregar soluções que realmente funcionam.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full"></div>
              <span className="text-[#8b8b9e]">Fundada em 2025</span>
            </div>
          </div>

          {/* Founders */}
          <div className="grid gap-6">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="card-hover bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-6"
              >
                <div>
                  <h3 className="font-display font-semibold text-xl text-white mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-[#00d4ff] text-sm font-medium mb-2">{founder.role}</p>
                  <p className="text-[#8b8b9e] text-sm">{founder.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section
function Services() {
  const services = [
    {
      icon: Workflow,
      title: 'Automação de Processos',
      description: 'Eliminamos tarefas repetitivas com RPA, n8n, Power Automate e soluções customizadas que se integram ao seu fluxo de trabalho.',
      tags: ['RPA', 'n8n', 'Power Automate', 'Workflows'],
    },
    {
      icon: Brain,
      title: 'Soluções com IA',
      description: 'Implementamos RAG, chatbots inteligentes e análise de dados avançada para extrair insights e automatizar decisões.',
      tags: ['RAG', 'Chatbots', 'NLP', 'Machine Learning'],
    },
    {
      icon: Bot,
      title: 'Agentes de IA',
      description: 'Desenvolvemos agentes autônomos que executam tarefas complexas, aprendem com interações e se adaptam ao seu negócio.',
      tags: ['Agentes Autônomos', 'LLMs', 'Automação Cognitiva'],
    },
    {
      icon: Code2,
      title: 'Integrações & APIs',
      description: 'Conectamos sistemas, bancos de dados e aplicações para criar um ecossistema digital unificado e eficiente.',
      tags: ['REST APIs', 'Webhooks', 'ETL', 'Middleware'],
    },
    {
      icon: BarChart3,
      title: 'Dashboards & BI',
      description: 'Criamos painéis interativos e relatórios automatizados para visibilidade total das suas operações e métricas.',
      tags: ['Power BI', 'Dashboards', 'KPIs', 'Analytics'],
    },
    {
      icon: Zap,
      title: 'Consultoria Técnica',
      description: 'Analisamos sua operação e identificamos oportunidades de automação e otimização com retorno mensurável.',
      tags: ['Assessment', 'Roadmap', 'ROI', 'Estratégia'],
    },
  ]

  return (
    <section id="servicos" className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-sm tracking-wider uppercase mb-4 block">
            // Nossos Serviços
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Soluções que{' '}
            <span className="gradient-text">transformam</span>
          </h2>
          <p className="text-lg text-[#8b8b9e] max-w-2xl mx-auto">
            Da automação simples até agentes de IA complexos, entregamos tecnologia 
            que resolve problemas reais e gera resultados tangíveis.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#7c3aed]/10 flex items-center justify-center mb-6 border border-[#1e1e2e] group-hover:border-[#00d4ff]/30 transition-colors">
                <service.icon className="w-7 h-7 text-[#00d4ff]" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#8b8b9e] mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-[#1e1e2e] text-[#8b8b9e] border border-[#1e1e2e]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Partners Section
function Partners() {
  const stats = [
    { value: '1B+', label: 'registros processados por dia' },
    { value: '40+', label: 'países atendidos' },
    { value: '$85M', label: 'captados em Series B' },
  ]

  const benefits = [
    {
      icon: BadgeCheck,
      title: 'Implementação Certificada',
      description: 'Somos parceiros oficiais autorizados a implementar e configurar a plataforma Simetrik para nossos clientes.',
    },
    {
      icon: Zap,
      title: 'Automação Financeira End-to-End',
      description: 'Combinamos nossa expertise em automação com a plataforma de reconciliação da Simetrik para entregar controle financeiro completo.',
    },
    {
      icon: Target,
      title: 'Clientes dos dois lados',
      description: 'Empresas que chegam pela Time Saving ganham acesso direto à tecnologia que equipes como Nubank, Itaú e Mercado Livre usam.',
    },
  ]

  return (
    <section id="parceiros" className="relative py-32 bg-[#050508] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial opacity-50"></div>
      <div className="float-element w-[500px] h-[500px] bg-[#7c3aed] top-1/2 -translate-y-1/2 -right-64 animate-float opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-sm tracking-wider uppercase mb-4 block">
            // Parceria Estratégica
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Parceiros{' '}
            <span className="gradient-text">Simetrik</span>
          </h2>
          <p className="text-lg text-[#8b8b9e] max-w-2xl mx-auto">
            A Time Saving Tech é parceira oficial da Simetrik — plataforma líder global 
            em reconciliação financeira com IA, usada pelas maiores empresas do mundo.
          </p>
        </div>

        {/* Main partner card */}
        <div className="relative bg-gradient-to-br from-[#12121a] to-[#0d0d18] border border-[#1e1e2e] rounded-3xl p-10 mb-12 overflow-hidden">
          {/* Glow border top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Logos + badge */}
            <div className="flex flex-col items-center lg:items-start gap-8">
              {/* Logos com conector */}
              <div className="flex items-center gap-6">
                <div className="bg-[#0a0a0f] border border-[#1e1e2e] rounded-2xl p-5 flex items-center justify-center">
                  <img src="/logo.svg" alt="Time Saving Tech" className="h-10 w-auto" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-px bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]"></div>
                  <span className="text-[10px] font-mono text-[#00d4ff] tracking-widest uppercase">Official Partner</span>
                  <div className="w-8 h-px bg-gradient-to-r from-[#7c3aed] to-[#00d4ff]"></div>
                </div>
                <div className="bg-white rounded-2xl p-5 flex items-center justify-center">
                  <img src="/clientes/simetrik-logo.png" alt="Simetrik" className="h-10 w-auto" />
                </div>
              </div>

              {/* Badge oficial */}
              <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-5 py-2.5">
                <BadgeCheck className="w-5 h-5 text-[#00d4ff]" />
                <span className="text-sm font-semibold text-[#00d4ff]">Parceiro Oficial Certificado</span>
              </div>

              {/* Stats da Simetrik */}
              <div className="grid grid-cols-3 gap-4 w-full">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl p-4">
                    <div className="font-display font-bold text-2xl text-[#00d4ff] mb-1">{stat.value}</div>
                    <div className="text-[10px] text-[#8b8b9e] leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Descrição */}
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                O que essa parceria significa para você
              </h3>
              <p className="text-[#8b8b9e] mb-6 leading-relaxed">
                A <span className="text-white font-medium">Simetrik</span> é a plataforma de reconciliação financeira com IA 
                que processa mais de 1 bilhão de transações por dia para empresas como{' '}
                <span className="text-white">Nubank, Itaú, Mercado Libre e Santander</span>. 
                Captou $85M em Series B pela Goldman Sachs e foi eleita pelo Financial Times 
                uma das empresas de crescimento mais rápido nas Américas por dois anos consecutivos.
              </p>
              <p className="text-[#8b8b9e] mb-8 leading-relaxed">
                Como parceiros oficiais, a Time Saving Tech implementa, configura e integra 
                a plataforma Simetrik no seu negócio — com toda nossa expertise em automação 
                para garantir o máximo retorno da tecnologia.
              </p>
              <a
                href="#contato"
                className="btn-primary inline-flex items-center gap-2"
              >
                Saiba como aplicar no seu negócio
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="card-hover bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-7 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#7c3aed]/10 flex items-center justify-center mb-5 border border-[#1e1e2e] group-hover:border-[#00d4ff]/30 transition-colors">
                <benefit.icon className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <h4 className="font-display font-semibold text-lg text-white mb-3">
                {benefit.title}
              </h4>
              <p className="text-[#8b8b9e] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Clients Section
function Clients() {
  const clients = [
    { name: 'BBL Advogados', logo: '/clientes/bbl-logo.jpeg' },
    { name: 'Ronron Cat Café', logo: '/clientes/ronron-logo.png' },
    { name: 'Training Academia', logo: '/clientes/training-logo.png' },
    { name: 'Fornecedora Agnus', logo: '/clientes/agnus-logo.png' },
    { name: 'Cozinha da Cler', logo: '/clientes/marmitas-cler-logo.jpeg' },
    { name: 'Simetrik', logo: '/clientes/simetrik-logo.png', darkLogo: true },
    { name: 'Residencial Imperatriz', logo: '/clientes/residencial-imperatriz-logo.png' },
  ]

  return (
    <section id="clientes" className="relative py-32 bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-sm tracking-wider uppercase mb-4 block">
            // Nossos Clientes
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Empresas que{' '}
            <span className="gradient-text">confiam</span>
            {' '}em nós
          </h2>
          <p className="text-lg text-[#8b8b9e] max-w-2xl mx-auto">
            Parcerias construídas com resultados concretos e comprometimento com a excelência.
          </p>
        </div>

        {/* Clients grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((client) => (
            <div
              key={client.name}
              className="card-hover bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-8 min-w-[280px] flex items-center justify-center"
            >
              <div className="text-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`max-h-16 max-w-[200px] object-contain mx-auto mb-4${client.darkLogo ? ' bg-white rounded-lg p-2' : ''}`}
                />
                <span className="font-display font-semibold text-white text-lg">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#8b8b9e] mb-6">
            Quer fazer parte dessa lista?
          </p>
          <a href="#contato" className="btn-secondary inline-flex items-center gap-2">
            Vamos conversar
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

// Case Studies Section
function CaseStudies() {
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
      { threshold: 0.15 }
    )

    const cards = document.querySelectorAll('[data-case-card]')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const cases = [
    {
      tag: 'Automacao de Processos',
      tagColor: 'from-[#00d4ff] to-[#0ea5e9]',
      icon: Workflow,
      name: 'Ronron Cat Cafe',
      segment: 'Entretenimento e Lazer',
      problem: 'O processo de inscricao em eventos era uma maratona de etapas manuais — do Instagram ao WhatsApp, passando por formularios genericos e comprovantes soltos — que perdia clientes no caminho e gerava retrabalho toda semana.',
      solution: 'Criamos um site com fluxo completo de inscricao: o cliente ve os eventos disponiveis, se inscreve, paga via PIX e envia o comprovante — tudo em um so lugar. As vagas atualizam em tempo real. Como a dona do cafe nao e de tecnologia, entregamos uma solucao onde ela gerencia tudo direto de uma planilha Google — edita um campo e o site atualiza sozinho.',
      results: [
        'Fluxo de inscricao reduzido de 5 etapas manuais para uma experiencia unica e guiada',
        'Zero retrabalho semanal com controle de vagas e comprovantes centralizado e automatico',
        'Custo de operacao zero em hospedagem e infraestrutura',
      ],
    },
    {
      tag: 'App Mobile',
      tagColor: 'from-[#7c3aed] to-[#a855f7]',
      icon: Smartphone,
      name: 'Port-Go',
      segment: 'Gestao Condominial — Residencial Imperatriz',
      problem: 'A portaria registrava entregas em cadernos e ligava para moradores um a um — processo lento, sujeito a erro e que deixava encomendas esquecidas no balcao.',
      solution: 'Desenvolvemos um aplicativo de portaria onde o porteiro registra a entrega em segundos e o morador recebe uma notificacao automatica via WhatsApp. O sistema inclui historico completo de entregas, comunicados do condominio e painel administrativo — tudo acessivel pelo celular.',
      results: [
        'Moradores notificados instantaneamente sobre entregas, sem depender de ligacoes ou recados',
        'Historico digital completo substitui controles em papel, eliminando perdas e esquecimentos',
        'Comunicacao centralizada entre administracao, portaria e moradores em um unico app',
      ],
    },
    {
      tag: 'IA Aplicada',
      tagColor: 'from-[#f59e0b] to-[#f97316]',
      icon: Mic,
      name: 'FalaFit',
      segment: 'Saude e Nutricao',
      problem: 'Apps de contagem de calorias sao cansativos — buscar cada alimento, selecionar porcao, repetir 4 vezes por dia. A maioria das pessoas desiste em poucos dias.',
      solution: 'Criamos um app onde o usuario simplesmente fala o que comeu e a inteligencia artificial identifica os alimentos e calcula os macronutrientes automaticamente. Para nutricionistas, construimos um sistema completo: convite de pacientes, acompanhamento da alimentacao em tempo real, definicao de metas e envio de planos de dieta.',
      results: [
        'Registro de refeicao em segundos por voz, contra minutos de busca manual em apps tradicionais',
        'Sistema SaaS completo com assinaturas, programa de afiliados e painel administrativo pronto para escalar',
        'Base de 5.000+ alimentos brasileiros com cache inteligente que melhora a cada uso',
      ],
    },
  ]

  return (
    <section id="cases" className="relative py-32 bg-[#050508] overflow-hidden">
      <div className="absolute inset-0 bg-radial opacity-50"></div>
      <div className="float-element w-[400px] h-[400px] bg-[#00d4ff] -top-32 -left-48 animate-float opacity-15"></div>
      <div className="float-element w-[300px] h-[300px] bg-[#7c3aed] bottom-20 -right-32 animate-float opacity-15" style={{ animationDelay: '-3s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-sm tracking-wider uppercase mb-4 block">
            // Cases de Sucesso
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Resultados que{' '}
            <span className="gradient-text">falam por si</span>
          </h2>
          <p className="text-lg text-[#8b8b9e] max-w-2xl mx-auto">
            Cada projeto comeca com um problema real. Veja como transformamos desafios
            de negocio em solucoes que funcionam — e os resultados que entregamos.
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.name}
              data-case-card
              data-index={index}
              className={`group bg-[#12121a] border border-[#1e1e2e] rounded-2xl overflow-hidden transition-all duration-700 ${
                visibleCards.includes(String(index))
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Glow border top */}
              <div className={`h-1 bg-gradient-to-r ${caseItem.tagColor}`}></div>

              <div className="p-8">
                {/* Tag + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${caseItem.tagColor} text-white`}>
                    {caseItem.tag}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff]/10 to-[#7c3aed]/10 flex items-center justify-center border border-[#1e1e2e] group-hover:border-[#00d4ff]/30 transition-colors">
                    <caseItem.icon className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                </div>

                {/* Name + Segment */}
                <h3 className="font-display font-bold text-2xl text-white mb-1">
                  {caseItem.name}
                </h3>
                <p className="text-[#00d4ff] text-sm font-medium mb-5">
                  {caseItem.segment}
                </p>

                {/* Problem */}
                <div className="mb-5">
                  <span className="text-xs font-mono text-[#8b8b9e] uppercase tracking-wider">O problema</span>
                  <p className="text-[#8b8b9e] text-sm mt-2 leading-relaxed">
                    {caseItem.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-[#8b8b9e] uppercase tracking-wider">O que fizemos</span>
                  <p className="text-[#c4c4d4] text-sm mt-2 leading-relaxed">
                    {caseItem.solution}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e2e] to-transparent mb-6"></div>

                {/* Results */}
                <div>
                  <span className="text-xs font-mono text-[#00d4ff] uppercase tracking-wider">Resultados</span>
                  <ul className="mt-3 space-y-3">
                    {caseItem.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                        <span className="text-[#c4c4d4] text-sm leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#8b8b9e] mb-6">
            Quer ver o que podemos fazer pelo seu negocio?
          </p>
          <a href="#contato" className="btn-primary inline-flex items-center gap-2">
            Comece seu projeto
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await fetch('https://n8n.timesavingtech.com.br/webhook/ts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      alert('Erro ao enviar. Tente novamente ou use o WhatsApp.')
    }
    
    setIsSubmitting(false)
  }

  const whatsappNumber = '5519981250530'
  const whatsappMessage = encodeURIComponent('Olá! Vim pelo site da Time Saving Tech e gostaria de saber mais sobre os serviços de vocês.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const emailAddress = 'luis@timesavingtech.com.br'

  return (
    <section id="contato" className="relative py-32 bg-[#050508] overflow-hidden">
      <div className="absolute inset-0 bg-radial"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-sm tracking-wider uppercase mb-4 block">
            // Contato
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Vamos{' '}
            <span className="gradient-text">conversar</span>
          </h2>
          <p className="text-lg text-[#8b8b9e] max-w-2xl mx-auto">
            Conte-nos sobre seu desafio. Respondemos em até 24 horas com uma proposta 
            personalizada para sua necessidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Nome</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Seu nome completo" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">E-mail</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Telefone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(11) 99999-9999" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">Empresa</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Nome da sua empresa" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Mensagem</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Conte-nos sobre seu projeto ou desafio..." />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : submitted ? (
                  <><Sparkles className="w-5 h-5" />Mensagem enviada!</>
                ) : (
                  <>Enviar mensagem<ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>

          {/* Contact options */}
          <div className="space-y-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="card-hover bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-6 flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-xl bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20 group-hover:border-[#25D366]/40 transition-colors">
                <Phone className="w-7 h-7 text-[#25D366]" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg text-white mb-1">WhatsApp</h3>
                <p className="text-[#8b8b9e]">Resposta rápida para dúvidas urgentes</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#8b8b9e] group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>

            <a href={`mailto:${emailAddress}`}
              className="card-hover bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-6 flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center border border-[#00d4ff]/20 group-hover:border-[#00d4ff]/40 transition-colors">
                <Mail className="w-7 h-7 text-[#00d4ff]" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg text-white mb-1">E-mail</h3>
                <p className="text-[#8b8b9e]">{emailAddress}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#8b8b9e] group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>

            <div className="bg-gradient-to-br from-[#00d4ff]/5 to-[#7c3aed]/5 border border-[#1e1e2e] rounded-2xl p-6">
              <h3 className="font-display font-semibold text-white mb-3">Por que escolher a Time Saving?</h3>
              <ul className="space-y-3 text-[#8b8b9e]">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Diagnóstico gratuito da sua operação</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Soluções customizadas para seu negócio</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Implementação ágil com resultados rápidos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#050508] border-t border-[#1e1e2e] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Time Saving Tech" className="h-8 w-auto" />
            <span className="font-display font-bold text-lg text-white">Time Saving Tech</span>
          </div>
          <p className="text-[#8b8b9e] text-sm text-center">
            © {currentYear} Time Saving Tech. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#inicio" className="text-[#8b8b9e] hover:text-white text-sm transition-colors">Início</a>
            <a href="#servicos" className="text-[#8b8b9e] hover:text-white text-sm transition-colors">Serviços</a>
            <a href="#parceiros" className="text-[#8b8b9e] hover:text-white text-sm transition-colors">Parceiros</a>
            <a href="#contato" className="text-[#8b8b9e] hover:text-white text-sm transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Partners />
      <Clients />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  )
}
