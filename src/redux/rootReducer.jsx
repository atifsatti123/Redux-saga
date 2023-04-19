import { combineReducers } from "redux";
import { cartData } from "./reducer/Reducer";
import { productData } from "../redux/productReducer";

export default combineReducers({
    cartData,
    productData

})