import { Endpoints } from "../endpoints";
import instance from "../api-instance";

export function getSwitchesById<T>(id: string) {
  return instance.get<T>(Endpoints.SWITCHES.byId(id));
}
export function getSwitchesByProfile<T>(profile: string) {
  return instance.get<T>(Endpoints.SWITCHES.byProfile(profile));
}

export function getSwitchesFilters<T>() {
  return instance.get<T>(Endpoints.SWITCHES.getFilters);
}

export function getSwitches<T, M>(params?: {
  filters?: M;
  sort?: "asc" | "desc";
}) {
  return instance.post<T>(Endpoints.SWITCHES.get, params);
}
