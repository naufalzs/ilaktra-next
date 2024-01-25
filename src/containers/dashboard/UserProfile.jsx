import React from "react";
import {
  faBuilding,
  faFax,
  faIndustry,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { CustomInput } from "@/components";
import Button from "@/components/Button";

const UserInfoCard = ({ title, info, isEmail, extra }) => (
  <div className="shadow border border-gray-50 rounded-3xl w-[18rem] h-[8rem] p-3">
    <p className="text-center font-montserrat text-xl text-[#030303] font-medium leading-[26px]">
      {" "}
      {title}
    </p>
    <div className="flex flex-col h-full items-end justify-end pb-6 pr-2">
      {isEmail ? (
        <p className="underline">{info}</p>
      ) : (
        <p className="text-center font-montserrat text-[32px] text-[#030303] font-medium leading-[42px]">
          {info}
        </p>
      )}
      {extra && (
        <a href="#" className="text-primary">
          <small>{extra}</small>
        </a>
      )}
    </div>
  </div>
);

const UserProfile = ({ isBuyer }) => {
  return (
    <div className="md:w-2/3 md:px-10 px-5 my-10">
      <div className="flex md:flex-row flex-col mb-10 md:space-x-7 items-center md:space-y-0 space-y-3">
        <UserInfoCard title="Membership Type" info="Free" extra="Upgrade" />
        <UserInfoCard title="Email" info="adasdads@asd.com" isEmail />
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-20 gap-y-8">
        <div className="md:col-span-2 col-span-2">
          <p className="font-montserrat text-2xl text-[#030303] leading-[31px]">
            Profile Details
          </p>
        </div>

        <CustomInput
          label="Full name"
          name="name"
          icon={faUser}
          placeholder="Enter your name"
          className="md:col-span-1 col-span-2 md:mb-0"
        />

        {isBuyer && (
          <CustomInput
            label="Company Name"
            name="company"
            icon={faBuilding}
            placeholder="Enter your company"
            className="md:col-span-1 col-span-2 md:mb-0"
          />
        )}

        <CustomInput
          label="Mobile Phone"
          name="mobile"
          icon={faPhone}
          placeholder="Enter your mobile"
          className="md:col-span-1 col-span-2 md:mb-0"
        />

        <CustomInput
          label="Telephone"
          name="telephone"
          icon={faPhone}
          placeholder="Enter your telephone"
          className="md:col-span-1 col-span-2 md:mb-0"
        />

        <CustomInput
          label="Fax"
          name="fax"
          icon={faFax}
          placeholder="Enter your fax"
          className="md:col-span-1 col-span-2 md:mb-0"
        />

        {isBuyer && (
          <CustomInput
            label="Industry"
            name="industry"
            icon={faIndustry}
            placeholder="Enter your industry"
            className="md:col-span-1 col-span-2 md:mb-0"
          />
        )}

        <div className="col-span-2 flex justify-end">
          <Button isSave />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
