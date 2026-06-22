import './HowItWorks.css'

const steps = [
  {
    num: '01',
    title: 'Você me conta tudo',
    desc: 'Me fala sobre o seu negócio, seus clientes, o que você vende e como quer aparecer.',
  },
  {
    num: '02',
    title: 'Eu construo pra você',
    desc: 'Crio o layout, escrevo os textos e monto tudo. Você acompanha e aprova cada etapa.',
  },
  {
    num: '03',
    title: 'Seu site no ar',
    desc: 'Em até 7 dias úteis você já tem um site no ar, com domínio e tudo funcionando.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how-it-works">
      <div className="how__inner">
        <p className="section-label">Processo</p>
        <h2 className="section-title">Simples do começo ao fim</h2>
        <p className="section-sub">
          Com reuniões rápidas. Sem termos técnicos. Você me conta sobre o seu
          negócio e eu cuido do resto.
        </p>

        <div className="how__steps">
          {steps.map((step) => (
            <div className="how__step" key={step.num}>
              <span className="how__step-num">{step.num}</span>
              <h3 className="how__step-title">{step.title}</h3>
              <p className="how__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
