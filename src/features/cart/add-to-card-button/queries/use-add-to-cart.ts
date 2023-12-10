import { useMutation } from "@tanstack/react-query";
import { ICartItem } from "src/entities/cart/model";
import { useCartStore } from "src/entities/cart/store";
import { addToCart } from "src/shared/api/cart";
import { queryClient } from "src/shared/lib";

export const useAddToCart = (item: ICartItem) => {
  const { products, showCart } = useCartStore((state) => ({
    products: state.products,
    showCart: state.toggle,
  }));
  const { mutate } = useMutation({
    mutationKey: ["add-to-cart"],
    mutationFn: () => addToCart([...products, item]),
    onSuccess: () => {
      showCart(true);
      queryClient.invalidateQueries({ queryKey: ["getCart"] });
      queryClient.invalidateQueries({ queryKey: ["cartCount"] });
    },
  });
  return { addToCart: mutate };
};
