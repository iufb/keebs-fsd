import { AxiosPromise } from "axios";
import { ISigninResponse, refreshToken } from "../api/auth";
const getUnixTime = () => Math.round(+new Date() / 1000);
export interface IAuthTokenInfo {
  exp: number;
  iat: number;
  login: string;
}

const LIFE_TIME_TO_UPDATE_MULTIPLIER = 0.5;

export const isTokenExpired = (token: string | null): boolean => {
  if (!token) {
    return true;
  }

  try {
    const tokenInfo = token.split(".")[1];
    const tokenInfoDecoded = window.atob(tokenInfo);
    const { exp, iat }: IAuthTokenInfo = JSON.parse(tokenInfoDecoded);

    const tokenLeftTime = exp - getUnixTime();

    const minLifeTimeForUpdate = (exp - iat) * LIFE_TIME_TO_UPDATE_MULTIPLIER;

    return tokenLeftTime < minLifeTimeForUpdate;
  } catch (e) {
    console.error(e);
    return true;
  }
};

let refreshTokenRequest: AxiosPromise<ISigninResponse> | null = null;
export const getAccessToken = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    console.log(isTokenExpired(accessToken), "there");
    if (accessToken) {
      if (isTokenExpired(accessToken) && refreshTokenRequest == null) {
        refreshTokenRequest = refreshToken();

        const response = await refreshTokenRequest;
        refreshTokenRequest = null;
        localStorage.setItem("accessToken", response.data.accessToken);
        return response.data.accessToken;
      }
    }
    return accessToken;
  } catch (e) {
    console.log(e);
  }
};
