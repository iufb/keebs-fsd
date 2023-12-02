import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "src/shared/api/auth";
import { PATH, queryClient } from "src/shared/lib";

export const useSignOut = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: async () => {
      localStorage.removeItem("accessToken");

      navigate(PATH.home);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["wishlistCount"] });
    },
  });
  return { signout: mutate };
};
