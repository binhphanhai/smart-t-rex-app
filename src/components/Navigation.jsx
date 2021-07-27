import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLogOut } from "../utils/userProvider";
import { useGetUser } from "../utils/userProvider";

import Logo from "./Logo";

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname;
  const logout = useLogOut();
  const user = useGetUser();
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex justify-content-start mt-3 align-items-start">
        <Logo />
        {user?.id && (
          <>
            <Link
              className={`h3 m-2 p-3 bold shadow rounded ${
                path === "/" && "active"
              }`}
              to="/"
            >
              Recognize
            </Link>
            <Link
              className={`h3 m-2 p-3 bold shadow rounded ${
                path === "/recogtrie" && "active"
              }`}
              to="/recogtrie"
            >
              Recogtrie
            </Link>
          </>
        )}
      </div>
      <div className="d-flex justify-content-end align-items-start">
        {user?.id ? (
          <Link
            className="h3 m-2 p-3 bold shadow rounded"
            to="/login"
            onClick={() => logout()}
          >
            Log Out
          </Link>
        ) : (
          <>
            <Link
              className={`h3 m-2 p-3 bold shadow rounded ${
                path === "/login" && "active"
              }`}
              to="/login"
            >
              Log In
            </Link>
            <Link
              className={`h3 m-2 p-3 bold shadow rounded ${
                path === "/register" && "active"
              }`}
              to="/register"
            >
              Register
            </Link>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
