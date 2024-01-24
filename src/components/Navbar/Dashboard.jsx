'use client'
import React from "react";
import { faAngleDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarDashboard = ({ changeNav }) => {
  return (
    <div className="lg:flex lg:justify-end lg:items-center md:py-10 py-5 px-6 shadow-md">
      <div className="flex items-center justify-end md:space-x-0 space-x-3">
        <button
          onClick={() => changeNav("searchSellerMessage")}
          className="lg:mr-4 relative focus:outline-none shadow border border-gray-50 md:px-5 px-3 py-2 rounded space-x-3 flex items-center justify-center"
        >
          <p>Messages</p>
          <span className="w-2.5 h-2.5 absolute right-[0.9rem] top-[0.5rem]  bg-primary rounded-full "></span>

          <FontAwesomeIcon icon={faEnvelope} />
        </button>

        <div className="flex items-center justify-center space-x-2">
          <span className="text-gray-800 text-sm lg:mr-4">
            Hi Muhammad Arif
          </span>
          <FontAwesomeIcon icon={faAngleDown} className="lg:h-5 lg:w-5" />
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
