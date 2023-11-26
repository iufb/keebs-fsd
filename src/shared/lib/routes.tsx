export const PATH = {
  root: "/",
  home: "/home",
  signin: "/signin",
  signup: "/signup",
  account: "/account",
  keyboardsCatalog: "/keyboards",
  keycapsCatalog: "/keycaps",
  switchesCatalog: "/switches",
  keyboardDetails: (id: string) => `/keyboards/${id}`,
  keycapsDetails: (id: string) => `/keycaps/${id}`,
};
