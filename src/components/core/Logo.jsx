import React from "react";
import Tilt from "react-tilt";

import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="m-4 mt-3">
      <Tilt
        className="Tilt rounded shadow"
        options={{ max: 50 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img className="p-3" alt="" src={logo} width={150} height={150} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
