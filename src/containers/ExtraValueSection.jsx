import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faUsers } from "@fortawesome/free-solid-svg-icons";
import { H2 } from "@/components/Heading";

const VALUE1 = {
  title: "Like - Minded Individuals",
  desc: "Connect and communicate with like- minded business individuals. Expand your business network and get valuable insights from industry experts offering services on our platform .",
};

const VALUE2 = {
  title: "Special Requests",
  desc: "Can't find a suitable seller for what you are looking for? Submit a request to our team and let us create a post to help you find the best fit .",
};

const ExtraValueItem = ({ title, desc, isFirstItem = false, children }) => (
  <div
    className={`md:flex-1 flex flex-col items-center justify-between space-y-10 ${
      !isFirstItem ? "md:mt-0 mt-10" : ""
    }`}
  >
    <div className="bg-primary w-[287px] h-[275px] flex items-center justify-center rounded-lg">
      {children}
    </div>
    <div className="text-white text-center space-y-10 flex-1">
      <p className="font-lato text-[36px] md:text-[43px] text-white font-bold leading-[55px]">
        {title}
      </p>
      <p className="w-full mx-auto md:w-4/6 md:px-0 px-6 font-lato text-[16px] md:text-[21px] text-white leading-[29px]">
        {desc}
      </p>
    </div>
  </div>
);

const ExtraValueSection = () => {
  return (
    <>
      <div className="bg-black flex flex-col md:flex-row py-32 ">
        <ExtraValueItem isFirstItem title={VALUE1.title} desc={VALUE1.desc}>
          <FontAwesomeIcon icon={faUsers} height={120} />
        </ExtraValueItem>
        <ExtraValueItem title={VALUE2.title} desc={VALUE2.desc}>
          <div className="flex items-center justify-center space-x-5 bg-black text-white px-5 py-3 rounded-2xl">
            <H2>Request</H2>
            <FontAwesomeIcon
              icon={faCaretRight}
              className="text-[43px] text-primary"
            />
          </div>
        </ExtraValueItem>
      </div>
    </>
  );
};

export default ExtraValueSection;
