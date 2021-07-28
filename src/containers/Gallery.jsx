import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Spinner, Container } from "react-bootstrap";

import Info from "../components/Info";
import InputZone from "../components/gallery/InputZone";
import ImagesGrid from "../components/gallery/ImagesGrid";

import { getAllCelebrities, loadImagesByCelebrity } from "../utils/services";

const Gallery = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [isLoadingCelebrities, setIsLoadingCelebrities] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoadingImageUrls, setIsLoadingImageUrls] = useState(false);

  const handleLoadImages = (name) => {
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
          text: err.response?.data.detail
            ? err.response.data.detail
            : "Something went wrong!",
        });
      });
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
        Swal.fire({
          icon: "error",
          title: "Load celebrities failed",
          text: err.response?.data.detail
            ? err.response.data.detail
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
        {isLoadingImageUrls && (
          <div className="d-flex justify-content-center m-3">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </Container>
      <ImagesGrid imageUrls={imageUrls} />
    </>
  );
};

export default Gallery;
