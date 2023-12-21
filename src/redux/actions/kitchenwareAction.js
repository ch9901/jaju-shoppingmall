const kitchenwareAction = (category) => {
  return async (dispatch) => {
    const url = `https://my-json-server.typicode.com/ch9901/jaju-shoppingmall/products/${category}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_CATEGORY_SUCCESS", payload: { data } });
  };
};

export const productAction = { getCategory };
