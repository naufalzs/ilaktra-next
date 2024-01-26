import React from "react";
import { sellerAdvantageList } from "@/constants";
import { HeroBuyerSeller, ValueSection } from "@/containers";

export default function SellerPage() {
  return (
    <>
      <section className="w-full">
        <HeroBuyerSeller />
      </section>

      <section className="w-full">
        <ValueSection data={sellerAdvantageList} />
      </section>
    </>
  );
}
