// Product List
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true, products: [] };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, products: action.payload };
    case "PRODUCT_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Product Detail

export const productDetailsReducer = (state = { product: {}}, action) => {
  switch (action.type) {
    case "PRODUCT_DETAILS_REQUEST":
      return {...state, loading: true};
    case "PRODUCT_DETAILS_SUCCESS":
      return { loading: false, product: action.payload };
    case "PRODUCT_DETAILS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Create Review
export const createReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_REVIEW_REQUEST":
      return {...state, loading: true};
    case "CREATE_REVIEW_SUCCESS":
      return { loading: false, product: action.payload };
    case "CREATE_REVIEW_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Get all review in Product

export const getReviewReducer = (state = { productReview: {reviews: []}}, action) => {
  switch (action.type) {
    case "GET_REVIEW_REQUEST":
      return {...state, loading: true};
    case "GET_REVIEW_SUCCESS":
      return { loading: false, productReview: action.payload };
    case "GET_REVIEW_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};