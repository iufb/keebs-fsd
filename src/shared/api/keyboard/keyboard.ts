import { Endpoints } from "../endpoints";
import instance from "../api-instance";

export function getAllKeyboards<T>() {
  return instance.get<T>(Endpoints.KEYBOARD.all);
}
export const getKeyboardById = (id: string) => {
  return instance.get(Endpoints.KEYBOARD.byId(id));
};
export const getKeyboardFilters = () => {
  return instance.get(Endpoints.KEYBOARD.filters);
};
