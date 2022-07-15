import { RouteObject } from "react-router-dom";
import React from "react";

const DashboardPage = React.lazy(
  () => import("modules/dashboard/dashboard.page")
);
const NotFoundPage = React.lazy(
  () => import("core/pages/notFound/notFound.page")
);
export const basicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
