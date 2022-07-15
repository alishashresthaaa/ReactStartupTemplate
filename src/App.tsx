import AppRoutes from "core/routes";
import React from "react";

function App() {
  return (
    <React.Suspense fallback="...Loading">
      <AppRoutes />
    </React.Suspense>
  );
}

export default App;
