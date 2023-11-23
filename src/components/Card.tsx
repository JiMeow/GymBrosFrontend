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
        className="flex h-24 flex-none flex-row items-center gap-2 rounded-md border-2
      border-white bg-gray-300 p-1 text-black sm:h-32 sm:gap-4 sm:border-4 sm:p-2"
      >
        <Image
          src={image}
          width={1000}
          height={1000}
          alt="Card"
          className="h-full w-20 rounded-md border-2 border-black bg-gray-300 object-cover object-center sm:w-24"
        />
        <div className="flex w-24 flex-col items-center justify-center gap-1 sm:w-44 sm:gap-2">
          <Typography className="text-xs font-semibold sm:text-sm">
            {title}
          </Typography>
          <Typography className="text-[10px] sm:text-sm">
            {description}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Card;
