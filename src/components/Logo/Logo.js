import React from "react";
import { Col, Row } from "react-bootstrap";

export const Logo = () => {
  return (
    <Row>
      <Col>
        <img
          src="../../../public/images/logo.webp"
          width="110"
          height="50"
          alt="Logo should be here"
          roundedCircle
        />
      </Col>
    </Row>
  );
};
