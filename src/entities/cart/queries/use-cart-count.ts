import { useQuery } from "@tanstack/react-query";
import { getTotalCount } from "src/shared/api/cart";

export const useCartCount = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["cartCount"],
    queryFn: async () => {
      const { data } = await getTotalCount();
      return data;
    },
  });
  return { productsCount: data, error, isLoading };
};
