import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
