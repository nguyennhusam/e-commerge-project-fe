import axios from "axios";
import { listCart } from "./CartActions";

// Product List
export const listProduct = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios.get(
      "http://localhost:4000/products/getallproduct"
    );
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
    dispatch(listCart())
  } catch (error) {
    dispatch({
      type: "PRODUCT_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Single Product
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
    const { data } = await axios.get(
      `http://localhost:4000/products/getproductbyid/${id}`
    );
    dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: data });
    dispatch(listCart())
    dispatch(getReview(id))
  } catch (error) {
    dispatch({
      type: "PRODUCT_DETAILS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Post Review
export const createReview = ({id, content, rating}) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_REVIEW_REQUEST" });
    const postReview = {
      content: content,
      rating: rating
    }
    const config = {
      headers: 
      {
        token: "Bearer " + localStorage.getItem("access_token"),
      }
    };
    console.log(config)
    const { data } = await axios.post(
      `http://localhost:4000/review/new/${id}`, postReview, config
    );
    dispatch({ type: "CREATE_REVIEW_SUCCESS", payload: data });
    dispatch(listProductDetails(id))
  } catch (error) {
    dispatch({
      type: "CREATE_REVIEW_FAIL",
      payload: error.message
    });
  }
};

// Get All Review
export const getReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_REVIEW_REQUEST" });
    const config = {
      headers: 
      {
        token: "Bearer " + localStorage.getItem("access_token"),
      }
    };
    console.log(config)
    const { data } = await axios.get(
      `http://localhost:4000/review/${id}`, config
    );
    dispatch({ type: "GET_REVIEW_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_REVIEW_FAIL",
      payload: error.message
    });
  }
};

