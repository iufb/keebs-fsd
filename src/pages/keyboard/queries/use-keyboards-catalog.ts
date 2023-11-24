import { useQuery } from "@tanstack/react-query";
import { IKeyboard, useKeyboardStore } from "src/entities/keyboard";
import { getAllKeyboards } from "src/shared/api/keyboard";

export const useKeyboardsCatalog = () => {
  const { updateKeyboards } = useKeyboardStore((state) => ({
    updateKeyboards: state.updateKeyboards,
  }));
  useQuery({
    queryKey: ["keyboardsCatalog"],
    queryFn: async () => {
      const { data } = await getAllKeyboards<IKeyboard[]>();
      updateKeyboards(data);
      return data;
    },
  });
};
