import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "core/routes";
import React from "react";
import theme from "styles/theme";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "core/utils/auth";
import { SideNavProvoder } from "core/utils/sidenav";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <React.Suspense fallback="...Loading">
          <AuthProvider>
            <SideNavProvoder>
              <AppRoutes />
            </SideNavProvoder>
          </AuthProvider>
        </React.Suspense>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
