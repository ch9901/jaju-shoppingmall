const initialState = {
  productDetail: [],
};

const getProductDetail = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCTDETAIL_SUCCESS":
      return {
        ...state,
        productDetail: payload.data,
      };
    default:
      return { ...state };
  }
};
export default getProductDetail;
