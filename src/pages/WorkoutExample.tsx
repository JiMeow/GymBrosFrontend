import { useIsVisible } from "@/hooks/useIsVisible";
import React, { useRef } from "react";
import { Typography, styled } from "@mui/material";
import { Viewport, useViewport } from "@/hooks/useViewport";
import Card from "@/components/Card";

function createData(date: string, types: string[]) {
  return { date, types };
}

const rows = [
  createData("Monday", [
    "Chest",
    "Biceps",
    "Chest",
    "Biceps",
    "Chest",
    "Biceps",
    "Chest",
    "Biceps",
    "Abs",
  ]),
  createData("Tuesday", ["Back", "Triceps", "Abs"]),
  createData("Wednesday", ["Legs", "Shoulders", "Abs"]),
  createData("Thursday", ["Chest", "Biceps", "Abs"]),
  createData("Friday", ["Back", "Triceps", "Abs"]),
  createData("Saturday", ["Legs", "Shoulders", "Abs"]),
  createData("Sunday", ["Rest", "Rest", "Rest"]),
];

const WorkoutExample = () => {
  const ref = useRef(null);
  const WorkoutVisible = useIsVisible(ref);
  const { viewport } = useViewport();

  return (
    <div
      ref={ref}
      className={`relative z-10 flex h-full flex-col items-center justify-center p-8 text-white duration-[3s] sm:min-h-[101vh]
      ${WorkoutVisible ? " opacity-100" : " opacity-0"}`}
    >
      {/* <Image
      width={1920}
      height={1080}
      src="/images/LandingpageBackground.png"
      alt="GymBackground"
      className="absolute left-0 top-0 z-[-1]  h-full w-full object-cover saturate-50 sm:block"
    /> */}
      <StyledTypography className="mb-2 text-center text-lg font-bold sm:my-4 sm:text-5xl">
        Our Workout Plans
      </StyledTypography>
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full items-center gap-4">
          <Typography className="w-24">Monday</Typography>
          <div className="flex flex-1 gap-4  overflow-x-scroll">
            <Card title="Chest" description="Biceps" image="" />
            <Card title="Chest" description="Biceps" image="" />
            <Card title="Chest" description="Biceps" image="" />
            <Card title="Chest" description="Biceps" image="" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Typography className="w-24">Tuesday</Typography>
          <Card title="Chest" description="Biceps" image="" />
        </div>
        <div className="flex items-center gap-4">
          <Typography className="w-24">Wednesday</Typography>
          <Card title="Chest" description="Biceps" image="" />
        </div>
        <div className="flex items-center gap-4">
          <Typography className="w-24">Thursday</Typography>
          <Card title="Chest" description="Biceps" image="" />
        </div>
        <div className="flex items-center gap-4">
          <Typography className="w-24">Friday</Typography>
          <Card title="Chest" description="Biceps" image="" />
        </div>
        <div className="flex items-center gap-4">
          <Typography className="w-24">Saturday</Typography>
          <Card title="Chest" description="Biceps" image="" />
        </div>
        <div className="flex items-center gap-4">
          <Typography className="w-24">Sunday</Typography>
          <Card title="Chest" description="Biceps" image="" />
        </div>
      </div>
    </div>
  );
};

export default WorkoutExample;

const StyledTypography = styled(Typography)(() => ({
  textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
}));
