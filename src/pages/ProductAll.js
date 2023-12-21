import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PartTitle from "../components/PartTitle";
import ProductcardWrap from "../components/ProductcardWrap";
import { productAction } from "../redux/actions/productAction";
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

const ProductCategory = styled.div`
  margin-bottom: 150px;
`;

const ProductAll = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const getProducts = async () => {
    dispatch(productAction.getProduct());
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const productListAll = useSelector((state) => state.products.productList);
  const kitchenwareList = productListAll.kitchenware;
  const fashionList = productListAll.fashion;
  const snackList = productListAll.snack;

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
          <Kitchenware kitchenwareList={kitchenwareList} />
          <Fashion fashionList={fashionList} />
          <Snack snackList={snackList} />
        </div>
      )}
    </div>
  );
};

export default ProductAll;
