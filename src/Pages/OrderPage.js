import React from "react";
import { Link } from "react-router-dom";
import Header from "./../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { format } from 'date-fns';
// import { PayPalButton } from "react-paypal-button-v2";

const OrderPage = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const order = useSelector((state) => state.order);
  const { orderList } = order;
  console.log(orderList);

  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };
  const shipping = formatNumberWithCommas(30000);
  const vat = formatNumberWithCommas(5000);
  const calculateSubtotal = (item) => {
    const subtotal = item.price * item.quantity;
    return formatNumberWithCommas(subtotal);
  };

  const totalPayment = () => {
    const totalPayment = orderList.data.total + 35000;
    return formatNumberWithCommas(totalPayment);
  };

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
                <p>{userInfo.username}</p>
                <p>
                  <a href={`mailto:admin@example.com`}>{userInfo.email}</a>
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
                <p>Phí Ship: 30.000đ</p>
                <p>Phương thức thanh toán: COD</p>

                <div
                  className="bg-info p-2 col-12"
                  style={{ borderRadius: "10px" }}
                >
                  <p className="text-white text-center text-sm-start">
                    Thanh toán: {format(new Date(orderList.data.createdAt), 'yyyy-MM-dd')}
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
                <p>Địa chỉ: {orderList.data.shipAddress}</p>
                <div
                  className="bg-danger p-2 col-12"
                  style={{ borderRadius: "10px" }}
                >
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

            {orderList.data.productItem.map((item) => (
              <>
                <div className="order-product row">
                  <div className="col-md-3 col-6">
                    <img src="/images/3.png" alt="product" />
                  </div>
                  <div className="col-md-5 col-6 d-flex align-items-center">
                    <Link to={`/products/${item.id}`}>
                      <h6>{item.name}</h6>
                    </Link>
                  </div>
                  <div className="mt-3 mt-md-0 col-6 col-md-2  d-flex align-items-center flex-column justify-content-center ">
                    <h4>SỐ LƯỢNG</h4>
                    <h6>{item.quantity}</h6>
                  </div>
                  <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center">
                    <h4>TỔNG TIỀN</h4>
                    <h6>{calculateSubtotal(item)}đ</h6>
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Tổng các sản phẩm</strong>
                  </td>
                  <td>{formatNumberWithCommas(orderList.data.total)}đ</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phí ship</strong>
                  </td>
                  <td>{shipping}đ</td>
                </tr>
                <tr>
                  <td>
                    <strong>Thuế</strong>
                  </td>
                  <td>{vat}đ</td>
                </tr>
                <tr>
                  <td>
                    <strong>TỔNG</strong>
                  </td>
                  <td>{totalPayment()}đ</td>
                </tr>
              </tbody>
            </table>
            <div className="col-12">{/* <PayPalButton amount={345} /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
