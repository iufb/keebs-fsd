import { Endpoints } from "../endpoints";
import instance from "../api-instance";

export function getKeycapById<T>(id: string) {
  return instance.get<T>(Endpoints.KEYCAP.byId(id));
}
export function getKeycapFilters<T>() {
  return instance.get<T>(Endpoints.KEYCAP.getFilters);
}
export function getKeycaps<T, M>(params?: {
  filters?: M;
  sort?: "asc" | "desc";
}) {
  return instance.post<T>(Endpoints.KEYCAP.get, params);
}
