"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navigationList } from "@/constants";
import { H1 } from "../Heading";

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive((x) => !x);
  };

  return (
    <nav className="bg-primary ">
      <div className="mx-auto max-w-[95%] px-2 sm:px-6 lg:px-8 py-3 ">
        <div className="relative flex h-16 items-center justify-between">
          {/* mobile menu icon */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleNav}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href={"/"}>
                <H1> ilaktra.</H1>
              </Link>
            </div>
          </div>

          {/* desktop navigation */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigationList.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="text-black hover:bg-gray-700 hover:text-white rounded-2xl px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/login"
                  className="bg-[#182022] text-white rounded-2xl px-5 items-center justify-center flex"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu dropdown*/}
      {navActive && (
        <div
          className="sm:hidden bg-white w-[95%] rounded mx-auto"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 text-center">
            {navigationList.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                className="active:bg-primary active:text-white md:text-white text-black block md:rounded-md px-3 py-2 border-b shadow-primary  hover:shadow-sm text-base font-medium"
                aria-current="page"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
