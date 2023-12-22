const getProductDetail = (pathname) => {
  return async (dispatch) => {
    const url = `https://my-json-server.typicode.com/ch9901/jaju-shoppingmall${pathname}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODUCTDETAIL_SUCCESS", payload: { data } });
  };
};

export const getProductDetailAction = { getProductDetail };
