import { useQuery } from "@tanstack/react-query";
import { getPlanByUserId } from "@/server/service";

type Params = {
  id: string;
};

export const usePlanByUserId = (params: Params) => {
  return useQuery({
    queryKey: ["usePlanByUserId", params.id],
    queryFn: () => getPlanByUserId({ user_id: params.id }),
    enabled: !!params.id,
  });
};
