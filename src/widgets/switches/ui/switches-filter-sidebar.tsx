import { SwitchesFilterOptions } from "src/features/switches/filter-options";
import { Sidebar } from "src/widgets/sidebar";
import { useSwitchesFilter } from "../queries/use-get-switches-filters";

export const SwitchesFilterSidebar = () => {
  const { data: filters, isLoading } = useSwitchesFilter();
  return (
    <Sidebar title="Switches" isLoading={isLoading}>
      {filters &&
        filters.map(({ filterName, slug, values }) => (
          <SwitchesFilterOptions
            key={slug}
            filterName={filterName}
            slug={slug}
            values={values}
          />
        ))}
    </Sidebar>
  );
};
