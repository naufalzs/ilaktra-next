import React from "react";
import { faBuilding, faIndustry } from "@fortawesome/free-solid-svg-icons";
import { CustomInput } from "@/components";
import Button from "@/components/Button";

const CompanyProfile = () => {
  return (
    <div className="p-5">
      <div className="py-10 lg:w-[732px]">
        <div className="flex flex-col space-y-5 mb-5">
          <p className="font-montserrat text-2xl text-[#030303] leading-[31px]">
            Company Profile
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6">
          <CustomInput
            label="Company Name"
            name="companyName"
            icon={faBuilding}
            placeholder="Enter your company name"
            className="mb-4 md:mb-0"
          />

          <CustomInput
            label="Industry"
            name="industry"
            icon={faIndustry}
            placeholder="Enter your industry"
            className="mb-4 md:mb-0"
          />

          {/* Message field */}
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="font-montserrat text-xs text-[#080a0b] font-medium leading-4"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows="6"
                className="shadow-lg p-4 focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Please provide details about the product you are looking for..."
              ></textarea>
            </div>
          </div>
          <div className="col-span-2 md:mt-0 mt-5">
            <Button isSave className="float-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
