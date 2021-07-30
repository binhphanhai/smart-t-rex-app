import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import { getImageCountByCelebrity } from "../utils/services";
import { MAX_ITEMS_PER_PAGE } from "../utils/enum";

import Spinner from "../components/core/Spinner";
import Table from "../components/ranking/Table";
import Pagination from "../components/ranking/Pagination";

const Ranking = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [showedCelebrities, setShowedCelebrities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const end = currentPage * MAX_ITEMS_PER_PAGE;
    const start = end - MAX_ITEMS_PER_PAGE;
    setShowedCelebrities(celebrities.slice(start, end));
  }, [currentPage, celebrities]);

  useEffect(() => {
    setIsLoading(true);
    getImageCountByCelebrity()
      .then((res) => {
        setIsLoading(false);
        setCelebrities(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Load ranking failed",
          text: err.response?.data.detail
            ? err.response.data.detail
            : "Something went wrong!",
        });
      });
  }, []);

  return (
    <Container>
      <p className="text-center h2 bold">
        The most recognized celebrities Ranking
      </p>
      {isLoading ? (
        <Spinner />
      ) : (
        <Row>
          <Table celebrities={showedCelebrities} />
          <br />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItem={celebrities.length}
          />
        </Row>
      )}
    </Container>
  );
};

export default Ranking;
