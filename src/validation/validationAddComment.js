import * as yup from "yup";

const validationAddComment = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  about: yup
    .string("Eneter About product")
    .required("About product is required"),
});

export default validationAddComment;
