import React from "react";
import ProductAll from "../pages/ProductAll";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";

const PrivateRoute = ({ authenticate, setAuthenticate }) => {
  return authenticate ? (
    <ProductDetail />
  ) : (
    <Login setAuthenticate={setAuthenticate} />
  );
};

export default PrivateRoute;
