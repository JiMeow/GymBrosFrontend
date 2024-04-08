import { ArrowFatLineRight } from "@phosphor-icons/react";
import React from "react";
import UserCard from "../UserCard";

type StartCardProps = {
  className?: string;
};

const StartCard: React.FC<StartCardProps> = ({ className }) => {
  return (
    <UserCard className={className}>
      <div className="border-highlight card-body w-full rounded-md border-2">
        <div className="flex flex-row items-center justify-center gap-8">
          <div className="text-2xl text-content1-foreground">Start</div>
          <div className="bg-highlight badge badge-success h-[150%] gap-2">
            <ArrowFatLineRight size={32} color="#504e4e" weight="bold" />
          </div>
        </div>
      </div>
    </UserCard>
  );
};

export default StartCard;
