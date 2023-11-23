import { useQuery } from "@tanstack/react-query";
import { getProfile } from "src/shared/api/auth";

export const useGetAccount = () => {
  return useQuery({
    queryKey: ["account"],
    queryFn: async () => {
      const { data } = await getProfile();
      return data;
    },
  });
};
