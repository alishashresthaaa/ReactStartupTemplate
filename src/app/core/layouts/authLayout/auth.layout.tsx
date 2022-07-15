import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import dashlayout from "assets/images/svgs/dashboard.svg";
import { Outlet } from "react-router-dom";
import React from "react";

const AuthLayout = () => {
  return (
    <Container fixed>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh", margin: "auto" }}
      >
        <Grid item lg={6}>
          <img src={dashlayout} height="500" width="500" alt="Dash" />
        </Grid>
        <Grid item lg={6}>
          <React.Suspense fallback="...Loading">
            <Outlet />
          </React.Suspense>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthLayout;
