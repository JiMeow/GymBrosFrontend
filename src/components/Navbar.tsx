import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const rounter = useRouter();
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOpacity(
        100 - window.scrollY / 10 > 50 ? 100 - window.scrollY / 10 : 50,
      );
    });
  }, [opacity]);

  return (
    <>
      <div
        className={`sticky left-0 top-0 z-50 m-auto flex w-full justify-between p-4 px-6 `}
        style={{
          backgroundColor: `rgba(148, 145, 145,${opacity / 100})`,
          transition: "all 0.5s ease",
        }}
      >
        <div className=" my-auto text-center text-2xl font-bold italic text-white sm:text-3xl">
          GymsBro
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Button
            className="rounded-full bg-black px-2 py-2 text-white hover:bg-white hover:text-black"
            startContent={<IoMdFitness />}
            onClick= {() => {
              void rounter.push("/login");
            }}
          >
            Log In
          </Button>
          <Button
            className="rounded-full bg-black px-2 py-2 text-white hover:bg-white hover:text-black"
            startContent={<IoPersonCircleOutline />}
            onClick= {() => {
              void rounter.push("/signup");
            }}
          >
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
