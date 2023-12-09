import { useQuery } from "@tanstack/react-query";
import { getCart } from "src/shared/api/cart";
import { getErrorMessage } from "src/shared/lib/utils";
import { IGetCartItem } from "../model";
import { useCartStore } from "../store";

export const useGetCart = () => {
  const { calculateTotalPrice } = useCartStore((state) => ({
    calculateTotalPrice: state.calculateTotalPrice,
  }));
  const { data, isLoading, error } = useQuery({
    queryKey: ["getCart"],
    queryFn: async () => {
      const { data } = await getCart<IGetCartItem[]>();
      return data;
    },
  });
  const total = calculateTotalPrice(data) / 2;
  return {
    cart: data,
    isLoading,
    error: getErrorMessage(error),
    total,
  };
};
