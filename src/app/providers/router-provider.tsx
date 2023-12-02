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
const WishlistPage = Loadable(lazy(() => import("src/pages/wishlist")));
const KeyboardsCatalogPage = Loadable(lazy(() => import("src/pages/keyboard")));
const KeyboardDetails = Loadable(lazy(() => import("src/pages/keyboard/[id]")));
const KeycapsCatalogPage = Loadable(lazy(() => import("src/pages/keycap")));
const KeycapDetails = Loadable(lazy(() => import("src/pages/keycap/[id]")));
const SwitchesCatalogPage = Loadable(lazy(() => import("src/pages/switches")));
const SwitchesDetails = Loadable(lazy(() => import("src/pages/switches/[id]")));

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
        {
          path: PATH.wishlist,
          element: (
            <ProtectedRoute>
              <WishlistPage />
            </ProtectedRoute>
          ),
        },
        { path: PATH.keyboardsCatalog, element: <KeyboardsCatalogPage /> },
        { path: PATH.keyboardDetails(":id"), element: <KeyboardDetails /> },
        { path: PATH.keycapsCatalog, element: <KeycapsCatalogPage /> },
        { path: PATH.keycapsDetails(":id"), element: <KeycapDetails /> },
        { path: PATH.switchesCatalog, element: <SwitchesCatalogPage /> },
        { path: PATH.switchesDetails(":id"), element: <SwitchesDetails /> },
      ],
    },
  ]);
};
