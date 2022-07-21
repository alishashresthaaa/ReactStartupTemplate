import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { headerMenuLinks, HeaderMenuLinksType } from "./header.data";
import FormLink from "shared/components/form/link/link.component";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ backgroundColor: "#efefef", padding: "1rem" }}
    >
      <Grid item xs={2}>
        Header
      </Grid>
      <Grid item xs={8}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
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
      <Grid item xs={2} sx={{ textAlign: "end" }}>
        Hello User
      </Grid>
    </Grid>
  );
};

export default Header;
