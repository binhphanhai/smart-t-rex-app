import React, { useState, useEffect } from "react";
import { Container, Table, Row } from "react-bootstrap";

import Spinner from "../components/core/Spinner";
import { getImageCountByCelebrity } from "../utils/services";
import { MAX_ITEMS_PER_PAGE } from "../utils/enum";

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
          <Table className="ranking-table" striped bordered hover>
            <thead>
              <tr>
                <th className="text-center col-2">RANK</th>
                <th className="text-center col-5">NAME</th>
                <th className="text-center col-5">RECOGNIZED IMAGES</th>
              </tr>
            </thead>
            <tbody>
              {showedCelebrities.map((celebrity) => (
                <tr key={celebrity.id}>
                  <td className="text-center">{celebrity.id}</td>
                  <td>{celebrity.celebrity}</td>
                  <td className="text-center">{celebrity.count}</td>
                </tr>
              ))}
            </tbody>
          </Table>
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

const Pagination = ({ currentPage, setCurrentPage, totalItem }) => {
  const totalPage = Math.ceil(totalItem / MAX_ITEMS_PER_PAGE);
  return (
    <ul className="pagination d-flex justify-content-end">
      {totalPage > 1 && (
        <PaginationItem setPage={() => setCurrentPage(1)}>
          &laquo;
        </PaginationItem>
      )}
      {currentPage > 2 && currentPage === totalPage && (
        <PaginationItem setPage={() => setCurrentPage(currentPage - 2)}>
          {currentPage - 2}
        </PaginationItem>
      )}
      {currentPage > 1 && (
        <PaginationItem setPage={() => setCurrentPage(currentPage - 1)}>
          {currentPage - 1}
        </PaginationItem>
      )}
      {totalPage > 0 && <PaginationItem active>{currentPage}</PaginationItem>}
      {currentPage < totalPage && (
        <PaginationItem setPage={() => setCurrentPage(currentPage + 1)}>
          {currentPage + 1}
        </PaginationItem>
      )}
      {currentPage < totalPage - 1 && currentPage === 1 && (
        <PaginationItem setPage={() => setCurrentPage(currentPage + 2)}>
          {currentPage + 2}
        </PaginationItem>
      )}
      {totalPage > 1 && (
        <PaginationItem setPage={() => setCurrentPage(totalPage)}>
          &raquo;
        </PaginationItem>
      )}
    </ul>
  );
};

const PaginationItem = ({ active = false, setPage, children }) => {
  return (
    <li className={`page-item ${active && "active"}`} onClick={setPage}>
      <span className="page-link">{children}</span>
    </li>
  );
};

export default Ranking;
