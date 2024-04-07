import React from "react";
import { useRouter } from "next/router";
import { pages } from "@/modules/pageConfig";

type BottomNavProps = {
  currentPageId: string;
};

const BottomNav: React.FC<BottomNavProps> = ({ currentPageId }) => {
  const rounter = useRouter();

  return (
    <div className="btm-nav">
      {[pages.food, pages.home, pages.workout].map((page) => (
        <button
          key={page.id}
          type="button"
          className={currentPageId === page.id ? "active" : ""}
          onClick={() => {
            void rounter.push(page.path);
          }}
        >
          {page.Icon && <page.Icon size={36} color="#504e4e" weight="bold" />}
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
