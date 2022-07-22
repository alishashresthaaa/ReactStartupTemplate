import { theme_palette } from "styles/theme/palette";

export const theme_MuiInputOutlined = {
  styleOverrides: {
    root: ({ ownerState }: any) => ({
      " .MuiOutlinedInput-notchedOutline": {
        borderColor: theme_palette.shades[700],
        top: "0px",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme_palette.shades[100],
      },
      "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
        borderColor: theme_palette.shades[300],
      },
      "&.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: theme_palette.error.main,
      },

      "& .MuiOutlinedInput-notchedOutline legend": {
        display: "none ",
      },
    }),
    input: {
      padding: "1.5rem 1rem",
      height: "0px",
    },
  },
};
