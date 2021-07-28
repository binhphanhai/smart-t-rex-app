import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useLogOut } from "../utils/userProvider";
import { useGetUser } from "../utils/userProvider";

const Navigation = () => {
  const path = useLocation().pathname;
  const logout = useLogOut();
  const user = useGetUser();
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#/">Smart T-Rex</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user?.id ? (
            <>
              <Nav className="me-auto">
                <Link className={`nav-link ${path === "/" && "active"}`} to="/">
                  Recognize
                </Link>
                <Link
                  className={`nav-link ${path === "/gallery" && "active"}`}
                  to="/gallery"
                >
                  Gallery
                </Link>
                <Link
                  className={`nav-link ${path === "/ranking" && "active"}`}
                  to="/ranking"
                >
                  Ranking
                </Link>
              </Nav>
              <Nav>
                <Link className="nav-link" to="/login" onClick={() => logout()}>
                  Log Out
                </Link>
              </Nav>
            </>
          ) : (
            <Nav>
              <Link
                className={`nav-link ${path === "/login" && "active"}`}
                to="/login"
              >
                Log In
              </Link>
              <Link
                className={`nav-link ${path === "/register" && "active"}`}
                to="/register"
              >
                Register
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
