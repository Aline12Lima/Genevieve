"use client"

import './Hero.css'
import { WA_DEFAULT } from '../lib/whatsapp'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">Criação de sites profissionais</p>

        <h1 className="hero__title">
          Seu negócio merece<br />
          ser encontrado —<br />
          <em>e lembrado.</em>
        </h1>

        <p className="hero__sub">
          Eu crio o site que representa você do jeito certo: bonito, rápido
          e feito pra atrair clientes. Você não precisa entender de tecnologia.
          Só me contar o que você faz.
        </p>

        <div className="hero__actions">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Solicitar orçamento grátis
          </a>
          <button
            className="btn btn--ghost"
            onClick={() => scrollTo('how-it-works')}
          >
            Como funciona →
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">7 dias</span>
            <span className="hero__stat-label">entrega média</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">100%</span>
            <span className="hero__stat-label">responsivo e otimizado</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">+70</span>
            <span className="hero__stat-label">projetos entregues</span>
          </div>
        </div>
      </div>
    </section>
  )
}
