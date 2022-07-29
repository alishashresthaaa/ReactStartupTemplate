import { theme_palette } from "../palette";

export const theme_MuiAppbar = {
  styleOverrides: {
    root: (props: any) => {
      const { ownerState, theme } = props;
      return {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme_palette.grey[200],
        boxShadow: "none",
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(!ownerState.open && {
          //   marginLeft: DRAWER_WIDTH,
          //   width: `calc(100% - ${DRAWER_WIDTH}px)`,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      };
    },
  },
};
