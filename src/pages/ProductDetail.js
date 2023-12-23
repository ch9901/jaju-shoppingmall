import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailAction } from "../redux/actions/getProductDetailAction";
import { setPageTitle } from "../util";

const ProductDetail = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  useEffect(() => {
    setPageTitle(`JAJU - ${id} `);
  }, []);

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(undefined);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    // const url = `
    // https://my-json-server.typicode.com/ch9901/jaju-shoppingmall/products/kitchenware
    // `;
    //여기서 url 했는데도 안가져와짐 데이터 ..
    const url = 'https://my-json-server.typicode.com/ch9901/jaju-shoppingmall/products';
    const response = await fetch(url);
    console.log("response >>", response);
    const data = await response.json();
    setProduct(data);
    setLoading(false);
  };
  console.log("data >> ", product);
  useEffect(() => {
    getProductDetail();
  }, []);


  return (
    <div>
      pathname : {pathname} ______ params id :{id}
      <div>불러온 데이터 : </div>
    </div>
  );
};

export default ProductDetail;
