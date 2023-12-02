import axios from "axios";

export const createOrder = ({shipAddress, listProduct}) => async (dispatch) => {
    try {
      dispatch({ type: "CREATE_ORDER_REQUEST" });
      const config = {
        headers: 
        {
          token: "Bearer " + localStorage.getItem("access_token"),
        }
      };
      const orderData = {
        shipAddress: shipAddress,
        listProduct: listProduct
      }
      console.log(orderData)
      const { data } = await axios.post(
        "http://localhost:4000/orders/createOrder", orderData, config
      );
      dispatch({ type: "CREATE_ORDER_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "CREATE_ORDER_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };