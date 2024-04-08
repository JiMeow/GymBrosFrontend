import React from "react";
import UserCard from "@/modules/components/user/UserCard";

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
    <UserCard className={className}>
      <div className="card-body w-full">
        <div className="flex w-full flex-row justify-center gap-1 text-xl font-bold text-content1-foreground">
          <span>{title1}</span>
          <span className="text-highlight">{title2}</span>
        </div>
        <div>{children}</div>
      </div>
    </UserCard>
  );
};

export default HomeCard;
