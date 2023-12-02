import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/Actions/UserAction";
import Loading from "../Components/LoadingError/Loading";
import Error from "../Components/LoadingError/Error";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userRegisterInfo = useSelector((state) => state.userRegister);
  const { error, loading, userRegister } = userRegisterInfo;
  useEffect(() => {
    if (userRegister) {
      navigate('/login');
    }
  }, [userRegister, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(username, email, password));
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Error variant="alert-danger">{error}</Error>}
        {loading && <Loading />}
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Đăng ký</button>
          <p>
            <Link to="/login">
              Bạn đã có tài khoản? <strong>Đăng nhập</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
