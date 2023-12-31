import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  type ISigninRequest,
  signin,
  ISigninResponse,
} from "src/shared/api/auth";
import { PATH, queryClient } from "src/shared/lib";

export const useSigninForm = () => {
  const [authData, setAuthData] = useState<ISigninRequest>({
    email: "",
    password: "",
  });
  const signInMutation = useMutation({
    mutationFn: signin,
    onSuccess({ data }: AxiosResponse<ISigninResponse>) {
      localStorage.setItem("accessToken", data.accessToken);

      navigate(PATH.account);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["wishlistCount"] });
    },
  });
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };
  const handleSignin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInMutation.mutate(authData);
  };
  let errorMessage;
  if (signInMutation.error instanceof AxiosError) {
    errorMessage = signInMutation.error.response?.data.message;
  }
  const error = signInMutation.error
    ? `Opps... Error occured! ${errorMessage}`
    : undefined;
  return {
    authData,
    handleInput,
    isLoading: signInMutation.isPending,
    handleSignin,
    error,
  };
};
