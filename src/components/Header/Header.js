import { Container, Row, Col } from "react-bootstrap";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <Container>
      <Row className="mb-5">
        <Col xs={6}>
          <Navigation />
        </Col>
      </Row>
    </Container>
  );
};
