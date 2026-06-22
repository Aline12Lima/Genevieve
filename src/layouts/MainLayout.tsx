"use client";

import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export function Layout({ children }: MainLayoutProps) {
  return <>{children}</>;
}
