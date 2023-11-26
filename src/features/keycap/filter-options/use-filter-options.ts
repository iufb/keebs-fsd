import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { IKeycap, useKeycapStore } from "src/entities/keycap";
import { getKeycaps } from "src/shared/api/keycap";
import { filterType } from "src/shared/lib";

export const useFilterOptions = () => {
  const { filters, updateKeycaps, sort } = useKeycapStore((state) => ({
    filters: state.filters,
    sort: state.sortType,
    updateKeycaps: state.updateKeycaps,
  }));
  const filterMutation = useMutation({
    mutationKey: ["filter"],
    mutationFn: () => getKeycaps<IKeycap[], filterType[]>({ filters, sort }),
    onSuccess({ data }: AxiosResponse<IKeycap[]>) {
      updateKeycaps(data);
    },
  });
  return { update: filterMutation.mutate };
};
