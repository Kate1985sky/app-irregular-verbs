import { Levels } from "../../components/Levels/Levels";
import { AllCards } from "../../components/AllCards/AllCards";
import styles from "./AllWords.module.css";
import { Container, Row, Col } from "react-bootstrap";

export const AllWords = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Levels />
        </Col>
      </Row>
      <Row>
        <Col>
          <AllCards />
        </Col>
      </Row>
    </Container>
  );
};
