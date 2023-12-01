import { FC } from "react";
import { IWishlistItem } from "src/entities/wishlist";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { Button } from "src/shared/ui";
import { useAddToWishlist } from "./queries/use-add-to-wishlist";

interface IAddToWishistButton {
  product: IWishlistItem;
}
export const AddToWishlistButton: FC<IAddToWishistButton> = ({ product }) => {
  const { isIn, add } = useAddToWishlist("keyboard", product.id);
  return (
    <Button disabled={isIn} variant="outlined" onClick={() => add()}>
      {isIn ? (
        <>
          <IoMdHeart />
          <span>In Wishlist</span>
        </>
      ) : (
        <>
          <IoIosHeartEmpty />
          <span>Add to Wishlist</span>
        </>
      )}
    </Button>
  );
};
