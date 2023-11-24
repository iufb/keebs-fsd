import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { filterType, IKeyboard, useKeyboardStore } from "src/entities/keyboard";
import { filterKeyboards } from "src/shared/api/keyboard/keyboard";

export const useFilterOptions = () => {
  const { filters, updateKeyboards, sort } = useKeyboardStore((state) => ({
    filters: state.filters,
    sort: state.sortType,
    updateKeyboards: state.updateKeyboards,
  }));
  const filterMutation = useMutation({
    mutationKey: ["filter"],
    mutationFn: () =>
      filterKeyboards<IKeyboard[], filterType[]>({ filters, sort }),
    onSuccess({ data }: AxiosResponse<IKeyboard[]>) {
      console.log(data);
      updateKeyboards(data);
    },
  });
  return { update: filterMutation.mutate };
};
