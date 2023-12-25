import { WishlistCard } from "src/entities/wishlist";
import { AddToCartButton } from "src/features/cart/add-to-card-button";
import { RemoveFromWishlistButton } from "src/features/wishlist/remove-from-wishlist-button";
import { Error, Loader } from "src/shared/ui";
import { useWishlistProducts } from "./queries/use-wishlist-products";

export const WishlistPage = () => {
  const { wishlistProducts, isLoading, errorMessage } = useWishlistProducts();
  if (errorMessage) return <Error message={errorMessage} />
  if (isLoading) return <Loader size="lg" />;
  console.log(wishlistProducts)
  return (
    <section className="w-full min-h-screen px-5 ">
      <h1 className="h1 w-full text-center">Wishlist</h1>
      {wishlistProducts?.length == 0 && <div>Wishlist is empty</div>}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5">
        {wishlistProducts &&
          wishlistProducts.map((product) => {
            if (!product) return;
            return (
              <WishlistCard
                key={product.id}
                product={product}
                addToCartbutton={
                  <AddToCartButton
                    productId={product.id}
                    type="base"
                    productType={product.productType}
                  />
                }
                remove={<RemoveFromWishlistButton id={product.id} />}
              />
            );
          })}
      </div>
    </section>
  );
};
