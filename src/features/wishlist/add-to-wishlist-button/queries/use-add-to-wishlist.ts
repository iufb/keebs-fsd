import { useMutation, useQuery } from "@tanstack/react-query";
import { addProductToWishlist, checkIsIn } from "src/shared/api/wishlist";
import { queryClient, type ProductType } from "src/shared/lib";

export const useAddToWishlist = (
  productType: ProductType,
  productId: string,
) => {
  const { mutate } = useMutation({
    mutationKey: ["add", "wishlist", productId],
    mutationFn: () => addProductToWishlist({ productType, productId }),
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["isIn", productId],
      });
      await queryClient.invalidateQueries({
        queryKey: ["wishlistCount"],
      });
    },
  });
  const { data: isIn } = useQuery({
    queryKey: ["isIn", productId],
    queryFn: async () => {
      const { data } = await checkIsIn(productId);
      return data;
    },
  });
  return { add: mutate, isIn };
};
