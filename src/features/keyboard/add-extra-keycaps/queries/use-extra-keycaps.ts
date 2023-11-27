import { useQuery } from "@tanstack/react-query";
import { IKeycap } from "src/entities/keycap";
import { getKeycapByProfile } from "src/shared/api/keycap/keycap";
import { getErrorMessage } from "src/shared/lib/utils";

export const useExtraKeycaps = (profile: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`${profile} keycaps`],
    queryFn: async () => {
      const { data } =
        await getKeycapByProfile<Pick<IKeycap, "name" | "price" | "_id">[]>(
          profile,
        );
      return data;
    },
  });
  return { keycaps: data, isLoading, error: getErrorMessage(error) };
};
