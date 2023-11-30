import instance from "../api-instance";
import { Endpoints } from "../endpoints";

export function getWishlistProducts<T>() {
  return instance.get<T>(Endpoints.WISHLIST.getProducts);
}
export function addProductToWishlist(dto: {
  productType: string;
  productId: string;
}) {
  return instance.post(Endpoints.WISHLIST.add, dto);
}
export function removeProductFromWishlist(id: string) {
  return instance.delete(Endpoints.WISHLIST.remove(id));
}
export function checkIsIn(id: string) {
  return instance.get<boolean>(Endpoints.WISHLIST.isIn(id));
}
export function getProductsCount() {
  return instance.get<number>(Endpoints.WISHLIST.count);
}
