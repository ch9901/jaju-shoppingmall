import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Desc } from "./Navigation";

const Card = styled.div`
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 50px;
  cursor: pointer;
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
  display: block;,
  marginTop: 10px;
  width:250px;
  height:38px;
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

const CardWrap = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;
const ProductCard = (itemList) => {
  const lists = itemList?.itemList;
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product`);
  };
  console.log(itemList);

  return (
    <CardWrap>
      {lists?.map((item, index) => (
        <Card key={index} onClick={showDetail}>
          <img className="productimg" src={item.img} alt="" />
          <ProductInfo>
            <InfoDesc as="div">{item.name}</InfoDesc>
            <InfoDesc>{item.price}</InfoDesc>
            <InfoDescMore>
              <img
                src="https://cdn-fo.sivillage.com/mo/assets/comm/image/ico_star_black.svg"
                alt=""
              />
              <span>{item.rating}</span>
              <b>({item.reviews})</b>
            </InfoDescMore>
            {item.popularity && <Popular>인기</Popular>}
            {item.isNew && <Popular>신규</Popular>}
          </ProductInfo>
        </Card>
      ))}
    </CardWrap>
  );
};

export default ProductCard;
