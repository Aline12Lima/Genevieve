import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__copy">
        © {new Date().getFullYear()} Genevieve. Criação de sites profissionais.
      </span>
      <div className="footer__links">
        <a
          href="https://www.instagram.com/genevieve_website/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/5535997382410"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a href="mailto:genevievewebsite@gmail.com">
          E-mail
        </a>
      </div>
    </footer>
  )
}
