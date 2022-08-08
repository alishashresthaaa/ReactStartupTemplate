import { yupResolver } from "@hookform/resolvers/yup";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormAutocomplete from "shared/components/form/autocompelete/autocomplete.component";
import FormButton from "shared/components/form/button/button.component";
import FormCheckList from "shared/components/form/checklist/checklist.component";
import FormRadio from "shared/components/form/radio/radio.components";
import { useMultiStepForm } from "shared/hooks/useMultiStep";
import { genderData, hobbiesList, nationList } from "../../multiStep.data";
import FormTwoTypes, { formTwoSchema } from "./two.types";

const FormTwo = () => {
  const { setFormValues, handleNext, handleBack, formValues } =
    useMultiStepForm();

  const { control, handleSubmit } = useForm<FormTwoTypes>({
    mode: "all",
    resolver: yupResolver(formTwoSchema),
    defaultValues: {
      gender: formValues.gender ?? "",
      hobbies: formValues.hobbies ?? [],
      nationality: formValues.nationality ?? "",
    },
  });

  const formSubmitHandler: SubmitHandler<FormTwoTypes> = (
    data: FormTwoTypes
  ) => {
    setFormValues({
      gender: data.gender,
      hobbies: data.hobbies,
      nationality: data.nationality,
    });
    handleNext();
  };

  return (
    <>
      <Typography variant="paragraph1">Form Example One</Typography>
      <Container disableGutters fixed sx={{ margin: "0", width: "60%" }}>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <FormRadio
            radioButtonLabel="Gender"
            radioList={genderData}
            name="gender"
            control={control as unknown as Control<FieldValues, object>}
          />
          <FormAutocomplete
            name="nationality"
            label="Nationality"
            options={nationList}
            control={control as unknown as Control<FieldValues, object>}
          />
          <FormCheckList
            checklistLabel="Hobbies"
            checklist={hobbiesList}
            name="hobbies"
            control={control as unknown as Control<FieldValues, object>}
          />
          <FormButton
            name="Back"
            value="Back"
            fullWidth
            variant="outlined"
            color="info"
            onClick={handleBack}
            wrapperFullWidth={false}
          />
          <FormButton
            name="Next"
            value="Next"
            fullWidth
            variant="contained"
            color="primary"
            wrapperFullWidth={false}
            sx={{ marginLeft: "1rem" }}
          />
        </form>
      </Container>
    </>
  );
};

export default FormTwo;
