import React from "react";
import { Link } from "react-router-dom";
import { useLogOut } from "../utils/userProvider";
import { useGetUser } from "../utils/userProvider";

const Navigation = () => {
  const logout = useLogOut();
  const user = useGetUser();
  return (
    <div className="d-flex justify-content-end">
      {user?.id ? (
        <Link
          className="h3 text-dark m-2 p-3 bold"
          to="/login"
          onClick={() => logout()}
        >
          Log Out
        </Link>
      ) : (
        <>
          <Link className="h3 text-dark m-2 p-3 bold" to="/login">
            Log In
          </Link>
          <Link className="h3 text-dark m-2 p-3 bold" to="/register">
            Register
          </Link>{" "}
        </>
      )}
    </div>
  );
};

export default Navigation;
