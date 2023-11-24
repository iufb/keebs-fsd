import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { filterType, IKeyboard, useKeyboardStore } from "src/entities/keyboard";
import { filterKeyboards } from "src/shared/api/keyboard/keyboard";

export const useFilterOptions = () => {
  const { filters, updateKeyboards } = useKeyboardStore((state) => ({
    filters: state.filters,
    updateKeyboards: state.updateKeyboards,
  }));
  const filterMutation = useMutation({
    mutationKey: ["filter"],
    mutationFn: () => filterKeyboards<IKeyboard[], filterType[]>(filters),
    onSuccess({ data }: AxiosResponse<IKeyboard[]>) {
      console.log(data);
      updateKeyboards(data);
    },
  });
  return { update: filterMutation.mutate };
};
