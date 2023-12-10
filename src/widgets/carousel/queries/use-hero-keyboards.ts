import { useQuery } from "@tanstack/react-query";
import { IHeroKeyboard } from "src/entities/keyboard";
import { getHeroKeyboards } from "src/shared/api/keyboard";
import { getErrorMessage } from "src/shared/lib/utils";

export const useHeroKeyboards = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["heroCarousel"],
    queryFn: async () => {
      const { data } = await getHeroKeyboards<IHeroKeyboard[]>();
      return data;
    },
  });
  return { items: data, isLoading, error: getErrorMessage(error) };
};
