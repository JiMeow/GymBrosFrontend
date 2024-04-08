import React from "react";
import { twMerge } from "tailwind-merge";

type HomeCardProps = {
  title1: string;
  title2: string;
  children?: React.ReactNode;
  className?: string;
};

const HomeCard: React.FC<HomeCardProps> = ({
  title1,
  title2,
  children,
  className,
}) => {
  return (
    <div
      className={twMerge("card w-full bg-base-100 shadow-xl", className ?? "")}
    >
      <div className="card-body w-full">
        <div className="flex w-full flex-row justify-center gap-2 text-2xl font-bold text-content1-foreground">
          <span>{title1}</span>
          <span className="text-accent">{title2}</span>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default HomeCard;
