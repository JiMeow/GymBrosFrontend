import HomeCard from "@/modules/components/user/home/HomeCard";
import AppLayout from "@/modules/layout/AppLayout";
import Image from "next/image";
import React from "react";

const UserHome = () => {
  return (
    <AppLayout layoutType="user" currentPageId="home">
      <div className="flex min-h-[92dvh] w-full flex-col gap-12 bg-base-300 p-8 py-12">
        <div className="flex flex-row items-center justify-between">
          {/* left component */}
          <div>
            <span className="ml-2 text-[24px] font-bold text-content1-foreground">
              Welcome Back
            </span>
            {/* TODO: Change to user data */}
            <span className="text-highlight ml-4 text-2xl font-bold">
              {"JiMeow".length > 6 ? "JiMeow".substring(0, 6) + ".." : "JiMeow"}
            </span>
          </div>
          {/* right component */}
          <div className="avatar">
            <div className="aspect-square w-12 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <Image
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="user icon"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>
        <HomeCard title1="Workout" title2="Goal" className="h-[32dvh]">
          {/* TODO: Add Dashboard */}
        </HomeCard>
        <HomeCard title1="Food" title2="Goal" className="h-[32dvh]">
          {/* TODO: Add Dashboard */}
        </HomeCard>
      </div>
    </AppLayout>
  );
};

export default UserHome;
