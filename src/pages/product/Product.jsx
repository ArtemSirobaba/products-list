import React from "react";
import { useLocation, Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage ";
import Button from "../../components/base/button";
import AboutProduct from "./aboutProduct";
import Comments from "./comments/";

const Product = () => {
  const { pathname } = useLocation();
  const [products] = useLocalStorage("products");

  const product = products.filter(
    (product) => product.url === pathname.slice(1)
  )[0];

  return (
    <div>
      {product ? (
        <>
          <AboutProduct product={product} />
          <Comments product={product} />
        </>
      ) : (
        <div>
          <h3> Nothing here, come back </h3>
          <Link to="/">
            <Button name="Home page" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Product;
