import { useExerciseById } from "@/hooks/exercise/useExerciseById";
import Image from "next/image";
import React from "react";

type Props = {
  id: string;
};

const MockTableCell: React.FC<Props> = ({ id }) => {
  const { data: exercise, error, isLoading } = useExerciseById({ id });

  return (
    <>
      <div className="flex flex-1 gap-4 overflow-x-auto">
        <Image
          src={exercise?.image ?? ""}
          alt={exercise?.name ?? ""}
          width={100}
          height={100}
        />
        <div className="flex flex-col">
          <div className="text-sm sm:text-base">{exercise?.name ?? ""}</div>
          <div className="text-xs sm:text-sm">
            {exercise?.description ?? ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default MockTableCell;
