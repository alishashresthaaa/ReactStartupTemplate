import * as yup from "yup";

export default interface LoginFormTypes {
  username: string;
  password: string;
}

export const loginSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(4).max(20).required(),
});
