import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { Container } from "react-bootstrap";

import { particlesOptions } from "./utils/enum";
import UserProvider from "./utils/userProvider";

import PrivateRoute from "./components/core/PrivateRoute";
import CommonRoute from "./components/core/CommonRoute";

import Logo from "./components/Logo";
import Navigator from "./components/Navigation";
import Recognize from "./containers/Recognize";
import Gallery from "./containers/Gallery";
import Ranking from "./containers/ranking";
import Login from "./containers/Login";
import Register from "./containers/Register";
import NotFound from "./containers/NotFound";

const App = () => {
  return (
    <>
      <Particles className="particles" options={particlesOptions} />
      <HashRouter>
        <UserProvider>
          <Navigator />
          <div className="main-container">
            <Container>
              <Logo />
            </Container>
            <Switch>
              <CommonRoute exact path="/register" component={Register} />
              <CommonRoute exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Recognize} />
              <PrivateRoute exact path="/gallery" component={Gallery} />
              <PrivateRoute exact path="/ranking" component={Ranking} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </UserProvider>
      </HashRouter>
    </>
  );
};

export default App;
