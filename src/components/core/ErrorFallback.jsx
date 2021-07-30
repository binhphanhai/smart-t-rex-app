import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ErrorFallback = ({ error }) => {
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <p className="h1 bold">Oops!</p>
          <p className="h2 bold">There is an error</p>
          <div className="d-flex flex-column align-items-center">
            <p className="h4">{error.message}</p>
            <p className="h5">Sorry and please try again later</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorFallback;
