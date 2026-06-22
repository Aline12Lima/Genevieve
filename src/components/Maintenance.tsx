"use client"

import './Maintenance.css'
import { waUrl } from '../lib/whatsapp'

const plans = [
  {
    name: 'Sob demanda',
    tagline: 'Você paga só quando precisar de algo',
   price: 'R$ 0,00',
    period: 'pago por solicitação',
    features: [
      'Atendimento quando você precisar',
      'Orçamento por demanda',
      'Troca de imagens e textos',
      'Atualização de informações',
    ],
  },
  {
    name: 'Cuidado contínuo',
    tagline: 'Seu site sempre atualizado e monitorado',
    price: 'R$ 249',
    period: 'por mês',
    features: [
      'Sempre acompanhando seu negócio',
      'Edições ilimitadas no conteúdo',
      'Monitoramento e garantia contínua',
      'Prioridade no atendimento',
    ],
  },
]

export default function Maintenance() {
  return (
    <section className="maintenance" id="maintenance">
      <div className="maintenance__inner">
        <p className="section-label">Depois da entrega</p>
        <h2 className="section-title">E quando precisar de mudanças?</h2>
        <p className="section-sub">
          Manutenção é opcional. Você escolhe pagar só quando precisa, ou ter
          alguém cuidando do seu site todo mês.
        </p>

        <div className="maintenance__grid">
          {plans.map((plan) => (
            <div className="maintenance__plan" key={plan.name}>
              <p className="maintenance__plan-name">{plan.name}</p>
              <p className="maintenance__plan-tagline">{plan.tagline}</p>

              <p className="maintenance__plan-price">
                {plan.price} <span>/ {plan.period}</span>
              </p>

              <ul className="maintenance__features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <a
                href={waUrl(`Olá! Vi seu site e tenho interesse no plano de manutenção ${plan.name}. Pode me dar mais detalhes?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Falar sobre →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}