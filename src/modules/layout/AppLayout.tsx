import { type PageId } from "@/modules/pageConfig";
import React from "react";
import UserLayout from "./UserLayout";
import GuestLayout from "./GuestLayout";

export type LayoutType = "user" | "guest";

type AppLayoutProps = {
  layoutType: LayoutType;
  currentPageId: PageId;
  children?: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({
  layoutType = "user",
  currentPageId,
  children,
}) => {
  switch (layoutType) {
    case "user":
      return <UserLayout mainNode={children} currentPageId={currentPageId} />;
    case "guest":
      return <GuestLayout mainNode={children} currentPageId={currentPageId} />;
  }
};

export default AppLayout;
