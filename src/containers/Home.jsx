import React, { useState, useEffect } from "react";

// import { useGetUser } from "../utils/userProvider";

import Logo from "../components/Logo";
import Info from "../components/Info";
import InputZone from "../components/InputZone";
import ImagesZone from "../components/ImagesZone";

const Home = () => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {}, [imgUrl]);

  return (
    <div className="home">
      <Logo />
      <Info />
      <InputZone setImgUrl={setImgUrl} />
      <ImagesZone imgUrl={imgUrl} />
    </div>
  );
};

export default Home;
