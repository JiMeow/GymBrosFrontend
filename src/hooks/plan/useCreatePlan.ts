import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/pages/_app";
import { createPlan } from "@/server/service";

type Params = {
  dayofweek: string;
  exercise?: string[] | undefined;
  typeofplan?: string | undefined;
  userid: string;
  OnSuccess?: () => void;
};

export const useCreatePlan = (params: Params) => {
  return useMutation({
    mutationKey: ["useCreatePlan"],
    mutationFn: () =>
      createPlan({
        plan: {
          dayofweek: params.dayofweek,
          exercise: params.exercise,
          typeofplan: params.typeofplan,
          userid: params.userid,
        },
      }),
    onSuccess: () => {
      params.OnSuccess && params.OnSuccess();
      void queryClient.invalidateQueries({
        queryKey: ["usePlanByUserId"],
      });
    },
  });
};
