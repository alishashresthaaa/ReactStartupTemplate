import * as yup from "yup";

export default interface FormTwoTypes {
  gender: string;
  hobbies: string[];
  nationality: { text: string; value: string };
}

export const formTwoSchema = yup.object({
  gender: yup.string().required("Gender is required"),
  hobbies: yup
    .array()
    .required("Hobbies is required")
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
});
