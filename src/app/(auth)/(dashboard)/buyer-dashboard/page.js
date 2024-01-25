import React from "react";
import {
  PostRFQForm,
  SearchSeller,
  UserProfile,
  Chatbox,
  DashboardMain,
} from "@/containers";

export default function BuyerDashboardPage() {
  
  const componentMap = {
    userProfile: <UserProfile isBuyer />,
    searchSeller: <SearchSeller />,
    searchSellerMessage: <Chatbox />,
    buyerPostRFQ: <PostRFQForm isDashboard />,
  };

  return <DashboardMain componentMap={componentMap} isBuyer />;
}
