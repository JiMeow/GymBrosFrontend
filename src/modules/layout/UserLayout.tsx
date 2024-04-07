import React from "react";

type UserLayoutProps = {
  mainNode?: React.ReactNode;
  currentPageId: string;
};

const UserLayout: React.FC<UserLayoutProps> = ({ mainNode, currentPageId }) => {
  // TODO: remove this console.log
  console.log("GuestLayout", currentPageId);

  return <div>{mainNode}</div>;
};

export default UserLayout;
