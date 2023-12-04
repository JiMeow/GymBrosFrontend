import { usePlanByUserId } from "@/hooks/plan/usePlanByUserId";
import React from "react";
import MockTableCell from "./MockTableCell";

type Props = {
  id: string;
};

const Table: React.FC<Props> = ({ id }) => {
  const { data: plans } = usePlanByUserId({ id });
  return (
    <>
      <div className="flex w-[90vw] flex-col gap-4 sm:w-[75vw]">
        {plans?.map((item) => {
          return (
            <div
              className="flex flex-none flex-row items-center gap-1 sm:gap-4"
              key={item.id}
            >
              <div className="text-sm sm:hidden sm:text-base">
                {getDayShorthand(item?.dayofweek)}
              </div>
              <div className="hidden text-sm sm:block sm:text-base">
                {item?.dayofweek}
              </div>
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

function getDayShorthand(date: string): string {
  switch (date) {
    case "Sunday":
      return "SUN";
    case "Monday":
      return "MON";
    case "Tuesday":
      return "TUE";
    case "Wednesday":
      return "WED";
    case "Thursday":
      return "THU";
    case "Friday":
      return "FRI";
    case "Saturday":
      return "SAT";
    default:
      return "Invalid Date";
  }
}
