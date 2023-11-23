import { useIsVisible } from "@/hooks/useIsVisible";
import React, { useRef, useState } from "react";
import { Typography, styled } from "@mui/material";
import Card from "@/components/Card";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type activeButton = "3 Days" | "4 Days" | "5 Days";

const WorkoutExample = () => {
  const ButtonGroupData: ButtonData[] = [
    {
      name: "3 Days",
      onClick: () => {
        void setActiveButton("3 Days");
      },
      bgColor: "bg-gray-300",
    },
    {
      name: "4 Days",
      onClick: () => {
        void setActiveButton("4 Days");
      },
      bgColor: "bg-gray-400",
    },
    {
      name: "5 Days",
      onClick: () => {
        void setActiveButton("5 Days");
      },
      bgColor: "bg-gray-500",
    },
  ];

  const ref = useRef(null);
  const [parent, enableAnimations] = useAutoAnimate();
  const WorkoutVisible = useIsVisible(ref);
  const [activeButton, setActiveButton] = useState<activeButton>("3 Days");

  return (
    <div
      id="workout"
      ref={ref}
      className={`relative z-10 flex justify-center p-8 transition-[opacity] duration-[3s] sm:min-h-[101vh]
      ${WorkoutVisible ? " opacity-100" : " opacity-0"}`}
    >
      <div className="flex h-full w-full flex-col items-center gap-4 text-white sm:w-[75%] sm:gap-8">
        <StyledTypography className="mt-2 text-center text-lg font-bold sm:text-5xl">
          Our Workout Plans
        </StyledTypography>
        <div className="flex">
          <ButtonGroup>
            {ButtonGroupData.map((button) => {
              return (
                <Button
                  key={button.name}
                  onClick={button.onClick}
                  className={`border-2 border-gray-700 bg-gray-300 sm:h-12 sm:w-32 sm:text-lg ${
                    button.bgColor
                  } ${
                    activeButton === button.name
                      ? " bg-gray-800 font-semibold text-white"
                      : " "
                  }`}
                >
                  {button.name}
                </Button>
              );
            })}
          </ButtonGroup>
        </div>
        <div className="flex w-full flex-col gap-4">
          {MockData.map((workout) => {
            return (
              <div
                className="flex items-center gap-1 sm:gap-4"
                key={workout.day}
              >
                <Typography className="w-[80px] text-sm sm:w-24 sm:text-base">
                  {workout.day}
                </Typography>
                <div className="flex flex-1 gap-4 overflow-x-auto" ref={parent}>
                  {workout.exercises[activeButton].map((exercise, idx) => {
                    return (
                      <Card
                        key={exercise.name + idx + workout.day}
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
  textShadow: "4px 4px 4px rgba(255, 255, 255, 0.25)",
}));

type ButtonData = {
  name: string;
  onClick: () => void;
  bgColor?: string;
};

type Workout = {
  day: string;
  exercises: {
    "3 Days": Exercise[];
    "4 Days": Exercise[];
    "5 Days": Exercise[];
  };
};

type Exercise = {
  name: string;
  description: string;
  image: string;
};

const MockData: Workout[] = [
  {
    day: "Monday",
    exercises: {
      "3 Days": [
        {
          name: "Squats",
          description: "Perform 3 sets of 12 squats with a barbell.",
          image:
            "data:image/png;base64,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",
        },
        {
          name: "Push-ups",
          description: "Do 4 sets of 15 push-ups.",
          image: "https://cdn-icons-png.flaticon.com/512/2548/2548530.png",
        },
        // Add more exercises for Monday if needed
      ],
      "4 Days": [
        {
          name: "Squats",
          description: "Perform 3 sets of 12 squats with a barbell.",
          image:
            "data:image/png;base64,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",
        },
        {
          name: "Push-ups",
          description: "Do 4 sets of 15 push-ups.",
          image: "https://cdn-icons-png.flaticon.com/512/2548/2548530.png",
        },
        {
          name: "Chest Flyes",
          description: "Do 3 sets of 12 chest flyes with dumbbells.",
          image:
            "https://media.istockphoto.com/id/1407964138/vector/woman-doing-chest-fly-glute-bridge-exercise-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=eNWeqMkFyD4mj9F1noE0Iu0tO7H2Szl6Jh__L3cdRYY=",
        },
        // Add more exercises for Monday if needed
      ],
      "5 Days": [
        {
          name: "Squats",
          description: "Perform 3 sets of 12 squats with a barbell.",
          image:
            "data:image/png;base64,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",
        },
        {
          name: "Push-ups",
          description: "Do 4 sets of 15 push-ups.",
          image: "https://cdn-icons-png.flaticon.com/512/2548/2548530.png",
        },
        {
          name: "Yoga",
          description: "Practice yoga for flexibility and relaxation.",
          image: "https://cdn-icons-png.flaticon.com/512/2789/2789915.png",
        },
        {
          name: "Chest Flyes",
          description: "Do 3 sets of 12 chest flyes with dumbbells.",
          image:
            "https://media.istockphoto.com/id/1407964138/vector/woman-doing-chest-fly-glute-bridge-exercise-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=eNWeqMkFyD4mj9F1noE0Iu0tO7H2Szl6Jh__L3cdRYY=",
        },
        // Add more exercises for Monday if needed
      ],
    },
  },
  {
    day: "Tuesday",
    exercises: {
      "3 Days": [
        {
          name: "Lunges",
          description: "Complete 3 sets of 10 lunges per leg.",
          image: "https://cdn-icons-png.flaticon.com/512/3043/3043233.png",
        },
        {
          name: "Bicep Curls",
          description: "Perform 3 sets of 12 bicep curls with dumbbells.",
          image: "https://static.thenounproject.com/png/253684-200.png",
        },
        // Add more exercises for Tuesday if needed
      ],
      "4 Days": [
        {
          name: "Lunges",
          description: "Complete 3 sets of 10 lunges per leg.",
          image: "https://cdn-icons-png.flaticon.com/512/3043/3043233.png",
        },
        {
          name: "Bicep Curls",
          description: "Perform 3 sets of 12 bicep curls with dumbbells.",
          image: "https://static.thenounproject.com/png/253684-200.png",
        },
        {
          name: "Push-ups",
          description: "Do 4 sets of 15 push-ups.",
          image: "https://cdn-icons-png.flaticon.com/512/2548/2548530.png",
        },
        // Add more exercises for Tuesday if needed
      ],
      "5 Days": [
        {
          name: "Lunges",
          description: "Complete 3 sets of 10 lunges per leg.",
          image: "https://cdn-icons-png.flaticon.com/512/3043/3043233.png",
        },
        {
          name: "Bicep Curls",
          description: "Perform 3 sets of 12 bicep curls with dumbbells.",
          image: "https://static.thenounproject.com/png/253684-200.png",
        },
        {
          name: "Squats",
          description: "Perform 3 sets of 12 squats with a barbell.",
          image:
            "data:image/png;base64,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",
        },
        {
          name: "Push-ups",
          description: "Do 4 sets of 15 push-ups.",
          image: "https://cdn-icons-png.flaticon.com/512/2548/2548530.png",
        },
        // Add more exercises for Tuesday if needed
      ],
    },
  },
  {
    day: "Wednesday",
    exercises: {
      "3 Days": [
        {
          name: "Deadlifts",
          description: "Do 4 sets of 8 deadlifts with proper form.",
          image: "https://static.thenounproject.com/png/4781842-200.png",
        },
        {
          name: "Planks",
          description: "Hold a plank position for 3 sets of 30 seconds each.",
          image: "https://static.thenounproject.com/png/1102782-200.png",
        },
        // Add more exercises for Wednesday if needed
      ],
      "4 Days": [
        {
          name: "Deadlifts",
          description: "Do 4 sets of 8 deadlifts with proper form.",
          image: "https://static.thenounproject.com/png/4781842-200.png",
        },
        {
          name: "Planks",
          description: "Hold a plank position for 3 sets of 30 seconds each.",
          image: "https://static.thenounproject.com/png/1102782-200.png",
        },
        {
          name: "Lunges",
          description: "Complete 3 sets of 10 lunges per leg.",
          image: "https://cdn-icons-png.flaticon.com/512/3043/3043233.png",
        },
        // Add more exercises for Wednesday if needed
      ],
      "5 Days": [
        {
          name: "Deadlifts",
          description: "Do 4 sets of 8 deadlifts with proper form.",
          image: "https://static.thenounproject.com/png/4781842-200.png",
        },
        {
          name: "Planks",
          description: "Hold a plank position for 3 sets of 30 seconds each.",
          image: "https://static.thenounproject.com/png/1102782-200.png",
        },
        {
          name: "Lunges",
          description: "Complete 3 sets of 10 lunges per leg.",
          image: "https://cdn-icons-png.flaticon.com/512/3043/3043233.png",
        },
        {
          name: "Bicep Curls",
          description: "Perform 3 sets of 12 bicep curls with dumbbells.",
          image: "https://static.thenounproject.com/png/253684-200.png",
        },
        // Add more exercises for Wednesday if needed
      ],
    },
  },
  {
    day: "Thursday",
    exercises: {
      "3 Days": [
        {
          name: "Pull-ups",
          description: "Complete 4 sets of 10 pull-ups.",
          image:
            "https://cdn.iconscout.com/icon/free/png-256/free-pull-up-exercise-gym-workout-fitness-helth-46422.png",
        },
        {
          name: "Dumbbell Rows",
          description: "Perform 3 sets of 12 dumbbell rows.",
          image: "https://cdn-icons-png.flaticon.com/512/3043/3043179.png",
        },
        // Add more exercises for Thursday if needed
      ],
      "4 Days": [
        {
          name: "Pull-ups",
          description: "Complete 4 sets of 10 pull-ups.",
          image:
            "https://cdn.iconscout.com/icon/free/png-256/free-pull-up-exercise-gym-workout-fitness-helth-46422.png",
        },
        {
          name: "Dumbbell Rows",
          description: "Perform 3 sets of 12 dumbbell rows.",
          image: "https://cdn-icons-png.flaticon.com/512/3043/3043179.png",
        },
        {
          name: "Planks",
          description: "Hold a plank position for 3 sets of 30 seconds each.",
          image: "https://static.thenounproject.com/png/1102782-200.png",
        },
        // Add more exercises for Thursday if needed
      ],
      "5 Days": [
        {
          name: "Pull-ups",
          description: "Complete 4 sets of 10 pull-ups.",
          image:
            "https://cdn.iconscout.com/icon/free/png-256/free-pull-up-exercise-gym-workout-fitness-helth-46422.png",
        },
        {
          name: "Dumbbell Rows",
          description: "Perform 3 sets of 12 dumbbell rows.",
          image: "https://cdn-icons-png.flaticon.com/512/3043/3043179.png",
        },
        {
          name: "Deadlifts",
          description: "Do 4 sets of 8 deadlifts with proper form.",
          image: "https://static.thenounproject.com/png/4781842-200.png",
        },
        {
          name: "Planks",
          description: "Hold a plank position for 3 sets of 30 seconds each.",
          image: "https://static.thenounproject.com/png/1102782-200.png",
        },
        // Add more exercises for Thursday if needed
      ],
    },
  },
  {
    day: "Friday",
    exercises: {
      "3 Days": [
        {
          name: "Cardio",
          description: "Run for 30 minutes or perform another cardio activity.",
          image: "https://static.thenounproject.com/png/1544729-200.png",
        },
        {
          name: "Leg Press",
          description: "Do 3 sets of 15 leg presses.",
          image: "https://static.thenounproject.com/png/659118-200.png",
        },
        // Add more exercises for Friday if needed
      ],
      "4 Days": [
        {
          name: "Cardio",
          description: "Run for 30 minutes or perform another cardio activity.",
          image: "https://static.thenounproject.com/png/1544729-200.png",
        },
        {
          name: "Leg Press",
          description: "Do 3 sets of 15 leg presses.",
          image: "https://static.thenounproject.com/png/659118-200.png",
        },
        {
          name: "Dumbbell Rows",
          description: "Perform 3 sets of 12 dumbbell rows.",
          image: "https://cdn-icons-png.flaticon.com/512/3043/3043179.png",
        },
        // Add more exercises for Friday if needed
      ],
      "5 Days": [
        {
          name: "Cardio",
          description: "Run for 30 minutes or perform another cardio activity.",
          image: "https://static.thenounproject.com/png/1544729-200.png",
        },
        {
          name: "Leg Press",
          description: "Do 3 sets of 15 leg presses.",
          image: "https://static.thenounproject.com/png/659118-200.png",
        },
        {
          name: "Pull-ups",
          description: "Complete 4 sets of 10 pull-ups.",
          image:
            "https://cdn.iconscout.com/icon/free/png-256/free-pull-up-exercise-gym-workout-fitness-helth-46422.png",
        },
        {
          name: "Dumbbell Rows",
          description: "Perform 3 sets of 12 dumbbell rows.",
          image: "https://cdn-icons-png.flaticon.com/512/3043/3043179.png",
        },
        // Add more exercises for Friday if needed
      ],
    },
  },
  {
    day: "Saturday",
    exercises: {
      "3 Days": [
        {
          name: "Shoulder Press",
          description: "Perform 3 sets of 12 shoulder presses with a barbell.",
          image:
            "https://media.istockphoto.com/id/1407655178/vector/man-doing-dumbbell-overhead-shoulder-press-top-body-workout-upper-body-exercises-flat-vector.jpg?s=612x612&w=0&k=20&c=L1OwC_qBlC9XgUVF4pnLMSbfktOTd_lnKMo5kmK64G4=",
        },
        {
          name: "Tricep Dips",
          description: "Complete 3 sets of 15 tricep dips.",
          image:
            "https://media.istockphoto.com/id/944701580/vector/man-doing-triceps-dip-exercise-on-bench.jpg?s=612x612&w=0&k=20&c=pHdMcvfVZiYStrgETor2106VIB7Uwkg5yRXT72IHmMk=",
        },
        // Add more exercises for Saturday if needed
      ],
      "4 Days": [
        {
          name: "Shoulder Press",
          description: "Perform 3 sets of 12 shoulder presses with a barbell.",
          image:
            "https://media.istockphoto.com/id/1407655178/vector/man-doing-dumbbell-overhead-shoulder-press-top-body-workout-upper-body-exercises-flat-vector.jpg?s=612x612&w=0&k=20&c=L1OwC_qBlC9XgUVF4pnLMSbfktOTd_lnKMo5kmK64G4=",
        },
        {
          name: "Tricep Dips",
          description: "Complete 3 sets of 15 tricep dips.",
          image:
            "https://media.istockphoto.com/id/944701580/vector/man-doing-triceps-dip-exercise-on-bench.jpg?s=612x612&w=0&k=20&c=pHdMcvfVZiYStrgETor2106VIB7Uwkg5yRXT72IHmMk=",
        },
        {
          name: "Cardio",
          description: "Run for 30 minutes or perform another cardio activity.",
          image: "https://static.thenounproject.com/png/1544729-200.png",
        },
        // Add more exercises for Saturday if needed
      ],
      "5 Days": [
        {
          name: "Shoulder Press",
          description: "Perform 3 sets of 12 shoulder presses with a barbell.",
          image:
            "https://media.istockphoto.com/id/1407655178/vector/man-doing-dumbbell-overhead-shoulder-press-top-body-workout-upper-body-exercises-flat-vector.jpg?s=612x612&w=0&k=20&c=L1OwC_qBlC9XgUVF4pnLMSbfktOTd_lnKMo5kmK64G4=",
        },
        {
          name: "Tricep Dips",
          description: "Complete 3 sets of 15 tricep dips.",
          image:
            "https://media.istockphoto.com/id/944701580/vector/man-doing-triceps-dip-exercise-on-bench.jpg?s=612x612&w=0&k=20&c=pHdMcvfVZiYStrgETor2106VIB7Uwkg5yRXT72IHmMk=",
        },
        {
          name: "Cardio",
          description: "Run for 30 minutes or perform another cardio activity.",
          image: "https://static.thenounproject.com/png/1544729-200.png",
        },
        {
          name: "Leg Press",
          description: "Do 3 sets of 15 leg presses.",
          image: "https://static.thenounproject.com/png/659118-200.png",
        },
        // Add more exercises for Saturday if needed
      ],
    },
  },
  {
    day: "Sunday",
    exercises: {
      "3 Days": [
        {
          name: "Yoga",
          description: "Practice yoga for flexibility and relaxation.",
          image: "https://cdn-icons-png.flaticon.com/512/2789/2789915.png",
        },
        {
          name: "Chest Flyes",
          description: "Do 3 sets of 12 chest flyes with dumbbells.",
          image:
            "https://media.istockphoto.com/id/1407964138/vector/woman-doing-chest-fly-glute-bridge-exercise-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=eNWeqMkFyD4mj9F1noE0Iu0tO7H2Szl6Jh__L3cdRYY=",
        },
        // Add more exercises for Sunday if needed
      ],
      "4 Days": [
        {
          name: "Yoga",
          description: "Practice yoga for flexibility and relaxation.",
          image: "https://cdn-icons-png.flaticon.com/512/2789/2789915.png",
        },
        {
          name: "Chest Flyes",
          description: "Do 3 sets of 12 chest flyes with dumbbells.",
          image:
            "https://media.istockphoto.com/id/1407964138/vector/woman-doing-chest-fly-glute-bridge-exercise-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=eNWeqMkFyD4mj9F1noE0Iu0tO7H2Szl6Jh__L3cdRYY=",
        },
        {
          name: "Tricep Dips",
          description: "Complete 3 sets of 15 tricep dips.",
          image:
            "https://media.istockphoto.com/id/944701580/vector/man-doing-triceps-dip-exercise-on-bench.jpg?s=612x612&w=0&k=20&c=pHdMcvfVZiYStrgETor2106VIB7Uwkg5yRXT72IHmMk=",
        },
        // Add more exercises for Sunday if needed
      ],
      "5 Days": [
        {
          name: "Yoga",
          description: "Practice yoga for flexibility and relaxation.",
          image: "https://cdn-icons-png.flaticon.com/512/2789/2789915.png",
        },
        {
          name: "Chest Flyes",
          description: "Do 3 sets of 12 chest flyes with dumbbells.",
          image:
            "https://media.istockphoto.com/id/1407964138/vector/woman-doing-chest-fly-glute-bridge-exercise-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=eNWeqMkFyD4mj9F1noE0Iu0tO7H2Szl6Jh__L3cdRYY=",
        },
        {
          name: "Shoulder Press",
          description: "Perform 3 sets of 12 shoulder presses with a barbell.",
          image:
            "https://media.istockphoto.com/id/1407655178/vector/man-doing-dumbbell-overhead-shoulder-press-top-body-workout-upper-body-exercises-flat-vector.jpg?s=612x612&w=0&k=20&c=L1OwC_qBlC9XgUVF4pnLMSbfktOTd_lnKMo5kmK64G4=",
        },
        {
          name: "Tricep Dips",
          description: "Complete 3 sets of 15 tricep dips.",
          image:
            "https://media.istockphoto.com/id/944701580/vector/man-doing-triceps-dip-exercise-on-bench.jpg?s=612x612&w=0&k=20&c=pHdMcvfVZiYStrgETor2106VIB7Uwkg5yRXT72IHmMk=",
        },
        // Add more exercises for Sunday if needed
      ],
    },
  },
];
