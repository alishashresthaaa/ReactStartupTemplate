import AuthLayout from "core/layouts/authLayout/auth.layout";
import React from "react";
import { RouteObject } from "react-router-dom";

const LoginPage = React.lazy(() => import("modules/auth/login/login.page"));
const RegisterPage = React.lazy(
  () => import("modules/auth/register/register.page")
);
const ForgotPwdPage = React.lazy(
  () => import("modules/auth/forgotPwd/forgotPwd.page")
);

export const authRoutes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/register",
        element: <RegisterPage />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPwdPage />,
      },
    ],
  },
];
