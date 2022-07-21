import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { theme_components } from "./components";
import { theme_palette } from "./palette";
import { theme_typography } from "./typography";

// To add a entire new option to create theme for css colors option
// interface ThemeOptions {
//   status: {
//     danger: React.CSSProperties["color"];
//   };
// }
// interface Theme {
//   status: {
//     danger: React.CSSProperties["color"];
//   };
// }

const theme = createTheme({
  palette: theme_palette,
  typography: theme_typography,
  components: theme_components,
});

export default responsiveFontSizes(theme);
