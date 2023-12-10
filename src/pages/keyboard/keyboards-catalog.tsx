import { useKeyboardStore } from "src/entities/keyboard";
import { AddToCartButton } from "src/features/cart/add-to-card-button";
import { KeyboardSort } from "src/features/keyboard/sort";
import { AddToWishlistButton } from "src/features/wishlist/add-to-wishlist-button/add-to-wishlist-button";
import { PATH } from "src/shared/lib";
import { Card } from "src/shared/ui";
import { KeyboardFilterSidebar } from "src/widgets/keyboard";
import { useKeyboardsCatalog } from "./queries/use-keyboards-catalog";

export const KeyboardsCatalogPage = () => {
  useKeyboardsCatalog();
  const { keyboards } = useKeyboardStore((state) => ({
    keyboards: state.keyboards,
  }));
  return (
    <section className="w-full h-full collection-grid">
      {/* {isLoading && <div>laoding</div>} */}
      <KeyboardFilterSidebar />
      {keyboards && (
        <div className="col gap-2 items-end">
          <KeyboardSort />
          <div className="catalog">
            {keyboards.map((keyboard) => (
              <Card
                key={keyboard._id}
                colors={keyboard.colors}
                to={PATH.keyboardDetails(keyboard._id)}
                name={keyboard.name}
                img={keyboard.images[0].image}
                rating={5}
                reviewCount={5}
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
        </div>
      )}
    </section>
  );
};
