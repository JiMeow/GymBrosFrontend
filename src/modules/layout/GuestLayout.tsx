import React from "react";

type GuestLayout = {
  mainNode?: React.ReactNode;
  currentPageId: string;
};

const GuestLayout: React.FC<GuestLayout> = ({ mainNode, currentPageId }) => {
  // TODO: remove this console.log
  console.log("Guest Layout", currentPageId);

  return <div>{mainNode}</div>;
};

export default GuestLayout;
