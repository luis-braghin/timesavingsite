# TimeSaving Tech — Site Institucional

Landing page institucional da **Time Saving Tech**, empresa especializada em automação de processos e inteligência artificial. O código do site está no subdiretório `timesaving-site/`.

## Stack Tecnológica

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18.2 | Framework de interface |
| Vite | 4.3 | Build tool e dev server |
| Tailwind CSS | 3.3 | Estilização utilitária |
| Lucide React | 0.263 | Ícones |
| PostCSS | 8.4 | Processamento CSS |
| Autoprefixer | 10.4 | Prefixos CSS automáticos |

## Funcionalidades

- **Landing page responsiva** (desktop, tablet, mobile)
- **Seções:** navegação, hero, quem somos, serviços, como funciona, stack tecnológica, parceiros, clientes, cases de sucesso, FAQ, contato e footer
- **Formulário de contato** integrado com webhook n8n (`n8n.timesavingtech.com.br`)
- **Exit Intent Popup** com oferta de lead magnet (PDF para download)
- **WhatsApp Widget** flutuante para contato rápido
- **Botão Calendly** para agendamento de reuniões
- **Cases de sucesso** com animação por IntersectionObserver
- **FAQ** expansível
- **Parceria Simetrik** destacada com stats e benefícios

## Pré-requisitos

- Node.js 18+
- npm

## Como Instalar

```bash
git clone <URL_DO_REPOSITORIO>
cd timesavingsite/timesaving-site
npm install
```

> **Importante:** O projeto está no subdiretório `timesaving-site/`. Todos os comandos devem ser executados a partir dele.

## Como Rodar

```bash
cd timesaving-site

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Deploy

Recomendado via Vercel:

```bash
npm install -g vercel
vercel login
vercel --prod
```

Ou conecte o repositório GitHub diretamente na Vercel. Verifique `.vercel/project.json` para confirmar o project ID antes de deployar.

## Estrutura de Pastas

```
timesavingsite/
├── timesaving-site/              # Projeto principal
│   ├── public/
│   │   ├── clientes/             # Logos dos clientes (PNG/JPEG)
│   │   ├── lead-magnet-automacao-pme.pdf
│   │   ├── logo.svg
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── CalendlyButton.jsx
│   │   │   ├── ExitIntentPopup.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── TechStack.jsx
│   │   │   └── WhatsAppWidget.jsx
│   │   ├── App.jsx               # Componente principal com todas as seções
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Estilos globais + Tailwind
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
├── pitch/                        # Apresentações institucionais (PT e EN)
│   ├── generate_pitch.py
│   ├── generate_lead_magnet.py
│   └── lead-magnet-automacao-pme.pdf
└── prospecção/                   # Materiais de prospecção B2B
    ├── dossie-leads-b2b.md
    └── leads-resumo.csv
```

## Variáveis de Ambiente

Este projeto não requer variáveis de ambiente no frontend. O webhook de contato aponta para `https://n8n.timesavingtech.com.br/webhook/ts` (hardcoded em `src/App.jsx`).

## Personalizações

**Adicionar clientes:** edite o array `clients` em `Clients()` dentro de `src/App.jsx` e adicione o logo em `public/clientes/`.

**Alterar contato:** atualize `whatsappNumber` e `emailAddress` no componente `Contact()`.

**Alterar cores:** edite as variáveis CSS em `src/index.css` ou os valores inline (`#00d4ff`, `#7c3aed`).
