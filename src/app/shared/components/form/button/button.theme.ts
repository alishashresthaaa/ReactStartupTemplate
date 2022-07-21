import { theme_palette } from "styles/theme/palette";

export const theme_MuiButtonBase = {
  defaultProps: { disableRipple: true },
};

export const theme_MuiButton = {
  styleOverrides: {
    root: ({ ownerState }: any) => ({
      fontSize: "1rem",
      height: "36px",
      borderRadius: "0.2rem",
      textTransform: "capitalize" as const,
      cursor: "pointer",
      "&:hover": {},
      ...(ownerState.variant === "contained" &&
        ownerState.color === "primary" && {
          backgroundColor: theme_palette.primary.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: theme_palette.primary.dark,
          },
        }),
      ...(ownerState.variant === "contained" &&
        ownerState.color === "secondary" && {
          backgroundColor: theme_palette.secondary.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: theme_palette.secondary.dark,
          },
        }),
      ...(ownerState.variant === "contained" &&
        ownerState.color === "success" && {
          backgroundColor: theme_palette.success.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: theme_palette.success.dark,
          },
        }),
      ...(ownerState.variant === "error" &&
        ownerState.color === "primary" && {
          backgroundColor: theme_palette.error.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: theme_palette.error.dark,
          },
        }),
    }),
  },
};
