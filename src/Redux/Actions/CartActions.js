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
    console.log(data)
    dispatch({ type: "CART_LIST_SUCCESS", payload: data });
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
