import { useQuery } from "@tanstack/react-query";
import { IKeyboard, useKeyboardStore } from "src/entities/keyboard";
import { getKeyboards } from "src/shared/api/keyboard";
import { type filterType } from "src/shared/lib";
import { getErrorMessage } from "src/shared/lib/utils";

export const useKeyboardsCatalog = () => {
  const { updateKeyboards, sort, filters } = useKeyboardStore((state) => ({
    updateKeyboards: state.updateKeyboards,
    sort: state.sortType,
    filters: state.filters,
  }));
  const { isLoading, error } = useQuery({
    queryKey: ["keyboardsCatalog"],
    queryFn: async () => {
      const { data } = await getKeyboards<IKeyboard[], filterType[]>({
        filters,
        sort,
      });
      updateKeyboards(data);
      return data;
    },
  });
  return { isLoading, error: getErrorMessage(error) };
};
