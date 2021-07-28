import React, { useEffect, useState } from "react";

import Info from "../components/Info";
import InputZone from "../components/recogtrie/InputZone";

import { getAllCelebrities, loadImagesByCelebrity } from "../utils/services";

const Recogtrie = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [isLoadingCelebrities, setIsLoadingCelebrities] = useState(false);

  const handleLoadImages = (name) => {
    loadImagesByCelebrity(name)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoadingCelebrities(true);
    getAllCelebrities()
      .then((res) => {
        setIsLoadingCelebrities(false);
        setCelebrities(res.data);
      })
      .catch((err) => {
        setIsLoadingCelebrities(false);
      });
  }, []);

  return (
    <>
      <Info />
      <InputZone
        celebrities={celebrities}
        isLoading={isLoadingCelebrities}
        setName={handleLoadImages}
      />
    </>
  );
};

export default Recogtrie;
