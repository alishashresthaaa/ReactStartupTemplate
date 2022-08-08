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
      // Sizes
      ...(ownerState.size === "small" && {
        padding: "0.5rem 1rem",
      }),
      ...(ownerState.size === "medium" && {
        padding: "0.5rem 1.5em",
      }),
      ...(ownerState.size === "large" && {
        padding: "0.5rem 2em",
      }),
      ...(ownerState.variant === "outlined" && {
        borderWidth: "2px",
        borderStyle: "solid",
      }),

      // Variant === contained , color === primary
      ...(ownerState.variant === "contained" &&
        ownerState.color === "primary" && {
          backgroundColor: theme_palette.primary.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: theme_palette.primary.dark,
          },
          "&:disabled": {
            backgroundColor: theme_palette.primary.light,
          },
        }),

      // Variant === outlined , color === primary
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "primary" && {
          "&:hover": {
            backgroundColor: theme_palette.primary.dark,
            color: theme_palette.shades["fff"],
          },
          "&:disabled": {},
        }),

      // Variant === contained , color === secondary
      ...(ownerState.variant === "contained" &&
        ownerState.color === "secondary" && {
          backgroundColor: theme_palette.secondary.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: theme_palette.secondary.dark,
          },
          "&:disabled": {
            backgroundColor: theme_palette.secondary.light,
          },
        }),
      // Variant === outlined , color === secondary
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "secondary" && {
          "&:hover": {
            backgroundColor: theme_palette.secondary.dark,
            color: theme_palette.shades["fff"],
          },
          "&:disabled": {},
        }),

      // Variant === contaiend , color === success
      ...(ownerState.variant === "contained" &&
        ownerState.color === "success" && {
          backgroundColor: theme_palette.success.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: theme_palette.success.dark,
          },
          "&:disabled": {
            backgroundColor: theme_palette.success.light,
          },
        }),
      // Variant === outlined , color === success
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "success" && {
          "&:hover": {
            backgroundColor: theme_palette.success.dark,
            color: theme_palette.shades["fff"],
          },
          "&:disabled": {},
        }),

      // Variant === contaiend , color === error
      ...(ownerState.variant === "contained" &&
        ownerState.color === "error" && {
          backgroundColor: theme_palette.error.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: theme_palette.error.dark,
          },
          "&:disabled": {
            backgroundColor: theme_palette.error.light,
          },
        }),
      // Variant === outlined , color === error
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "error" && {
          "&:hover": {
            backgroundColor: theme_palette.error.dark,
            color: theme_palette.shades["fff"],
          },
          "&:disabled": {},
        }),
    }),
  },
};
