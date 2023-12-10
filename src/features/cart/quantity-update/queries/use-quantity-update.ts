import { useMutation } from "@tanstack/react-query";
import { updateQuantity } from "src/shared/api/cart";
import { ActionType, queryClient } from "src/shared/lib";

export const useUpdateQuantity = (id: string) => {
  const { mutate, isPending, error } = useMutation({
    mutationKey: [`quantity ${id}`],
    mutationFn: (action: ActionType) => updateQuantity(id, action),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["getCart"] });
      await queryClient.invalidateQueries({ queryKey: ["cartCount"] });
    },
  });
  return {
    updateQuantity: mutate,
    isLoading: isPending,
    error,
  };
};
