import React, { useState, useEffect, Suspense } from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";

import { useGetUser, useSetUser } from "../utils/userProvider";
import { recognizeImage, addImage, increaseEntry } from "../utils/services";
import { removeDuplicates } from "../utils/helpers";

import Spinner from "../components/core/Spinner";
import Info from "../components/Info";
import InputZone from "../components/recognize/InputZone";
const ImagesZone = React.lazy(() =>
  import("../components/recognize/ImagesZone")
);

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
          if (celebNames.length > 0)
            handleAddImage(removeDuplicates(celebNames));
          else
            Swal.fire({
              icon: "info",
              title: "Unknown celebrity",
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
    <Container>
      <Info />
      <InputZone setImgUrl={setImgUrl} />
      {isPending && <Spinner />}
      {imgUrl.length > 0 && (
        <Suspense fallback={<Spinner />}>
          <ImagesZone imgUrl={imgUrl} celebrities={celebrities} />
        </Suspense>
      )}
    </Container>
  );
};

export default Recognize;
