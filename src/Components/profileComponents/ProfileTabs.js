import React from "react";

const ProfileTabs = () => {
    return (
        <>
            <form className="row  form-container">
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-fn">Tên tài khoản</label>
                        <input className="form-control" type="text" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form">
                        <label for="account-email">E-mail</label>
                        <input className="form-control" type="email" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-pass">Mật khẩu mới</label>
                        <input className="form-control" type="password" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-confirm-pass">Xác nhận mật khẩu mới</label>
                        <input className="form-control" type="password" />
                    </div>
                </div>
                <button type="submit">Cập nhật</button>
            </form>
        </>
    );
};

export default ProfileTabs;
