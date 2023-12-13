import { FC, useState } from "react";
import { FilterItem, FilterType } from "src/entities/filter";
import { useKeyboardStore } from "src/entities/keyboard";
import { useFilterOptions } from "./use-filter-options";
interface IKeyboardFilterOptions {
  filterName: string;
  slug: string;
  values: FilterType[];
}
export const KeyboardFilterOptions: FC<IKeyboardFilterOptions> = ({
  filterName,
  slug,
  values,
}) => {
  const [show, setShow] = useState(true);
  const { toggleFilter, isIn } = useKeyboardStore((state) => ({
    toggleFilter: state.toggleFilter,
    isIn: state.isIn,
  }));
  const { update } = useFilterOptions();
  const showContent = () => {
    setShow((prev) => !prev);
  };
  const toggle = (newValue: string) => {
    toggleFilter(slug, newValue);
    update();
  };
  return (
    <FilterItem
      isShow={show}
      showContent={showContent}
      filterName={filterName}
      slug={slug}
      isIn={isIn}
      toggle={toggle}
      values={values}
    />
  );
};
