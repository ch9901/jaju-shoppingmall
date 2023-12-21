import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
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
const ProductcardWrapInner = styled.div``;

const ProductcardWrap = (props) => {
  const itemsArr = props?.itemList;
  const itemListLength = itemsArr?.length;

  return (
    <ProductcardWrapInner>
      <All>
        전체상품 <b>{itemListLength}</b>
      </All>
      <ProductCard itemList={itemsArr} />
    </ProductcardWrapInner>
  );
};

export default ProductcardWrap;
