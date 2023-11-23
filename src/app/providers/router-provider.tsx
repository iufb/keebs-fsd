import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import { ProtectedRoute } from "src/features/auth";
import { MainLayout } from "src/pages/layouts";
import { PATH } from "src/shared/lib";
import { Loadable } from "src/shared/ui";

const HomePage = Loadable(lazy(() => import("src/pages/home")));
const AccountPage = Loadable(lazy(() => import("src/pages/account")));
const SignUpPage = Loadable(lazy(() => import("src/pages/sign-up")));
const SignInPage = Loadable(lazy(() => import("src/pages/sign-in")));
const KeyboardsCatalogPage = Loadable(lazy(() => import("src/pages/keyboard")));

export const RouterProvider = () => {
  return useRoutes([
    {
      path: PATH.root,
      element: <MainLayout />,
      children: [
        { path: PATH.home, element: <HomePage /> },
        {
          path: PATH.account,
          element: (
            <ProtectedRoute>
              <AccountPage />
            </ProtectedRoute>
          ),
        },
        { path: PATH.signup, element: <SignUpPage /> },
        { path: PATH.signin, element: <SignInPage /> },
        { path: PATH.keyboards, element: <KeyboardsCatalogPage /> },
      ],
    },
  ]);
};
