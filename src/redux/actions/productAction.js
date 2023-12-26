const getProduct = (searchQuery) => {
  return async (dispatch) => {
    const BASE_URL =
      "https://my-json-server.typicode.com/ch9901/jaju-shoppingmall";
    const kitchenwareurl = `${BASE_URL}/kitchenware?q=${searchQuery}`;
    const fashionurl = `${BASE_URL}/fashion?q=${searchQuery}`;
    const snackurl = `${BASE_URL}/snack?q=${searchQuery}`;
    const kitchenwareresponse = await fetch(kitchenwareurl);
    const kitchenwaredata = await kitchenwareresponse.json();
    const fashionresponse = await fetch(fashionurl);
    const fashiondata = await fashionresponse.json();
    const snackresponse = await fetch(snackurl);
    const snackdata = await snackresponse.json();

    dispatch({
      type: "GET_PRODUCT_SUCCESS",
      payload: {
        kitchenwareList: kitchenwaredata,
        fashionList: fashiondata,
        snackList: snackdata,
      },
    });
  };
};

export const productAction = { getProduct };
