export interface ISigninRequest {
  email: string;
  password: string;
}
export interface ISigninResponse {
  accessToken: string;
}

export interface ISignupRequest extends ISigninRequest {
  username: string;
}
export interface ISignupResponse extends ISigninResponse {}
export interface IProfile {
  email: string;
  _id: string;
  username: string;
}
