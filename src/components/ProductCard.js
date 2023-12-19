import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Desc } from "./Navigation";

const Card = styled.div`
  img.productimg {
    width: 264px;
    height: 396px;
  }
`;
const ProductInfo = styled.div`
  margin-top: 20px;
  font-size: 17px;
  color: #555;
  text-decoration: none;
`;

const InfoDesc = styled(Desc)`
display: block,
marginTop: 10px,
`;

const InfoDescMore = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    font-size: 15px;
    font-weight: 900;
  }
  b {
    color: #888;
    font-weight: 500;
  }
`;
const Popular = styled.div`
  margin-top: 15px;
  font-size: 15px;
  font-weight: 800;
  color: #d99c63;
`;
const Productcard = () => {
  return (
    <Card>
      <img
        className="productimg"
        src="https://image.sivillage.com/upload/C00001/goods/org/646/220722002845646.png?RS=300&SP=1"
        alt=""
      />
      <ProductInfo>
        <InfoDesc as="div">description</InfoDesc>
        <InfoDesc>19000</InfoDesc>
        <InfoDescMore>
          <img
            src="https://cdn-fo.sivillage.com/mo/assets/comm/image/ico_star_black.svg"
            alt=""
          />
          <span>4.3</span>
          <b>reviews</b>
        </InfoDescMore>
        <Popular>인기</Popular>
      </ProductInfo>
    </Card>
  );
};

export default Productcard;
