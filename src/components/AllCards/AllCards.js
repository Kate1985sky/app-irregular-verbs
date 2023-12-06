import React from "react";
import { useEditor } from "../../hooks/EditorProvider";
import { Card } from "../Card/Card";
import styles from "./AllCards.module.css";

export const AllCards = () => {
  const value = useEditor();

  // const activeColor = () => {

  // }

  return (
    <div className={styles.cards}>
      <ul className={styles.listCards}>
        {value.words.map((card) => (
          <li className={styles.itemCard} key={card.id}>
            <Card card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
};
