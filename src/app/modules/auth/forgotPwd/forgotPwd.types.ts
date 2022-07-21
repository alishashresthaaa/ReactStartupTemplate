import * as yup from "yup";

export default interface ForgotPwdTypes {
  email: string;
}

export const forgotPwdSchema = yup.object({
  email: yup.string().required(),
});
