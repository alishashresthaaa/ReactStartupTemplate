import * as yup from "yup";

export default interface FormOneTypes {
  fullName: string;
  email: string;
  dob: any;
}

export const formOneSchema = yup.object({
  fullName: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  dob: yup.string().nullable().required("Required"),
});
