import { Levels } from "../../components/Levels/Levels";
import { AllCards } from "../../components/AllCards/AllCards";
import styles from "./AllWords.module.css";
import { Container, Row, Col } from "react-bootstrap";

export const AllWords = () => {
  return (
    <Container>
      <Row>
        <Col className="py-4 d-flex justify-content-around">
          <Levels />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <AllCards />
        </Col>
      </Row>
    </Container>
  );
};
