import { usePlanByUserId } from "@/hooks/plan/usePlanByUserId";
import React from "react";
import MockTableCell from "./MockTableCell";

const dayMap = {
  Sunday: "Sun",
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
};

type Props = {
  id: string;
};

const Table: React.FC<Props> = ({ id }) => {
  const { data: plans, error, isLoading } = usePlanByUserId({ id });
  return (
    <>
      <div className="flex w-[90vw] flex-col gap-4 sm:w-[75vw]">
        {plans?.map((item) => {
          // console.log(item?.exercise);
          return (
            <div
              className="flex flex-none flex-row items-center gap-1 sm:gap-4"
              key={item.id}
            >
              <div className="text-sm sm:text-base">{item?.dayofweek}</div>
              <div className="flex flex-row gap-4 overflow-auto">
                {item?.exercise?.map((e) => <MockTableCell key={e} id={e} />)}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Table;
