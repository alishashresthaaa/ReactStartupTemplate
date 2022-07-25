import DashLayout from "core/layouts/dashLayout/dash.layout";
import { RouteObject } from "react-router-dom";
import React from "react";

const NotFoundPage = React.lazy(
  () => import("core/pages/notFound/notFound.page")
);

const FormExample = React.lazy(() => import("modules/examples/form/form.page"));
const HeadingExample = React.lazy(
  () => import("modules/examples/heading/heading.page")
);
const PaletteExample = React.lazy(
  () => import("modules/examples/palette/palette.page")
);
const ButtonExample = React.lazy(
  () => import("modules/examples/button/button.page")
);
const CounterExample = React.lazy(
  () => import("modules/examples/counter/counter.page")
);
const QueryExample = React.lazy(
  () => import("modules/examples/query/query.page")
);
const SingleQueryExample = React.lazy(
  () => import("modules/examples/query/singleQuery.page")
);

export const exampleRoutes: RouteObject[] = [
  {
    path: "/examples",
    element: <DashLayout />,
    children: [
      { path: "form", element: <FormExample /> },
      { path: "heading", element: <HeadingExample /> },
      { path: "palette", element: <PaletteExample /> },
      { path: "button", element: <ButtonExample /> },
      { path: "state", element: <CounterExample /> },
      { path: "query", element: <QueryExample /> },
      { path: "query/:id", element: <SingleQueryExample /> },
      { path: "list", element: <NotFoundPage /> },
      { path: "table", element: <NotFoundPage /> },
    ],
  },
];
