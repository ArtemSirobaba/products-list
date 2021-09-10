import React from "react";
import { useFormik } from "formik";
import validationAddProduct from "../../../../../validation/validationAddProduct";
import Input from "../../../../base/input";
import Button from "../../../../base/button";
import useLocalStorage from "../../../../../hooks/useLocalStorage ";

const NewProduct = ({setOpenModal}) => {
  const [products, setProducts] = useLocalStorage("products");

  const formik = useFormik({
    initialValues: {
      name: "",
      imageUrl: "",
      count: "",
      weight: "",
    },
    validationSchema: validationAddProduct,

    onSubmit: (values, { resetForm }) => {
      handleAddNewProduct(values, resetForm);
    },
  });

  const handleAddNewProduct = (values, resetForm) => {
    const newValues = {
      id: products.length + 1,
      ...values,
      url: values.name.split(" ").join("-"),
    };
    setProducts([...products, newValues]);
    setOpenModal()
    resetForm()
    window.location.reload(); 
  };

  return (
    <div style={{padding: '20px'}}>
      <h1>Add new product</h1>
      <Input
        id="name"
        name="name"
        type="string"
        placeholder="Product Name"
        onChange={formik.handleChange}
        value={formik.values.name}
        touched={formik.touched.name}
        errors={formik.errors.name}
      />
      <Input
        id="imageUrl"
        name="imageUrl"
        type="string"
        placeholder="Image Url"
        onChange={formik.handleChange}
        value={formik.values.imageUrl}
        touched={formik.touched.imageUrl}
        errors={formik.errors.imageUrl}
      />
      <Input
        id="count"
        name="count"
        type="number"
        placeholder="Count"
        onChange={formik.handleChange}
        value={formik.values.count}
        touched={formik.touched.count}
        errors={formik.errors.count}
      />
      <Input
        id="weight"
        name="weight"
        type="string"
        placeholder="Product weight"
        onChange={formik.handleChange}
        value={formik.values.weight}
        touched={formik.touched.weight}
        errors={formik.errors.weight}
      />
      <Button name="Add product" onClick={formik.handleSubmit} />
    </div>
  );
};

export default NewProduct;
