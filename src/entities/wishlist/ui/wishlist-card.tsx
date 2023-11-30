import { FC, ReactNode } from "react";
import { CustomImage } from "src/shared/ui";
import { IWishlistItem } from "../model";

interface IWishlistCard {
  product: IWishlistItem;
  addToCartbutton: ReactNode;
  remove: ReactNode;
}
export const WishlistCard: FC<IWishlistCard> = ({
  product,
  addToCartbutton,
  remove,
}) => {
  const { img, name, price } = product;
  return (
    <div className=" col gap-y-2 center relative">
      <CustomImage src={img} alt={name} size={400} />
      <h4 className="font-bold text-md">{name}</h4>
      <span>{price}</span>
      {addToCartbutton}
      <div className="absolute top-2 right-3">{remove}</div>
    </div>
  );
};
