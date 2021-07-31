import React, { useEffect, useState, Suspense } from "react";

import { getAllCelebrities } from "../utils/services";
import { createResource } from "../utils/helpers";

import Spinner from "../components/core/Spinner";
const GalleryComp = React.lazy(() => import("../components/gallery"));

const Gallery = () => {
  const [celebritiesResource, setCelebritiesResource] = useState(null);

  useEffect(() => {
    setCelebritiesResource(createResource(getAllCelebrities()));
  }, []);

  return (
    <>
      {celebritiesResource && (
        <Suspense fallback={<Spinner />}>
          <GalleryComp resource={celebritiesResource} />
        </Suspense>
      )}
    </>
  );
};

export default Gallery;
