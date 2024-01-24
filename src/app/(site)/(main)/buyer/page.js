import React from "react";
import { buyerAdvantageList } from "@/constants";
import { ExtraValueSection, HeroBuyerSeller, ValueSection } from "@/containers";

export default function BuyerPage() {
  return (
    <>
      <HeroBuyerSeller isBuyer />
      <ValueSection data={buyerAdvantageList} />
      <ExtraValueSection />
    </>
  );
}
