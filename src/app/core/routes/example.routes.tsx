import DashLayout from "core/layouts/dashLayout/dash.layout";
import { RouteObject } from "react-router-dom";
import React from "react";

const NotFoundPage = React.lazy(
  () => import("core/pages/notFound/notFound.page")
);
const FormExample = React.lazy(
  () => import("modules/examples/formExample/form/form.page")
);
const FormDetailsExample = React.lazy(
  () => import("modules/examples/formExample/formDetails/formDetails.page")
);
const MultiStepFormExample = React.lazy(
  () => import("modules/examples/formExample/multiStepForm/multiStep.page")
);
const MultiStepDetailsForm = React.lazy(
  () =>
    import("modules/examples/formExample/multiStepForm/details/details.page")
);
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
const BasicTableExample = React.lazy(
  () => import("modules/examples/tables/basicTable/basicTable.page")
);

export const exampleRoutes: RouteObject[] = [
  {
    path: "/examples",
    element: <DashLayout />,
    children: [
      { path: "form", element: <FormExample /> },
      { path: "form/details", element: <FormDetailsExample /> },
      { path: "multi-step", element: <MultiStepFormExample /> },
      { path: "multi-step/details", element: <MultiStepDetailsForm /> },
      { path: "heading", element: <HeadingExample /> },
      { path: "palette", element: <PaletteExample /> },
      { path: "button", element: <ButtonExample /> },
      { path: "state", element: <CounterExample /> },
      { path: "query", element: <QueryExample /> },
      { path: "query/:id", element: <SingleQueryExample /> },
      { path: "list", element: <NotFoundPage /> },
      { path: "table/basic-table", element: <BasicTableExample /> },
    ],
  },
];
