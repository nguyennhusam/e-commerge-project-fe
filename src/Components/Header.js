import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Actions/UserAction";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cartList = useSelector((state) => state.cartList);
  const { cartItem } = cartList;

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const LogoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className={`full-header ${isScrolled ? "is-scroll-top" : ""}`}>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+84 383 382 856</p>
              <p>sscloseshop@gmail.com</p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logo.svg" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Thôn Tin Cá nhân
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={LogoutHandler}
                        >
                          Thoát
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          Đăng nhập
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          Đăng ký
                        </Link>
                      </div>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    {/* <span className="badge">1</span> */}
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <ul className="input-group menu">
                    <li className="title-menu-header">Trang chủ</li>
                    <li className="title-menu-header">Giới thiệu</li>
                    <li className="title-menu-header">Liên hệ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src="/images/logo.svg" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <ul className="input-group menu">
                  <li className="title-menu-header">
                    <Link to="/">
                      Trang chủ
                    </Link>
                  </li>
                  <li className="title-menu-header">
                    <Link to="/about">
                      Giới thiệu
                    </Link>
                  </li>
                  <li className="title-menu-header">
                    <Link to="/">
                      Liên hệ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hi, {userInfo.username}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Thông Tin Cá nhân
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={LogoutHandler}
                      >
                        Thoát
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/register">Đăng ký</Link>
                    <Link to="/login">Đăng nhập</Link>
                  </>
                )}
                <Link to="/cart" className="cart-icon">
                  <i className="fas fa-shopping-bag"></i>
                  {userInfo && (
                    <>
                    {cartList.error ? (
                    <span className="badge"></span>
                  ) : (
                    <>
                      {cartItem.productItem && (
                        <span className="badge">
                          {cartItem.productItem.length}
                        </span>
                      )}
                    </>
                  )}
                    </>
                  )}
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
