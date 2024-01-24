import React from "react";
import Image from "next/image";

const PostRFQ = () => {
  return (
    <>
      <div className="py-20 bg-[#182022] flex md:flex-row flex-col md:px-44 px-10 md:h-[35rem]">
        <div className="md:w-1/2 w-full h-auto flex items-center justify-center">
          <div className=" flex flex-col justify-center space-y-8">
            <p className=" text-primary text-3xl font-bold flex-1">Post RFQ</p>
            <p className="md:pr-20 font-montserrat text-[16px] md:text-[20px] text-[#cecac3] leading-6">
              You can submit your specific requirements and request quotations
              from our trusted suppliers. Simply fill out the form and we&#39;ll
              connect you with the best solutions for your needs.
            </p>
            <button className="bg-primary w-fit rounded px-8 py-2">
              Post RFQ
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:mt-0 mt-10 w-full flex items-center justify-center">
          <Image
            src="/images/home/postrfq.png"
            width={800}
            height={800}
            alt=""
            className="scale-125 md:scale-100 "
          />
        </div>
      </div>
    </>
  );
};

export default PostRFQ;
