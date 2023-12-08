import { FC } from "react";
import { CustomImage } from "src/shared/ui";
import { IGetCartItem } from "../model";

export const CartCard: FC<IGetCartItem> = (product) => {
  const { img, name, quantity, extra, price } = product;
  return (
    <div className="flex gap-2">
      <img src={img} alt={name} className="w-20 h-20" />
      <div>
        <span className="block">{name}</span>
        <span>{extra?.color}/</span>
        <span>{extra?.switches}</span>
        <div className="flex justify-between">
          <span>{quantity}</span>
          <span>${price}</span>
        </div>
      </div>
    </div>
  );
};
