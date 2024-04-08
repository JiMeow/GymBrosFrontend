import AppLayout from "@/modules/layout/AppLayout";
import React from "react";

const UserHome = () => {
  return (
    <AppLayout layoutType="user" currentPageId="food">
      <div className="h-[100dvh] w-[100vw] bg-base-200"></div>
    </AppLayout>
  );
};

export default UserHome;
