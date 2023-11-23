import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "src/shared/api/auth";
import { PATH } from "src/shared/lib";

export const useSignOut = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      navigate(PATH.home);
    },
  });
  return { signout: mutate };
};
