import React, { useState, useEffect, Suspense } from "react";

import { createResource } from "../utils/helpers";
import { getImageCountByCelebrity } from "../utils/services";

import Spinner from "../components/core/Spinner";
const RankingComp = React.lazy(() => import("../components/ranking"));

const Ranking = () => {
  const [pokemonResource, setPokemonResource] = useState(null);

  useEffect(() => {
    setPokemonResource(createResource(getImageCountByCelebrity()));
  }, []);

  return (
    <>
      {pokemonResource && (
        <Suspense fallback={<Spinner />} name="Ranking">
          <RankingComp resource={pokemonResource} />
        </Suspense>
      )}
    </>
  );
};

export default Ranking;
