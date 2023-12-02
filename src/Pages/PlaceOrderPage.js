import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../Redux/Actions/OrderActions";

const PlaceOrderPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("COD");
  const paymentMethodText =
    selectedPaymentMethod === "COD" ? "COD" : "Card Banking";

  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cartList = useSelector((state) => state.cartList);
  const { cartItem } = cartList;

  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };
  const shipping = formatNumberWithCommas(30000);
  const vat = formatNumberWithCommas(5000);
  const calculateSubtotal = (item) => {
    const subtotal = item.price * item.quantity;
    return formatNumberWithCommas(subtotal);
  };
  const calculateTotal = () => {
    let total = 0;
    if (cartItem.productItem) {
      cartItem.productItem.forEach((item) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
      });
    }
    return formatNumberWithCommas(total);
  };
  const totalPayment = () => {
    let total = 0;
    let totalPayment = shipping + vat;
    if (cartItem.productItem) {
      cartItem.productItem.forEach((item) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        totalPayment = total + 30000 + 5000;
      });
    }
    return formatNumberWithCommas(totalPayment);
  };

  // const [select, setSelect] = useState("COD");
  const handlePaymentChange = (e) => {
    // setSelect(e.target.value);
    setSelectedPaymentMethod(e.target.value);
  };

  const submitCreateOrder = (e) => {
    e.preventDefault();
    const productList = cartItem.productItem.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      images: item.images,
      quantity: item.quantity,
      // Add other properties as needed
    }));
    console.log(productList)
    dispatch(createOrder({
      shipAddress: address,
      listProduct: productList
    }));
    navigate("/order");
  };

  // const placeOrderHandler = () => {
  //   // e.preventDefault();
  // };

  return (
    <>
      <Header />
      {cartItem.productItem && (
        <div
          className="container"
          style={{ marginTop: "40px", marginBottom: "100px" }}
        >
          <div className="row  order-detail">
            <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
              <div className="row ">
                <div className="col-md-4 center">
                  <div className="alert-success order-box">
                    <i class="fas fa-user"></i>
                  </div>
                </div>
                <div className="col-md-8 center">
                  <h5>
                    <strong>KHÁCH HÀNG</strong>
                  </h5>
                  <p>{userInfo.username}</p>
                  <p>{userInfo.email}</p>
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
                  <p>Phương thức thanh toán: {paymentMethodText}</p>
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
                  <p>Địa chỉ: abc, đường số 19, Linh Chiểu, Thủ Đức, TP.HCM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Địa chỉ giao hàng */}
          <div
            className="container d-flex justify-content-center align-items-center login-center"
            style={{ flexDirection: "column" }}
          >
            <form
              className="Login col-md-8 col-lg-4 col-11"
              // onSubmit={submitHandler}
            >
              <h6>ĐỊA CHỈ GIAO HÀNG</h6>
              <input
                type="text"
                placeholder="Nhập địa chỉ"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </form>
            <div className="Login2 col-md-8 col-lg-4 col-11">
              <div className="payment-container">
                <div className="radio-container">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="COD"
                    checked={selectedPaymentMethod === "COD"}
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
                  checked={selectedPaymentMethod === "CreditCard"}
                  onChange={handlePaymentChange}
                />
                <label className="form-check-label">Credit Card</label>
              </div>
            </div>
          </div>

          <div className="row order-products justify-content-between">
            <div className="col-lg-8">
              {/* <Message variant="alert-info mt-5">Your cart is empty</Message> */}

              {cartItem.productItem.map((item) => (
                <>
                  <div className="order-product row">
                    <div className="col-md-3 col-6">
                      <img src={item.images} alt="product" />
                    </div>
                    <div className="col-md-5 col-6 d-flex align-items-center">
                      <Link to={"/"}>
                        <h6>{item.name}</h6>
                      </Link>
                    </div>
                    <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                      <h4>SỐ LƯỢNG</h4>
                      <h6>{item.quantity}</h6>
                    </div>
                    <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                      <h4>THÀNH TIỀN</h4>
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
                      <strong>Tạm tính</strong>
                    </td>
                    <td>{calculateTotal()}đ</td>
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
              <button type="submit" onClick={submitCreateOrder}>
                {/* <Link to="/order" className="text-white">
                  ĐẶT HÀNG
                </Link> */}
                ĐẶT HÀNG
              </button>
              {/* <div className="my-3 col-12">
                <Message variant="alert-danger">{error}</Message>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaceOrderPage;
