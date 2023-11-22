import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAccountStore } from "src/entities/account";
import { PATH } from "src/shared/lib";

export const ProtectedRoute = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const token = useAccountStore.getState().accessToken;

  if (!token) return <Navigate to={PATH.signin} />;
  return <>{children}</>;
};
