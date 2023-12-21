import React from "react";
import { Desc } from "./Navigation";
import styled from "styled-components";

const PartTitleInner = styled.div`
  padding: 30px 0;
`;

const ProductCategory = styled.div`
  margin-bottom: 40px;
border-bottom:1px solid #ddd;
padding-bottom:15px;
  `;
const Title = styled(Desc)`
  font-size: 25px;
  font-weight: 600;
  margin-right: 20px;
`;

const PartTitle = ({ title, desc }) => {
  return (
    <PartTitleInner>
      <ProductCategory>
        <Title>{title}</Title>
        <Desc color="#555">{desc}</Desc>
      </ProductCategory>
    </PartTitleInner>
  );
};

export default PartTitle;
