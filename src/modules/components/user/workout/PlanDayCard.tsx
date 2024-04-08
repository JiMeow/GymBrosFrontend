import React from "react";
import UserCard from "../UserCard";
import PlanCard from "./PlanCard";

type PlanDayCardProps = {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  className?: string;
};

const PlanDayCard: React.FC<PlanDayCardProps> = ({ className, day }) => {
  return (
    <UserCard className={className}>
      {day !== "Wed" && (
        <div className="card-body w-full rounded-2xl border-1 border-base-300 bg-base-300 p-4">
          <div className="flex h-[20dvh] flex-col gap-[6dvh]">
            <div className="text-highlight text-xl">{day}</div>
            <div className="ml-2 flex flex-row overflow-x-hidden">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <PlanCard
                  key={i}
                  className="bg-highlight mr-1 aspect-[16/12] h-[6dvh] rounded-md"
                ></PlanCard>
              ))}
            </div>
          </div>
        </div>
      )}
      {day === "Wed" && (
        <div className="border-highlight bg-highlight card-body w-full rounded-2xl border-1 p-4">
          <div className="flex h-[20dvh] flex-col gap-[6dvh]">
            <div className="text-xl text-base-300">{day}</div>
            <div className="ml-2 flex flex-row overflow-x-hidden">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <PlanCard
                  key={i}
                  className="mr-1 aspect-[16/12] h-[6dvh] rounded-md bg-base-300"
                ></PlanCard>
              ))}
            </div>
          </div>
        </div>
      )}
    </UserCard>
  );
};

export default PlanDayCard;
