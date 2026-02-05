import { Hero } from "../components/home/Hero";
import { DestackServices } from "../components/home/DestackServices";

import { BentoPresentation } from "../components/home/BentoPresentation";
import { ShowcaseScroll } from "../components/home/ShowcaseScroll";
import { Testimonials } from "../components/home/Testimonials";
import { Skills } from "../components/home/Skills";
import { CTAWorkTogether } from "../components/home/CTAWorkTogether";
import { FeaturedServices } from "../components/home/FeaturedServices";

export function Home() {
  return (
    <>
      <Hero />
      <DestackServices />
      <BentoPresentation />
      <ShowcaseScroll />
      <FeaturedServices />
      <Skills />
      <Testimonials />
      <CTAWorkTogether />
    </>
  );
}
