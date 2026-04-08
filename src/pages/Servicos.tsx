import { Helmet } from "react-helmet-async";
import HeroServices from "../components/services/HeroServices";
import DetailedServices from "../components/services/ DetailedServices";
import MaintenancePlans from "../components/services/MaintenancePlans";

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>
          Serviços de Desenvolvimento Web e Landing Pages | Genevieve
        </title>
        <meta
          name="description"
          content="Soluções completas em criação de Landing Pages, sites institucionais e sistemas web. Engenharia de software aplicada para gerar autoridade e conversão."
        />
      </Helmet>

      <main className="min-h-screen bg-[#0a0a0b]">
        <HeroServices />
        <DetailedServices />
        <MaintenancePlans />
      </main>
    </>
  );
}
