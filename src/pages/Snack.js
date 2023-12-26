import React, { useEffect } from "react";
import styled from "styled-components";
import PartTitle from "../components/PartTitle";
import ProductcardWrap from "../components/ProductcardWrap";

const ProductCategory = styled.div`
  margin-bottom: 150px;
`;

const Snack = ({ snackList }) => {
  return (
    <ProductCategory>
      <PartTitle
        title={"스낵"}
        desc={
          "달달함 가득, 특별한 맛의 과자로 당신의 눈과 입맛을 사로잡아보세요!"
        }
      />
      <ProductcardWrap itemList={snackList} />
    </ProductCategory>
  );
};

export default Snack;
