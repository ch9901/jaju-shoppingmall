import React, { useEffect } from "react";
import styled from "styled-components";
import PartTitle from "../components/PartTitle";
import ProductcardWrap from "../components/ProductcardWrap";
import { setPageTitle } from "../util";

const ProductCategory = styled.div`
  margin-bottom: 150px;
`;

const Fashion = ({ fashionList }) => {
  useEffect(() => {
    setPageTitle("JAJU - Fashion👕");
  }, []);
  return (
    <ProductCategory>
      <PartTitle
        title={"패션잡화"}
        desc={"독보적인 패션잡화로 특별한 스타일을 완성하세요!"}
      />
      <ProductcardWrap itemList={fashionList} />
    </ProductCategory>
  );
};

export default Fashion;
