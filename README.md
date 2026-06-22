# Genevieve — Landing Page Institucional

Site institucional para apresentação de serviços de criação de Landing Pages e websites modernos, responsivos e orientados à conversão.

---

## Tecnologias

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** — animações
- **Supabase** — backend e persistência
- **Lucide React** — ícones
- **Vercel** — deploy

---

## Estrutura

```
src/
├── app/               # App Router do Next.js (layout, página raiz)
├── components/        # Seções da página (Hero, Navbar, Projects, Testimonials…)
├── layouts/           # Layout compartilhado
├── lib/               # Integrações (Supabase, utils)
├── types/             # Tipos TypeScript
└── assets/            # Imagens e recursos estáticos
```

---

## Funcionalidades

- Seção hero com headline e CTA direto para WhatsApp
- Vitrine de projetos com carrossel e frame de celular animado
- Depoimentos em carrossel horizontal com auto-avanço
- Seção de diferenciais, precificação e processo de entrega
- Formulário de contato com mensagem dinâmica para WhatsApp
- Tracking de conversão via Facebook Pixel
- SEO com meta tags via `react-helmet-async`
- Layout totalmente responsivo
- Ícone flutuante de WhatsApp

---

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

---

## Deploy

O projeto está hospedado na **Vercel**, com deploy automático a cada push na branch `main`.

---

## Branch de desenvolvimento

A branch `feature/migration-to-nextjs` contém a migração do projeto original (Vite + React SPA) para **Next.js com App Router**.
