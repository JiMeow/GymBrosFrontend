import React from "react";
import UserCard from "../UserCard";

type PlanCardProps = {
  className?: string;
};

const PlanCard: React.FC<PlanCardProps> = ({ className }) => {
  return (
    <UserCard className={className}>
      <div className=" bg-yellow-500"></div>
    </UserCard>
  );
};

export default PlanCard;
