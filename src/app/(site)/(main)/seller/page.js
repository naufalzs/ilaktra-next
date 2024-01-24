import React from "react";
import { sellerAdvantageList } from "@/constants";
import { HeroBuyerSeller, ValueSection } from "@/containers";

export default function SellerPage() {
  return (
    <>
      <HeroBuyerSeller />
      <ValueSection data={sellerAdvantageList} />
    </>
  );
}
