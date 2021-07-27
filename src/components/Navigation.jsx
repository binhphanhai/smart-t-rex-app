import React from "react";
import { Link } from "react-router-dom";
import { useSetUser } from "../utils/userProvider";

const Navigation = () => {
  const setUser = useSetUser();
  return (
    <div className="d-flex justify-content-end">
      <Link
        className="h3 text-dark m-2 p-3 bold"
        to="/login"
        onClick={() => setUser({})}
      >
        Log Out
      </Link>
    </div>
  );
};

export default Navigation;
