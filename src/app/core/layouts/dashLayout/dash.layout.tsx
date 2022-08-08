import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import logo from "assets/images/logo.png";
import Footer from "core/components/footer/footer.component";
import Header from "core/components/header/header.component";
import NavMenu from "core/components/sidenav/navmenu/navmenu.component";
import { navMenuItems } from "core/components/sidenav/navmenu/navmenu.data";
import { useAuth } from "core/utils/auth";
import { useSideNav } from "core/utils/sidenav";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const DashLayout = () => {
  const { user } = useAuth();
  const { sidenav, handleDrawerClose } = useSideNav();
  const theme = useTheme();

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />

        <Drawer variant="permanent" open={sidenav}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: theme.spacing(1, 2),
              ...theme.mixins.toolbar,
            }}
          >
            <img src={logo} width="auto" height="60px" alt="logo" />
            <IconButton onClick={handleDrawerClose}>
              <KeyboardArrowLeftIcon />
            </IconButton>
          </Box>
          <NavMenu menu={navMenuItems} />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Header />
          <React.Suspense fallback={<>...Loading</>}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: theme.spacing(0, 1),
                ...theme.mixins.toolbar,
              }}
            />
            <Box sx={{ marginBottom: "50px", flexGrow: 1, p: 3 }}>
              <Outlet />
            </Box>
          </React.Suspense>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default DashLayout;
