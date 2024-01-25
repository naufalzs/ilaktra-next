import React from "react";
import { UserProfile, BrowseRFQ, CompanyProfile, Product, Chatbox, DashboardMain } from "@/containers";

export default function SellerDashboardPage() {

  const componentMap = {
    dashboard: <UserProfile />,
    product: <Product />,
    profile: <CompanyProfile />,
    browseRFQ: <BrowseRFQ />,
    searchSellerMessage: <Chatbox />,
  };

  return (
   <DashboardMain componentMap={componentMap} />
  );
}
