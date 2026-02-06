import { Hero } from "../components/home/Hero";
import { DestackServices } from "../components/home/DestackServices";
import { BentoPresentation } from "../components/home/BentoPresentation";
import { ShowcaseScroll } from "../components/home/ShowcaseScroll";
import { Testimonials } from "../components/home/Testimonials";
import { Skills } from "../components/home/Skills";
import { CTAWorkTogether } from "../components/home/CTAWorkTogether";
import { FeaturedServices } from "../components/home/FeaturedServices";
import { CTAFlutuanteMobile } from "../components/home/CTAFlutuanteMobile";

export function Home() {
  return (
    <main className="relative">
      <Hero />
      <DestackServices />
      <BentoPresentation />
      <ShowcaseScroll />
      <FeaturedServices />
      <Skills />
      <Testimonials />
      <CTAWorkTogether />

      {/* O componente gerencia seu próprio portal internamente */}
      <CTAFlutuanteMobile />
    </main>
  );
}
