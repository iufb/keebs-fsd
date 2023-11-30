import { Button } from "src/shared/ui";
import { IoMdClose } from "react-icons/io";
import { FC } from "react";
import { useRemoveFromWishlist } from "./queries/use-remove-from-wishlist";

interface IRemoveFromWishlistButton {
  id: string;
}
export const RemoveFromWishlistButton: FC<IRemoveFromWishlistButton> = ({
  id,
}) => {
  const { remove } = useRemoveFromWishlist(id);
  return (
    <Button variant="icon" onClick={() => remove()}>
      <IoMdClose />
    </Button>
  );
};
