import { yupResolver } from "@hookform/resolvers/yup";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useMultiStepForm } from "shared/hooks/useMultiStep";
import FormThreeTypes, { formThreeSchema } from "./three.types";
import FormButton from "shared/components/form/button/button.component";
import FormCheckbox from "shared/components/form/checkbox/checkbox.component";
import { useNavigate } from "react-router-dom";

const FormThree = () => {
  const navigate = useNavigate();
  const { setFormValues, formValues } = useMultiStepForm();

  const { control, handleSubmit } = useForm<FormThreeTypes>({
    mode: "all",
    resolver: yupResolver(formThreeSchema),
    defaultValues: {
      isVerified: formValues.isVerified ?? false,
    },
  });

  const formSubmitHandler: SubmitHandler<FormThreeTypes> = (
    data: FormThreeTypes
  ) => {
    setFormValues({ isVerified: data.isVerified });
    navigate("/examples/multi-step/details");
  };

  return (
    <>
      <Typography variant="paragraph1">Form Example One</Typography>
      <Container disableGutters fixed sx={{ margin: "0", width: "60%" }}>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <FormCheckbox
            label="Agree with the terms and condition"
            name="isVerified"
            control={control as unknown as Control<FieldValues, object>}
            value={false}
          />
          <FormButton
            name="Next"
            value="Next"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginLeft: "1rem" }}
          />
        </form>
      </Container>
    </>
  );
};

export default FormThree;
