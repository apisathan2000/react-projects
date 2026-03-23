import React, { useEffect } from "react";

const Alert = ({ show, type, message, removeAlert }) => {
  useEffect(() => {
    if (show) {
      let alertTimeout = setTimeout(() => {
        removeAlert();
      }, 2000);

      return () => {
        clearTimeout(alertTimeout);
      };
    }
  }, [show, removeAlert]);

  if (show) {
    return (
      <article
        className={
          type === "success" ? `alert alert-success` : `alert alert-danger`
        }
      >
        {message}
      </article>
    );
  } else {
    return <></>;
  }
};

export default Alert;
