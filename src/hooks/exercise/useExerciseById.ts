import { useQuery } from "@tanstack/react-query";
import { getExerciseById } from "@/server/service";

type Params = {
  id: string;
};

export const useExerciseById = (params: Params) => {
  return useQuery({
    queryKey: ["useExerciseById", params.id],
    queryFn: () => getExerciseById({ id: params.id }),
    enabled: !!params.id,
  });
};
