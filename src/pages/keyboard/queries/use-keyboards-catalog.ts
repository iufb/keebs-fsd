import { useQuery } from "@tanstack/react-query";
import { filterType, IKeyboard, useKeyboardStore } from "src/entities/keyboard";
import { getKeyboards } from "src/shared/api/keyboard";

export const useKeyboardsCatalog = () => {
  const { updateKeyboards, sort, filters } = useKeyboardStore((state) => ({
    updateKeyboards: state.updateKeyboards,
    sort: state.sortType,
    filters: state.filters,
  }));
  const { isLoading } = useQuery({
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
  return { isLoading };
};
