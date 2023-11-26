import { useQuery } from "@tanstack/react-query";
import { getKeycapFilters } from "src/shared/api/keycap";
import { IFilter } from "src/shared/lib";

export const useKeycapFilter = () => {
  return useQuery({
    queryKey: ["keycap filters"],
    queryFn: async () => {
      const { data } = await getKeycapFilters<IFilter[]>();
      return data;
    },
  });
};
