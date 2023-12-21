import React from "react";
import ProductAll from "../pages/ProductAll";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";

const PrivateRoute = ({ authenticate }) => {
  return authenticate ? <ProductDetail /> : <Login />;
};

export default PrivateRoute;
