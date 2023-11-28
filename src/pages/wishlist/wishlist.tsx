import { useWishlistStore, WishlistCard } from "src/entities/wishlist";
import { AddToCartButton } from "src/features/cart/add-to-card-button";

export const WishlistPage = () => {
  const { products, productsCount } = useWishlistStore((state) => ({
    products: state.products,
    productsCount: state.productsCount,
  }));
  return (
    <section className="w-full min-h-screen ">
      <h1 className="h1 w-full text-center">Wishlist</h1>
      {productsCount == 0 && <div>Wishlist is empty</div>}
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <WishlistCard product={product} button={<AddToCartButton />} />
        ))}
      </div>
    </section>
  );
};
