import { useQuery } from "@tanstack/react-query";
import { getSwitchesFilters } from "src/shared/api/switches";
import { IFilter } from "src/shared/lib";

export const useSwitchesFilter = () => {
  return useQuery({
    queryKey: ["Switches filters"],
    queryFn: async () => {
      const { data } = await getSwitchesFilters<IFilter[]>();
      return data;
    },
  });
};
