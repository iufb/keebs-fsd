import { Endpoints } from "../endpoints";
import instance from "../api-instance";

export function getAllKeyboards<T>() {
  return instance.get<T>(Endpoints.KEYBOARD.all);
}
export function getKeyboardById<T>(id: string) {
  return instance.get<T>(Endpoints.KEYBOARD.byId(id));
}
export function getKeyboardFilters<T>() {
  return instance.get<T>(Endpoints.KEYBOARD.getFilters);
}
export function filterKeyboards<T, M>({
  filters,
  sort,
}: {
  filters?: M;
  sort?: "asc" | "desc";
}) {
  return instance.post<T>(Endpoints.KEYBOARD.filter, {
    filters: filters ?? [],
    sort,
  });
}
