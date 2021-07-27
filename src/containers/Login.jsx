import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { login } from "../utils/services";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = (data) => {
    login(data.email, data.password)
      .then((res) => console.log(res))
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: "Something went wrong!",
        })
      );
  };
  return (
    <Container className="h-75 d-flex align-items-center">
      <Row className="w-100 d-flex justify-content-center">
        <Col className="col-md-8 col-lg-6 col-xl-4">
          <Card className="form transparent shadow">
            <Card.Body>
              <h1 className="text-center bold">Login</h1>
              <Form onSubmit={handleSubmit(onLogin)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="bold">Email address</Form.Label>
                  <Form.Control
                    {...register("email", {
                      required: "Input email to continue",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Email is invalid",
                      },
                    })}
                    type="text"
                    placeholder="Enter email"
                  />
                  <small className="text_error">
                    {errors.email ? errors.email.message : ""}
                  </small>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="bold">Password</Form.Label>
                  <Form.Control
                    {...register("password", {
                      required: "Input password to continue",
                    })}
                    type="password"
                    placeholder="Password"
                  />
                  <small className="text_error">
                    {errors.password ? errors.password.message : ""}
                  </small>
                </Form.Group>

                <Button className="w-100" variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
