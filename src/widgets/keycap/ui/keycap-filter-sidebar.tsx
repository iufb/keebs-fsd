import { KeycapFilterOptions } from "src/features/keycap/filter-options";
import { Sidebar } from "src/widgets/sidebar";
import { useKeycapFilter } from "../queries/use-get-keycap-filters";

export const KeycapFilterSidebar = () => {
  const { data: filters, isLoading } = useKeycapFilter();
  return (
    <Sidebar title="Keycaps" isLoading={isLoading}>
      {filters &&
        filters.map(({ filterName, slug, values }) => (
          <KeycapFilterOptions
            key={slug}
            filterName={filterName}
            slug={slug}
            values={values}
          />
        ))}
    </Sidebar>
  );
};
