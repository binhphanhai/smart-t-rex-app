import React, { useState, useEffect } from "react";
import { Container, Table, Row } from "react-bootstrap";
import { getImageCountByCelebrity } from "../utils/services";

const Ranking = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <p className="text-center h2 bold">Top 10 most recognized celebrities</p>
      <Row>
        <Table className="ranking-table" striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">RANK</th>
              <th className="text-center">NAME</th>
              <th className="text-center">RECOGNIZED IMAGES</th>
            </tr>
          </thead>
          <tbody>
            {celebrities.map((celebrities) => (
              <tr key={celebrities.id}>
                <td className="text-center">{celebrities.id}</td>
                <td>{celebrities.celebrity}</td>
                <td className="text-center">{celebrities.count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Ranking;
