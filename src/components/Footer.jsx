import { navigationList } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#182022] text-white mx-auto py-10 md:py-20 flex flex-col md:flex-row justify-between lg:px-20 md:px-10 px-4">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-white font-quicksand text-[49px] font-extrabold leading-[63px]">
            ilaktra
          </p>
          <p className="text-[#777f81] font-quicksand text-[31px] leading-[40px]">
            ILAKTRA PVT
          </p>
          <p className="text-[#777f81] font-quicksand text-[31px] leading-[40px]">
            LTD.
          </p>
        </div>
        <div className="my-auto">
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
            {navigationList.map((navItem) => (
              <li
                key={navItem.name}
                className="text-white font-montserrat text-lg leading-[23px]"
              >
                <Link href={navItem.link}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
