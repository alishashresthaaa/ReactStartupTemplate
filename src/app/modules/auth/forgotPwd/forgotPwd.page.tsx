import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import FormButton from "shared/components/form/button/button.component";
import FormInput from "shared/components/form/input/input.component";
import FormLink from "shared/components/form/link/link.component";
import { useNavigate } from "react-router-dom";
import ForgotPwdTypes, { forgotPwdSchema } from "./forgotPwd.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

const ForgotPwdPage = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<ForgotPwdTypes>({
    mode: "onTouched",
    resolver: yupResolver(forgotPwdSchema),
  });

  const formSubmitHandler: SubmitHandler<ForgotPwdTypes> = (
    data: ForgotPwdTypes
  ) => {
    alert("error");
  };

  return (
    <>
      <Typography variant="h3">Forgot Password</Typography>
      <Typography variant="h6">
        Please enter to email to get new password
      </Typography>
      <Container disableGutters fixed sx={{ margin: "2rem 0" }}>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <FormInput
            type="text"
            name="email"
            label="Email"
            control={control}
            fullWidth
          />
          <FormButton name="Send mail" value="Submit" fullWidth />
          <FormLink
            name="Already have an account? Login !"
            disableBottom={true}
            disableTop={true}
            onClick={() => navigate("/auth/login")}
          />
        </form>
      </Container>
    </>
  );
};

export default ForgotPwdPage;
