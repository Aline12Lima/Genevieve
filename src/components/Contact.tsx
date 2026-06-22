import './Contact.css'
import { WA_DEFAULT } from '../lib/whatsapp'

export default function Contact() {
  const whatsappUrl = WA_DEFAULT

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <p className="section-label" style={{ textAlign: 'center' }}>Pronto para começar?</p>
        <h2 className="section-title contact__title">
          Vamos criar o site<br />que você merece
        </h2>
        <p className="section-sub contact__sub">
          Mande uma mensagem, me conta sobre o seu negócio e recebe um orçamento
          sem compromisso no mesmo dia.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary contact__cta"
        >
          Solicitar orçamento grátis
        </a>
      </div>
    </section>
  )
}
