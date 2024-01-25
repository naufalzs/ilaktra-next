import React from "react";
import { RFQList } from "@/constants";
import { Card } from "@/components";

const BrowseRFQ = () => {
  return (
    <div className="px-3 md:p-5 md:py-0 py-5 mt-5 h-full">
      <p className="font-montserrat text-2xl text-[#030303] leading-[31px]">
        Browse RFQ&#39;s
      </p>
      <div className="h-full md:overflow-y-auto mt-5">
        <div className="grid md:grid-cols-1 gap-4">
          {RFQList.map((rfq) => (
            <Card key={rfq.id} item={rfq} isRFQ />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseRFQ;
