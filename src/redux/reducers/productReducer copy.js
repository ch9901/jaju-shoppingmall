const initialState = {
  kitchenwareList: [],
  fashionList: [],
  snackList: [],
};
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        kitchenwareList: payload.kitchenwareList,
        fashionList: payload.fashionList,
        snack: payload.snackList,
      };
    default:
      return { ...state };
  }
};

export default productReducer;
