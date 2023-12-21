import React from "react";
import styles from "./Logo.module.css";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export const Logo = () => {
  return (
    
      <Row>
        <Col>
          <img
            src="/images/logo.webp"
            width="110"
            height="50"
            alt="Logo should be here"
            roundedCircle
          />
        </Col>
      </Row>
    
  );
};
