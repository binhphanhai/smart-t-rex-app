import React from "react";
import { Link } from "react-router-dom";
import { useLogOut } from "../utils/userProvider";

const Navigation = () => {
  const logout = useLogOut();
  return (
    <div className="d-flex justify-content-end">
      <Link
        className="h3 text-dark m-2 p-3 bold"
        to="/login"
        onClick={() => logout()}
      >
        Log Out
      </Link>
    </div>
  );
};

export default Navigation;
