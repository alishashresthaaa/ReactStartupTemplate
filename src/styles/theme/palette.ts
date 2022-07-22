// For overriding the default mui theme object
declare module "@mui/material/styles" {
  // If you want to add extra key name to the palette
  interface Palette {
    shades: Palette["primary"];
  }
  interface PaletteOptions {
    shades: PaletteOptions["primary"];
  }

  // If you want to add extra properties for color code in the object
  interface PaletteColor {
    0o0?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    fff?: string;
  }
  interface SimplePaletteColorOptions {
    0o0?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    fff?: string;
  }
}

export const theme_palette = {
  primary: {
    light: "#42a5f5",
    main: "#1976d2",
    dark: "#1565c0",
  },
  secondary: {
    light: "#ba68c8",
    main: "#9c27b0",
    dark: "#7b1fa2",
  },
  error: {
    light: "#ef5350",
    main: "#d32f2f",
    dark: "#c62828",
  },
  warning: {
    light: "#ff9800",
    main: "#ed6c02",
    dark: "#e65100",
  },
  info: {
    light: "#03a9f4",
    main: "#0288d1",
    dark: "#01579b",
  },
  success: {
    light: "#4caf50",
    main: "#2e7d32",
    dark: "#1b5e20",
  },
  grey: {
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  shades: {
    0o0: "#000000",
    100: "#191919",
    200: "#323232",
    300: "#4c4c4c",
    400: "#666666",
    500: "#7f7f7f",
    600: "#999999",
    700: "#b2b2b2",
    800: "#cccccc",
    900: "#e5e5e5",
    fff: "#ffffff",
  },
  // action: {
  //   active: "",
  //   hover: "",
  //   selected: "",
  // },
};
