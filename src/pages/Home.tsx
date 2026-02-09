import { Hero } from "../components/home/Hero";
import { Perfil } from "../components/home/Perfil";
import { Nichos } from "../components/home/Nichos";
import { GroupWork } from "../components/home/GroupWork";
import { Skills } from "../components/home/Skills";
import { InspProjects } from "../components/home/InspProjects";
import { CTAFlutuanteMobile } from "../components/home/CTAFlutuanteMobile";

export function Home() {
  return (
    <main className="relative">
      <Hero />
      <Perfil />
      <Nichos />
      <InspProjects />
      <Skills />
      <GroupWork />
      <CTAFlutuanteMobile />
    </main>
  );
}
