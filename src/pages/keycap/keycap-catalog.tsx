import { useKeycapStore } from "src/entities/keycap";
import { AddToCartButton } from "src/features/cart/add-to-card-button";
import { KeycapSort } from "src/features/keycap/sort";
import { AddToWishlistButton } from "src/features/wishlist/add-to-wishlist-button";
import { PATH } from "src/shared/lib";
import { Card, Error, Loader } from "src/shared/ui";
import { KeycapFilterSidebar } from "src/widgets/keycap";
import { useKeycapCatalog } from "./queries/use-keycap-catalog";

export const KeycapsCatalogPage = () => {
  const { isLoading, error } = useKeycapCatalog();
  const { keycaps } = useKeycapStore((state) => ({
    keycaps: state.keycaps,
  }));
  return (
    <section className="w-full h-full collection-grid">
      <KeycapFilterSidebar />
      {keycaps && keycaps.length == 0 && <div className="text-lg font-bold">Not found.</div>}
      {keycaps && keycaps.length > 0 && (
        <div className='col gap-2 items-end'>
          {error ? <Error message={error} /> :
            <>
              <KeycapSort />
              {isLoading && <Loader size="lg" />}
              <div className="catalog">
                {keycaps.map((keycap) => (
                  <Card
                    key={keycap._id}
                    to={PATH.keycapsDetails(keycap._id)}
                    name={keycap.name}
                    img={keycap.images[0]}
                    price={keycap.price}
                    buttons={
                      <>
                        <AddToWishlistButton
                          productType="keycaps"
                          productId={keycap._id}
                          type="icon"
                        />
                        <AddToCartButton
                          productType="keycaps"
                          productId={keycap._id}
                          type="icon"
                        />
                      </>
                    }
                  />
                ))}
              </div>
            </>
          }
        </div>
      )}
    </section>
  );
};
