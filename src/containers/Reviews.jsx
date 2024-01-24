import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { H2, H6 } from "@/components/Heading";
import { reviewList } from "@/constants";

const Reviews = () => {
  return (
    <>
      <div className="bg-white px-4">
        <div className="w-full text-center py-[5rem]">
          <H2>Reviews from our users</H2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-3 gap-y-3 ">
          {reviewList.map((item, index) => (
            <div
              key={index}
              className="bg-secondary rounded-2xl p-6 w-full flex flex-col "
            >
              <div className="flex flex-row space-x-2">
                {Array.from({ length: item.star }).map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} width={16} />
                ))}
              </div>
              <p className="my-5 flex-1"> {item.text}</p>
              <div className="w-full flex flex-col space-y-1">
                <H6>{item.name}</H6>
                <p className="font-montserrat text-[#4f4f4f] text-sm leading-4 ">
                  {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
