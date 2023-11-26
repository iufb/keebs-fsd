import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { IKeycap, useKeycapStore } from "src/entities/keycap";
import { getKeycaps } from "src/shared/api/keycap";
import { filterType } from "src/shared/lib";

export const useKeycapSort = () => {
  const { filters, updateKeycaps, sortType } = useKeycapStore((state) => ({
    filters: state.filters,
    sortType: state.sortType,
    updateKeycaps: state.updateKeycaps,
  }));
  const filterMutation = useMutation({
    mutationKey: ["filter"],
    mutationFn: () =>
      getKeycaps<IKeycap[], filterType[]>({ filters, sort: sortType }),
    onSuccess({ data }: AxiosResponse<IKeycap[]>) {
      console.log(data);
      updateKeycaps(data);
    },
  });
  return { sort: filterMutation.mutate };
};
