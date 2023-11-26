import { Endpoints } from "../endpoints";
import instance from "../api-instance";

export function getKeyboardById<T>(id: string) {
  return instance.get<T>(Endpoints.KEYBOARD.byId(id));
}
export function getKeyboardFilters<T>() {
  return instance.get<T>(Endpoints.KEYBOARD.getFilters);
}
export function getKeyboards<T, M>(params?: {
  filters?: M;
  sort?: "asc" | "desc";
}) {
  return instance.post<T>(Endpoints.KEYBOARD.get, params);
}
