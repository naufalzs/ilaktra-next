import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <div>Navbar</div>
      {children}
      <div>Footer</div>
    </>
  );
}
