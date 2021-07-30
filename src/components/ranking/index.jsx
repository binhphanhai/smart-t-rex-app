import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import { MAX_ITEMS_PER_PAGE } from "../../utils/enum";

import Table from "./Table";
import Pagination from "./Pagination";

const Ranking = ({ resource }) => {
  const celebrities = resource.read();
  const [showedCelebrities, setShowedCelebrities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const end = currentPage * MAX_ITEMS_PER_PAGE;
    const start = end - MAX_ITEMS_PER_PAGE;
    setShowedCelebrities(celebrities.slice(start, end));
  }, [currentPage, celebrities]);

  return (
    <Container>
      <p className="text-center h2 bold">
        The most recognized celebrities Ranking
      </p>
      <Row>
        <Table celebrities={showedCelebrities} />
        <br />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItem={celebrities.length}
        />
      </Row>
    </Container>
  );
};

export default Ranking;
