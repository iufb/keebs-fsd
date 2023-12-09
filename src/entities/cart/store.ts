import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ICartItem, IGetCartItem } from "./model";
interface CartStoreState {
  products: ICartItem[];
  totalPrice: number;
  calculateTotalPrice: (products?: IGetCartItem[]) => number;
  isShow: boolean;
  toggle: (show: boolean) => void;
  addItem: (item: ICartItem) => void;
  removeItem: (id: string) => void;
}
export const useCartStore = create<CartStoreState>()(
  devtools((set, get) => ({
    products: [],
    totalPrice: 0,
    isShow: false,
    toggle: (show) => set({ isShow: show }),
    calculateTotalPrice: (products) => {
      if (!products) return 0;
      return products.reduce(
        (acc, value) => acc + value.price * value.quantity,
        0
      );
    },
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
