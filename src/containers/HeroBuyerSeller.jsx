import Image from "next/image";
import React from "react";

const BUYER = {
  title: "Buyers",
  desc: "llaktra is meticulously crafted to ensure buyers get what they need and whenever they need it. Need a reason why buyers should prefer llaktra, we will give you more than one .",
};

const SELLER = {
  title: "Sellers",
  desc: "The Ilaktra platform is a great opportunity for sellers to expand their product market. The plethora of services and features that sellers have on our platform exceeds all expectations. Below are the benefits of using Ilaktra as a seller:",
};

export default function HeroBuyerSeller({ isBuyer }) {
  return (
    <div className="min-h-[75vh] bg-primary w-full flex md:flex-row flex-col md:px-20 px-5">
      <div className="md:w-1/2 w-full md:mt-0 mt-10 h-auto flex items-center justify-center">
        <div className=" flex flex-col justify-center space-y-4">
          <p className="md:text-[59px] text-5xl font-bold flex-1">
            For {isBuyer ? BUYER.title : SELLER.title}
          </p>
          <p className="font-lato text-[#000802] text-[22px] leading-[30px]">
            {isBuyer ? BUYER.desc : SELLER.desc}
          </p>
        </div>
      </div>
      <div className="md:w-1/2 md:mt-0 mt-10 w-full flex items-center justify-center">
        <Image src="/images/home/buyer.png" alt="" width={700} height={700} className="px-14" />
      </div>
    </div>
  );
}
