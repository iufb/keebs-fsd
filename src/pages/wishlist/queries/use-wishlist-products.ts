import { useQuery } from "@tanstack/react-query";
import { IWishlistItem } from "src/entities/wishlist";
import { getWishlistProducts } from "src/shared/api/wishlist";
import { getErrorMessage } from "src/shared/lib/utils";

export const useWishlistProducts = () => {
  const {
    data: wishlistProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["wishlistProducts"],
    queryFn: async () => {
      const { data } = await getWishlistProducts<IWishlistItem[]>();
      return data;
    },
  });
  return { wishlistProducts, isLoading, errorMessage: getErrorMessage(error) };
};
