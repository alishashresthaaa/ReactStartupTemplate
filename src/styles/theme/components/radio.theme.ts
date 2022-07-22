import { theme_palette } from "styles/theme/palette";

export const theme_MuiRadio = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
    disableFocusRipple: true,
  },
  styleOverrides: {
    root: ({ ownerState }: any) => ({
      //   color: theme_palette.primary.main,
      "&:hover": {
        backgroundColor: theme_palette.shades["fff"],
      },
      "&.Mui-checked": {
        // color: theme_palette.primary.main,
      },
    }),

    input: ({ ownerState }: any) => ({}),
  },
};
