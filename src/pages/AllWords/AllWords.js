import { Levels } from "../../components/Levels/Levels";
import { AllCards } from "../../components/AllCards/AllCards";
import { Container, Row, Col } from "react-bootstrap";

export const AllWords = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
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
