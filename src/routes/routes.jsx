import { useRoutes } from "react-router-dom";
import { paths } from "./paths";
import { lazy } from "react";

const AdminLayout = lazy(() => import("../components/layout/AdminLayout"));
const DashboardPage = lazy(() =>
  import("../pages/protected/dashboard/Dashboard")
);
const ProductPage = lazy(() => import("../pages/protected/product/Product"));

export const Router = () => {
  return useRoutes([
    {
      path: paths.dashboard,
      element: <AdminLayout />,
      children: [
        {
          path: paths.dashboard,
          element: <DashboardPage />,
        },
        {
          path: paths.product,
          element: <ProductPage />,
        },
      ],
    },
  ]);
};
