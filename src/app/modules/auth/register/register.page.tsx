import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import FormButton from "shared/components/form/button/button.component";
import FormInput from "shared/components/form/input/input.component";
import FormLink from "shared/components/form/link/link.component";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import RegisterFormTypes, { registerSchema } from "./register.types";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<RegisterFormTypes>({
    mode: "onTouched",
    resolver: yupResolver(registerSchema),
  });

  const formSubmitHandler: SubmitHandler<RegisterFormTypes> = (
    data: RegisterFormTypes
  ) => {
    console.log("data is", data);
    navigate("/auth/login");
  };
  return (
    <>
      <Typography variant="h3">Register</Typography>
      <Typography variant="h6">Please register to create username</Typography>
      <Container disableGutters fixed sx={{ margin: "2rem 0" }}>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <FormInput
            type="text"
            name="username"
            label="Username"
            control={control}
            fullWidth
          />
          <FormInput
            type="text"
            name="email"
            label="Email"
            control={control}
            fullWidth
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            control={control}
            fullWidth
          />
          <FormInput
            type="password"
            name="repassword"
            label="Confirm Password"
            control={control}
            fullWidth
          />
          <FormButton name="Register" value="Submit" fullWidth />
          <FormLink
            name="Already have an account? Login !"
            disableBottom={true}
            disableTop={true}
            alignItems="center"
            onClick={() => navigate("/auth/login")}
          />
        </form>
      </Container>
    </>
  );
};

export default RegisterPage;
