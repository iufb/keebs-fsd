import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ISwitches } from "src/entities/switches";
import { getSwitchesById } from "src/shared/api/switches";

export const useSwitchesDetails = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const { data } = await getSwitchesById<ISwitches>(id);
      return data;
    },
  });
  let errorMessage;
  if (error instanceof AxiosError) {
    errorMessage = error?.response.data.message;
  }
  return { switchesDetails: data, isLoading, error: errorMessage };
};
