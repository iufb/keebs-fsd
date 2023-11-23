import { useQuery } from "@tanstack/react-query";
import { IFilter } from "src/entities/keyboard/model";
import { getKeyboardFilters } from "src/shared/api/keyboard";

export const useKeyboardFilter = () => {
  return useQuery({
    queryKey: ["keyboard filters"],
    queryFn: async () => {
      const { data } = await getKeyboardFilters<IFilter[]>();
      return data;
    },
  });
};
