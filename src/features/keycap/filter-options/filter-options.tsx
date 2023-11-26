import { FC, useState } from "react";
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
  return (
    <div className="col">
      <span
        className="text-lg flex gap-4 items-center font-bold cursor-pointer mb-2"
        onClick={() => setShow((prev) => !prev)}
      >
        {filterName}
        <ArrowIcon className={`${show ? "rotate-180" : "rotate-0"} `} />
      </span>
      {show &&
        values.map((value) => {
          const checked = isIn(slug, value.slug);
          return (
            <Checkbox
              name={value.name}
              key={value.slug}
              checked={checked}
              toggle={() => toggle(value.slug)}
            />
          );
        })}
    </div>
  );
};