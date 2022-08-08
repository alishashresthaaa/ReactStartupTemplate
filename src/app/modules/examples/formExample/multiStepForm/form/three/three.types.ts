import * as yup from "yup";

export default interface FormThreeTypes {
  isVerified: boolean;
}

export const formThreeSchema = yup.object({
  isVerified: yup
    .bool()
    .oneOf([true], "Please accept the terms and condition")
    .required("Please accept the terms and condition"),
});
