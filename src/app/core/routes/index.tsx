import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { basicRoutes } from "./basic.routes";
import { authRoutes } from "./auth.routes";

const routes: RouteObject[] = [...basicRoutes, ...authRoutes];

const AppRoutes: React.FC = (): JSX.Element => {
  const router = useRoutes(routes);
  return <>{router}</>;
};

export default AppRoutes;
