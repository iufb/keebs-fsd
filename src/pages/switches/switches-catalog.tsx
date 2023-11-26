import { useSwitchesStore } from "src/entities/switches";
import { SwitchesSort } from "src/features/switches/sort";
import { PATH } from "src/shared/lib";
import { Card } from "src/shared/ui";
import { SwitchesFilterSidebar } from "src/widgets/switches";
import { useSwitchesCatalog } from "./queries/use-switches-catalog";

export const SwitchessCatalogPage = () => {
  useSwitchesCatalog();
  const { switches } = useSwitchesStore((state) => ({
    switches: state.switches,
  }));
  return (
    <section className="w-full h-full collection-grid">
      {/* {isLoading && <div>laoding</div>} */}
      <SwitchesFilterSidebar />
      {switches && (
        <div className="col gap-2 items-end">
          <SwitchesSort />
          <div className="catalog">
            {switches.map((switches) => (
              <Card
                key={switches._id}
                to={PATH.switchesDetails(switches._id)}
                name={switches.name}
                img={switches.images[0]}
                rating={5}
                reviewCount={5}
                price={switches.price}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
