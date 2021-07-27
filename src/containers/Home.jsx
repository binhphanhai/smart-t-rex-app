import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";

import { useGetUser, useSetUser } from "../utils/userProvider";
import { detectImage, addImage, increaseEntry } from "../utils/services";

import Logo from "../components/Logo";
import Info from "../components/Info";
import InputZone from "../components/InputZone";
import ImagesZone from "../components/ImagesZone";

const Home = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [celebrities, setCelebrities] = useState([]);
  const user = useGetUser();
  const setUser = useSetUser();

  const handleAddImage = (celebs) => {
    setIsPending(true);
    addImage(imgUrl, celebs)
      .then((res) => {
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
        Swal.fire({
          icon: "error",
          title: "Add Image failed",
          text: err.response?.data.detail
            ? err.response.data.detail
            : "Something went wrong!",
        });
      });
  };

  const handleIncreaseEntry = () => {
    setIsPending(true);
    increaseEntry(user.id)
      .then((res) => {
        setIsPending(false);
        setUser({ ...user, entries: res.data });
      })
      .catch((err) => {
        setIsPending(false);
        Swal.fire({
          icon: "error",
          title: "Increase entry failed",
          text: err.response?.data.detail
            ? err.response.data.detail
            : "Something went wrong!",
        });
      });
  };

  useEffect(() => {
    if (imgUrl) {
      setIsPending(true);
      setCelebrities([]);
      detectImage(imgUrl)
        .then((res) => {
          setIsPending(false);
          setCelebrities(res.data);
          const celebNames = res.data
            .filter((celeb) => celeb.exact > 0.1)
            .map((celeb) => celeb.name);
          celebNames.length > 0 && handleAddImage(celebNames);
          handleIncreaseEntry();
        })
        .catch((err) => {
          setIsPending(false);
          Swal.fire({
            icon: "error",
            title: "Predict failed",
            text: err.response?.data.detail
              ? err.response.data.detail
              : "Something went wrong!",
          });
        });
    }
  }, [imgUrl]);

  return (
    <div className="home">
      <Logo />
      <Info />
      <InputZone setImgUrl={setImgUrl} />
      {isPending && (
        <div className="d-flex justify-content-center mt-2">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}
      <ImagesZone imgUrl={imgUrl} celebrities={celebrities} />
    </div>
  );
};

export default Home;
