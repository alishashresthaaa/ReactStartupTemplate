import { yupResolver } from "@hookform/resolvers/yup";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { SubmitHandler, useForm } from "react-hook-form";
import FormTypes, { formSchema } from "./form.types";
import FormInput from "shared/components/form/input/input.component";
import FormButton from "shared/components/form/button/button.component";
import FormRadio from "shared/components/form/radio/radio.components";
import FormCheckList from "shared/components/form/checklist/checklist.component";
import FormCheckbox from "shared/components/form/checkbox/checkbox.component";
import { genderData, hobbiesList, nationList } from "./form.data";
import FormAutocomplete from "shared/components/form/autocompelete/autocomplete.component";

const FormExample = () => {
  const { control, trigger, setValue, handleSubmit } = useForm<FormTypes>({
    mode: "all",
    resolver: yupResolver(formSchema),
  });

  const formSubmitHandler: SubmitHandler<FormTypes> = (data: FormTypes) => {
    console.log(data);
  };

  return (
    <>
      <Typography variant="paragraph1">Form Example</Typography>
      <Container disableGutters fixed sx={{ margin: "0", width: "50%" }}>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <FormInput
            type="text"
            name="username"
            label="Username"
            control={control}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            control={control}
          />
          <FormInput
            type="password"
            name="repassword"
            label="Confirm Password"
            control={control}
          />
          <FormInput type="text" name="email" label="Email" control={control} />
          <FormRadio
            radioButtonLabel="Gender"
            radioList={genderData}
            name="gender"
            control={control}
          />
          <FormAutocomplete
            name="nationality"
            label="Nationality"
            options={nationList}
            control={control}
          />
          <FormCheckList
            checklistLabel="Hobbies"
            checklist={hobbiesList}
            name="hobbies"
            control={control}
            setValue={setValue}
          />

          <FormCheckbox
            label="Agree with the terms and condition"
            name="isVerified"
            control={control}
            trigger={trigger}
            value={false}
          />
          <FormButton
            name="Register"
            value="Submit"
            fullWidth
            variant="contained"
            color="primary"
          />
        </form>
      </Container>
    </>
  );
};

export default FormExample;
