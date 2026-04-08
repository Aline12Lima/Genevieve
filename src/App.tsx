import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

// Layouts e Componentes Globais
import { Layout } from "./layouts/MainLayout";
import { ScrollToTop } from "./components/scrollTop/ScrollToTop";
import { CTAFlutuante } from "./components/CTAflutuante/CTAFlutuante";

// Páginas
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ServicesPage } from "./pages/Servicos";
import { ProjectsList } from "./pages/ProjectsList";

import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { FormClientes } from "./pages/Contratos";

function PixelTrafficTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.init("2295892514237881", undefined, {
      autoConfig: true,
      debug: false,
    });
  }, []);

  useEffect(() => {
    ReactPixel.pageView();
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <PixelTrafficTracker />
      <ScrollToTop />
      <Layout>
        <CTAFlutuante />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicos" element={<ServicesPage />} />

          {/* Rota da Galeria (Onde aparecem todos os cards) */}
          <Route path="/projects" element={<ProjectsList />} />

          {/* Rota do Detalhe (Onde entra o Parallax) */}

          {/* Fallback para /templates caso alguém digite direto */}
          <Route path="/templates" element={<ProjectsList />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/contratos" element={<FormClientes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
