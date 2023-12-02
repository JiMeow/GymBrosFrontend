import { useExerciseById } from "@/hooks/exercise/useExerciseById";
import { usePlanByUserId } from "@/hooks/plan/usePlanByUserId";
import React from "react";
import MockTableCell from "./MockTableCell";

type Props = {
  id: string;
};

const Table: React.FC<Props> = ({ id }) => {
  const { data: plan, error, isLoading } = usePlanByUserId({ id });

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center gap-1 sm:gap-4">
          <div className="w-[80px] text-sm sm:w-24 sm:text-base">
            {plan?.dayofweek}
          </div>
          <div className="flex flex-1 gap-4 overflow-x-auto">
            {plan?.exercise?.map((workout) => (
              <MockTableCell id={workout} key={workout} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
