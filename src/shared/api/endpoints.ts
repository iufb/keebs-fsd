export const Endpoints = {
  AUTH: {
    SIGNUP: "/auth/signup",
    SIGNIN: "/auth/signin",
    REFRESH: "/auth/refresh",
    LOGOUT: "/auth/logout",
    GET_PROFILE: "/user/profile",
  },
  KEYBOARD: {
    get: "/keyboard",
    byId: (id: string) => `/keyboard/${id}`,
    getFilters: "/keyboard/filters",
  },
  KEYCAP: {
    get: "/keycap",
    byId: (id: string) => `/keycap/${id}`,
    getFilters: "/keycap/filters",
  },
  SWITCHES: {
    get: "/switches",
    byId: (id: string) => `/switches/${id}`,
    getFilters: "/switches/filters",
  },
};
