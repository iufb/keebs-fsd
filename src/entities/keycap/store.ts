import { filterType } from "src/shared/lib";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IKeycap } from "./model";
interface KeycapStoreState {
  keycaps: IKeycap[];
  filters: filterType[];
  sortType?: "asc" | "desc";
  setSortType: (sort: "asc" | "desc") => void;
  updateKeycaps: (keyboards: IKeycap[]) => void;
  toggleFilter: (filterSlug: string, valueSlug: string) => void;
  isIn: (filterSlug: string, valueSlug: string) => boolean;
}

export const useKeycapStore = create<KeycapStoreState>()(
  devtools((set, get) => ({
    keycaps: [],
    filters: [],
    setSortType: (sortType) => {
      set({ sortType });
    },
    updateKeycaps: (keyboards) => {
      set({ keycaps: keyboards });
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
