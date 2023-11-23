import { KeyboardFilterOptions } from "src/features/keyboard/filter-options";
import { useKeyboardFilter } from "../queries/use-keyboard-filter";

export const KeyboardFilterSidebar = () => {
  const { data: filters, isLoading } = useKeyboardFilter();
  return (
    <div>
      {/* TODO:loafding */}
      {isLoading && <div>loading..</div>}
      {filters &&
        filters.map(({ filterName, values }) => (
          <KeyboardFilterOptions filterName={filterName} values={values} />
        ))}
    </div>
  );
};
