import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IKeycap } from "src/entities/keycap";
import { getKeycapById } from "src/shared/api/keycap";

export const useKeycapDetails = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const { data } = await getKeycapById<IKeycap>(id);
      return data;
    },
  });
  let errorMessage;
  if (error instanceof AxiosError) {
    errorMessage = error?.response.data.message;
  }
  return { keycapDetails: data, isLoading, error: errorMessage };
};
