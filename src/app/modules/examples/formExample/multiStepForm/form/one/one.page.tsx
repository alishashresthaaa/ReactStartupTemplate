import { yupResolver } from "@hookform/resolvers/yup";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormButton from "shared/components/form/button/button.component";
import FormDatePicker from "shared/components/form/datepicker/datepicker.component";
import FormInput from "shared/components/form/input/input.component";
import { useMultiStepForm } from "shared/hooks/useMultiStep";
import FormOneTypes, { formOneSchema } from "./one.types";

const FormOne = () => {
  const { setFormValues, handleNext, formValues } = useMultiStepForm();
  const { control, handleSubmit } = useForm<FormOneTypes>({
    mode: "all",
    resolver: yupResolver(formOneSchema),
    defaultValues: {
      fullName: formValues.name ?? "",
      email: formValues.email ?? "",
      dob: formValues.dob ?? "",
    },
  });
  const formSubmitHandler: SubmitHandler<FormOneTypes> = (
    data: FormOneTypes
  ) => {
    setFormValues({
      name: data.fullName,
      email: data.email,
      dob: data.dob,
    });
    console.log(formValues);
    // setFormValues(getValues());
    // console.log(getValues());
    handleNext();
  };

  return (
    <>
      <Typography variant="paragraph1">Form Example One</Typography>
      <Container disableGutters fixed sx={{ margin: "0", width: "60%" }}>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <FormInput
            type="text"
            name="fullName"
            label="Username"
            control={control as unknown as Control<FieldValues, object>}
          />
          <FormInput
            type="text"
            name="email"
            label="Email"
            control={control as unknown as Control<FieldValues, object>}
          />
          <FormDatePicker
            name="dob"
            label="Date of birth"
            control={control as unknown as Control<FieldValues, object>}
          />
          <FormButton
            name="Next"
            value="Next"
            fullWidth
            variant="contained"
            color="primary"
          />
        </form>
      </Container>
    </>
  );
};

export default FormOne;
