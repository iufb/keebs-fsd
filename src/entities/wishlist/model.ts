import { ProductType } from "src/shared/lib";

export interface IWishlistItem {
  id: string;
  img: string;
  productType: ProductType;
  name: string;
  price: string;
}
