import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authenticateReducer from "./authenticateReducer";

export default combineReducers({
  products: productReducer,
  auth: authenticateReducer,
});
