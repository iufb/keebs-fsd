import { ChangeEvent } from "react";
import { useKeyboardStore } from "src/entities/keyboard";
import { Select } from "src/shared/ui";
import { useKeyboardSort } from "./use-keyboard-sort";

const keyboardSortOptions = [
  { type: "asc", name: "Price, low to high" },
  {
    type: "desc",
    name: "Price, high to low",
  },
];
export const KeyboardSort = () => {
  const { setSortType } = useKeyboardStore((state) => ({
    setSortType: state.setSortType,
  }));
  const { sort } = useKeyboardSort();
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value as "asc" | "desc");
    sort();
  };
  return (
    <Select
      name="Sort"
      defaultOption="Featured"
      options={keyboardSortOptions}
      onChange={onChange}
    />
  );
};
