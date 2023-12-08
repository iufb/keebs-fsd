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
    byProfile: (profile: string) => `/keycap/byProfile/${profile}`,
    getFilters: "/keycap/filters",
  },
  SWITCHES: {
    get: "/switches",
    byId: (id: string) => `/switches/${id}`,
    byProfile: (profile: string) => `/switches/byProfile/${profile}`,
    getFilters: "/switches/filters",
  },
  WISHLIST: {
    getProducts: "/wishlist",
    add: "/wishlist",
    remove: (id: string) => `/wishlist/${id}`,
    isIn: (id: string) => `/wishlist/${id}`,
    count: "/wishlist/count",
  },
  CART: {
    getCart: "/cart",
    add: "/cart/add",
    updateQuantity: (id: string) => `/cart/quantity/${id}`,
  },
};
