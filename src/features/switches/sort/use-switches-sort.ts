import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ISwitches, useSwitchesStore } from "src/entities/switches";
import { getSwitches } from "src/shared/api/switches";
import { filterType } from "src/shared/lib";

export const useSwitchesSort = () => {
  const { filters, updateSwitches, sortType } = useSwitchesStore((state) => ({
    filters: state.filters,
    sortType: state.sortType,
    updateSwitches: state.updateSwitches,
  }));
  const filterMutation = useMutation({
    mutationKey: ["filter"],
    mutationFn: () =>
      getSwitches<ISwitches[], filterType[]>({ filters, sort: sortType }),
    onSuccess({ data }: AxiosResponse<ISwitches[]>) {
      updateSwitches(data);
    },
  });
  return { sort: filterMutation.mutate };
};
