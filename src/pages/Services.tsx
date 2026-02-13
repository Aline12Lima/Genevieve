import HeroServices from "../components/services/heroServices";
import Packages from "../components/services/packages";

// Exportando como função nomeada para seguir seu padrão
export function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroServices />
      <Packages />
    </main>
  );
}
