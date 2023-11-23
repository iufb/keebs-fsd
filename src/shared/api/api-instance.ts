import axios, { AxiosError, AxiosResponse } from "axios";
import { getAccessToken } from "../lib";
import { logout } from "./auth";
import { Endpoints } from "./endpoints";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}/api`,
  withCredentials: true,
});
const skipAuthUrls = [
  Endpoints.AUTH.SIGNUP,
  Endpoints.AUTH.SIGNIN,
  Endpoints.AUTH.REFRESH,
];
instance.interceptors.request.use(async (config) => {
  if (config.url && skipAuthUrls.includes(config.url)) {
    return config;
  }
  const accessToken = await getAccessToken();

  if (accessToken) {
    const authorization = `Bearer ${accessToken}`;
    config.headers.Authorization = authorization;
  }

  return config;
});
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const isLoggedIn = !!localStorage.getItem("accessToken");

    if (
      error.response?.status === 401 &&
      isLoggedIn &&
      error.request.url !== Endpoints.AUTH.LOGOUT
    ) {
      await logout();
    }

    throw error;
  },
);
export default instance;
