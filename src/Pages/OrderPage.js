import React from "react";
import { Link } from "react-router-dom";
import Header from "./../Components/Header";
// import { PayPalButton } from "react-paypal-button-v2";

const OrderPage = () => {
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <div className="container" style={{ marginTop: "40px" }}>
                <div className="row  order-detail">
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>KHÁCH HÀNG</strong>
                                </h5>
                                <p>Sam</p>
                                <p>
                                    <a href={`mailto:admin@example.com`}>sam@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-truck-moving"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>THÔNG TIN ĐẶT HÀNG</strong>
                                </h5>
                                <p>Shipping: TP.HCM</p>
                                <p>Phương thức thanh toán: COD</p>

                                <div className="bg-info p-2 col-12" style={{borderRadius: "10px"}}>
                                    <p className="text-white text-center text-sm-start">
                                        Thanh toán: 27-10-2023
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>GIAO HÀNG TỚI</strong>
                                </h5>
                                <p>
                                    Địa chỉ: abc, đường số 19, Linh Chiểu, Thủ Đức, TP.HCM
                                </p>
                                <div className="bg-danger p-2 col-12" style={{borderRadius: "10px"}}>
                                    <p className="text-white text-center text-sm-start">
                                        Chưa nhận hàng
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row order-products justify-content-between">
                    <div className="col-lg-8">
                        {/* <Message variant="alert-info mt-5">Your order is empty</Message> */}

                        <div className="order-product row">
                            <div className="col-md-3 col-6">
                                <img src="/images/3.png" alt="product" />
                            </div>
                            <div className="col-md-5 col-6 d-flex align-items-center">
                                <Link to={`/`}>
                                    <h6>Áo thun đen họa tiết chữ</h6>
                                </Link>
                            </div>
                            <div className="mt-3 mt-md-0 col-6 col-md-2  d-flex align-items-center flex-column justify-content-center ">
                                <h4>SỐ LƯỢNG</h4>
                                <h6>4</h6>
                            </div>
                            <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center">
                                <h4>TỔNG TIỀN</h4>
                                <h6>1.000.000đ</h6>
                            </div>
                        </div>
                    </div>
                    {/* total */}
                    <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Tổng các sản phẩm</strong>
                                    </td>
                                    <td>1.000.000đ</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Phí ship</strong>
                                    </td>
                                    <td>30.000đ</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Thuế</strong>
                                    </td>
                                    <td>5.000đ</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>TỔNG</strong>
                                    </td>
                                    <td>1.035.000đ</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="col-12">
                            {/* <PayPalButton amount={345} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderPage;
