import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/base/button";
import Dropdown from "../../components/base/dropdown";
import Modal from "../../components/base/modal";
import DeleteProduct from "./deleteProduct";
import useLocalStorage from "../../hooks/useLocalStorage ";
import { CardWrapper, Wrapper, PageWrapper } from "./styles";

const Products = () => {
  const [products] = useLocalStorage("products");
  const [productsList, setProductsList] = useState([...products]);
  const [name, setName] = useState("Default");
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteProduct = (id) => {
    setDeleteId(id);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setDeleteId(null);
    setOpenModal(false);
  };

  const sortBy = [
    { id: "default", name: "Default" },
    { id: "name", name: "Name" },
    { id: "totalNumber", name: "Total Number" },
  ];

  const handleSortProducts = (value) => {
    setName(sortBy.find((item) => item.id === value).name);
    switch (value) {
      case "default":
        setProductsList([...products]);
        break;
      case "name":
        setProductsList(
          productsList.sort((a, b) => a.name.localeCompare(b.name))
        );
        break;
      case "totalNumber":
        setProductsList(productsList.sort((a, b) => b.count - a.count));
        break;
      default:
        setProductsList([...products]);
    }
  };

  return (
    <PageWrapper>
      <Dropdown sortBy={sortBy} name={name} setSort={handleSortProducts} />

      {openModal ? (
        <Modal show={openModal} setOpenModal={handleModalClose}>
          <DeleteProduct id={deleteId} setModalOpen={handleModalClose} />
        </Modal>
      ) : null}

      <Wrapper>
        {productsList ? (
          productsList.map((item) => (
            <CardWrapper key={item.id + item.url}>
              <Link to={item.url}>
                <img src={item.imageUrl} alt={item.name} />
                <h1>{item.name}</h1>
                <p>Count: {item.count}</p>
                <p>Product weight: {item.weight}</p>
              </Link>
              <Button
                name={"Delete product"}
                onClick={() => handleDeleteProduct(item.id)}
              />
            </CardWrapper>
          ))
        ) : (
          <div> We sold everything :(</div>
        )}
      </Wrapper>
    </PageWrapper>
  );
};

export default Products;
