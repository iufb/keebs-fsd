import instance from "../api-instance";
import { Endpoints } from "../endpoints";

export function getWishlistProducts<T>() {
  return instance.get<T>(Endpoints.WISHLIST.getProducts);
}
