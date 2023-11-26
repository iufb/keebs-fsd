import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ISwitches, useSwitchesStore } from "src/entities/switches";
import { getSwitches } from "src/shared/api/switches";
import { filterType } from "src/shared/lib";

export const useFilterOptions = () => {
  const {
    filters,
    updateSwitches: updateKeycaps,
    sort,
  } = useSwitchesStore((state) => ({
    filters: state.filters,
    sort: state.sortType,
    updateSwitches: state.updateSwitches,
  }));
  const filterMutation = useMutation({
    mutationKey: ["filter"],
    mutationFn: () => getSwitches<ISwitches[], filterType[]>({ filters, sort }),
    onSuccess({ data }: AxiosResponse<ISwitches[]>) {
      updateKeycaps(data);
    },
  });
  return { update: filterMutation.mutate };
};
