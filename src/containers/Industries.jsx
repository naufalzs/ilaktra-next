import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H1 } from "@/components/Heading";
import { industryList } from "@/constants";

const Industries = () => {
  return (
    <>
      <div className="bg-[#182022] text-primary py-10 flex flex-col items-center">
        <H1 className="text-primary text-center">Our Major Industries</H1>
        <div className="grid md:grid-cols-5 grid-cols-2 md:gap-10 gap-6 text-black py-20">
          {industryList.map((item) => (
            <div
              key={item.name}
              className="bg-secondary rounded-full  h-[186px] w-[186px] flex flex-col space-y-4 items-center justify-center"
            >
              <FontAwesomeIcon icon={item.icon} className="h-[40px]" />
              <p className="text-center px-4 font-montserrat text-[15px] leading-[21px] text-[#030303]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Industries;
