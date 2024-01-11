import React from "react";
import { useEditor } from "../../hooks/EditorProvider";
import { OneCard } from "../Card/Card";
import { EmptyWords } from "../EmptyWords/EmptyWords";
import { Container, Row, Col } from "react-bootstrap";

export const AllCards = () => {
  const value = useEditor();

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {value.words.length > 0 ? (
          <ul className="w-50 row row-cols-1 row-cols-md-2 p-2">
            {value.words.map((card) => (
              <Col xs="12" sm="6">
                <li key={card.id}>
                  <OneCard card={card} />
                </li>
              </Col>
            ))}
          </ul>
        ) : (
          <Col xs="12">
            <EmptyWords />
          </Col>
        )}
      </Row>
    </Container>
  );
};
