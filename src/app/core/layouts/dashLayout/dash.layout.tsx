import Box from "@mui/material/Box";
import Footer from "core/components/footer/footer.component";
import Header from "core/components/header/header.component";
import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "core/utils/auth";

const DashLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Box
      sx={{
        maxWidth: "100% !important",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        <Header />
      </Box>
      <Box sx={{ flex: "1 0 auto", padding: "1.5rem" }}>
        <React.Suspense fallback={<>...Loading</>}>
          <Outlet />
        </React.Suspense>
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default DashLayout;
