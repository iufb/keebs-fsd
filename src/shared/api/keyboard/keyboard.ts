import { Endpoints } from "../endpoints";
import instance from "../api-instance";

export function getAllKeyboards<T>() {
  return instance.get<T>(Endpoints.KEYBOARD.all);
}
export function getKeyboardById<T>(id: string) {
  return instance.get<T>(Endpoints.KEYBOARD.byId(id));
}
export function getKeyboardFilters<T>() {
  return instance.get<T>(Endpoints.KEYBOARD.filters);
}
