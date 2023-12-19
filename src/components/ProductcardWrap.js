import React from "react";
import { Inner } from "../App";
import styled from "styled-components";
import ProductCard from "./ProductCard";
const All = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 30px;
  b {
    padding-left: 4px;
    color: #d99c63;
  }
`;

const ProductcardWrap = () => {
  return (
    <Inner>
      <All>
        전체상품 <b>509</b>
      </All>
      <ProductCard />
    </Inner>
  );
};

export default ProductcardWrap;
