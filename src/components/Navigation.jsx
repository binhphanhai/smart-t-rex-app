import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="d-flex justify-content-end">
      <Link className="h3 text-dark m-2 p-3 bold" to="/login">
        Log Out
      </Link>
    </div>
  );
};

export default Navigation;
