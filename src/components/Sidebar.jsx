"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClipboardList,
  faDashboard,
  faPowerOff,
  faSearch,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const NavLink = ({ icon, text, name, changeNav, activeNav }) => {
  return (
    <button
      onClick={() => changeNav(name)}
      className={`flex items-center py-3 shadow-lg px-4 border border-gray-100 hover:bg-secondary hover:text-black ${
        activeNav === name
          ? "bg-black text-white"
          : name === "logout"
          ? "text-[#fe3131]"
          : "bg-white text-[#030303]"
      }`}
    >
      <FontAwesomeIcon height={16} icon={icon} className="mr-2" />
      <p className=" font-montserrat text-[15px] leading-6">{text}</p>
    </button>
  );
};

const Sidebar = ({ isBuyer, changeNav, activeNav }) => {
  const [navActive, setNavActive] = useState(true);

  const toggleNav = () => {
    setNavActive((prevState) => !prevState);
  };

  const navLinks = isBuyer ? (
    <div className="flex flex-col px-5 space-y-3">
      <NavLink
        name="userProfile"
        changeNav={changeNav}
        icon={faDashboard}
        text="Dashboard"
        activeNav={activeNav}
      />
      <NavLink
        name="searchSeller"
        changeNav={changeNav}
        icon={faSearch}
        text="Search Sellers"
        activeNav={activeNav}
      />
      <NavLink
        name="buyerPostRFQ"
        changeNav={changeNav}
        icon={faClipboardList}
        text="Post RFQ"
        activeNav={activeNav}
      />
      <NavLink
        name="logout"
        changeNav={changeNav}
        icon={faPowerOff}
        text="Sign out"
        activeNav={activeNav}
      />
    </div>
  ) : (
    <div className="flex flex-col px-5 space-y-3">
      <NavLink
        name="dashboard"
        changeNav={changeNav}
        icon={faDashboard}
        text="Dashboard"
        activeNav={activeNav}
      />
      <NavLink
        name="profile"
        changeNav={changeNav}
        icon={faSearch}
        text="Company Profile"
        activeNav={activeNav}
      />
      <NavLink
        name="product"
        changeNav={changeNav}
        icon={faClipboardList}
        text="Products"
        activeNav={activeNav}
      />
      <NavLink
        name="browseRFQ"
        changeNav={changeNav}
        icon={faSignOutAlt}
        text="Browse RFQ's"
        activeNav={activeNav}
      />
      <NavLink
        name="logout"
        changeNav={changeNav}
        icon={faPowerOff}
        text="Sign out"
        activeNav={activeNav}
      />
    </div>
  );

  return (
    <div
      className={`h-screen shadow-2xl text-black flex flex-col duration-300 ${
        navActive ? "w-72" : "w-0"
      }`}
    >
      <div className="flex items-center justify-center py-4 mb-5 relative">
        <Image
          src="https://assets.api.uizard.io/api/cdn/stream/7c20c45e-b704-435b-bf39-8af602bd5d8c.png"
          alt="Logo"
          width={128}
          height={128}
        />
        <FontAwesomeIcon
          icon={faBars}
          className={`absolute ${
            navActive ? "top-5 right-5" : "top-8 -right-8"
          } `}
          onClick={toggleNav}
        />
      </div>
      {navActive && navLinks}
    </div>
  );
};

export default Sidebar;
