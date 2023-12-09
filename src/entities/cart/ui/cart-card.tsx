import { FC } from "react";
import { IGetCartItem } from "../model";
interface ICartCard {
  product: IGetCartItem;
  updateQuantity: JSX.Element;
}
export const CartCard: FC<ICartCard> = ({ product, updateQuantity }) => {
  const { img, name, extra, price } = product;
  return (
    <div className="flex gap-2 w-full">
      <img src={img} alt={name} className="w-20 h-20" />
      <div className="w-full pr-2">
        <span className="block">{name}</span>
        <span>{extra?.color}/</span>
        <span>{extra?.switches}</span>
        <div className="flex justify-between">
          {updateQuantity}
          <span>${price}</span>
        </div>
      </div>
    </div>
  );
};
