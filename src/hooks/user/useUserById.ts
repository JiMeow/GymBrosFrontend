import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/server/service";

type Params = {
  id: string;
};

const useUserById = (params: Params) => {
  return useQuery({
    queryKey: ["useUserById"],
    queryFn: () => getUserById({ id: params.id }),
    enabled: !!params.id,
  });
};

export default useUserById;
