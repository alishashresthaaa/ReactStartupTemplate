declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xxl: true;
  }
}

export const theme_breakpoints = {
  values: { xxs: 0, xs: 320, sm: 480, md: 768, lg: 1024, xl: 1200, xxl: 1400 },
};
