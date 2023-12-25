import { useQuery } from "@tanstack/react-query";
import { getProfile } from "src/shared/api/auth";
import { getErrorMessage } from "src/shared/lib/utils";

export const useGetAccount = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["account"],
    queryFn: async () => {
      const { data } = await getProfile();
      return data;
    },
  });
  return { accountDetails: data, isLoading, error: getErrorMessage(error) }
};
