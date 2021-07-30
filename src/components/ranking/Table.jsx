import React from "react";
import { Table as ReactTable } from "react-bootstrap";

const Table = ({ celebrities }) => {
  return (
    <ReactTable className="ranking-table" striped bordered hover>
      <thead>
        <tr>
          <th className="text-center col-2">RANK</th>
          <th className="text-center col-5">NAME</th>
          <th className="text-center col-5">RECOGNIZED IMAGES</th>
        </tr>
      </thead>
      <tbody>
        {celebrities.map((celebrity) => (
          <tr key={celebrity.id}>
            <td className="text-center">{celebrity.id}</td>
            <td>{celebrity.celebrity}</td>
            <td className="text-center">{celebrity.count}</td>
          </tr>
        ))}
      </tbody>
    </ReactTable>
  );
};

export default Table;
