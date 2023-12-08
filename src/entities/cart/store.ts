import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ICartItem } from "./model";
interface CartStoreState {
  products: ICartItem[];
  isShow: boolean;
  toggle: (show: boolean) => void;
  addItem: (item: ICartItem) => void;
  removeItem: (id: string) => void;
}
export const useCartStore = create<CartStoreState>()(
  devtools((set, get) => ({
    products: [],
    isShow: false,
    toggle: (show) => set({ isShow: show }),
    addItem: (item) => {
      const addedProductIndex = get().products.findIndex(
        (product) => product.productId == item.productId
      );
      if (addedProductIndex == -1) {
        set({
          products: [...get().products, item],
        });
        return;
      }
    },
    removeItem: (id) => {
      set({ products: get().products.filter((p) => p.productId !== id) });
    },
  }))
);
