import React from "react";
import { Spinner as ReactSpinner } from "react-bootstrap";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center m-3">
      <ReactSpinner animation="border" variant="primary" />
    </div>
  );
};

export default Spinner;
