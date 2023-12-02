import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const ShippingPage = () => {

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>ĐỊA CHỈ GIAO HÀNG</h6>
          <input type="text" placeholder="Đường/Thôn" />
          <input type="text" placeholder="Xã/Phường" />
          <input type="text" placeholder="Quận/Huyện" />
          <input type="text" placeholder="Tỉnh/Thành phố" />
          <button type="submit">
            <Link to="/payment" className="text-white">
              Tiếp tục
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingPage;
