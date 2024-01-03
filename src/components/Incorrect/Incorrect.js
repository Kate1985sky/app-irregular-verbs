import { Row, Col } from "react-bootstrap";

export const Incorrect = () => {
  return (
    <Row className="mt-5">
      <Col className="d-flex justify-content-center">
        <p className=".text-danger">Incorrect request. Please type at least 3 characters</p>
      </Col>
    </Row>
  );
};