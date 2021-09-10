import React from "react";
import Button from "../../../components/base/button";
import useLocalStorage from "../../../hooks/useLocalStorage ";

const DeleteProduct = ({ id, setModalOpen }) => {
  const [products, setProducts] = useLocalStorage("products");

  const handleDeleteProduct = () => {
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
    window.location.reload(); 
    setModalOpen();
  };

  return (
    <div style={{padding: '20px'}}>
      <h1>Are you sure?</h1>
      <Button name="Confirm!" onClick={handleDeleteProduct} />
    </div>
  );
};

export default DeleteProduct;
