import React from "react";

const PaginationItem = ({ active = false, setPage, children }) => {
  return (
    <li className={`page-item ${active && "active"}`} onClick={setPage}>
      <span className="page-link">{children}</span>
    </li>
  );
};

export default PaginationItem;
