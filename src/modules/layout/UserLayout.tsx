import React from "react";
import BottomNav from "../components/home/BottomNav";

type UserLayoutProps = {
  mainNode?: React.ReactNode;
  currentPageId: string;
};

const UserLayout: React.FC<UserLayoutProps> = ({ mainNode, currentPageId }) => {
  return (
    <div className="relative z-50 min-h-[100vh] rounded-sm bg-base-200 text-black">
      {mainNode}
      <BottomNav currentPageId={currentPageId} />
    </div>
  );
};

export default UserLayout;
