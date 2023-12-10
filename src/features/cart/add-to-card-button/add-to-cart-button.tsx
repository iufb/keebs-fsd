import { FC } from "react";
import { ProductType } from "src/shared/lib";
import { Button } from "src/shared/ui";
import { FaPlus } from "react-icons/fa6";
import { useAddToCart } from "./queries/use-add-to-cart";
interface IAddToCartButton {
  productId: string;
  productType: ProductType;
  color?: string;
  switches?: string;
  type: "base" | "icon";
}
export const AddToCartButton: FC<IAddToCartButton> = ({
  productId,
  productType,
  switches,
  type,
  color,
}) => {
  const { addToCart } = useAddToCart({
    productId,
    productType,
    color,
    switches,
  });
  const isBaseType = type == "base";
  return (
    <Button
      variant={isBaseType ? "primary" : "icon"}
      onClick={() => addToCart()}
    >
      {isBaseType ? "Add to cart" : <FaPlus size={20} />}
    </Button>
  );
};
