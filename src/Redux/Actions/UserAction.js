import axios from "axios";
import { listCart } from "./CartActions";
import { toast } from 'react-toastify';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `http://localhost:4000/users/login`,
      { email, password },
      config
    );
    // console.log(data)
    if (data.success) {
      // console.log(data.success)
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      toast.success("Đăng nhập thành công!");
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("access_token", data.access_token);
      dispatch(listCart())
    } else {
      dispatch({ type: "USER_LOGIN_FAIL", payload: data.message });
    }
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Log out
export const logout = () => (dispatch) => {
  dispatch({ type: "USER_LOGOUT" });
  localStorage.removeItem("userInfo");
  localStorage.removeItem("access_token");
  localStorage.removeItem("cartItems");
  toast.success("Đăng xuất thành công!")
};


// Register

export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `http://localhost:4000/users/register`,
      { username, email, password },
      config
    );
    if(data.success) {
      dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
      toast.success("Đăng ký thành công!")

    }
    else {
      dispatch({ type: "USER_REGISTER_FAIL", payload: data.message });
    }
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};