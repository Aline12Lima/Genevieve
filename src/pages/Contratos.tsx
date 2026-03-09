import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { supabase } from "../lib/supabase";

export function FormClientes() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const { error } = await supabase.from("clientes").insert([payload]);

    if (error) {
      alert("Erro: " + error.message);
      setIsSubmitting(false);
      return;
    }

    setIsSent(true);
    setIsSubmitting(false);
  }

  return (
    <section className="py-20 px-6 bg-black min-h-screen text-slate-900">
      <div className="max-w-4xl mt-20 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          Cadastro de Clientes
        </h2>

        {!isSent ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-[2rem] shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Nome da Empresa" name="empresa" required />
              <Field label="Nome do Contato" name="contato" />
              <Field label="Telefone / WhatsApp" name="telefone" />
              <Field label="Instagram" name="insta" placeholder="@usuario" />
              <Field label="Site" name="site" placeholder="https://..." />
              <Field label="Data do Domínio" name="data_dominio" type="date" />
              <Field label="Cidade" name="cidade" />
              <div className="grid grid-cols-2 gap-2">
                <Field label="Estado" name="estado" />
                <Field label="País" name="pais" defaultValue="Brasil" />
              </div>
            </div>

            <button
              disabled={isSubmitting}
              className="w-full py-4 bg-black text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
            >
              {isSubmitting ? (
                "Salvando..."
              ) : (
                <>
                  <Send size={18} /> Cadastrar Cliente
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="bg-white p-12 rounded-[2rem] text-center animate-in zoom-in">
            <CheckCircle2 size={60} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Cliente Cadastrado!</h3>
            <button
              onClick={() => setIsSent(false)}
              className="mt-6 text-blue-600 underline"
            >
              Novo Cadastro
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Componente auxiliar para manter o código limpo
function Field({ label, ...props }: any) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-bold uppercase text-slate-500 ml-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full p-3 bg-slate-50 rounded-xl border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}
