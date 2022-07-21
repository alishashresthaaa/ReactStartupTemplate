import { RouteObject } from "react-router-dom";
import React from "react";
import DashLayout from "core/layouts/dashLayout/dash.layout";

const DashboardPage = React.lazy(
  () => import("modules/dashboard/dashboard.page")
);
const NotFoundPage = React.lazy(
  () => import("core/pages/notFound/notFound.page")
);

export const basicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <DashLayout />,
    children: [{ index: true, element: <DashboardPage /> }],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
