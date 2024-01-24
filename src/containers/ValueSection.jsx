import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2, H3 } from "@/components/Heading";

const ValueCard = ({ item }) => (
  <div className="bg-secondary h-[300px] w-[425px] rounded-2xl items-center justify-center md:flex hidden">
    <FontAwesomeIcon icon={item.icon} height={125} />
  </div>
);

const ValueDescription = ({ item }) => (
  <div className="flex-1 flex flex-col justify-center space-y-5 md:px-10 px-0">
    <H3>{item.heading && item.heading}</H3>
    <p className="md:text-[20px] text-[16px]">{item.text && item.text}</p>
  </div>
);

const ValueSection = ({ title, data }) => {
  return (
    <>
      <div className="bg-white w-full pb-20">
        <div className="w-full text-center py-20">
          {title && <H2>{title}</H2>}
        </div>

        <div className="md:px-32 px-10 flex flex-col space-y-20">
          {data &&
            data.map((item, index) => {
              return index % 2 === 0 ? (
                <div className="flex" key={item.heading}>
                  <ValueCard item={item} />
                  <ValueDescription item={item} />
                </div>
              ) : (
                <div className="flex" key={item.heading}>
                  <ValueDescription item={item} />
                  <ValueCard item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ValueSection;
