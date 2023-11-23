import { useIsVisible } from "@/hooks/useIsVisible";
import React, { useRef } from "react";
import { Typography, styled } from "@mui/material";
import Card from "@/components/Card";

const WorkoutExample = () => {
  const ref = useRef(null);
  const WorkoutVisible = useIsVisible(ref);

  return (
    <div
      id="workout"
      ref={ref}
      className={`relative z-10 flex justify-center p-8 duration-[3s] sm:min-h-[101vh]
      ${WorkoutVisible ? " opacity-100" : " opacity-0"}`}
    >
      <div className="flex h-full w-full flex-col items-center text-white duration-[3s] sm:w-[75%]">
        <StyledTypography className="mb-3 text-center text-lg font-bold sm:my-8 sm:text-5xl">
          Our Workout Plans
        </StyledTypography>
        <div className="flex w-full flex-col gap-4">
          {MockData.map((workout) => {
            return (
              <div
                className="flex items-center gap-1 sm:gap-4"
                key={workout.day}
              >
                <Typography className="w-[90px] text-base sm:text-lg">
                  {workout.day}
                </Typography>
                <div className="flex flex-1 gap-4 overflow-x-auto">
                  {workout.exercises.map((exercise) => {
                    return (
                      <Card
                        key={exercise.name}
                        title={exercise.name}
                        description={exercise.description}
                        image={exercise.image}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkoutExample;

const StyledTypography = styled(Typography)(() => ({
  textShadow: "4px 4px 4px rgba(255,255,255, 0.5)",
}));

type Workout = {
  day: string;
  exercises: Exercise[];
};

type Exercise = {
  name: string;
  description: string;
  image: string;
};

const MockData: Workout[] = [
  {
    day: "Monday",
    exercises: [
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
    ],
  },
  {
    day: "Tuesday",
    exercises: [
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
    ],
  },
  {
    day: "Wednesday",
    exercises: [
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
    ],
  },
  {
    day: "Thursday",
    exercises: [
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
    ],
  },
  {
    day: "Friday",
    exercises: [
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
    ],
  },
  {
    day: "Saturday",
    exercises: [
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
    ],
  },
  {
    day: "Sunday",
    exercises: [
      {
        name: "Chest",
        description: "Biceps",
        image: "",
      },
    ],
  },
];
