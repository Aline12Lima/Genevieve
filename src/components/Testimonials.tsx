"use client"

import { useState, useEffect } from 'react'
import './Testimonials.css'

const quotes = [
  {
    text: 'Eu não entendia nada de site e ela me explicou tudo de forma simples. Em uma semana meu salão já estava aparecendo no Google.',
    author: 'Fernanda S.',
    role: 'Salão de Beleza, Portugal - PT',
  },
  {
    text: 'Minha clínica ganhou uma cara nova. Os clientes sempre comentam como o site é bonito e profissional. Valeu cada centavo.',
    author: 'Dr. Marcos V.',
    role: 'Clínica Odontológica, MG',
  },
  {
    text: 'Eu estava precisando divulgar meus serviços, trabalho com reformas residenciais e agora tenho um site que representa minha loja online.',
    author: 'Vini Gesso',
    role: 'Empresa de Reformas - SP',
  },
  {
    text: 'Depois do site, recebi contatos de pessoas que me encontraram pelo Google. Obrigada.',
    author: 'Willian',
    role: 'Topografia - SP',
  },
  {
    text: 'Amei meu site, ele representa minha clínica online. O resultado ficou incrível, me surpreendeu.',
    author: 'Socorro',
    role: 'Terapeuta Ocupacional - BA',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = quotes.length

  const prev = () => setCurrent(i => (i === 0 ? total - 1 : i - 1))
  const next = () => setCurrent(i => (i === total - 1 ? 0 : i + 1))

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [paused, current])

  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <p className="section-label">Depoimentos</p>
        <h2 className="section-title">O que dizem os clientes</h2>

        <div
          className="testimonials__carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="testimonials__track"
            style={{
              width: `calc(${total} * 100%)`,
              transform: `translateX(calc(-${current} * (100% / ${total})))`,
            }}
          >
            {quotes.map((q) => (
              <blockquote
                className="testimonials__quote"
                key={q.author}
                style={{ width: `calc(100% / ${total})` }}
              >
                <p className="testimonials__text">"{q.text}"</p>
                <footer className="testimonials__author">
                  <span className="testimonials__author-name">{q.author}</span>
                  <span className="testimonials__author-role">{q.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="testimonials__controls">
          <button className="testimonials__arrow" onClick={prev} aria-label="Anterior">←</button>
          <div className="testimonials__dots">
            {quotes.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
          <button className="testimonials__arrow" onClick={next} aria-label="Próximo">→</button>
        </div>
      </div>
    </section>
  )
}
