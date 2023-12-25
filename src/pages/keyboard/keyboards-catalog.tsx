import { useKeyboardStore } from "src/entities/keyboard";
import { AddToCartButton } from "src/features/cart/add-to-card-button";
import { KeyboardSort } from "src/features/keyboard/sort";
import { AddToWishlistButton } from "src/features/wishlist/add-to-wishlist-button/add-to-wishlist-button";
import { PATH } from "src/shared/lib";
import { Card, Error, Loader } from "src/shared/ui";
import { KeyboardFilterSidebar } from "src/widgets/keyboard";
import { useKeyboardsCatalog } from "./queries/use-keyboards-catalog";

export const KeyboardsCatalogPage = () => {
  const { isLoading, error } = useKeyboardsCatalog();
  const { keyboards } = useKeyboardStore((state) => ({
    keyboards: state.keyboards,
  }));
  return (
    <section className="w-full h-full collection-grid">
      <KeyboardFilterSidebar />
      {keyboards && keyboards.length == 0 && <div className="text-lg font-bold">Not found.</div>}
      {keyboards && keyboards.length > 0 && (
        <div className={`   col gap-2 items-end`}>
          {error ?
            <Error message={error} /> :
            <>
              <KeyboardSort />
              {isLoading && <Loader size="lg" />}
              <div className={`catalog`}>
                {keyboards.map((keyboard) => (
                  <Card
                    key={keyboard._id}
                    colors={keyboard.colors}
                    to={PATH.keyboardDetails(keyboard._id)}
                    name={keyboard.name}
                    img={keyboard.images[0].image}
                    price={keyboard.price}
                    buttons={
                      <>
                        <AddToWishlistButton
                          productId={keyboard._id}
                          type="icon"
                          productType="keyboards"
                        />
                        <AddToCartButton
                          productId={keyboard._id}
                          type="icon"
                          productType="keyboards"
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
