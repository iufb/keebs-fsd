export const Endpoints = {
  AUTH: {
    SIGNUP: "/auth/signup",
    SIGNIN: "/auth/signin",
    REFRESH: "/auth/refresh",
    LOGOUT: "/auth/logout",
    GET_PROFILE: "/user/profile",
  },
  KEYBOARD: {
    all: "/keyboard",
    byId: (id: string) => `/keyboard/${id}`,
    getFilters: "/keyboard/filters",
    filter: "/keyboard/filter",
  },
  KEYCAP: {
    all: "/keycap",
    byId: (id: string) => `/keycap/${id}`,
  },
  SWITCHES: {
    all: "/switches",
    byId: (id: string) => `/switches/${id}`,
  },
};
