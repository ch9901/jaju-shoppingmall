import React, { useEffect } from "react";
import PartTitle from "../components/PartTitle";
import ProductcardWrap from "../components/ProductcardWrap";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";

const ProductCategory = styled.div`
  margin-bottom: 150px;
`;

const LoadingNetYet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
const Kitchenware = ({ kitchenwareList, loading }) => {
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
