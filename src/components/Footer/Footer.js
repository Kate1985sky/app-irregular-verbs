import React from "react";

import { Container, Row, Col } from "react-bootstrap"

import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <Container >
      <Row >
        <Col className="py-4">
          <hr className="w-50 mx-auto" />
          <h4 className="text-center mt-4"><small className="text-muted">Created with: Love in 2023</small></h4>
        </Col>
      </Row>
    </Container>
  );
};