// Cart List
export const cartListReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case "CART_LIST_REQUEST":
      return { loading: true, cartItem: [] };
    case "CART_LIST_SUCCESS":
      return { loading: false, cartItem: action.payload };
    case "CART_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
