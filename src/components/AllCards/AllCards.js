import React from "react";
import { useEditor } from "../../hooks/EditorProvider";
import { Card } from "../Card/Card";
import styles from "./AllCards.module.css";
import { EmptyWords } from "../EmptyWords/EmptyWords";

export const AllCards = () => {
  const value = useEditor();

  return (
    <div className={styles.cards}>
      <ul className={styles.listCards}>
        {value.words.length > 0 ? value.words.map((card) => (
          <li className={styles.itemCard} key={card.id}>
            <Card card={card} />
          </li>
        )) : <EmptyWords />}
      </ul>
    </div>
  );
};
