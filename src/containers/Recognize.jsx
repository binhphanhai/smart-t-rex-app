import React, { useState, useEffect, Suspense } from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";

import { useGetUser, useSetUser } from "../utils/userProvider";
import { recognizeImage, addImage, increaseEntry } from "../utils/services";
import { removeDuplicates } from "../utils/helpers";

import Spinner from "../components/core/Spinner";
import Info from "../components/core/Info";
import InputZone from "../components/recognize/InputZone";
const ImagesZone = React.lazy(() =>
  import("../components/recognize/ImagesZone")
);

const Recognize = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [pendingCount, setPendingCount] = useState(false);
  const [celebrities, setCelebrities] = useState([]);
  const user = useGetUser();
  const setUser = useSetUser();

  const fireError = (title = "Failed on fetching API", message) => {
    Swal.fire({
      icon: "error",
      title: title,
      text: message || "Something went wrong!",
    });
  };

  const handleAddImage = (celebs) => {
    setPendingCount((state) => state + 1);
    addImage(imgUrl, celebs)
      .then((res) => {
        setPendingCount((state) => state - 1);
      })
      .catch((err) => {
        setPendingCount((state) => state - 1);
        fireError("Add Image failed", err.response?.data.message);
      });
  };

  const handleIncreaseEntry = () => {
    setPendingCount((state) => state + 1);
    increaseEntry(user.id)
      .then((res) => {
        setPendingCount((state) => state - 1);
        setUser({ ...user, entries: res.data });
      })
      .catch((err) => {
        setPendingCount((state) => state - 1);
        fireError("Increase entry failed", err.response?.data.message);
      });
  };

  useEffect(() => {
    if (imgUrl) {
      setPendingCount((state) => state + 1);
      setCelebrities([]);
      recognizeImage(imgUrl)
        .then((res) => {
          setPendingCount((state) => state - 1);
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
          setPendingCount((state) => state - 1);
          fireError("Recognize failed", err.response?.data.message);
        });
    }
  }, [imgUrl]);

  return (
    <Container>
      <Info />
      <InputZone setImgUrl={setImgUrl} />
      {pendingCount > 0 && <Spinner />}
      {imgUrl.length > 0 && (
        <Suspense fallback={<Spinner />}>
          <ImagesZone imgUrl={imgUrl} celebrities={celebrities} />
        </Suspense>
      )}
    </Container>
  );
};

export default Recognize;
