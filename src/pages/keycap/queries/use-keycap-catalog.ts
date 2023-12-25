import { useQuery } from "@tanstack/react-query";
import { IKeycap, useKeycapStore } from "src/entities/keycap";
import { getKeycaps } from "src/shared/api/keycap";
import { filterType } from "src/shared/lib";
import { getErrorMessage } from "src/shared/lib/utils";

export const useKeycapCatalog = () => {
  const { updateKeycaps, sort, filters } = useKeycapStore((state) => ({
    updateKeycaps: state.updateKeycaps,
    sort: state.sortType,
    filters: state.filters,
  }));
  const { isLoading, error } = useQuery({
    queryKey: ["keycapsCatalog"],
    queryFn: async () => {
      const { data } = await getKeycaps<IKeycap[], filterType[]>({
        filters,
        sort,
      });
      updateKeycaps(data);
      return data;
    },
  });
  return { isLoading, error: getErrorMessage(error) };
};
