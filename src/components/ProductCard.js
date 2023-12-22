import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 50px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const ImgWrap = styled.div`
  width: 264px;
  height: 396px;
  overflow: hidden;
  img.productimg {
    width: 264px;
    height: 396px;
    transition: 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Desc = styled.span`
  font-size: 15px;
  color: ${(props) => props.color};
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
  justify-content: flex-start;
`;
const ProductCard = ({ itemList }) => {
  const lists = itemList;

  return (
    <CardWrap>
      {lists?.map((item, index) => (
        <Link key={index} to={`/products/${item.category}/${item.id}`}>
          <Card>
            <ImgWrap>
              <img className="productimg" src={item.img} alt="productimg" />
            </ImgWrap>
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
        </Link>
      ))}
    </CardWrap>
  );
};

export default ProductCard;
