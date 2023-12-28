import { OneCard } from "../../components/Card/Card";
import React from "react";
import { useEditor } from "../../hooks/EditorProvider";
import { Levels } from "../../components/Levels/Levels";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "./WordsByLevel.module.css";
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
        <Col className="w-auto">
          <Levels />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          {filteredByLevel.length > 0 ? (
            <ul className="row row-cols-1 row-cols-md-2 w-50 p-2">
              {filteredByLevel.map((card) => (
                <OneCard card={card} key={card.id} />
              ))}
            </ul>
          ) : (
            <EmptyWords />
          )}
        </Col>
      </Row>
    </Container>
  );
};
