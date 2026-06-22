"use client"

import './Pricing.css'
import { waUrl } from '../lib/whatsapp'

const plans = [
  {
    name: 'Presença',
    tagline: 'Página única que apresenta seu negócio',
    price: 'R$ 699',
    period: 'pagamento único',
    featured: false,
    features: [
      'Design personalizado',
      'Abre no celular e tablet',
      'Botão de WhatsApp',
      'Otimizado pro Google',
      'Entrega em 5 dias úteis',
      '15 dias de suporte',
    ],
  },
  {
    name: 'Autoridade',
    tagline: 'Site completo com múltiplas páginas',
    price: 'R$ 1.497',
    period: 'pagamento único',
    featured: true,
    features: [
      'Até 7 páginas',
      'Blog ou portfólio incluso',
      'Formulário de contato',
      'Integração com redes sociais',
      'Entrega em 7 dias úteis',
      '30 dias de suporte',
    ],
  },
  {
    name: 'Expansão',
    tagline: 'Site com funcionalidades avançadas',
    price: 'R$ 2.899',
    period: 'pagamento único',
    featured: false,
    features: [
      'Tudo do pacote Autoridade',
      'Área de agendamento',
      'Catálogo de produtos',
      'Painel de edição próprio',
      'Entrega em 14 dias úteis',
      '60 dias de suporte',
    ],
  },
]

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pricing" id="pricing">
      <div className="pricing__inner">
        <p className="section-label">Pacotes</p>
        <h2 className="section-title">Transparência antes de tudo</h2>
        <p className="section-sub">
          Sem surpresas no valor. Você sabe exatamente o que paga e o que recebe.
        </p>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <div
              className={`pricing__plan ${plan.featured ? 'pricing__plan--featured' : ''}`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="pricing__badge">Mais escolhido</span>
              )}
              <p className="pricing__plan-name">{plan.name}</p>
              <p className="pricing__plan-tagline">{plan.tagline}</p>
              <p className="pricing__plan-price">
                {plan.price} <span>{plan.period}</span>
              </p>

              <ul className="pricing__features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <button
                className={`btn ${plan.featured ? 'btn--primary' : 'btn--outline'}`}
                onClick={scrollToContact}
              >
                Quero esse →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
