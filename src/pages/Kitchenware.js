import React from "react";
import PartTitle from "../components/PartTitle";
import ProductcardWrap from "../components/ProductcardWrap";
import styled from "styled-components";

const ProductCategory = styled.div`
  margin-bottom: 150px;
`;

const Kitchenware = ({ kitchenwareList }) => {
  return (
    <ProductCategory>
      <PartTitle
        title={"주방용품"}
        desc={
          "현대주방의 필수템, 효율과 실용을 챙긴 주방용품으로 간편한 조리를 경험하세요!"
        }
      />
      <ProductcardWrap itemList={kitchenwareList} />
    </ProductCategory>
  );
};

export default Kitchenware;
