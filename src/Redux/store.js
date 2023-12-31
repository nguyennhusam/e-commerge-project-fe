import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  createReviewReducer,
  productDetailsReducer,
  productListReducer,
  getReviewReducer
} from "./Reducers/ProductReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartListReducer } from "./Reducers/CartReducer";
import { userLoginReducer, userRegisterReducer } from "./Reducers/UserReducer";
import { createOrderReducer } from "./Reducers/OrderReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  createReview: createReviewReducer,
  getReview: getReviewReducer,
  cartList: cartListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  order: createOrderReducer
});

const cartItemFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {
    cartItem: cartItemFromLocalStorage,
  },
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
