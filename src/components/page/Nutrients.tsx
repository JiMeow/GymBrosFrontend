import { useIsVisible } from "@/hooks/useIsVisible";
import React, { useRef } from "react";
import { Typography, styled } from "@mui/material";

const Nutrients = () => {
  const ref = useRef(null);
  const NutrientsVisible = useIsVisible(ref);

  return (
    <div
      id="nutrients"
      ref={ref}
      className={`relative z-10 flex justify-center  p-8 transition-[opacity] duration-[3s] sm:min-h-[101vh]
      ${NutrientsVisible ? " opacity-100" : " opacity-0"}`}
    >
      <div className="flex h-full w-full flex-col items-center gap-4 text-white sm:w-[90%] sm:gap-8 md:w-[80%] lg:w-[75%]">
        <StyledTypography className="mt-2 text-center text-lg font-bold sm:text-5xl">
          Nutrients Calculator
        </StyledTypography>
        <div className="flex w-full flex-col items-center gap-4 p-4 text-center text-black sm:flex-row sm:justify-around">
          <div
            className="h-72 w-72 rounded-xl bg-white transition-[all] duration-1000 hover:bg-gray-400 
            sm:aspect-square sm:h-auto sm:w-auto sm:flex-1"
          >
            History of Nutrients
          </div>
          <div
            className="h-72 w-72 rounded-xl bg-white transition-[all] duration-1000 hover:bg-gray-400 
            sm:aspect-square sm:h-auto sm:w-auto sm:flex-1"
          >
            Nutrients List
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrients;

const StyledTypography = styled(Typography)(() => ({
  textShadow: "4px 4px 4px rgba(255, 255, 255, 0.25)",
}));
