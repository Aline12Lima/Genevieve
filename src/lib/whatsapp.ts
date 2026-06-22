export const WHATSAPP_NUMBER = '5535997382410'

export function waUrl(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

export const WA_DEFAULT = waUrl(
  'Olá! Vi seu site e quero solicitar um orçamento gratuito para meu projeto.'
)
