import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { filterType, IKeyboard } from "./model";
interface KeyboardStoreState {
  keyboards: IKeyboard[];
  filters: filterType[];
  updateKeyboards: (keyboards: IKeyboard[]) => void;
  toggleFilter: (filterSlug: string, valueSlug: string) => void;
  isIn: (filterSlug: string, valueSlug: string) => boolean;
}

export const useKeyboardStore = create<KeyboardStoreState>()(
  devtools((set, get) => ({
    keyboards: [],
    filters: [],
    updateKeyboards: (keyboards) => {
      set({ keyboards });
    },
    toggleFilter: (filterSlug, valueSlug) => {
      const isIn = get().isIn(filterSlug, valueSlug);
      if (!isIn) {
        set({ filters: [...get().filters, { filterSlug, value: valueSlug }] });
        return;
      }
      set({ filters: get().filters.filter((f) => f.value !== valueSlug) });
    },
    isIn: (filterSlug, valueSlug) => {
      const arr = get().filters.filter(
        (filter) => filter.filterSlug == filterSlug,
      );
      if (arr.length == 0) {
        return false;
      }
      return arr.findIndex((filter) => filter.value == valueSlug) != -1;
    },
  })),
);
