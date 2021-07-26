import React from "react";

import Navigator from "../components/Navigation";
import Logo from "../components/Logo";
import Info from "../components/Info";
import InputZone from "../components/InputZone";
import ImagesZone from "../components/ImagesZone";

const Home = () => {
  return (
    <div className="home">
      <Navigator />
      <Logo />
      <Info />
      <InputZone />
      <ImagesZone />
    </div>
  );
};

export default Home;
