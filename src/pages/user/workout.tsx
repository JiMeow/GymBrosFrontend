import StartCard from "@/modules/components/user/workout/StartCard";
import YourPlanCard from "@/modules/components/user/workout/YourPlanCard";
import AppLayout from "@/modules/layout/AppLayout";
import React from "react";

const UserHome = () => {
  return (
    <AppLayout layoutType="user" currentPageId="workout">
      <div className="flex min-h-[92dvh] w-full flex-col gap-8 bg-base-300 p-8 py-12">
        <div className="w-full text-center text-[28px] text-content1-foreground">
          {"Let's Push Limit"}
        </div>
        <StartCard />
        <YourPlanCard />
      </div>
    </AppLayout>
  );
};

export default UserHome;
