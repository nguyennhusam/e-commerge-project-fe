import axios from "axios";

// Cart List
export const listCart = () => async (dispatch) => {
  try {
    dispatch({ type: "CART_LIST_REQUEST" });
    const config = {
      headers: 
      {
        token: "Bearer " + localStorage.getItem("access_token"),
      }
    };
    const { data } = await axios.get(
      "http://localhost:4000/carts/getAll",config
    );
    if(data.productItem) {
      dispatch({ type: "CART_LIST_SUCCESS", payload: data });
      localStorage.setItem("cartItems", JSON.stringify(data));
    }
    // console.log(data)
    
  } catch (error) {
    dispatch({
      type: "CART_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Add to cart
export const addToCart = ({id,name,quantity,images,price}) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_TO_CART_REQUEST" });
    const config = {
      headers: 
      {
        token: "Bearer " + localStorage.getItem("access_token"),
      }
    };
    const { data } = await axios.post(
      `http://localhost:4000/carts/addproductInCart/${id}`, {name, quantity, images, price},config
    );
    dispatch({ type: "ADD_TO_CART_SUCCESS", payload: data });
    dispatch(listCart())
  } catch (error) {
    dispatch({
      type: "ADD_TO_CART_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Increase Product In Cart
export const increaseCart = ({cartID,productID}) => async (dispatch) => {
  try {
    dispatch({ type: "INCREASE_CART_REQUEST" });
    const dataProduct = {
      productId: productID
    }
    const { data } = await axios.post(
      `http://localhost:4000/carts/increproductInCart/${cartID}`, dataProduct
    );
    dispatch({ type: "INCREASE_CART_SUCCESS", payload: data });
    dispatch(listCart())
  } catch (error) {
    dispatch({
      type: "INCREASE_CART_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Decrease Product In Cart
export const decreaseCart = ({cartID,productID}) => async (dispatch) => {
  try {
    dispatch({ type: "DECREASE_CART_REQUEST" });
    const dataProduct = {
      productId: productID
    }
    const { data } = await axios.post(
      `http://localhost:4000/carts/decreproductInCart/${cartID}`, dataProduct
    );
    dispatch({ type: "DECREASE_CART_SUCCESS", payload: data });
    dispatch(listCart())
  } catch (error) {
    dispatch({
      type: "DECREASE_CART_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Delete Product In Cart
export const deleteCart = ({cartID,productID}) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_CART_REQUEST" });
    const { data } = await axios.delete(
      `http://localhost:4000/carts/delproductInCart/${cartID}/${productID}`
    );
    dispatch({ type: "DELETE_CART_SUCCESS", payload: data });
    dispatch(listCart())
  } catch (error) {
    dispatch({
      type: "DELETE_CART_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
