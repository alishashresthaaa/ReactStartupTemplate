import React from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ backgroundColor: "#efefef", padding: "2rem" }}
    >
      <Grid item xs={6}>
        &copy; 2022 React Template. All rights reserved
      </Grid>
      <Grid item xs={6} sx={{ textAlign: "end" }}>
        Contact Us: +098765000
      </Grid>
    </Grid>
  );
};

export default Footer;
