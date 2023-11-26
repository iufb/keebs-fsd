import { ChangeEvent } from "react";
import { useKeycapStore } from "src/entities/keycap";
import { Select } from "src/shared/ui";
import { useKeycapSort } from "./use-keycap-sort";

const keycapSortOptions = [
  { type: "asc", name: "Price, low to high" },
  {
    type: "desc",
    name: "Price, high to low",
  },
];
export const KeycapSort = () => {
  const { setSortType } = useKeycapStore((state) => ({
    setSortType: state.setSortType,
  }));
  const { sort } = useKeycapSort();
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value as "asc" | "desc");
    sort();
  };
  return (
    <Select
      name="Sort"
      defaultOption="Choose sort:"
      options={keycapSortOptions}
      onChange={onChange}
    />
  );
};
