import React from "react";

const Error = ({ lang }) => {
  return (
    <div className="form-error">
      <p className="form-error-text">{lang.alert}</p>
    </div>
  );
};

export default Error;
