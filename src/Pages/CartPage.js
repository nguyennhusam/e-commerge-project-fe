import React from "react";
import Header from "./../Components/Header";
import { Link } from "react-router-dom";

const CartPage = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header />
            {/* Cart */}
            <div className="container">
                {/* <div className=" alert alert-info text-center mt-3">
          Your cart is empty
          <Link
            className="btn btn-success mx-5 px-5 py-3"
            to="/"
            style={{
              fontSize: "12px",
            }}
          >
            SHOPPING NOW
          </Link>
        </div> */}
                <div className=" alert alert-info text-center mt-3">
                    TỔNG SỐ SẢN PHẨM
                    <Link className="text-success mx-2" to="/cart">
                        (1)
                    </Link>
                </div>
                {/* cartiterm */}
                <div className="cart-iterm row">
                    <div className="remove-button d-flex justify-content-center align-items-center">
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="cart-image col-md-3" style={{width: "15%"}}>
                        <img src="/images/2.png" alt="nike" />
                    </div>
                    <div className="cart-text col-md-5 d-flex align-items-center">
                        <Link to="#">
                            <h4>Áo thun đen in hoa tiết chữ</h4>
                        </Link>
                    </div>
                    <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                        <h6>Số lượng</h6>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                        <h6>Thành tiền</h6>
                        <h4>500.000đ</h4>
                    </div>
                </div>

                {/* End of cart iterms */}
                <div className="total">
                    <span className="sub">tổng cộng:</span>
                    <span className="total-price">1.000.000đ</span>
                </div>
                <hr />
                <div className="cart-buttons d-flex align-items-center row">
                    <Link to="/" className="col-md-6 ">
                        <button>Tiếp tục mua sắm</button>
                    </Link>
                    <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                        <button>
                            <Link to="/shipping" className="text-white">
                                Thanh toán
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
