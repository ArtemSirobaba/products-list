import * as yup from "yup";

const validationAddProduct = yup.object({
  name: yup.string("Enter Product name").required("Product name is required"),
  imageUrl: yup
    .string("Enter Image url name")
    .required("Enter Image url name is required"),
  count: yup
    .number("Enter Product count")
    .min(1)
    .max(1000)
    .required("Product count is required"),
  weight: yup
    .string("Enter Product weight")
    .required("Product name is required"),
});

export default validationAddProduct;
