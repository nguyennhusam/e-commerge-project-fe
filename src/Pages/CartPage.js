import React, { useEffect, useState } from "react";
import Header from "./../Components/Header";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listCart } from "../Redux/Actions/CartActions";
import Error from "../Components/LoadingError/Error";
import { FaPlus, FaMinus } from "react-icons/fa";


const CartPage = () => {
  window.scrollTo(0, 0);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/cart";

  const cartList = useSelector((state) => state.cartList);
  const { cartItem } = cartList;

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  console.log(cartItem);

  // const userId = userInfo.id;
  // console.log(userId);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCart());
  }, [dispatch]);


  const [amount, setAmount] = useState(1);

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > product.message.countInStock) {
        tempAmount = product.message.countInStock;
      }
      return tempAmount;
    });
  };

  return (
    <>
      <Header />
      {/* Cart */}
      {userInfo ? (
        <>
          {!cartList.error ? (
            <>
              {cartItem.productItem && (
                <div className="container">
                  <div className=" alert alert-info text-center mt-3">
                    TỔNG SỐ SẢN PHẨM ({cartItem.productItem.length})
                  </div>
                  {/* cartitem */}
                  {/* {cartItem.productItem ? (
                <> */}
                  {cartItem.productItem.map((item) => (
                    <div className="cart-iterm row">
                      <div className="remove-button d-flex justify-content-center align-items-center">
                        <i className="fas fa-times"></i>
                      </div>
                      <div
                        className="cart-image col-md-3"
                        style={{ width: "15%" }}
                      >
                        <img src={item.images} alt="nike" />
                      </div>
                      <div className="cart-text col-md-5 d-flex align-items-center">
                        <Link to="#">
                          <h4>{item.name}</h4>
                        </Link>
                      </div>
                      <div className="cart-qty col-md-2 col-sm-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                        <h6>Số lượng</h6>
                        <div className="grid-toggle-button">
                              <button
                                type="button"
                                className="amount-btn"
                                onClick={decrease}
                              >
                                <FaMinus />
                              </button>
                              <h2 className="amount">{amount}</h2>
                              <button
                                type="button"
                                className="amount-btn"
                                onClick={increase}
                              >
                                <FaPlus />
                              </button>
                            </div>
                      </div>
                      <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                        <h6>Thành tiền</h6>
                        <h4>{item.price}đ</h4>
                      </div>
                    </div>
                  ))}
                  {/* </>
              ) : (
                <div className="shop-cart-title">
                  <h3>Không có sản phẩm nào trong giỏ hàng !</h3>
                </div>
              )} */}

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
              )}
            </>
          ) : (
            <>
              <div className="shop-cart-title">
                <h3>Không có sản phẩm nào trong giỏ hàng !</h3>
              </div>
              <div className="cart-buttons d-flex align-items-center row" style={{ justifyContent: 'center' }}>
                <Link to="/" className="continue-shopping">
                  <button style={{ width:'100%' }}>Tiếp tục mua sắm</button>
                </Link>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="shop-cart-title">
            <h3>Không có sản phẩm nào trong giỏ hàng !</h3>
          </div>
          <div className="my-3 login-to-cart">
            <Error variant={"alert-warning"}>
              Hãy{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                " <strong>Đăng nhập</strong> "
              </Link>{" "}
              ngay để xem giỏ hàng của bạn{" "}
            </Error>
          </div>
        </>
      )}
    </>
  );
};

export default CartPage;
