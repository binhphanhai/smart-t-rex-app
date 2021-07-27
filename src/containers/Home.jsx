import React from "react";

import { useGetUser } from "../utils/userProvider";

import Navigator from "../components/Navigation";
import Logo from "../components/Logo";
import Info from "../components/Info";
import InputZone from "../components/InputZone";
import ImagesZone from "../components/ImagesZone";

const Home = () => {
  const user = useGetUser();
  return (
    <div className="home">
      {/* <Particles /> */}
      <Navigator />
      <Logo />
      <Info />
      <InputZone />
      <ImagesZone />
    </div>
  );
};

export default Home;
