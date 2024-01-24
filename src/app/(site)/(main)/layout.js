import { Footer, NavbarMain } from "@/components";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <div className="bg-primary w-full h-full">
      <NavbarMain />
      {children}
      <Footer />
    </div>
  );
}
