import Grid from "@mui/material/Grid";
import { useSideNav } from "core/utils/sidenav";
import { FooterContainer } from "./footer.styles";

const Footer = () => {
  const { sidenav } = useSideNav();

  return (
    <FooterContainer container sidenav={`${sidenav}`}>
      <Grid item xs={6}>
        &copy; 2022 React Template. All rights reserved
      </Grid>
      <Grid item xs={6} sx={{ textAlign: "end" }}>
        Contact Us: +098765000
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
