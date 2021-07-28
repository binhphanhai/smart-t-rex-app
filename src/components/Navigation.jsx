import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { useLogOut } from "../utils/userProvider";
import { useGetUser } from "../utils/userProvider";

const Navigation = () => {
  const path = useLocation().pathname;
  const logout = useLogOut();
  const user = useGetUser();
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#/">Smart T-Rex</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user?.id ? (
            <>
              <Nav className="me-auto">
                <Nav.Link className={path === "/" ? "active" : ""} href="#/">
                  Recognize
                </Nav.Link>
                <Nav.Link
                  className={path === "/recogtrie" ? "active" : ""}
                  href="#/recogtrie"
                >
                  Recogtrie
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#/login" onClick={() => logout()}>
                  Log Out
                </Nav.Link>
              </Nav>
            </>
          ) : (
            <Nav>
              <Nav.Link
                className={path === "/login" ? "active" : ""}
                href="#/login"
              >
                Log In
              </Nav.Link>
              <Nav.Link
                className={path === "/register" ? "active" : ""}
                href="#/register"
              >
                Register
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
