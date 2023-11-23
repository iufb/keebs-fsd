import { useQuery } from "@tanstack/react-query";
import { IKeyboard } from "src/entities/keyboard";
import { getAllKeyboards } from "src/shared/api/keyboard";

export const useKeyboardsCatalog = () => {
  const { data } = useQuery({
    queryKey: ["keyboardsCatalog"],
    queryFn: async () => {
      const { data } = await getAllKeyboards<IKeyboard[]>();
      return data;
    },
  });
  return { keyboards: data };
};
