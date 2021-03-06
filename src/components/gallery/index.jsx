import React, { useState, useCallback, Suspense } from "react";
import { Container } from "react-bootstrap";
import { ErrorBoundary } from "react-error-boundary";

import Spinner from "../core/Spinner";
import Info from "../core/Info";
import InputZone from "./InputZone";
import ErrorFallback from "../core/ErrorFallback";
const ImagesGrid = React.lazy(() => import("./ImagesGrid"));

import { loadImagesByCelebrity } from "../../utils/services";
import { createResource } from "../../utils/helpers";

const Gallery = ({ resource }) => {
  const celebrities = resource.read();
  const [imageUrlsResource, setImageUrlsResource] = useState(null);

  const handleLoadImages = useCallback((name) => {
    setImageUrlsResource(createResource(loadImagesByCelebrity(name)));
  }, []);

  return (
    <>
      <Container>
        <Info />
        <InputZone celebrities={celebrities} setName={handleLoadImages} />
      </Container>
      {imageUrlsResource && (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Spinner />}>
            <ImagesGrid resource={imageUrlsResource} />
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  );
};

export default Gallery;
