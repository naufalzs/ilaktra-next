import React from "react";

// Component for <h1> tag
export const H1 = ({ children, className }) => (
  <h1
    className={`font-lato font-black leading-[78px] text-[35px] md:text-[59px] ${
      className ? className : ""
    }`}
  >
    {children}
  </h1>
);

// Component for <h2> tag
export const H2 = ({ children, className }) => (
  <h2
    className={`font-lato font-bold leading-[64px] text-[36px] md:text-[44px] ${
      className ? className : ""
    }`}
  >
    {children}
  </h2>
);

// Component for <h3> tag
export const H3 = ({ children, className }) => (
  <h3
    className={`font-montserrat font-semibold leading-[52px] text-[30px] md:text-[42px] ${
      className ? className : ""
    }`}
  >
    {children}
  </h3>
);

// Component for <h4> tag
export const H4 = ({ children }) => (
  <h4 className="text-xl font-bold">{children}</h4>
);

// Component for <h5> tag
export const H5 = ({ children }) => (
  <h5 className="text-lg font-bold">{children}</h5>
);

// Component for <h6> tag
export const H6 = ({ children }) => (
  <h6 className="font-montserrat text-base font-semibold leading-[19px]">
    {children}
  </h6>
);
