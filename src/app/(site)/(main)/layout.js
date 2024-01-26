import { Footer, NavbarMain } from "@/components";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <div className="bg-primary w-full h-full">
      <section>
        <NavbarMain />
      </section>

      {children}
      
      <section className="w-full">
        <Footer />
      </section>
    </div>
  );
}
