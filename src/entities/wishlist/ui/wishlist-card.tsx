import { FC, ReactNode } from "react";
import { CustomImage } from "src/shared/ui";
import { IWishlistItem } from "../model";
import { useWishlistStore } from "../store";
import { IoMdClose } from "react-icons/io";

interface IWishlistCard {
  product: IWishlistItem;
  button: ReactNode;
}
export const WishlistCard: FC<IWishlistCard> = ({ product, button }) => {
  const { img, name, price, _id } = product;
  const remove = useWishlistStore.getState().removeFromList;
  return (
    <div className=" col gap-y-2 center relative">
      <CustomImage src={img} alt={name} size={400} />
      <h4 className="font-bold text-md">{name}</h4>
      <span>{price}</span>
      {button}
      <IoMdClose
        onClick={() => remove(_id)}
        className="absolute top-2 right-3 text-2xl cursor-pointer"
      />
    </div>
  );
};
