import { ActionType } from "src/shared/lib";
import instance from "../api-instance";
import { Endpoints } from "../endpoints";

export function getCart<T>() {
  return instance.get<T>(Endpoints.CART.getCart);
}
export function addToCart<T>(cartItem: T) {
  return instance.post(Endpoints.CART.add, cartItem);
}
export function updateQuantity(action: ActionType) {
  return;
}
