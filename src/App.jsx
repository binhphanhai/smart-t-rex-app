import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Particles from "react-tsparticles";

import { particlesOptions } from "./enum";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import NotFound from "./containers/NotFound";

const App = () => {
  return (
    <>
      <Particles className="particles" options={particlesOptions} />
      <HashRouter>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
