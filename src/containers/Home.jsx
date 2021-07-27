import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";

// import { useGetUser } from "../utils/userProvider";
import { detectImage } from "../utils/services";

import Logo from "../components/Logo";
import Info from "../components/Info";
import InputZone from "../components/InputZone";
import ImagesZone from "../components/ImagesZone";

const Home = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [celebrities, setCelebrities] = useState([]);

  useEffect(() => {
    if (imgUrl) {
      setIsPending(true);
      setCelebrities([]);
      detectImage(imgUrl)
        .then((res) => {
          setIsPending(false);
          setCelebrities(res.data);
        })
        .catch((err) => {
          setIsPending(false);
          Swal.fire({
            icon: "error",
            title: "Login failed",
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
