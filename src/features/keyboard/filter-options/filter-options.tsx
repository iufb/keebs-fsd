import { FC, useState } from "react";
import { Checkbox } from "src/shared/ui";
type valuesType = { slug: string; name: string }[];
interface IKeyboardFilterOptions {
  filterName: string;
  values: valuesType;
}
export const KeyboardFilterOptions: FC<IKeyboardFilterOptions> = ({
  filterName,
  values,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const toggle = (newValue: string) => {
    if (selectedFilters.includes(newValue)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== newValue),
      );
      return;
    }
    setSelectedFilters([...selectedFilters, newValue]);
  };
  return (
    <div className="col">
      {filterName}
      {values.map((value) => {
        const checked = selectedFilters.includes(value.name);
        return (
          <Checkbox
            name={value.name}
            key={value.slug}
            checked={checked}
            toggle={() => toggle(value.name)}
          />
        );
      })}
    </div>
  );
};
