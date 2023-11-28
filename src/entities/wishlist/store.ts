import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IWishlistItem } from "./model";

interface WishlistStoreState {
  products: IWishlistItem[];
  productsCount: number;
  updateCount: () => void;
  isIn: (id: string) => boolean;
  addToList: (product: IWishlistItem) => void;
  removeFromList: (id: string) => void;
  toggleStatus: (product: IWishlistItem) => void;
}
export const useWishlistStore = create<WishlistStoreState>()(
  devtools((set, get) => ({
    products: [],
    productsCount: 0,
    isIn: (id) => {
      return get().products.findIndex((item) => item._id == id) !== -1;
    },
    updateCount: () => {
      const count = get().products.length;
      set({ productsCount: count });
    },

    addToList: (product) => {
      set({
        products: [...get().products, product],
      });
      get().updateCount();
    },

    removeFromList: (id: string) => {
      set({
        products: get().products.filter((i) => i._id !== id),
      });

      get().updateCount();
    },
    toggleStatus: (product) => {
      const isIn = get().isIn(product._id);
      if (!isIn) {
        get().addToList(product);
        return;
      }
      get().removeFromList(product._id);
    },
  })),
);
