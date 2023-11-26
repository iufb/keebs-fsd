import { useQuery } from "@tanstack/react-query";
import { ISwitches, useSwitchesStore } from "src/entities/switches";
import { getSwitches } from "src/shared/api/switches";
import { filterType } from "src/shared/lib";

export const useSwitchesCatalog = () => {
  const { updateSwitches, sort, filters } = useSwitchesStore((state) => ({
    updateSwitches: state.updateSwitches,
    sort: state.sortType,
    filters: state.filters,
  }));
  const { isLoading } = useQuery({
    queryKey: ["SwitchesCatalog"],
    queryFn: async () => {
      const { data } = await getSwitches<ISwitches[], filterType[]>({
        filters,
        sort,
      });
      updateSwitches(data);
      return data;
    },
  });
  return { isLoading };
};
