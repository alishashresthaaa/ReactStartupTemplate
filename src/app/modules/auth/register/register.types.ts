import * as yup from "yup";

export default interface RegisterFormTypes {
  username: string;
  email: string;
  password: string;
  repassword: string;
}

export const registerSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  repassword: yup.string().required(),
});
