import { theme_palette } from "styles/theme/palette";
import { theme_typography } from "../typography";

export const theme_MuiFormHelper = {
  styleOverrides: {
    root: ({ ownerState }: any) => ({
      fontSize: theme_typography.body.fontSize,
      padding: "0.5rem 0.4rem 0rem 0.4rem",
      margin: "0px",
      ...(ownerState.error
        ? {
            color: theme_palette.error.main,
          }
        : { color: theme_palette.shades[600] }),
    }),
  },
};
