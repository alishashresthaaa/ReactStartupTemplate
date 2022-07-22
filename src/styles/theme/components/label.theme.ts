import { theme_palette } from "styles/theme/palette";

export const theme_MuiInputLabel = {
  styleOverrides: {
    root: ({ ownerState }: any) => ({
      color: theme_palette.shades[200],
      padding: "0.2rem 0.4rem",
      position: "unset",
      transform: "none",
      zIndex: "unset",
      "&.Mui-focused": {
        color: theme_palette.shades[0o0],
      },
      "&.Mui-error": {
        color: theme_palette.error.main,
      },
      "&.Mui-disabled": {
        color: theme_palette.shades[300],
      },
    }),
  },
};
