import Grid, { GridProps } from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { DRAWER_WIDTH } from "shared/constants";

interface FooterContainerProps extends GridProps {
  sidenav: string;
}

export const FooterContainer = styled(Grid)<FooterContainerProps>(
  ({ theme, sidenav }) => {
    const styles =
      sidenav === "true"
        ? {
            marginLeft: `${DRAWER_WIDTH}px`,
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            transition: theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }
        : { marginLeft: "0px", width: "100%", zIndex: theme.zIndex.drawer + 1 };
    return {
      position: "fixed",
      bottom: "0px",
      left: "auto",
      right: 0,
      background: theme.palette.grey[200],
      padding: "1rem",
      flexGrow: 1,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...styles,
    };
  }
);
