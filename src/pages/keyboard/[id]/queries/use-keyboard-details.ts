import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IKeyboard } from "src/entities/keyboard";
import { getKeyboardById } from "src/shared/api/keyboard";

export const useKeyboardDetails = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const { data } = await getKeyboardById<IKeyboard>(id);
      return data;
    },
  });
  let errorMessage;
  if (error instanceof AxiosError) {
    errorMessage = error?.response.data.message;
  }
  return { keyboardDetails: data, isLoading, error: errorMessage };
};
