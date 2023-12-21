import React from "react";
import { useEditor } from "../../hooks/EditorProvider";
import { OneCard } from "../Card/Card";
import styles from "./AllCards.module.css";
import { EmptyWords } from "../EmptyWords/EmptyWords";
import { Container, Row, Col } from "react-bootstrap";

export const AllCards = () => {
  const value = useEditor();

  return (
    <Container>
      <Row>
        <Col>
          <ul className={styles.listCards}>
            {value.words.length > 0 ? (
              value.words.map((card) => (
                <li className={styles.itemCard} key={card.id}>
                  <OneCard card={card} />
                </li>
              ))
            ) : (
              <EmptyWords />
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

{
  /* <div className={styles.cards}>
      <ul className={styles.listCards}>
        {value.words.length > 0 ? value.words.map((card) => (
          <li className={styles.itemCard} key={card.id}>
            <Card card={card} />
          </li>
        )) : <EmptyWords />}
      </ul>
    </div> */
}
