import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  image?: string;
};

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <>
      <div
        className="flex h-24 w-80 flex-none flex-row items-center gap-2
      rounded-md border-2 border-white bg-white p-1 text-black brightness-90 sm:h-32 sm:gap-4 sm:border-4 sm:p-2"
      >
        <Image
          src={
            image ??
            "https://media.istockphoto.com/id/1335247217/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%81%E0%B9%8D%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B9%82%E0%B8%AB%E0%B8%A5%E0%B8%94%E0%B9%84%E0%B8%AD%E0%B8%84%E0%B8%AD%E0%B8%99-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C.jpg?s=2048x2048&w=is&k=20&c=ODEMYx5wQ2zHXsfSRF3E6wtCVvo-Od4-VAqw-6zSaYE="
          }
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
