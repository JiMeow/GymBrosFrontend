import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { pages } from "@/modules/pageConfig";
import { Barbell, ForkKnife, House } from "@phosphor-icons/react";

type BottomNavProps = {
  currentPageId: string;
};

const BottomNav: React.FC<BottomNavProps> = ({ currentPageId }) => {
  const rounter = useRouter();

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 m-auto flex h-28 w-[100vw] justify-between bg-base-content`}
      >
        <div className="flex w-full flex-row items-center justify-evenly gap-4">
          <div className="relative">
            <ForkKnife size={48} color="#504e4e" weight="bold" />
            <div className="absolute bottom-[50%] right-[50%] -z-10 h-16 w-16 translate-x-[50%] translate-y-[50%] rounded-full bg-white"></div>
          </div>
          <div className="relative">
            <House size={48} color="504e4e" weight="bold" />
            <div className="absolute bottom-[50%] right-[50%] -z-10 h-16 w-16 translate-x-[50%] translate-y-[50%] rounded-full bg-white"></div>
          </div>
          <div className="relative">
            <Barbell size={48} color="#504e4e" weight="bold" />
            <div className="absolute bottom-[50%] right-[50%] -z-10 h-16 w-16 translate-x-[50%] translate-y-[50%] rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
