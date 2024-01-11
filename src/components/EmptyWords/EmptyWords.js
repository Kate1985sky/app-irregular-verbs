import { Row, Col } from "react-bootstrap";

export const EmptyWords = () => {
  return (
    <Row className="mt-5">
      <Col className="d-flex justify-content-center">
        <h1>No words yet!</h1>
      </Col>
    </Row>
  );
};
