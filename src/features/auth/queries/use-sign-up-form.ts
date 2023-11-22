import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { type ISignupRequest, signup } from "src/shared/api/auth";
import { PATH } from "src/shared/lib";

export const useSignupForm = () => {
  const [authData, setAuthData] = useState<ISignupRequest>({
    email: "",
    username: "",
    password: "",
  });
  const signUpMutation = useMutation({
    mutationFn: signup,
    onSuccess() {
      navigate(PATH.signin);
    },
  });
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };
  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpMutation.mutate(authData);
  };
  let errorMessage;
  if (signUpMutation.error instanceof AxiosError) {
    errorMessage = signUpMutation.error.response?.data.message;
  }
  const error = signUpMutation.error
    ? `Opps... Error occured! ${errorMessage}`
    : undefined;
  return {
    authData,
    handleInput,
    isLoading: signUpMutation.isPending,
    handleSignup,
    error,
  };
};
