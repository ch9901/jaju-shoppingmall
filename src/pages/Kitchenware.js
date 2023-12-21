import React from "react";
import PartTitle from "../components/PartTitle";
import ProductcardWrap from "../components/ProductcardWrap";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

const ProductCategory = styled.div`
  margin-bottom: 150px;
`;
const LoadingNetYet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
`;

useSelector((state))

const Kitchenware = ({ kitchenwareList, loading }) => {
  return kitchenwareList === undefined ? (
    <LoadingNetYet>
      <ClipLoader color="#000" size={200} loading={loading} />
    </LoadingNetYet>
  ) : (
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
