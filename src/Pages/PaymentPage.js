import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../Components/Header";

const PaymentPage = () => {

  const [select, setSelect] = useState("COD");
  const handlePaymentChange = (e) => {
    setSelect(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>CHỌN PHƯƠNG THỨC THANH TOÁN</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                value="COD"
                checked={select === "COD"}
                onChange={handlePaymentChange}
              />
              <label className="form-check-label">
                Thanh toán khi nhận hàng
              </label>
            </div>
          </div>
          <div className="radio-container">
            <input
              className="form-check-input"
              type="radio"
              value="CreditCard"
              checked={select === "CreditCard"}
              onChange={handlePaymentChange}
            />
            <label className="form-check-label">Credit Card</label>
          </div>

          <button type="submit">
            <Link to="/placeorder" className="text-white">
              Tiếp tục
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentPage;
