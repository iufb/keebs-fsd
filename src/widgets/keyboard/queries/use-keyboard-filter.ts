import { useQuery } from "@tanstack/react-query";
import { getKeyboardFilters } from "src/shared/api/keyboard";
import { IFilter } from "src/shared/lib";

export const useKeyboardFilter = () => {
  return useQuery({
    queryKey: ["keyboard filters"],
    queryFn: async () => {
      const { data } = await getKeyboardFilters<IFilter[]>();
      return data;
    },
  });
};
