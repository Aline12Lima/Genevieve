// layout/AppLayout.tsx
import { Header } from "../components/header/Header";
import { CTAFlutuanteMobile } from "../components/home/CTAFlutuanteMobile";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <CTAFlutuanteMobile />
    </>
  );
}
