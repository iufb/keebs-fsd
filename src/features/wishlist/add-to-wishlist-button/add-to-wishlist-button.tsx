import { FC } from "react";
import { IWishlistItem, useWishlistStore } from "src/entities/wishlist";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { Button } from "src/shared/ui";

interface IAddToWishistButton {
  product: IWishlistItem;
}
export const AddToWishlistButton: FC<IAddToWishistButton> = ({ product }) => {
  const { toggleStatus, isIn } = useWishlistStore((state) => ({
    toggleStatus: state.toggleStatus,
    isIn: state.isIn,
  }));
  return (
    <Button variant="outlined" onClick={() => toggleStatus(product)}>
      {isIn(product._id) ? (
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
