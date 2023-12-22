import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authenticateReducer from "./authenticateReducer";
import getProductDetailReducer from "./getProductDetailReducer";

export default combineReducers({
  products: productReducer,
  auth: authenticateReducer,
  productDetail: getProductDetailReducer,
});
