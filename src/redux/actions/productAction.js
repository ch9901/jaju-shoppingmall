const getProduct = () => {
  return async () => {
    const url = 'https://my-json-server.typicode.com/ch9901/jaju-shoppingmall/products';
    const response = await fetch(url);
    const data = await response.json();

    dispatchEvent({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
};

export const productAction = { getProduct };
