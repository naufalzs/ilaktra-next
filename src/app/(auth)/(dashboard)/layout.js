import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div>Sidebar</div>
      {children}
    </>
  );
}
