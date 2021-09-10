import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../base/button";
import { useLocation } from "react-router-dom";
import Modal from "../../../base/modal";
import NewProduct from "./newProduct";
import { HeaderWrapper } from "./styles";

const Header = () => {
  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useState(false);

  return (
    <HeaderWrapper>
      <h1>Creatine haven </h1>
      <Link to="/">Products</Link>
      {pathname === "/" ? (
        <Button name="New Product" onClick={() => setOpenModal(true)} />
      ) : null}
      {openModal ? (
        <Modal show={openModal} setOpenModal={() => setOpenModal(false)}>
          <NewProduct setOpenModal={() => setOpenModal(false)} />
        </Modal>
      ) : null}
    </HeaderWrapper>
  );
};

export default Header;
