import React from "react";
const Orders = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      {/* <div className="col-12 alert alert-info text-center mt-3">
        No Orders
        <Link
          className="btn btn-success mx-2 px-3 py-2"
          to="/"
          style={{
            fontSize: "12px",
          }}
        >
          START SHOPPING
        </Link>
      </div> */}

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>TÌNH TRẠNG</th>
              <th>THỜI GIAN</th>
              <th>TỔNG TIỀN</th>
            </tr>
          </thead>
          <tbody>
            <tr className={"alert-success"}>
              <td>
                <a href={`/`} className="link">
                  1
                </a>
              </td>
              <td>Đã thanh toán</td>
              <td>27-10-2023</td>
              <td>1.035.000đ</td>
            </tr>
            {/* Cancelled */}
            <tr className={"alert-danger"}>
              <td>
                <a href={`/`} className="link">
                  2
                </a>
              </td>
              <td>Chưa thanh toán</td>
              <td>27-10-2023</td>
              <td>500.000đ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
