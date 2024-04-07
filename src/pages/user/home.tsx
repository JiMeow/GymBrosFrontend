import AppLayout from "@/modules/layout/AppLayout";
import React from "react";

const UserHome = () => {
  return (
    <AppLayout layoutType="user" currentPageId="home">
      <div className="h-[100vh] w-[100vw] bg-base-300"></div>
    </AppLayout>
  );
};

export default UserHome;
