import { useExerciseById } from "@/hooks/exercise/useExerciseById";
import React from "react";
import Card from "./Card";

type Props = {
  id: string;
};

const MockTableCell: React.FC<Props> = ({ id }) => {
  const { data: exercise } = useExerciseById({ id });
  console.log(id);
  return (
    <>
      <Card
        title={exercise?.name ?? ""}
        description={exercise?.description ?? ""}
        image={exercise?.image ?? ""}
      />
    </>
  );
};

export default MockTableCell;
