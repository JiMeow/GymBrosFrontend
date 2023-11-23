import React from "react";
import { Button, Typography, styled } from "@mui/material";
import { PaperPlaneRight } from "@phosphor-icons/react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 px-12 sm:min-h-[101vh]">
      <Image
        width={1920}
        height={1080}
        src="/images/LandingpageBackground.jpg"
        alt="GymBackground"
        className="absolute left-0 top-0 z-[-1]  h-full w-full object-cover saturate-50 sm:block"
      />
      <StyledTypography className="text-center text-lg font-bold sm:my-4 sm:text-5xl">
        Welcome to GymBros
      </StyledTypography>
      <StyledTypography className="mt-4 text-center text-base font-[500] sm:my-4 sm:text-3xl">
        Start Your Fitness Journey with Us!
      </StyledTypography>
      <StyledButton
        variant="contained"
        endIcon={<PaperPlaneRight />}
        className="mt-10 w-fit bg-black text-white"
        onClick={() => {
          document
            ?.getElementById("workout")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        // sx={{ "&:hover": { backgroundColor: "#495E57" } }}
      >
        Getting Started
      </StyledButton>
    </div>
  );
};

export default LandingPage;

const StyledButton = styled(Button)(() => ({
  ":hover": {
    backgroundColor: "#495E57",
  },
  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
}));

const StyledTypography = styled(Typography)(() => ({
  textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
}));
