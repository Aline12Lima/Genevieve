import './Deliverables.css'

const items = [
  {
    title: 'Abre no celular',
    desc: 'Bonito e funcional em qualquer tela, sem distorções.',
  },
  {
    title: 'Aparece no Google',
    desc: 'Configurado para ser encontrado por quem busca o que você oferece.',
  },
  {
    title: 'Botão de WhatsApp',
    desc: 'Seu cliente clica e já cai no seu contato. Simples assim.',
  },
  {
    title: 'Carrega rápido',
    desc: 'Ninguém espera mais de 3 segundos. Seu site também não vai fazer isso.',
  },
  {
    title: 'Design profissional',
    desc: 'Um visual que faz seu negócio parecer grande, mesmo que esteja começando.',
  },
  {
    title: 'Suporte pós-entrega',
    desc: '15 dias de ajustes incluídos. Nada de sumir depois que entrego.',
  },
]

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="#C49E60" strokeWidth="1" />
      <path d="M6 10l3 3 5-5" stroke="#C49E60" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Deliverables() {
  return (
    <section className="deliverables" id="deliverables">
      <div className="deliverables__inner">
        <p className="section-label">Entregáveis</p>
        <h2 className="section-title">O que vem no seu site</h2>

        <div className="deliverables__grid">
          {items.map((item) => (
            <div className="deliverables__item" key={item.title}>
              <CheckIcon />
              <div>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
