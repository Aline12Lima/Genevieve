"use client";

import type { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";

export function AppHelmetProvider({ children }: { children: ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}
