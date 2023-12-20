import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PartTitle from "../components/PartTitle";
import ProductcardWrap from "../components/ProductcardWrap";

const ProductAll = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <PartTitle
        title={"주방용품"}
        desc={
          "현대주방의 필수템, 효율과 실용을 챙긴 주방용품으로 간편한 조리를 경험하세요!"
        }
      />
      <ProductcardWrap />
      <PartTitle
        title={"스낵"}
        desc={
          "달달함 가득, 특별한 맛의 과자로 당신의 눈과 입맛을 사로잡아보세요!"
        }
      />
      <PartTitle
        title={"패션잡화"}
        desc={"독보적인 패션잡화로 특별한 스타일을 완성하세요!"}
      />
    </div>
  );
};

export default ProductAll;
