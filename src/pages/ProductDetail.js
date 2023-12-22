import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailAction } from "../redux/actions/getProductDetailAction";

const ProductDetail = () => {
  const { pathname } = useLocation();
  const params = useParams();
  console.log(params);
  console.log(pathname);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    dispatch(getProductDetailAction.getProductDetail(pathname));
    setLoading(false);
  };
  useEffect(() => {
    getProductDetail(pathname);
    setLoading(false);
  }, []);

  const data = useSelector((state) => console.log(state));
  console.log("data:", data);
  return (
    <div>
      pathname : {pathname} ______ params id :{params.id}
      <div>불러온 데이터 : {data}</div>
    </div>
  );
};

export default ProductDetail;
