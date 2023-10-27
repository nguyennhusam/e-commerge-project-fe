import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Bạn cần biết thêm điều gì?</h2>
              <p>Đăng ký để nhận thông báo mới nhất.</p>
              <form className="form-section">
                <input placeholder="Nhập email..." name="email" type="email" />
                <input value="Gửi" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
