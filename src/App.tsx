import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Layout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Project } from "./pages/Templates";
import { Contact } from "./pages/Contact";
import { ServicesPage } from "./pages/Services";
import { FormServices } from "./components/services/formServices";
import { ScrollToTop } from "./components/scrollTop/ScrollToTop";
import { CTAFlutuante } from "./components/CTAflutuante/CTAFlutuante";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { FormClientes } from "./pages/Contratos";

import ReactPixel from "react-facebook-pixel";
function PixelTrafficTracker() {
  const location = useLocation();

  useEffect(() => {
    // Inicializa apenas uma vez
    ReactPixel.init("2295892514237881", undefined, {
      autoConfig: true,
      debug: false,
    });
  }, []);

  useEffect(() => {
    // Dispara PageView toda vez que a URL mudar
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
          <Route path="services" element={<ServicesPage />} />
          <Route path="/briefing-exclusivo" element={<FormServices />} />
          <Route path="/projeto/:slug" element={<Project />} />{" "}
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/contratos" element={<FormClientes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
