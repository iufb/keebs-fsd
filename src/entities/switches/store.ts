import { filterType } from "src/shared/lib";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ISwitches } from "./model";
interface KeycapStoreState {
  switches: ISwitches[];
  filters: filterType[];
  sortType?: "asc" | "desc";
  setSortType: (sort: "asc" | "desc") => void;
  updateSwitches: (switches: ISwitches[]) => void;
  toggleFilter: (filterSlug: string, valueSlug: string) => void;
  isIn: (filterSlug: string, valueSlug: string) => boolean;
}

export const useSwitchesStore = create<KeycapStoreState>()(
  devtools((set, get) => ({
    switches: [],
    filters: [],
    setSortType: (sortType) => {
      set({ sortType });
    },
    updateSwitches: (switches) => {
      set({ switches });
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
