import { useRoutes } from "react-router-dom";
import { MainLayout } from "src/pages/layouts";
import { PATH } from "src/shared/lib";

export const RouterProvider = () => {
  return useRoutes([
    {
      path: PATH.root,
      element: <MainLayout />,
      children: [
        { path: PATH.home, element: <div>home</div> },
        { path: PATH.keyboards, element: <div>keyboard</div> },
      ],
    },
  ]);
};
