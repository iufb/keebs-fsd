import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { type ISigninRequest, signin } from "src/shared/api/auth";
import { PATH } from "src/shared/lib";

export const useSigninForm = () => {
  const [authData, setAuthData] = useState<ISigninRequest>({
    email: "",
    password: "",
  });
  const signInMutation = useMutation({
    mutationFn: signin,
    onSuccess() {
      navigate(PATH.account);
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
  const error = signInMutation.error
    ? `Opps... Error occured! ${signInMutation.error.message}`
    : undefined;
  return {
    authData,
    handleInput,
    isLoading: signInMutation.isPending,
    handleSignin,
    error,
  };
};
