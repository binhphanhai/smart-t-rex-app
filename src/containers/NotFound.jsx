import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <p className="h1 bold">Oops!</p>
          <p className="h2 bold">404 Not Found</p>
          <div className="d-flex flex-column flex-lg-row align-items-center">
            <p className="h4">Sorry, an error has occured, </p>
            <p className="h4">Requested page not found!</p>
          </div>
          <Link to="/">
            <Button>
              <span className="h4">Take me Home</span>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
