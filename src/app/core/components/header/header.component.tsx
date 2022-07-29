import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAuth } from "core/utils/auth";
import { useSideNav } from "core/utils/sidenav";
import FormButton from "shared/components/form/button/button.component";
import { DRAWER_WIDTH } from "shared/constants";

const Header = () => {
  const auth = useAuth();

  const { sidenav, handleDrawerOpen } = useSideNav();

  return (
    <AppBar
      position="fixed"
      sx={
        sidenav
          ? {
              marginLeft: `${DRAWER_WIDTH}px`,
              width: `calc(100% - ${DRAWER_WIDTH}px)`,
            }
          : {
              marginLeft: "0px",
              width: "100%",
            }
      }
    >
      <Toolbar>
        <IconButton
          onClick={handleDrawerOpen}
          aria-label="open drawer"
          edge="start"
          sx={{
            marginRight: 5,
            ...(sidenav && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" component="div" noWrap sx={{ flexGrow: 1 }}>
          Welcome, {auth.user}
        </Typography>
        <FormButton
          disableBottom
          disableTop
          name={"Logout"}
          color="success"
          wrapperFullWidth={false}
          onClick={() => auth.logout()}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
