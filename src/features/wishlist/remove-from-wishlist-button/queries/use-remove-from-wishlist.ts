import { useMutation } from "@tanstack/react-query";
import { removeProductFromWishlist } from "src/shared/api/wishlist";
import { queryClient } from "src/shared/lib";

export const useRemoveFromWishlist = (id: string) => {
  const { mutate } = useMutation({
    mutationKey: [`remove ${id} from wishlist`],
    mutationFn: () => removeProductFromWishlist(id),
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["wishlistProducts", "wishlistCount"],
      });
    },
  });
  return { remove: mutate };
};
