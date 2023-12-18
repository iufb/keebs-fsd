import { useNavigate } from "react-router-dom";
import { PATH } from "src/shared/lib";
import { CartCard } from "./cart-card";
import { IoMdClose } from "react-icons/io";
import { useCartStore } from "../store";
import { Button, Loader } from "src/shared/ui";
import { useGetCart } from "../queries/use-get-cart";
import { QuantityUpdate } from "src/features/cart/quantity-update";
export const CartModal = () => {
  const { close } = useCartStore((state) => ({
    close: state.toggle,
  }));
  const { cart, isLoading, error, total } = useGetCart();
  const navigate = useNavigate();
  return (
    <div className="w-[450px] col  gap-y-4 pt-10 p-2 -top-3 -left-52 absolute z-50 bg-white rounded-md shadow-lg max-h-screen">
      <Button
        variant="icon_no_bg"
        className="absolute  right-2 top-2 center gap-2"
        onClick={() => close(false)}
      >
        <span className="text-lg font-bold">Close</span>
        <IoMdClose size={20} />
      </Button>
      <div
        className={`col min-h-[50px] gap-2 ${
          cart?.length > 3 && " overflow-y-scroll"
        } max-h-[300px]`}
      >
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        {cart &&
          cart.map((product) => (
            <CartCard
              key={product.id}
              product={product}
              updateQuantity={
                <QuantityUpdate id={product.id} quantity={product.quantity} />
              }
            />
          ))}
      </div>
      <div className="flex justify-between text-xl font-bold">
        <span>Subtotal</span>
        <span>{total?.toFixed(2)}</span>
      </div>
      <Button variant="primary" onClick={() => navigate(PATH.checkout)}>
        Checkout
      </Button>
    </div>
  );
};
