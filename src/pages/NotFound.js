import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <h1>Sorry, the Page is not found 😱</h1>
        </Col>
      </Row>
    </Container>
  );
};
