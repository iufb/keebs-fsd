import clsx from "clsx";
import { FC } from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { ProductType } from "src/shared/lib";
import { Button } from "src/shared/ui";
import { useAddToWishlist } from "./queries/use-add-to-wishlist";

interface IAddToWishistButton {
  productId: string;
  productType: ProductType;
  type: "base" | "icon";
}
export const AddToWishlistButton: FC<IAddToWishistButton> = ({
  type,
  productType,
  productId,
}) => {
  const { isIn, add } = useAddToWishlist(productType, productId);
  const isBaseType = type == "base";
  return (
    <Button
      disabled={isIn}
      variant={isBaseType ? "outlined" : "icon"}
      onClick={() => add()}
      className={clsx(isBaseType ? "" : `bg-black text-white`)}
    >
      {isIn ? (
        <>
          <IoMdHeart size={20} />
          {isBaseType && <span>In Wishlist</span>}
        </>
      ) : (
        <>
          <IoIosHeartEmpty size={20} />
          {isBaseType && <span>Add to Wishlist</span>}
        </>
      )}
    </Button>
  );
};
