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

// Add to cart
export const addToCartReducer = (state = { cart: {}}, action) => {
  switch (action.type) {
    case "ADD_TO_CART_REQUEST":
      return {...state, loading: true};
    case "ADD_TO_CART_SUCCESS":
      return { loading: false, cart: action.payload };
    case "ADD_TO_CART_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

// Increase Cart
export const increaseCartReducer = (state = { cart: {}}, action) => {
  switch (action.type) {
    case "INCREASE_CART_REQUEST":
      return {...state, loading: true};
    case "INCREASE_CART_SUCCESS":
      return { loading: false, cart: action.payload };
    case "INCREASE_CART_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

// Decrease Cart
export const decreaseCartReducer = (state = { cart: {}}, action) => {
  switch (action.type) {
    case "DECREASE_CART_REQUEST":
      return {...state, loading: true};
    case "DECREASE_CART_SUCCESS":
      return { loading: false, cart: action.payload };
    case "DECREASE_CART_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

// Delete Cart
export const deleteCartReducer = (state = { cart: {}}, action) => {
  switch (action.type) {
    case "DELETE_CART_REQUEST":
      return {...state, loading: true};
    case "DELETE_CART_SUCCESS":
      return { loading: false, cart: action.payload };
    case "DELETE_CART_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

