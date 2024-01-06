import React from "react";
import { OneCard } from "../../components/Card/Card";
import { useEditor } from "../../hooks/EditorProvider";
import { Levels } from "../../components/Levels/Levels";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { EmptyWords } from "../../components/EmptyWords/EmptyWords";
import { Container, Row, Col } from "react-bootstrap";

export const WordsByLevel = () => {
  const value = useEditor();

  const { level } = useParams();

  const filteredByLevel = useMemo(() => {
    return value.words.filter((word) => word.level.toLowerCase() === level);
  }, [value.words, level]);

  return (
    <Container>
      <Row>
        <Col xs="12">
          <Levels />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {filteredByLevel.length > 0 ? (
          <ul className="w-50 row row-cols-1 row-cols-md-2 p-2">
            {filteredByLevel.map((card) => (
              <Col xs="12" sm="6">
                <OneCard card={card} key={card.id} />
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
