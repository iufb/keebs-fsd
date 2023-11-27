import { useQuery } from "@tanstack/react-query";
import { ISwitches } from "src/entities/switches";
import { getSwitchesByProfile } from "src/shared/api/switches/switches";
import { getErrorMessage } from "src/shared/lib/utils/get-error-message";

export const useSwitchPick = (profile: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`${profile} switches`],
    queryFn: async () => {
      const { data } =
        await getSwitchesByProfile<Pick<ISwitches, "name" | "_id" | "price">[]>(
          profile,
        );

      return data;
    },
  });

  return { switches: data, isLoading, error: getErrorMessage(error) };
};
