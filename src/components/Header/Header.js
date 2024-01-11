import { Container, Row, Col } from "react-bootstrap";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <Container>
      <Row className="mb-5">
        <Col className="d-flex justify-content-center">
          <Navigation />
        </Col>
      </Row>
    </Container>
  );
};
