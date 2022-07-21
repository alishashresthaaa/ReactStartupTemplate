import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "core/routes";
import React from "react";
import theme from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Suspense fallback="...Loading">
        <AppRoutes />
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
