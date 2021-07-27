import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Particles from "react-tsparticles";

import { particlesOptions } from "./utils/enum";
import UserProvider from "./utils/userProvider";

import PrivateRoute from "./components/core/PrivateRoute";
import CommonRoute from "./components/core/CommonRoute";

import Navigator from "./components/Navigation";
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
          <Navigator />
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
