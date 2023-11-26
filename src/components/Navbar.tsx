import { Typography } from "@mui/material";
import { IoPersonCircleOutline } from "react-icons/io5";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="left-0 top-0 m-auto flex justify-between bg-white p-0 px-2">
        <Typography className="pl-2 text-center text-lg font-bold sm:my-4 sm:text-3xl">
          GymsBro
        </Typography>
        <div className="flex flex-row items-center justify-center">
          <IoPersonCircleOutline className="w-8" />
          <Typography className="">Login</Typography>
        </div>
      </div>
    </>
  );
};

export default Navbar;
