import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const Register = () => {
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center login-center">
                <form className="Login col-md-8 col-lg-4 col-11">
                    <input type="text" placeholder="Tên đăng nhập" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mật khẩu" />

                    <button type="submit">Đăng ký</button>
                    <p>
                        <Link to={"/login"}>
                            Bạn đã có tài khoản? <strong>Đăng nhập</strong>
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Register;
