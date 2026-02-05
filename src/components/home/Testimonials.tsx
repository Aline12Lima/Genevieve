import Persona1 from "../../assets/images/Aline.jpg";
import Persona2 from "../../assets/images/ju.png";
import Persona3 from "../../assets/images/Jeff.jpg";

const stats = [
  { label: "PROJETOS ", value: "+30", outline: false },
  { label: "CLIENTES", value: "20", outline: true },
  { label: "NO MERCADO", value: "+12", outline: false },
  { label: "DESIGNS", value: "100+", outline: true },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center mb-32">
        <h2 className="text-white text-4xl md:text-6xl font-black uppercase leading-tight mx-auto">
          Será um PRAZER <br />
          TRABALHAR JUNTOS <br />
          no seu PROJETO.
        </h2>

        {/* Funcionários */}
        <div className="mt-8 flex justify-center gap-10 flex-wrap">
          <div className="flex flex-col items-center">
            <img
              src={Persona2}
              className="w-16 h-16 rounded-full mb-4"
              alt="Comercial"
            />
            <p className="text-white font-bold text-xs uppercase">
              Juliane Lima
            </p>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">
              Comercial
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={Persona1}
              className="w-16 h-16 rounded-full object-cover object-center mb-4"
              alt="Desenvolvedora"
            />
            <p className="text-white font-bold text-xs uppercase">Aline Lima</p>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">
              Desenvolvedora
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={Persona3}
              className="w-16 h-16 rounded-full object-cover object-center mb-4"
              alt="Design"
            />
            <p className="text-white font-bold text-xs uppercase">Jefferson</p>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">
              Design
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 border-t border-white/5">
        {stats.map((s, i) => (
          <div
            key={i}
            className="p-12 border-r border-white/5 text-center group hover:bg-white/5 transition-colors"
          >
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              {s.label}
            </p>
            <span
              style={s.outline ? { WebkitTextStroke: "1px white" } : {}}
              className={`text-6xl md:text-8xl font-black ${
                s.outline ? "text-transparent" : "text-white"
              }`}
            >
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
