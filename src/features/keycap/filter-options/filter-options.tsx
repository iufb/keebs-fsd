import { FC, useState } from "react";
import { FilterItem } from "src/entities/filter";
import { useKeycapStore } from "src/entities/keycap";
import { Checkbox } from "src/shared/ui";
import { ArrowIcon } from "src/shared/ui/icons";
import { useFilterOptions } from "./use-filter-options";
type valuesType = { slug: string; name: string }[];
interface IKeycapFilterOptions {
  filterName: string;
  slug: string;
  values: valuesType;
}
export const KeycapFilterOptions: FC<IKeycapFilterOptions> = ({
  filterName,
  slug,
  values,
}) => {
  const [show, setShow] = useState(true);
  const { toggleFilter, isIn } = useKeycapStore((state) => ({
    toggleFilter: state.toggleFilter,
    isIn: state.isIn,
  }));
  const { update } = useFilterOptions();
  const toggle = (newValue: string) => {
    toggleFilter(slug, newValue);
    update();
  };
  const showContent = () => {
    setShow((prev) => !prev);
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
