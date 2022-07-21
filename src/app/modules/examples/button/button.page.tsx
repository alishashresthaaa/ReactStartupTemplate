import Grid from "@mui/material/Grid";
import { buttonList } from "./button.data";
import FormButton from "shared/components/form/button/button.component";

const ButtonExample = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {buttonList.map((button: any, index: any) => {
        return (
          <Grid xs={1} sm={2} md={2} item key={index}>
            <FormButton
              name={button.label}
              variant={button.variant}
              color={button.color}
              size={button.size}
              hasIcon={button.hasIcon}
              iconPos={button.iconPos}
              icon={button.icon}
              isUploadBtn={button.isUploadBtn}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ButtonExample;
