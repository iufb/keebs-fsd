export const PATH = {
  root: "/",
  home: "/home",
  signin: "/signin",
  signup: "/signup",
  account: "/account",
  wishlist: "/wishlist",
  keyboardsCatalog: "/keyboards",
  keycapsCatalog: "/keycaps",
  switchesCatalog: "/switches",
  switchesDetails: (id: string) => `/switches/${id}`,
  keyboardDetails: (id: string) => `/keyboards/${id}`,
  keycapsDetails: (id: string) => `/keycaps/${id}`,
};
