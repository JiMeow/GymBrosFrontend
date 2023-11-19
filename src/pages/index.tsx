import { Button, Typography } from "@mui/material";
import { PaperPlaneRight } from "@phosphor-icons/react";
export default function Home() {
  return (
    <>
      <div className="h-full min-h-[100vh] bg-yellow-400 p-8 px-12">
        <div className="flex h-full flex-col items-center justify-center sm:min-h-[100vh] ">
          <Typography className="text-center text-lg font-bold sm:my-4 sm:text-5xl">
            Welcome to GymBros
          </Typography>
          <Typography className="mt-4 text-center text-lg font-[500] sm:my-4 sm:text-3xl">
            Start Your Fitness Journey with Us!
          </Typography>
          <Typography className="mt-4 indent-6 text-base sm:my-4 sm:w-[80%] sm:max-w-5xl sm:text-center sm:indent-0 sm:text-lg">
            Discover tailor-made workout plans, expert guidance, and connect
            with a supportive community committed to a healthier lifestyle.
            Whether you{"'"}re a seasoned pro or a beginner, GymBros is your
            ultimate fitness companion. Ready to transform? Let{"'"}s take the
            first step together.
          </Typography>
          <Button
            variant="contained"
            endIcon={<PaperPlaneRight />}
            className="mt-10 w-fit bg-black text-white "
          >
            Getting Started
          </Button>
        </div>
      </div>
    </>
  );
}
