"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { NavbarDashboard, Sidebar } from "@/components";

export default function DashboardMain({ componentMap, isBuyer }) {
  const router = useRouter();
  const [activeNav, setactiveNav] = useState(Object.keys(componentMap)[0]);

  const handleNav = (name) => {
    if (name === "logout") {
      router.replace("/");
    } else {
      setactiveNav(name);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar isBuyer={isBuyer} changeNav={handleNav} activeNav={activeNav} />
      <div className="flex-1 flex flex-col overflow-hidden h-full">
        <NavbarDashboard changeNav={handleNav} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto h-full ">
          {componentMap[activeNav]}
        </main>
      </div>
    </div>
  );
}
