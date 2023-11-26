import { useKeycapStore } from "src/entities/keycap";
import { KeycapSort } from "src/features/keycap/sort";
import { PATH } from "src/shared/lib";
import { Card } from "src/shared/ui";
import { KeycapFilterSidebar } from "src/widgets/keycap";
import { useKeycapCatalog } from "./queries/use-keycap-catalog";

export const KeycapsCatalogPage = () => {
  useKeycapCatalog();
  const { keycaps } = useKeycapStore((state) => ({
    keycaps: state.keycaps,
  }));
  return (
    <section className="w-full h-full collection-grid">
      {/* {isLoading && <div>laoding</div>} */}
      <KeycapFilterSidebar />
      {keycaps && (
        <div className="col gap-2 items-end">
          <KeycapSort />
          <div className="catalog">
            {keycaps.map((keycap) => (
              <Card
                key={keycap._id}
                to={PATH.keycapsDetails(keycap._id)}
                name={keycap.name}
                img={keycap.images[0]}
                rating={5}
                reviewCount={5}
                price={keycap.price}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
