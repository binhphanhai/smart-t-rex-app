import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Particles from "react-tsparticles";

import { particlesOptions } from "./utils/enum";
import UserProvider from "./utils/userProvider";

import PrivateRoute from "./components/PrivateRoute";
import CommonRoute from "./components/CommonRoute";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import NotFound from "./containers/NotFound";

const App = () => {
  return (
    <>
      <Particles className="particles" options={particlesOptions} />
      <UserProvider>
        <HashRouter>
          <Switch>
            <CommonRoute exact path="/register" component={Register} />
            <CommonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </UserProvider>
    </>
  );
};

export default App;
