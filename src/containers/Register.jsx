import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { register as registerUser } from "../utils/services";
import { useSetUser } from "../utils/userProvider";

const Register = () => {
  const setUser = useSetUser();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isPending, setIsPending] = useState(false);

  const onRegister = (data) => {
    setIsPending(true);
    registerUser(data.email, data.name.toC, data.password)
      .then((res) => {
        setIsPending(false);
        setUser(res.data);
        history.push("/");
      })
      .catch((err) => {
        setIsPending(false);
        Swal.fire({
          icon: "error",
          title: "Register failed",
          text: err.response?.data.detail
            ? err.response.data.detail
            : "Something went wrong!",
        });
      });
  };

  return (
    <Container className="h-75 d-flex align-items-center">
      <Row className="w-100 d-flex justify-content-center">
        <Col className="col-md-8 col-lg-6 col-xl-4">
          <Card className="form transparent shadow">
            <Card.Body>
              <h1 className="text-center bold">Register</h1>
              <Form onSubmit={handleSubmit(onRegister)}>
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
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label className="bold">Name</Form.Label>
                  <Form.Control
                    {...register("name", {
                      required: "Input name to continue",
                    })}
                    type="text"
                    placeholder="Enter name"
                  />
                  <small className="text_error">
                    {errors.name ? errors.name.message : ""}
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
                {isPending && (
                  <div className="d-flex justify-content-center mb-3">
                    <Spinner animation="border" variant="primary" />
                  </div>
                )}
                <Button className="w-100" variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
