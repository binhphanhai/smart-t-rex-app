import React, { useState, useEffect, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { createResource } from "../utils/helpers";
import { getImageCountByCelebrity } from "../utils/services";

import Spinner from "../components/core/Spinner";
import ErrorFallback from "../components/core/ErrorFallback";
const RankingComp = React.lazy(() => import("../components/ranking"));

const Ranking = () => {
  const [pokemonResource, setPokemonResource] = useState(null);

  useEffect(() => {
    setPokemonResource(createResource(getImageCountByCelebrity()));
  }, []);

  return (
    <>
      {pokemonResource ? (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Spinner />} name="Ranking">
            <RankingComp resource={pokemonResource} />
          </Suspense>
        </ErrorBoundary>
      ) : (
        ""
      )}
    </>
  );
};

export default Ranking;
