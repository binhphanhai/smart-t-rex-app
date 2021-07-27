import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGetUser } from "../../utils/userProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useGetUser();
  return (
    <Route
      {...rest}
      render={(props) =>
        user.id ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
