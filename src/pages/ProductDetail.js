import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../util";
import styled from "styled-components";

const Divider = styled.div`
  height: 1px;
  background: #e0e0e0;
  width: 100%;
  margin: 30px 0;
`;
const ProductDetailInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 600px;
  width: 100%;
`;
const ImgWrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 350px;
    height: 496px;
  }
`;
const ProductInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const BasicInfo = styled.div`
  h1 {
    font-size: 25px;
    font-weight: bold;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    color: #888;
  }
  span {
    font-size: 25px;
    font-weight: 600;
  }
`;
const DeliveryInfo = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
`;
const InfoTit = styled.span`
  display: inline-block;
  width: 20%;
  font-weight: bold;
`;
const DeliveryDeparture = styled.span`
  b {
    color: #d99c63;
    font-weight: 700;
  }
`;
const NumWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const ButtonWrap = styled.span`
  display: inline-block;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 50px;
  align-items: center;
`;
const NumButton = styled.button`
  border: none;
  height: inherit;
  padding: 0 20px;
  background: transparent;
  font-size: 30px;
  font-weight: 300;
  &:first-child {
    border-right: 1px solid #e0e0e0;
  }
  &:last-child {
    border-left: 1px solid #e0e0e0;
  }
`;
const Num = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
const PriceWrap = styled.div`
  width: 100%;
  height: 30px;
`;
const PriceTit = styled(InfoTit)``;

const Price = styled.span``;
const ProductDetail = () => {
  const { pathname } = useLocation();
  const { productCategory, id } = useParams();
  console.log("productCategory: ", productCategory, "id : ", id);
  useEffect(() => {
    setPageTitle(`JAJU - ${id} `);
  }, []);

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(undefined);
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    // const url = `
    // https://my-json-server.typicode.com/ch9901/jaju-shoppingmall/products/kitchenware
    // `;
    //여기서 url 했는데도 안가져와짐 데이터 ..
    const url = `https://my-json-server.typicode.com/ch9901/jaju-shoppingmall/products/${productCategory}/${id}`;
    const response = await fetch(url);
    // console.log("response >>", response);
    const data = await response.json();
    // const { kitchenware, snack, fashion } = data;
    // console.log(kitchenware, snack, fashion);
    setProduct(data);
    setLoading(false);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const increase = () => {
    setNum(num + 1);
  };
  const decrease = () => {
    if (num === 0) {
      setNum(num);
    } else {
      setNum(num - 1);
    }
  };
  return (
    <div>
      pathname : {pathname} ______ params id :{id}
      <div>불러온 데이터 : </div>
      <hr />
      <ProductDetailInfo>
        <ImgWrap>
          <img
            src="https://image.sivillage.com/upload/C00001/goods/org/646/220722002845646.png?RS=300&SP=1"
            alt="productimg"
          />
        </ImgWrap>
        <ProductInfo>
          <BasicInfo>
            <h1>흡착력 좋은 실리콘 싱크 물막이_75CM</h1>
            <p>item des</p>
            <span>item price</span>
          </BasicInfo>
          <Divider />
          <DeliveryInfo>
            <InfoTit>배송기간</InfoTit>
            <DeliveryDeparture>
              오늘 결제시
              <b>
                {month}/{date} 배송출발
              </b>
            </DeliveryDeparture>
          </DeliveryInfo>
          <Divider />
          <DeliveryInfo>
            <NumWrap>
              <InfoTit>수량</InfoTit>
              <ButtonWrap>
                <NumButton onClick={decrease}>-</NumButton>
                <Num>{num}</Num>
                <NumButton onClick={increase}>+</NumButton>
              </ButtonWrap>
            </NumWrap>
            <Divider />
            <PriceWrap>
              <PriceTit>판매가</PriceTit>
              <Price>{3500 * num}원</Price>
            </PriceWrap>
          </DeliveryInfo>
        </ProductInfo>
      </ProductDetailInfo>
    </div>
  );
};

export default ProductDetail;
