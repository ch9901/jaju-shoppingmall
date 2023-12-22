import React from "react";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import Kitchenware from "./Kitchenware";
import Snack from "./Snack";
import Fashion from "./Fashion";

const ProductAllTit = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
`;

const LoadingNetYet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
`;

const ProductAll = ({ loading, kitchenwareList, fashionList, snackList }) => {
  return (
    <div>
      {loading ? (
        <LoadingNetYet>
          <ClipLoader color="#000" size={200} loading={loading} />
        </LoadingNetYet>
      ) : (
        <div>
          <div>
            <ProductAllTit>
              <Title>전체상품</Title>
            </ProductAllTit>
          </div>
          <Kitchenware kitchenwareList={kitchenwareList} loading={loading} />
          <Fashion fashionList={fashionList} />
          <Snack snackList={snackList} />
        </div>
      )}
    </div>
  );
};

export default ProductAll;
