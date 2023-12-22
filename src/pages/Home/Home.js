import React from "react";
import styles from "./Home.module.css";
import {Stack, Card, Row, Container, Col} from "react-bootstrap";


export const Home = () => {
  return (
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center">Irregulars verbs easy!</h1>
            <p className="text-center">Learn irregulars verbs by our cards</p>
            <hr className="w-25 mx-auto" />
          </Col>
        </Row>
        <Row>
          <Col sm={{span: 3, offset: 4}} xs={12} className="mb-5 mx-auto">
            <h2 className="text-center">Meet our card</h2>
            <Stack gap={3} className="mb-3">
            <p className="text-center">a font side</p>
            <Card>
              <div
                className="px-3 py-1"
                style={{ backgroundColor: "rgb(250, 112, 112)" }}>
                <p className="text-white mb-0">A1</p>
              </div>
              <Card.Body>
                <Card.Text>pay - paid - paid</Card.Text>
                <Card.Text>
                  <small className="text-muted">He paid the bills and came back home</small>
                </Card.Text>
              </Card.Body>
            </Card>
              <p className="text-center">a back side</p>
              <Card>
                <div
                  className="px-3 py-1"
                  style={{ backgroundColor: "rgb(247, 171, 171)" }}>
                  <p className="text-white mb-0">A1</p>
                </div>
                <Card.Body>
                  <Card.Text>платити</Card.Text>
                  <Card.Text>
                    <small className="text-muted">Він сплатив чек та повернувся додому</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
            <hr className="w-50 mx-auto" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h2>Create new cards and track your progress</h2>
            <p>1. Use a special page for creating your own cards</p>
            <p>2. On all cards pages filter cards by their status</p>
          </Col>
        </Row>
      </Container>
  );
};
