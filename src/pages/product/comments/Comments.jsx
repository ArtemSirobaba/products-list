import React from "react";
import { useFormik } from "formik";
import useLocalStorage from "../../../hooks/useLocalStorage ";
import validationAddComment from "../../../validation/validationAddComment";
import Input from "../../../components/base/input";
import Button from "../../../components/base/button";

const Comments = ({ product }) => {
  const [products, setProducts] = useLocalStorage("products");

  const formik = useFormik({
    initialValues: {
      name: "",
      about: "",
    },
    validationSchema: validationAddComment,

    onSubmit: (values, { resetForm }) => {
      handleAddComment(values);
      resetForm();
    },
  });

  const handleAddComment = (values) => {
    const newArrayWithProducts = products.filter(
      (item) => item.id !== product.id
    );
    const noComents = !product.comments;
    if (noComents) {
      setProducts([
        { ...product, comments: [{ ...values }] },
        ...newArrayWithProducts,
      ]);
    } else {
      setProducts([
        { ...product, comments: [...product.comments, { ...values }] },
        ...newArrayWithProducts,
      ]);
    }
    window.location.reload();
  };

  return (
    <div>
      {!product.comments ? (
        <div> No comments yet</div>
      ) : (
        <div>
          {product.comments.map((item, idx) => (
            <div key={item.name + idx}>
              <h3> {item.name} </h3>
              <p> {item.about}</p>
            </div>
          ))}
        </div>
      )}
      <h1>Add comment about this product</h1>
      <Input
        id="name"
        name="name"
        type="string"
        placeholder="Your Name"
        onChange={formik.handleChange}
        value={formik.values.name}
        touched={formik.touched.name}
        errors={formik.errors.name}
      />
      <Input
        id="about"
        name="about"
        type="string"
        placeholder="About this product"
        onChange={formik.handleChange}
        value={formik.values.about}
        touched={formik.touched.about}
        errors={formik.errors.about}
      />
      <Button name="Submit and add comment" onClick={formik.handleSubmit} />
    </div>
  );
};

export default Comments;
