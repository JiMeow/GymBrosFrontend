import React from "react";
import UserCard from "../UserCard";
import PlanDayCard from "./PlanDayCard";
import { FileText } from "@phosphor-icons/react";

type PlanCardType = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

type YourPlanCardProps = {
  className?: string;
};

const YourPlanCard: React.FC<YourPlanCardProps> = ({ className }) => {
  return (
    <UserCard className={className}>
      <div className="card-body h-full w-full rounded-md">
        <div className="mb-6 flex w-full flex-row items-center justify-between">
          <div className="text-2xl text-content1-foreground">Your plan</div>
          <FileText size={32} color="#504e4e" weight="bold" />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-8">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <PlanDayCard key={day} day={day as PlanCardType} />
          ))}
        </div>
      </div>
    </UserCard>
  );
};

export default YourPlanCard;
