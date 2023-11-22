import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import { MainLayout } from "src/pages/layouts";
import { PATH } from "src/shared/lib";
import { Loadable } from "src/shared/ui";

const HomePage = Loadable(lazy(() => import("src/pages/home")));
const AccountPage = Loadable(lazy(() => import("src/pages/account")));
const SignUpPage = Loadable(lazy(() => import("src/pages/sign-up")));
const SignInPage = Loadable(lazy(() => import("src/pages/sign-in")));

export const RouterProvider = () => {
  return useRoutes([
    {
      path: PATH.root,
      element: <MainLayout />,
      children: [
        { path: PATH.home, element: <HomePage /> },
        { path: PATH.account, element: <AccountPage /> },
        { path: PATH.signup, element: <SignUpPage /> },
        { path: PATH.signin, element: <SignInPage /> },
        { path: PATH.keyboards, element: <div>keyboard</div> },
      ],
    },
  ]);
};
