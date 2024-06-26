import React, { useRef } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Table from "@/components/unused/MockTable";
import { useIsVisible } from "@/hooks/useIsVisible";

const tabs = [
  {
    id: "1",
    title: "3 Days",
    content: "656b12a4a4ca23c8c1afd1e0",
  },
  {
    id: "2",
    title: "4 Days",
    content: "656b1309a4ca23c8c1afd1e8",
  },
  {
    id: "3",
    title: "5 Days",
    content: "656b1316a4ca23c8c1afd1f0",
  },
];

const WorkoutExample = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isWorkoutVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`m-auto flex h-full w-full flex-col items-center justify-center gap-4 text-white transition-[opacity] duration-[3s] sm:w-[75vw] sm:gap-8 ${
        isWorkoutVisible ? " opacity-100" : " opacity-0"
      }`}
    >
      <div className="mt-12 text-center text-lg font-bold sm:text-5xl">
        Our Workout Plans
      </div>
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.title}>
            <Table id={item.content} />
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default WorkoutExample;
