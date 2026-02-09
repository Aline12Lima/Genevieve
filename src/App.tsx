import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";

import { Contact } from "./pages/Contact";
import { ScrollToTop } from "./components/scrollTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 👈 AGORA SIM */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
