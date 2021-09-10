import React, { useState } from "react";
import Button from "../../../components/base/button";
import Modal from "../../../components/base/modal";
import EditProduct from "./editProduct";

const AboutProduct = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleEditProduct = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Count: {product.count}</p>
      <p>Product weight: {product.weight}</p>
      <Button name="Edit" onClick={handleEditProduct} />
      {openModal ? (
        <Modal show={openModal} setOpenModal={() => setOpenModal(false)}>
          <EditProduct
            setOpenModal={() => setOpenModal(false)}
            product={product}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default AboutProduct;
