"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import './Projects.css'

import angelaPsiImg from '../assets/projetos/AngelaPsi.png'
import construtchImg from '../assets/projetos/Construtch.png'
import elaineImg from '../assets/projetos/ElainePaiva.png'
import fffImg from '../assets/projetos/FFF.png'
import mariNutriImg from '../assets/projetos/MariNutri.png'
import mayraEngImg from '../assets/projetos/MayraEng.png'
import odontoImg from '../assets/projetos/Odonto.png'
import rafaImg from '../assets/projetos/Rafa.png'
import salonImg from '../assets/projetos/Salon.png'
import socorroImg from '../assets/projetos/SocorroTerapeuta.png'
import viniGessoImg from '../assets/projetos/ViniGesso.png'
import wmTopoImg from '../assets/projetos/wmtopografia.png'

const projects = [
  {
    name: 'Ângela Psi',
    category: 'Psicologia',
    year: '2025',
    url: 'https://psi-angela.alinelima.dev/', 
    domain: 'angelapsi.com.br',
    image: angelaPsiImg,
  },
  {
    name: 'Construtch',
    category: 'Construção',
    year: '2025',
    url: 'https://jb-construtech.vercel.app/',
    domain: 'construtch.com.br',
    image: construtchImg,
  },
  {
    name: 'Elaine Paiva',
    category: 'Profissional Liberal',
    year: '2025',
    url: 'https://elaine-paiva.vercel.app/',
    domain: 'elainepaiva.com.br',
    image: elaineImg,
  },
  {
    name: 'FFF',
    category: 'Negócio Local',
    year: '2025',
    url: 'https://fff-xi-orpin.vercel.app/',
    domain: 'fff.com.br',
    image: fffImg,
  },
  {
    name: 'Mari Nutri',
    category: 'Nutrição',
    year: '2025',
    url: 'https://marianne-nutricionista.vercel.app/',
    domain: 'marinutri.com.br',
    image: mariNutriImg,
  },
  {
    name: 'Mayra Eng',
    category: 'Engenharia',
    year: '2025',
    url: 'https://eng-mayra-u52q.vercel.app/consultoria',
    domain: 'mayraeng.com.br',
    image: mayraEngImg,
  },
  {
    name: 'Odonto',
    category: 'Odontologia',
    year: '2025',
    url: 'https://odonto-care.alinelima.dev/',
    domain: 'odonto.com.br',
    image: odontoImg,
  },
  {
    name: 'Rafa',
    category: 'Profissional Liberal',
    year: '2025',
    url: 'https://rafa-botelho.vercel.app/',
    domain: 'rafa.com.br',
    image: rafaImg,
  },
  {
    name: 'Salon',
    category: 'Beleza',
    year: '2025',
    url: 'https://salon-x-nu.vercel.app/',
    domain: 'salon.com.br',
    image: salonImg,
  },
  {
    name: 'Socorro Terapeuta',
    category: 'Terapia Ocupacional',
    year: '2025',
    url: 'https://terapeuta-socorro-lima.vercel.app/',
    domain: 'socorroterapeuta.com.br',
    image: socorroImg,
  },
  {
    name: 'Vini Gesso',
    category: 'Reformas',
    year: '2025',
    url: 'https://vini-gesso.vercel.app/',
    domain: 'vinigesso.com.br',
    image: viniGessoImg,
  },
  {
    name: 'WM Topografia',
    category: 'Topografia',
    year: '2025',
    url: 'https://wmtopografiaegeo.com.br/',
    domain: 'wmtopografia.com.br',
    image: wmTopoImg,
  },
]

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = projects.length

  const prev = () => setCurrent(i => (i === 0 ? total - 1 : i - 1))
  const next = () => setCurrent(i => (i === total - 1 ? 0 : i + 1))

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [paused, current])

  const project = projects[current]

  return (
    <section className="projects" id="projects">
      <div className="projects__inner">

        <div className="projects__left">
          <p className="section-label">Projetos</p>
          <h2 className="section-title">Trabalhos recentes</h2>
          <p className="section-sub">
            Alguns dos negócios que ganharam presença online comigo.
          </p>

          <div className="projects__current">
            <p className="projects__tag">{project.category} · {project.year}</p>
            <h3 className="projects__name">{project.name}</h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__link"
            >
              Ver projeto →
            </a>
          </div>

          <div className="projects__controls">
            <button className="projects__arrow" onClick={prev} aria-label="Anterior">←</button>
            <div className="projects__dots">
              {projects.map((_, i) => (
                <button
                  key={i}
                  className={`projects__dot-nav ${i === current ? 'projects__dot-nav--active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Projeto ${i + 1}`}
                />
              ))}
            </div>
            <button className="projects__arrow" onClick={next} aria-label="Próximo">→</button>
          </div>
        </div>

        <div
          className="projects__carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="projects__track"
            style={{
              width: `calc(${total} * 100%)`,
              transform: `translateX(calc(-${current} * (100% / ${total})))`,
            }}
          >
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__card"
                style={{ width: `calc(100% / ${total})` }}
              >
                <div className="projects__screen">
                  <Image
                    src={p.image}
                    alt={`Preview do site ${p.name}`}
                    fill
                    quality={100}
                    sizes="260px"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
