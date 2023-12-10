import { ActionType } from "src/shared/lib";
import instance from "../api-instance";
import { Endpoints } from "../endpoints";

export function getCart<T>() {
  return instance.get<T>(Endpoints.CART.getCart);
}

export function getTotalPrice<T>() {
  return instance.get<T>(Endpoints.CART.total);
}
export function getTotalCount() {
  return instance.get<number>(Endpoints.CART.totalCount);
}
export function addToCart<T>(cartItem: T) {
  return instance.post(Endpoints.CART.add, cartItem);
}
export function updateQuantity(id: string, action: ActionType) {
  return instance.patch(Endpoints.CART.updateQuantity, { id, action });
}
