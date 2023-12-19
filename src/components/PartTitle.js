import React from "react";
import { Desc } from "./Navigation";
import styled from "styled-components";
import { Inner } from "../App";
import Productcard from "./ProductcardWrap";

// const Inner = styled.div`
//   padding: 20px 100px;
//   margin-top: 30px;
// `;
const ProductCategory = styled.div``;
const Title = styled(Desc)`
  font-size: 25px;
  font-weight: 600;
  margin-right: 20px;
`;

const PartTitle = ({ title, desc }) => {
  return (
    <Inner>
      <ProductCategory>
        <Title>{title}</Title>
        <Desc color="#555">{desc}</Desc>
      </ProductCategory>
    </Inner>
  );
};

export default PartTitle;
