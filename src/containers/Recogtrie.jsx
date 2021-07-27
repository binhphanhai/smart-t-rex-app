import React, { useEffect, useState } from "react";

import Info from "../components/Info";
import InputZone from "../components/recogtrie/InputZone";

import { getAllCelebrities, loadImagesByCelebrity } from "../utils/services";

const Recogtrie = () => {
  const [celebrities, setCelebrities] = useState([]);

  const handleLoadImages = (name) => {
    loadImagesByCelebrity(name)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllCelebrities()
      .then((res) => {
        setCelebrities(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Info />
      <InputZone celebrities={celebrities} setName={handleLoadImages} />
    </>
  );
};

export default Recogtrie;
