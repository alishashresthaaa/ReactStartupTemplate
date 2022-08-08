import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "core/routes";
import React from "react";
import theme from "styles/theme";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <React.Suspense fallback="...Loading">
          <AppRoutes />
        </React.Suspense>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
