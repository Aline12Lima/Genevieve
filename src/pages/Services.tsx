import HeroServices from "../components/services/HeroServices";
import DetailedServices from "../components/services/ DetailedServices";
import MaintenancePlans from "../components/services/MaintenancePlans";

export function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <HeroServices />
      <DetailedServices />
      <MaintenancePlans />
    </main>
  );
}
