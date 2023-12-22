import { Container, Row, Col } from "react-bootstrap";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <Container>
      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <Navigation />
        </Col>
      </Row>
    </Container>
  );
};
