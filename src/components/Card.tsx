import { Typography } from "@mui/material";
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
        className="flex aspect-square h-16 flex-col items-center justify-center rounded-md border-2 border-white bg-gray-300 p-1 text-black 
      sm:h-auto sm:w-20 sm:border-4 sm:p-4"
      >
        <Typography className="text-sm">{title}</Typography>
        <Typography className="text-sm">{description}</Typography>
        {/* <img src={image} alt="Card" /> */}
      </div>
    </>
  );
};

export default Card;
