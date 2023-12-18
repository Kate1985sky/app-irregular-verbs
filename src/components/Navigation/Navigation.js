import React from "react";
import styles from "./Navigation.module.css";
import { Nav, Navbar, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export const Navigation = () => {
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
          <Stack direction="horizontal" gap={4}>
            <Nav.Link href="/word-of-the-day">Word-of-the-day</Nav.Link>
            <Nav.Link href="/all-words/">All-words</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <div className="vr"/>
            <Nav.Link href="/create">+ Create</Nav.Link>
            </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
