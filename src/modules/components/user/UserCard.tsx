import React from "react";
import { twMerge } from "tailwind-merge";

type UserCardProps = {
  children?: React.ReactNode;
  className?: string;
};

const UserCard: React.FC<UserCardProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge("card w-full bg-base-100 shadow-xl", className ?? "")}
    >
      {children}
    </div>
  );
};

export default UserCard;
