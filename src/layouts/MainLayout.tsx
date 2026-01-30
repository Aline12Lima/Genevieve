import type { ReactNode } from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Intro } from "../components/intro/Intro";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-black">
      <Intro />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
