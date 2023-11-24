import { KeyboardFilterOptions } from "src/features/keyboard/filter-options";
import { Divider } from "src/shared/ui";
import { useKeyboardFilter } from "../queries/use-keyboard-filter";

export const KeyboardFilterSidebar = () => {
  const { data: filters, isLoading } = useKeyboardFilter();
  return (
    <div>
      {/* TODO:loafding */}
      {isLoading && <div>loading..</div>}
      <h2 className="h2"> Keyboards</h2>
      <Divider />
      <div className="col gap-4">
        {filters &&
          filters.map(({ filterName, slug, values }) => (
            <KeyboardFilterOptions
              key={slug}
              filterName={filterName}
              slug={slug}
              values={values}
            />
          ))}
      </div>
    </div>
  );
};
