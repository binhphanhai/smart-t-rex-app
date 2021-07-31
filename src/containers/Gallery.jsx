import React, { useEffect, useState, useCallback, Suspense } from "react";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";

import Spinner from "../components/core/Spinner";
import Info from "../components/core/Info";
import InputZone from "../components/gallery/InputZone";
const ImagesGrid = React.lazy(() => import("../components/gallery/ImagesGrid"));

import { getAllCelebrities, loadImagesByCelebrity } from "../utils/services";

const Gallery = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [isLoadingCelebrities, setIsLoadingCelebrities] = useState(false);
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

  useEffect(() => {
    setIsLoadingCelebrities(true);
    getAllCelebrities()
      .then((res) => {
        setIsLoadingCelebrities(false);
        setCelebrities(res.data);
      })
      .catch((err) => {
        setIsLoadingCelebrities(false);
        Swal.fire({
          icon: "error",
          title: "Load celebrities failed",
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
        <InputZone
          celebrities={celebrities}
          isLoading={isLoadingCelebrities}
          setName={handleLoadImages}
        />
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
