import { theme_palette } from "./palette";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body?: React.CSSProperties;
    paragraph1?: React.CSSProperties;
    paragraph2?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body?: React.CSSProperties;
    paragraph1?: React.CSSProperties;
    paragraph2?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }
}

// toggle to use variant value in typogrpahy
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body: true;
    paragraph1: true;
    paragraph2: true;
    caption1: true;
    caption2: true;
  }
}

export const theme_typography = {
  h1: {
    fontWeight: 900,
    fontSize: "28px",
    fontStyle: "normal",
    color: theme_palette.shades[0o0],
    padding: "0.5rem 0",
  },
  h2: {
    fontWeight: 900,
    fontSize: "24px",
    fontStyle: "normal",
    color: theme_palette.shades[0o0],
    padding: "0.5rem 0",
  },
  h3: {
    fontWeight: 900,
    fontSize: "22px",
    fontStyle: "normal",
    color: theme_palette.shades[0o0],
    padding: "0.5rem 0",
  },
  h4: {
    fontWeight: 900,
    fontSize: "20px",
    fontStyle: "normal",
    color: theme_palette.shades[0o0],
    padding: "0.5rem 0",
  },
  h5: {
    fontWeight: 900,
    fontSize: "18px",
    fontStyle: "normal",
    color: theme_palette.shades[0o0],
    padding: "0.5rem 0",
  },
  h6: {
    fontWeight: 900,
    fontSize: "16px",
    fontStyle: "normal",
    color: theme_palette.shades[0o0],
    padding: "0.5rem 0",
  },
  body: {
    fontWeight: 900,
    fontSize: "14px",
    fontStyle: "normal",
    color: theme_palette.shades[0o0],
    display: "block",
    padding: "0.5rem 0",
  },
  paragraph1: {
    fontWeight: 600,
    fontSize: "14px",
    fontStyle: "normal",
    color: theme_palette.shades[0o0],
    display: "block",
    padding: "0.5rem 0",
  },
  paragraph2: {
    fontWeight: 500,
    fontSize: "14px",
    fontStyle: "normal",
    color: theme_palette.shades[0o0],
    display: "block",
    padding: "0.5rem 0",
  },
  caption1: {
    fontWeight: 500,
    fontSize: "10px",
    fontStyle: "italic",
    color: theme_palette.shades[0o0],
    display: "block",
    padding: "0.5rem 0",
  },
  caption2: {
    fontWeight: 500,
    fontSize: "10px",
    fontStyle: "italic",
    color: theme_palette.shades[0o0],
    display: "block",
    padding: "0.5rem 0",
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: "12px",
    fontStyle: "italic",
    color: theme_palette.shades[0o0],
    display: "block",
    padding: "0.5rem 0",
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: "12px",
    fontStyle: "italic",
    color: theme_palette.grey[800],
    display: "block",
    padding: "0.5rem 0",
  },
};
