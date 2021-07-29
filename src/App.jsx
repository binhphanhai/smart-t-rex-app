import React, { Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { Container } from "react-bootstrap";

import { particlesOptions } from "./utils/enum";
import UserProvider from "./utils/userProvider";

import PrivateRoute from "./components/core/PrivateRoute";
import CommonRoute from "./components/core/CommonRoute";
import Spinner from "./components/core/Spinner";

import Logo from "./components/core/Logo";
import Navigator from "./components/core/Navigation";

const Recognize = React.lazy(() => import("./containers/Recognize"));
const Gallery = React.lazy(() => import("./containers/Gallery"));
const Ranking = React.lazy(() => import("./containers/ranking"));
const Login = React.lazy(() => import("./containers/Login"));
const Register = React.lazy(() => import("./containers/Register"));
const NotFound = React.lazy(() => import("./containers/NotFound"));

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
            <Suspense fallback={<Spinner />}>
              <Switch>
                <CommonRoute exact path="/register" component={Register} />
                <CommonRoute exact path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Recognize} />
                <PrivateRoute exact path="/gallery" component={Gallery} />
                <PrivateRoute exact path="/ranking" component={Ranking} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </div>
        </UserProvider>
      </HashRouter>
    </>
  );
};

export default App;
