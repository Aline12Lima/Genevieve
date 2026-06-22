import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Deliverables from "../components/Deliverables";
import Projects from "../components/Projects";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Maintenance from "../components/Maintenance"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Deliverables />
      <Projects />
      <Pricing />
      <Maintenance/>
      <Testimonials />
      <Contact />
    </>
  );
}
