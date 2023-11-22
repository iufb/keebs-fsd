import { create } from "zustand";
type State = {
  accessToken: string | null;
};
type Action = {
  setAccessToken: (accessToken: State["accessToken"]) => void;
};
export const useAccountStore = create<State & Action>((set) => ({
  accessToken: localStorage.getItem("accessToken") || null,
  setAccessToken: (accessToken) => {
    set(() => ({
      accessToken,
    }));
    if (accessToken) localStorage.setItem("accessToken", accessToken);
  },
}));
