import React from "react";
import BottomNav from "../components/user/BottomNav";

type UserLayoutProps = {
  mainNode?: React.ReactNode;
  currentPageId: string;
};

const UserLayout: React.FC<UserLayoutProps> = ({ mainNode, currentPageId }) => {
  return (
    <div className="relative min-h-[100dvh] rounded-sm bg-base-200 text-black">
      {mainNode}
      <BottomNav currentPageId={currentPageId} />
    </div>
  );
};

export default UserLayout;
