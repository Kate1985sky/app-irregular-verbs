import React from "react";
import styles from "./Navigation.module.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

export const Navigation = () => {
  return (
    <Navbar className="bg-body-tertiary navbar-expand-lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/images/logo.webp"
            width="110"
            height="50"
            alt="Logo should be here"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav direction="horizontal" gap={4}>
            <Nav.Link as={NavLink} to="/word-of-the-day">
              Word-of-the-day
            </Nav.Link>
            <Nav.Link as={NavLink} to="/all-words/">
              All-words
            </Nav.Link>
            <Nav.Link as={NavLink} to="/search">
              Search
            </Nav.Link>
            <div className="vr" />
            <Nav.Link as={NavLink} to="/create">
              + Create
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
