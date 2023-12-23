import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../util";
import styled from "styled-components";

const ProductDetail = () => {
  const ProductDetailInfo = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    gap:30px;
  `;

  const ImgWrap = styled.div`
    img {
      width: 264px;
      height: 396px;
    }
  `;

  const { pathname } = useLocation();
  const { id } = useParams();
  const params = useParams();
  // console.log("params: ", params);
  useEffect(() => {
    setPageTitle(`JAJU - ${id} `);
  }, []);

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(undefined);
  const [num, setnum] = useState(0);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    // const url = `
    // https://my-json-server.typicode.com/ch9901/jaju-shoppingmall/products/kitchenware
    // `;
    //여기서 url 했는데도 안가져와짐 데이터 ..
    const url =
      "https://my-json-server.typicode.com/ch9901/jaju-shoppingmall/products";
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
  console.log("month : ", month, "date:", date);
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
        <div>
          <div>
            <h1>item title</h1>
            <span>item des</span>
            <span>item price</span>
          </div>
          <div>
            <span>배송기간</span>
            <span>
              오늘 결제시
              <b>
                {month}/{date} 배송출발
              </b>
            </span>
          </div>
          <div>
            <span>수량</span>
            <div>
              <button>-</button>
              <span>{num}</span>
              <button>+</button>
            </div>
            <span>---</span>
            <div>
              <span>판매가</span>
              <span>{3500 * num}원</span>
            </div>
          </div>
        </div>
      </ProductDetailInfo>
    </div>
  );
};

export default ProductDetail;
