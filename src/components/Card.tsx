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
      <div className="flex aspect-square w-20 flex-col items-center justify-center rounded-md bg-white p-4 text-black">
        <Typography className="text-sm">{title}</Typography>
        <Typography className="text-sm">{description}</Typography>
        {/* <img src={image} alt="Card" /> */}
      </div>
    </>
  );
};

export default Card;
