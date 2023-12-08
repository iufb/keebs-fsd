import { ProductType } from "src/shared/lib";

export interface ICartItem {
  productType: ProductType;

  productId: string;

  color?: string;

  switches?: string;
}

export interface IGetCartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
  extra?: {
    color: string;
    switches: string;
  };
}
