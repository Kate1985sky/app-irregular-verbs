import React from "react";
import styles from "./Home.module.css";
import Card from "react-bootstrap/Card";
import { CardBody, Container } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { ContentBox } from "../../components/ContentBox/ContentBox";

export const Home = () => {
  return (
    <ContentBox>
      <Container className="text-center overflow-hidden">
        <Stack className="row gy-4">
          <Card.Title style={{ "font-size": "33px", "letter-spacing": "1px" }}>
            Irregulars verbs easy!
          </Card.Title>
          <Card.Text style={{ "font-size": "20px" }}>
            Learn irregulars verbs by our cards
          </Card.Text>
          <Card.Text>
            <hr style={{ width: "165px", margin: "0 auto" }} />
          </Card.Text>

          <Card.Title>Meet our card</Card.Title>
          <Card.Text>a font side</Card.Text>
          <Card
            style={{ width: "275px", margin: "0 auto", padding: 0}}
          >
            <Card.Body style={{ padding: 0, background: "rgb(250, 112, 112)"}}>
              <Card.Title style={{ color: "white"}}>A1</Card.Title>
              </Card.Body>
              <Card.Text>pay - paid - paid</Card.Text>
              <Card.Text><small class="text-muted">He paid the bills and came back home</small></Card.Text>
            
          </Card>
          <Card.Text>a back side</Card.Text>
          <Card
            style={{ width: "275px", margin: "0 auto", padding: 0}}
          >
            <Card.Body style={{ padding: 0, background: "rgb(247, 171, 171)"}}>
              <Card.Title style={{ color: "white"}}>A1</Card.Title>
              </Card.Body>
              <Card.Text>платити</Card.Text>
              <Card.Text><small class="text-muted">Він сплатив чек та повернувся додому</small></Card.Text>
            
          </Card>
          <Card.Text>
            <hr style={{ width: "165px", margin: "0 auto" }} />
          </Card.Text>

          <Card.Title>Create new cards and track your progress</Card.Title>
          <Card.Text>
            1. Use a special page for creating your own cards
          </Card.Text>

          <Card.Text>
            2. On all cards pages filter cards by their status
          </Card.Text>
        </Stack>
      </Container>
    </ContentBox>
  );
};
