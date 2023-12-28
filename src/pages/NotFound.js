import React from "react";
import {Row, Col} from "react-bootstrap";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <Row>
      <Col className="mt-5">
        <h1 className="text-centre">Sorry, the Page is not found 😱</h1>
      </Col>
    </Row>
  );
};
