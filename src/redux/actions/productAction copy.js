export const getProduct = async (searchQuery) => {
  const BASE_URL =
    "https://my-json-server.typicode.com/ch9901/jaju-shoppingmall";
  return async (dispatch) => {
    const kitchhenwareUrl = `${BASE_URL}/kitchenware?q=${searchQuery}`;
    const fashionUrl = `${BASE_URL}/fashion?q=${searchQuery}`;
    const snackUrl = `${BASE_URL}/snack?q=${searchQuery}`;
    // const response = await fetch(url);
    // const data = await response.json();
    const [kitchenwareList, fashionList, snackList] = await Promise.all([
      kitchhenwareUrl,
      fashionUrl,
      snackUrl,
    ]);
    console.log(kitchenwareList, fashionList, snackList);
    dispatch({
      type: "GET_PRODUCT_SUCCESS",
      payload: {
        kitchenwareList: kitchenwareList.data,
        fashionList: fashionList.data,
        snackList: snackList.data,
        loading: false,
      },
    });
  };
};

export const productAction = { getProduct };
