import React, { useState, useCallback, Suspense } from "react";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";

import Spinner from "../core/Spinner";
import Info from "../core/Info";
import InputZone from "./InputZone";
const ImagesGrid = React.lazy(() => import("./ImagesGrid"));

import { loadImagesByCelebrity } from "../../utils/services";

const Gallery = ({ resource }) => {
  const celebrities = resource.read();
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoadingImageUrls, setIsLoadingImageUrls] = useState(false);

  const handleLoadImages = useCallback((name) => {
    setIsLoadingImageUrls(true);
    loadImagesByCelebrity(name)
      .then((res) => {
        setIsLoadingImageUrls(false);
        setImageUrls(res.data);
      })
      .catch((err) => {
        setIsLoadingImageUrls(false);
        Swal.fire({
          icon: "error",
          title: "Load images failed",
          text: err.response?.data.message
            ? err.response.data.message
            : "Something went wrong!",
        });
      });
  }, []);

  return (
    <>
      <Container>
        <Info />
        <InputZone celebrities={celebrities} setName={handleLoadImages} />
        {isLoadingImageUrls && <Spinner />}
      </Container>
      {imageUrls.length > 0 && (
        <Suspense fallback={<Spinner />}>
          <ImagesGrid imageUrls={imageUrls} />
        </Suspense>
      )}
    </>
  );
};

export default Gallery;
