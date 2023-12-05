import React from "react";

const Error = ({ variant, children }) => {
  return <div style={{ textAlign: "center" }} className={`alert ${variant}`}>{children}</div>;
};

Error.defaultProps = {
  variant: "alert-info",
};

export default Error;
