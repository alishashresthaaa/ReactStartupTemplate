import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { paletteList } from "./palette.data";

const PaletteExample = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {paletteList.map((palette: any) => {
        return (
          <Grid
            item
            key={palette.label}
            xs={1}
            sm={2}
            md={3}
            sx={{
              backgroundColor: palette.color,
              height: "100px",
              textAlign: "center",
            }}
          >
            <Typography variant="h4"> {palette.label}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PaletteExample;
