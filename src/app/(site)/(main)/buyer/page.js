import React from "react";
import { buyerAdvantageList } from "@/constants";
import { ExtraValueSection, HeroBuyerSeller, ValueSection } from "@/containers";

export default function BuyerPage() {
  return (
    <>
      <section className="w-full">
        <HeroBuyerSeller isBuyer />
      </section>

      <section className="w-full">
        <ValueSection data={buyerAdvantageList} />
      </section>

      <section className="w-full">
        <ExtraValueSection />
      </section>
    </>
  );
}
