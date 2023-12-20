import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PartTitle from "../components/PartTitle";
import ProductcardWrap from "../components/ProductcardWrap";
import { productAction } from "../redux/actions/productAction";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";

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
          <div>
            <PartTitle
              title={"주방용품"}
              desc={
                "현대주방의 필수템, 효율과 실용을 챙긴 주방용품으로 간편한 조리를 경험하세요!"
              }
            />
            <ProductcardWrap itemList={kitchenwareList} />
          </div>
          <div>
            <PartTitle
              title={"스낵"}
              desc={
                "달달함 가득, 특별한 맛의 과자로 당신의 눈과 입맛을 사로잡아보세요!"
              }
            />
            <ProductcardWrap itemList={snackList} />
          </div>
          <div>
            <PartTitle
              title={"패션잡화"}
              desc={"독보적인 패션잡화로 특별한 스타일을 완성하세요!"}
            />
            <ProductcardWrap itemList={fashionList} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductAll;
