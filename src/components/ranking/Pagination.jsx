import React from "react";

import { MAX_ITEMS_PER_PAGE } from "../../utils/enum";

import PaginationItem from "./PaginationItem";

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

export default Pagination;
