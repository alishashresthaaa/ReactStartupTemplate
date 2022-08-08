import { yupResolver } from "@hookform/resolvers/yup";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useAppDispatch } from "app/state";
import { SET_FORM_DATA } from "app/state/modules/form/formSlice";
import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormAutocomplete from "shared/components/form/autocompelete/autocomplete.component";
import FormButton from "shared/components/form/button/button.component";
import FormCheckbox from "shared/components/form/checkbox/checkbox.component";
import FormCheckList from "shared/components/form/checklist/checklist.component";
import FormDatePicker from "shared/components/form/datepicker/datepicker.component";
import FormInput from "shared/components/form/input/input.component";
import FormRadio from "shared/components/form/radio/radio.components";
import { genderData, hobbiesList, nationList } from "./form.data";
import FormTypes, { formSchema } from "./form.types";

const FormExample = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<FormTypes>({
    mode: "all",
    resolver: yupResolver(formSchema),
  });

  const formSubmitHandler: SubmitHandler<FormTypes> = (data: FormTypes) => {
    navigate("/examples/form/details");
    dispatch(
      SET_FORM_DATA({
        name: data.username,
        password: data.password,
        email: data.email,
        nationality: data.nationality.text,
        gender: data.gender,
        hobbies: data.hobbies,
      })
    );
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
            control={control as unknown as Control<FieldValues, object>}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            control={control as unknown as Control<FieldValues, object>}
          />
          <FormInput
            type="password"
            name="repassword"
            label="Confirm Password"
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
          <FormCheckbox
            label="Agree with the terms and condition"
            name="isVerified"
            control={control as unknown as Control<FieldValues, object>}
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
