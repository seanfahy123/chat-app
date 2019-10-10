import React, { useEffect } from "react";

const ErrorAlert = ({ errorMessage, setShowError }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowError(false);
    }, 4000);
  }, [setShowError]);

  return (
    <div className="alert alert-dismissible alert-danger">
      <strong>Error!</strong> <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorAlert;
