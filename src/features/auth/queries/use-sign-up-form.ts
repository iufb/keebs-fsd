import { useMutation } from "@tanstack/react-query";
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
  const error = signUpMutation.error
    ? `Opps... Error occured! ${signUpMutation.error.message}`
    : undefined;
  return {
    authData,
    handleInput,
    isLoading: signUpMutation.isPending,
    handleSignup,
    error,
  };
};
