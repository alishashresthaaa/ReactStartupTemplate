import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>DashLayout</Grid>
      <Grid item>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default DashLayout;
