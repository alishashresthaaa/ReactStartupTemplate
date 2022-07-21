import { yupResolver } from "@hookform/resolvers/yup";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormButton from "shared/components/form/button/button.component";
import FormInput from "shared/components/form/input/input.component";
import FormLink from "shared/components/form/link/link.component";
import LoginFormTypes, { loginSchema } from "./login.types";

const LoginPage = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginFormTypes>({
    mode: "onTouched",
    resolver: yupResolver(loginSchema),
  });

  const fromSubmitHandler: SubmitHandler<LoginFormTypes> = (
    data: LoginFormTypes
  ) => {
    console.log("data is", data);
    navigate("/");
  };
  return (
    <>
      <Typography variant="h3">Login</Typography>
      <Typography variant="h6">Please login to proceed to dashboard</Typography>
      <Container disableGutters fixed sx={{ margin: "2rem 0" }}>
        <form onSubmit={handleSubmit(fromSubmitHandler)}>
          <FormInput
            type="text"
            name="username"
            label="Username"
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
          <FormLink
            name="Forgot password?"
            disableBottom={true}
            disableTop={true}
            alignItems="flex-end"
            onClick={() => navigate("/auth/forgot-password")}
          />
          <FormButton name="Submit" value="Submit" fullWidth />
          <FormLink
            name="Don't have an account? Register !"
            disableBottom={true}
            disableTop={true}
            alignItems="flex-end"
            onClick={() => navigate("/auth/register")}
          />
        </form>
      </Container>
    </>
  );
};

export default LoginPage;
