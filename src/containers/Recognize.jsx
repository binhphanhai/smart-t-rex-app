import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";

import { useGetUser, useSetUser } from "../utils/userProvider";
import { recognizeImage, addImage, increaseEntry } from "../utils/services";

import Info from "../components/Info";
import InputZone from "../components/recognize/InputZone";
import ImagesZone from "../components/recognize/ImagesZone";

const Recognize = () => {
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
      recognizeImage(imgUrl)
        .then((res) => {
          setIsPending(false);
          setCelebrities(res.data);
          const celebNames = res.data
            .filter((celeb) => celeb.prediction > 0.1)
            .map((celeb) => celeb.name);
          if (celebNames.length > 0) handleAddImage(celebNames);
          else
            Swal.fire({
              icon: "info",
              title: "Pridiction is too low",
              text: "I will not add this image to gallery",
            });
          handleIncreaseEntry();
        })
        .catch((err) => {
          setIsPending(false);
          Swal.fire({
            icon: "error",
            title: "Recognize failed",
            text: err.response?.data.detail
              ? err.response.data.detail
              : "Something went wrong!",
          });
        });
    }
  }, [imgUrl]);

  return (
    <>
      <Info />
      <InputZone setImgUrl={setImgUrl} />
      {isPending && (
        <div className="d-flex justify-content-center mt-2">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}
      <ImagesZone imgUrl={imgUrl} celebrities={celebrities} />
    </>
  );
};

export default Recognize;
