import { FC } from "react";
import { ProductType } from "src/shared/lib";
import { Button } from "src/shared/ui";
import { useAddToCart } from "./queries/use-add-to-cart";
interface IAddToCartButton {
  productId: string;
  productType: ProductType;
  color?: string;
  switches?: string;
}
export const AddToCartButton: FC<IAddToCartButton> = ({
  productId,
  productType,
  switches,
  color,
}) => {
  const { addToCart } = useAddToCart({
    productId,
    productType,
    color,
    switches,
  });
  return (
    <Button variant="primary" onClick={() => addToCart()}>
      Add to cart
    </Button>
  );
};
