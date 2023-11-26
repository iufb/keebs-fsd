import { KeyboardFilterOptions } from "src/features/keyboard/filter-options";
import { Sidebar } from "src/widgets/sidebar";
import { useKeyboardFilter } from "../queries/use-keyboard-filter";

export const KeyboardFilterSidebar = () => {
  const { data: filters, isLoading } = useKeyboardFilter();
  return (
    <Sidebar title="Keyboards" isLoading={isLoading}>
      {filters &&
        filters.map(({ filterName, slug, values }) => (
          <KeyboardFilterOptions
            key={slug}
            filterName={filterName}
            slug={slug}
            values={values}
          />
        ))}
    </Sidebar>
  );
};
