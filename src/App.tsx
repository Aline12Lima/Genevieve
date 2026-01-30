import { Layout } from "./layouts/MainLayout"; // Ajuste o caminho conforme sua pasta
import { Hero } from "./components/hero/Hero";

function App() {
  return (
    <Layout>
      {/* O conteúdo abaixo é passado para a prop 'children' do Layout */}
      <Hero />

      {/* Seções futuras como 'About', 'Services', 'Portfolio' entrarão aqui */}
    </Layout>
  );
}

export default App;
