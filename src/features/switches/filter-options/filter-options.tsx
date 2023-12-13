import { FC, useState } from "react";
import { FilterItem } from "src/entities/filter";
import { useSwitchesStore } from "src/entities/switches";
import { Checkbox } from "src/shared/ui";
import { ArrowIcon } from "src/shared/ui/icons";
import { useFilterOptions } from "./use-filter-options";
type valuesType = { slug: string; name: string }[];
interface ISwitchesFilterOptions {
  filterName: string;
  slug: string;
  values: valuesType;
}
export const SwitchesFilterOptions: FC<ISwitchesFilterOptions> = ({
  filterName,
  slug,
  values,
}) => {
  const [show, setShow] = useState(true);
  const { toggleFilter, isIn } = useSwitchesStore((state) => ({
    toggleFilter: state.toggleFilter,
    isIn: state.isIn,
  }));
  const { update } = useFilterOptions();
  const toggle = (newValue: string) => {
    toggleFilter(slug, newValue);
    update();
  };
  return (
    <FilterItem
      isShow={show}
      showContent={() => setShow((prev) => !prev)}
      filterName={filterName}
      slug={slug}
      isIn={isIn}
      toggle={toggle}
      values={values}
    />
  );
};
