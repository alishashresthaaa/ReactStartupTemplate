import * as yup from "yup";

export default interface FormTypes {
  username: string;
  password: string;
  repassword: string;
  email: string;
  gender: string;
  hobbies: string[];
  nationality: { text: string; value: string };
  isVerified: boolean;
}

export const formSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Min 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case Character"
    )
    .required("Password is required"),
  repassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  gender: yup.string().required("Gender is required"),
  hobbies: yup
    .array()
    .min(1, "Please select any one")
    .of(yup.string().required("Hobbies is required")),
  nationality: yup
    .object()
    .shape({
      text: yup.string().required("Nationality is required"),
      value: yup.string().required("Nationality is required"),
    })
    .nullable()
    .required("Nationality is required."),
  isVerified: yup
    .bool()
    .oneOf([true], "Please accept the terms and condition")
    .required("Please accept the terms and condition"),
});
