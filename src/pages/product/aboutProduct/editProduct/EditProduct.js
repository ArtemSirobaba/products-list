import React from "react";
import { useFormik } from "formik";
import validationAddProduct from "../../../../validation/validationAddProduct";
import Button from "../../../../components/base/button";
import Input from "../../../../components/base/input";
import useLocalStorage from "../../../../hooks/useLocalStorage ";

const EditProduct = ({ product, setOpenModal }) => {
  const [products, setProducts] = useLocalStorage("products");

  const formik = useFormik({
    initialValues: {
      name: product.name,
      imageUrl: product.imageUrl,
      count: product.count,
      weight: product.weight,
    },
    validationSchema: validationAddProduct,

    onSubmit: (values, { resetForm }) => {
      handleEditProduct(values, resetForm);
    },
  });

  const handleEditProduct = (values, resetForm) => {
    const newArrayWithProducts = products.filter(
      (item) => item.id !== product.id
    );
    const editedProduct = { ...product, ...values };
    setProducts([editedProduct, ...newArrayWithProducts]);
    resetForm();
    setOpenModal();
    window.location.reload();
  };

  return (
    <div style={{padding: '20px'}}>
      <h1>Edit product</h1>
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
      <Button value="Add product" onClick={formik.handleSubmit} />
    </div>
  );
};

export default EditProduct;
