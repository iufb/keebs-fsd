import { Endpoints } from "../endpoints";
import instance from "../api-instance";
import {
  IProfile,
  ISigninRequest,
  ISigninResponse,
  ISignupRequest,
  ISignupResponse,
} from "./auth.type";

export const signup = (signupForm: ISignupRequest) => {
  return instance.post<ISignupResponse>(Endpoints.AUTH.SIGNUP, signupForm);
};
export const signin = (signinForm: ISigninRequest) => {
  return instance.post<ISigninResponse>(Endpoints.AUTH.SIGNIN, signinForm);
};
export const refreshToken = () => {
  return instance.get<ISigninResponse>(Endpoints.AUTH.REFRESH);
};
export const logout = () => {
  return instance.get(Endpoints.AUTH.LOGOUT);
};
export const getProfile = () => {
  return instance.get<IProfile>(Endpoints.AUTH.GET_PROFILE);
};
