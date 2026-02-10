import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";
import { ScrollToTop } from "./components/scrollTop/ScrollToTop";
import { CTAFlutuante } from "./components/CTAflutuante/CTAFlutuante";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 👈 AGORA SIM */}
      <Layout>
        <CTAFlutuante />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projeto/:slug" element={<Project />} />{" "}
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
