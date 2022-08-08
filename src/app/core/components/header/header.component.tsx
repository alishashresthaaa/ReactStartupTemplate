import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { headerMenuLinks, HeaderMenuLinksType } from "./header.data";
import FormLink from "shared/components/form/link/link.component";
import { useNavigate } from "react-router-dom";
import { useAuth } from "core/utils/auth";

const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <Grid container sx={{ backgroundColor: "#efefef", padding: "1rem" }}>
      <Grid item xs={1}>
        Header
      </Grid>
      <Grid item xs={8}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
          {headerMenuLinks.map((link: HeaderMenuLinksType) => {
            return (
              <Box gridColumn="span 2" key={link.label}>
                <FormLink
                  disableBottom
                  disableTop
                  name={link.label}
                  onClick={() => navigate(link.to)}
                />
              </Box>
            );
          })}
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ textAlign: "end" }}>
        <FormLink
          disableBottom
          disableTop
          name={"Logout"}
          onClick={() => auth.logout()}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
