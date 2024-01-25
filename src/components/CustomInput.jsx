import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomInput = ({ label, name, icon, placeholder, className }) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className=" font-montserrat text-[#080a0b] text-xs font-medium leading-4"
      >
        {label}
      </label>
      <div className="mt-3 relative rounded-md shadow-lg border border-gray-50 overflow-hidden">
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          className="outline-none px-4 py-3 rounded-xl form-input block w-full sm:text-sm sm:leading-5"
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FontAwesomeIcon
              className="text-[#5d5d5b] text-[16px]"
              width={16}
              icon={icon}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
