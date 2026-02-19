import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight, X, Clock, User, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  },
};

const posts = [
  {
    id: 1,
    category: "Estratégia",
    title:
      "O Guia Definitivo para Transformar seu Site em uma Máquina de Vendas Local",
    date: "19 Fev, 2026",
    author: "Aline Lima",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    content: `O Guia Definitivo para Transformar seu Site em uma Máquina de Vendas Local

No setor de engenharia e construção, o site não é apenas uma vitrine; é uma ferramenta de filtragem e fechamento. Para dominar o mercado local, você precisa alinhar a conveniência do usuário com as exigências dos algoritmos de busca.



A Anatomia da Conversão Local

Um erro comum é tratar o site como um catálogo estático. Para vender localmente, o site deve responder à pergunta: "Por que esta empresa é a melhor escolha na minha região?".



Local SEO e Prova Social Geográfica: O Google prioriza a relevância local. Integre seu perfil do Google Meu Negócio diretamente no rodapé e crie uma seção de "Obras Realizadas no Bairro X". Isso cria conexão imediata com o vizinho do seu futuro cliente.

O Funil de Vendas no Header: A primeira dobra do seu site (o que aparece antes do scroll) deve conter três elementos: Uma proposta de valor clara ("Construímos sua casa em 8 meses"), uma imagem de alta qualidade e um botão de CTA (Call to Action) destacado.

Landing Pages por Especialidade: Se você faz cálculo estrutural e também reformas, não mande todos para a mesma página. Crie páginas específicas. Quem busca por "laudo técnico" tem uma dor diferente de quem busca "reforma de luxo".

O Poder dos Dados Locais

Use formulários inteligentes. Em vez de apenas "Deixe seu e-mail", use campos como "Qual a metragem da sua obra?" ou "Possui terreno próprio?". Isso qualifica o lead e permite que sua equipe comercial entre em contato com uma proposta muito mais assertiva.

2. Design: A Psicologia das Cores no Mercado de Luxo e a Curadoria Visual

No mercado de alto padrão, o design não é sobre "ser bonito", é sobre transmitir valor intrínseco. O cliente de luxo busca exclusividade, silêncio visual e sofisticação.

`,
  },
  {
    id: 2,
    category: "Design",
    title: "A Psicologia das Cores no Mercado de Luxo e a Curadoria Visual",
    date: "15 Fev, 2026",
    author: "Jefferson",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2400&auto=format&fit=crop",
    content: `A Paleta de Cores da Exclusividade

As cores evocam emoções subconscientes que podem validar ou destruir o preço que você cobra.



Ouro e Metais: Representam sucesso e longevidade. Devem ser usados em detalhes (bordas, ícones, divisores) para não sobrecarregar o visual.

Preto Absoluto e Grafite: No desenvolvimento web, o uso de espaços negativos em preto transmite autoridade e mistério, muito comum em sites de arquitetura premiada.

Cores Terrosas e Neutras: Bege, fendi e off-white comunicam sustentabilidade e conforto térmico/visual, fundamentais para empresas de engenharia moderna.

Curadoria e Organização de Fotos (O Ativo mais Valioso)

Fotos mal organizadas destroem a percepção de luxo.



A Regra da Unidade: Todas as fotos do seu portfólio devem passar por um tratamento de cor similar. Se uma foto é quente e a outra é fria, o site parece um "mural de retalhos".

Ritmo Visual: Alterne entre fotos de "Plano Aberto" (mostrando a magnitude da obra) e "Plano de Detalhe" (focando no acabamento, na textura do material ou na precisão técnica). Isso demonstra cuidado e perfeccionismo.

Metadados e Organização: Nomeie seus arquivos de imagem com palavras-chave (ex: mansao-luxo-alphaville-fachada.webp). Isso ajuda no SEO e mantém seu diretório de arquivos organizado para futuras manutenções.`,
  },
  {
    id: 3,
    category: "Performance",
    title: "Por que a Velocidade de Carregamento é o Seu Maior KPI de Lucro",
    date: "19 Fev, 2026",
    author: "Aline Lima",
    readTime: "5 min",
    // Imagem com tema Instagram/Social Media
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2148&auto=format&fit=crop",
    content: `Como estudante de engenharia de software, você sabe: código eficiente é dinheiro no bolso. A performance técnica define o seu Custo por Aquisição (CPA).

    A Ciência da Retenção:
    Sites que carregam em menos de 2 segundos têm taxas de conversão 15% maiores. Para cada segundo extra, a probabilidade de abandono aumenta exponencialmente.

    Otimização de Assets:
    LCP (Largest Contentful Paint): Otimize a foto principal da obra para evitar espaços em branco.
    O formato WebP é obrigatório para manter fotos nítidas porém leves.

    Impacto no Lucro:
    Se você gasta R$ 1.000,00 em anúncios e seu site é lento, 40% das pessoas podem desistir. Melhorar a performance é, tecnicamente, aumentar sua margem de lucro líquida.`,
  },
];

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<(typeof posts)[0] | null>(
    null,
  );

  useEffect(() => {
    document.body.style.overflow = selectedPost ? "hidden" : "unset";
  }, [selectedPost]);

  return (
    <div className="bg-slate-50 text-slate-900 selection:bg-[#00a3ff] selection:text-white font-sans overflow-x-hidden">
      {/* HEADER PRETO FIXO PARA ESTA PÁGINA */}
      <div className="fixed top-0 left-0 w-full h-20 bg-black z-[999] border-b border-white/5" />

      {/* ===================== HEADER HERO ===================== */}
      <section className="relative pt-48 pb-20 px-6 md:px-12 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto text-left">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="flex items-center gap-2 text-[#00a3ff] font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              <Plus size={12} /> Insights & Estratégia
            </span>
            <h1 className="text-[12vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter uppercase text-slate-950">
              Ideias que <br />
              Geram{" "}
              <span className="text-[#00a3ff] font-beauty lowercase font-light">
                Valor
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ===================== GRID DE ARTIGOS ===================== */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-left">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative overflow-hidden rounded-[2rem] mb-8 bg-slate-200 aspect-[4/5]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover  transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white text-slate-950 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100 shadow-xl">
                    <ArrowUpRight size={24} />
                  </div>
                  {post.id === 3 && (
                    <div className="absolute bottom-6 left-6 bg-[#00a3ff] text-white p-2 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity">
                      <Instagram size={20} />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#00a3ff] text-[10px] font-black uppercase tracking-[0.2em]">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                      {post.date}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight uppercase leading-[1.2] group-hover:text-[#00a3ff] transition-colors">
                    {post.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== POP-UP MODAL ===================== */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="relative w-full max-w-4xl h-[85vh] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#00a3ff] hover:text-white transition-all shadow-lg"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto h-full scrollbar-hide">
                <img
                  src={selectedPost.image}
                  className="w-full h-80 md:h-[450px] object-cover"
                  alt={selectedPost.title}
                />

                <div className="p-8 md:p-16 text-left">
                  <div className="flex flex-wrap gap-6 mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00a3ff]">
                    <span className="flex items-center gap-2">
                      <User size={12} /> {selectedPost.author}
                    </span>
                    <span className="flex items-center gap-2 text-slate-400">
                      <Clock size={12} /> {selectedPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-10 leading-[1.1]">
                    {selectedPost.title}
                  </h2>

                  <div className="w-12 h-[2px] bg-[#00a3ff] mb-10" />

                  <div className="text-lg md:text-xl text-slate-600 font-light leading-relaxed whitespace-pre-line space-y-6">
                    {selectedPost.content}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
