import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { filterType, IKeyboard, useKeyboardStore } from "src/entities/keyboard";
import { filterKeyboards } from "src/shared/api/keyboard/keyboard";

export const useKeyboardSort = () => {
  const { filters, updateKeyboards, sortType } = useKeyboardStore((state) => ({
    filters: state.filters,
    sortType: state.sortType,
    updateKeyboards: state.updateKeyboards,
  }));
  const filterMutation = useMutation({
    mutationKey: ["filter"],
    mutationFn: () =>
      filterKeyboards<IKeyboard[], filterType[]>({ filters, sort: sortType }),
    onSuccess({ data }: AxiosResponse<IKeyboard[]>) {
      console.log(data);
      updateKeyboards(data);
    },
  });
  return { sort: filterMutation.mutate };
};
