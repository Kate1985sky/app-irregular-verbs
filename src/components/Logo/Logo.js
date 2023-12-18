import React from "react";
import styles from "./Logo.module.css";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";


export const Logo = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/images/logo.webp"
            width="110"
            height="50"
            alt="Logo should be here"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/word-of-the-day">Word-of-the-day</Nav.Link>
            <Nav.Link href="/all-words/">All-words</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/create">+ Create</Nav.Link>
            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
