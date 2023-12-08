import { useQuery } from "@tanstack/react-query";
import { getCart } from "src/shared/api/cart";
import { getErrorMessage } from "src/shared/lib/utils";
import { IGetCartItem } from "../model";

export const useGetCart = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getCart"],
    queryFn: async () => {
      const { data } = await getCart<IGetCartItem[]>();
      return data;
    },
  });

  return { cart: data, isLoading, error: getErrorMessage(error) };
};
