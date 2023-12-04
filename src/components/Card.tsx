import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <>
      <div
        className="flex h-24 w-80 flex-none flex-row items-center gap-2
      rounded-md border-2 border-white bg-white p-1 text-black brightness-90 sm:h-32 sm:gap-4 sm:border-4 sm:p-2"
      >
        <Image
          src={image}
          width={1000}
          height={1000}
          alt="Card"
          className="h-full w-20 rounded-md bg-white object-contain object-center p-1 sm:w-24"
        />
        <div className="flex w-48 flex-col items-center justify-center gap-1 sm:gap-2">
          <div className="text-xs font-semibold sm:text-sm">{title}</div>
          <div className="text-[10px] sm:text-xs">{description}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
