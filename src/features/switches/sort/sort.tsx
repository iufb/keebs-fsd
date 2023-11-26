import { ChangeEvent } from "react";
import { useSwitchesStore } from "src/entities/switches";
import { Select } from "src/shared/ui";
import { useSwitchesSort } from "./use-switches-sort";

const SwitchesSortOptions = [
  { type: "asc", name: "Price, low to high" },
  {
    type: "desc",
    name: "Price, high to low",
  },
];
export const SwitchesSort = () => {
  const { setSortType } = useSwitchesStore((state) => ({
    setSortType: state.setSortType,
  }));
  const { sort } = useSwitchesSort();
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value as "asc" | "desc");
    sort();
  };
  return (
    <Select
      name="Sort"
      defaultOption="Choose sort:"
      options={SwitchesSortOptions}
      onChange={onChange}
    />
  );
};
