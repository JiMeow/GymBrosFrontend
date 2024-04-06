import React from "react";
import { PaperPlaneRight } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const LandingPage = () => {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 px-12 pb-[20vh] min-h-[101vh]">
      <Image
        width={3840}
        height={2160}
        src="/images/LandingpageBackground2.png"
        priority
        alt="GymBackground"
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover opacity-50 saturate-50"
      />
      <div className="al:text-4xl text-center text-lg font-[700] text-white sm:my-4 sm:text-6xl">
        Welcome to GymsBro
      </div>
      <div className="mt-4 text-base font-[400] text-white sm:my-4 sm:text-3xl">
        Start Your Fitness Journey with Us!
      </div>
      <Button
        endContent={<PaperPlaneRight />}
        className="font-400 mt-5 w-fit bg-black p-6 text-white hover:bg-[#283934] sm:my-4 sm:text-2xl"
        onClick={() => {
          document
            ?.getElementById("workout")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Getting Started
      </Button>
    </div>
  );
};

export default LandingPage;
