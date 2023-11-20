import { useIsVisible } from "@/hooks/useIsVisible";
import React, { useRef } from "react";
import { Typography, styled } from "@mui/material";

const WorkoutExample = () => {
  const ref = useRef(null);
  const WorkoutVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`relative z-10 flex h-full flex-col items-center justify-center p-8 px-12 text-white duration-[2s] sm:min-h-[101vh]
      ${WorkoutVisible ? "scale-100" : "scale-50"}`}
    >
      {/* <Image
      width={1920}
      height={1080}
      src="/images/LandingpageBackground.png"
      alt="GymBackground"
      className="absolute left-0 top-0 z-[-1]  h-full w-full object-cover saturate-50 sm:block"
    /> */}
      <StyledTypography className="text-center text-lg font-bold sm:my-4 sm:text-5xl">
        Our Workout Plans
      </StyledTypography>
    </div>
  );
};

export default WorkoutExample;

const StyledTypography = styled(Typography)(() => ({
  textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
}));
