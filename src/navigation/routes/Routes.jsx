import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "../../pages/products";
import Product from "../../pages/product";
import StyleLayout from "../../components/custom/styleLayout";

const Routes = () => {
  return (
    <StyleLayout>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/:product" component={Product} />
      </Switch>
    </StyleLayout>
  );
};

export default Routes;
