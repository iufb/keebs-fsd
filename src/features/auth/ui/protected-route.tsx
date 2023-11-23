import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { PATH } from "src/shared/lib";

export const ProtectedRoute = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const token = localStorage.getItem("accessToken");

  if (!token) return <Navigate to={PATH.signin} />;
  return <>{children}</>;
};
