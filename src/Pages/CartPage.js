import React, { useEffect } from "react";
import Header from "./../Components/Header";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  listCart,
  decreaseCart,
  increaseCart,
  deleteCart,
} from "../Redux/Actions/CartActions";
import Error from "../Components/LoadingError/Error";
import { FaPlus, FaMinus } from "react-icons/fa";
import { listProductDetails } from "../Redux/Actions/ProductActions";

const CartPage = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/cart";

  const cartList = useSelector((state) => state.cartList);
  const { cartItem } = cartList;

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCart());
  }, [dispatch]);
  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);
  // const [amount, setAmount] = useState(1);

  const decrease = (cartID, productID) => {
    const selectedItem = cartItem.productItem.find(
      (item) => item.id === productID
    );
    if (selectedItem) {
      if (selectedItem.quantity === 1) {
        console.log(selectedItem.quantity);
        return selectedItem.quantity;
      }
      return dispatch(decreaseCart({ cartID, productID }));
    }
  };
  const increase = (cartID, productID) => {
    const selectedItem = cartItem.productItem.find(
      (item) => item.id === productID
    );
    dispatch(listProductDetails(productID));
    console.log(product);
    console.log(selectedItem);
    if (selectedItem && product) {
      if (selectedItem.quantity < product?.message?.countInStock) {
        console.log(selectedItem.quantity);
        console.log(product.message.countInStock);
        return dispatch(increaseCart({ cartID, productID }));
      } else {
        return product?.message?.countInStock;
      }
    }
  };

  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };
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

  const removeProductInCart = (cartID, productID) => {
    dispatch(deleteCart({ cartID, productID }));
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

                  {cartItem.productItem.map((item) => (
                    <div className="cart-iterm row">
                      <div className="remove-button d-flex justify-content-center align-items-center">
                        <i
                          className="fas fa-times"
                          onClick={() =>
                            removeProductInCart(cartItem._id, item.id)
                          }
                        ></i>
                      </div>
                      <div
                        className="cart-image col-md-3"
                        style={{ width: "15%" }}
                      >
                        <img src={item.images} alt="nike" />
                      </div>
                      <div className="cart-text col-md-5 d-flex align-items-center">
                        <Link to={`/products/${item.id}`}>
                          <h4>{item.name}</h4>
                        </Link>
                      </div>
                      <div className="cart-qty col-md-2 col-sm-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                        <h6>Số lượng</h6>
                        <div className="grid-toggle-button">
                          <button
                            type="button"
                            className="amount-btn"
                            onClick={() => decrease(cartItem._id, item.id)}
                          >
                            <FaMinus />
                          </button>
                          <h2 className="amount">{item.quantity}</h2>
                          <button
                            type="button"
                            className="amount-btn"
                            onClick={() => increase(cartItem._id, item.id)}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                      <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                        <h6>Thành tiền</h6>
                        <h4>{calculateSubtotal(item)}đ</h4>
                      </div>
                    </div>
                  ))}

                  {/* End of cart iterms */}
                  <div className="total">
                    <span className="sub">tổng cộng:</span>
                    <span className="total-price">{calculateTotal()}đ</span>
                  </div>
                  <hr />
                  <div className="cart-buttons d-flex align-items-center row">
                    <Link to="/" className="col-md-6 ">
                      <button>Tiếp tục mua sắm</button>
                    </Link>
                    <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                      {cartItem.productItem.length !== 0 ? (
                        <button>
                          <Link to="/placeorder" className="text-white">
                            Thanh toán
                          </Link>
                        </button>
                      ) : (
                        <button disabled>Thanh toán</button>
                      )}
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
              <div
                className="cart-buttons d-flex align-items-center row"
                style={{ justifyContent: "center" }}
              >
                <Link to="/" className="continue-shopping">
                  <button style={{ width: "100%" }}>Tiếp tục mua sắm</button>
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
