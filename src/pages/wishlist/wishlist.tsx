import { WishlistCard } from "src/entities/wishlist";
import { AddToCartButton } from "src/features/cart/add-to-card-button";
import { useWishlistProducts } from "./queries/use-wishlist-products";

export const WishlistPage = () => {
  const { wishlistProducts, isLoading, errorMessage } = useWishlistProducts();
  if (errorMessage) return <div>{errorMessage}</div>;
  //TODO: Loading
  if (isLoading) return <div>...olaoign</div>;

  return (
    <section className="w-full min-h-screen ">
      <h1 className="h1 w-full text-center">Wishlist</h1>
      {wishlistProducts?.length == 0 && <div>Wishlist is empty</div>}
      <div className="grid grid-cols-4 gap-5">
        {wishlistProducts &&
          wishlistProducts.map((product) => (
            <WishlistCard product={product} button={<AddToCartButton />} />
          ))}
      </div>
    </section>
  );
};
