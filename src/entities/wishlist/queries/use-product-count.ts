import { useQuery } from "@tanstack/react-query";
import { getProductsCount } from "src/shared/api/wishlist";

export const useProductCount = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["wishlistCount"],
    queryFn: async () => {
      const { data } = await getProductsCount();
      return data;
    },
  });
  return { productsCount: data, error, isLoading };
};
