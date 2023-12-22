import React from "react";
import { useEditor } from "../../hooks/EditorProvider";
import { OneCard } from "../Card/Card";
import styles from "./AllCards.module.css";
import { EmptyWords } from "../EmptyWords/EmptyWords";

export const AllCards = () => {
  const value = useEditor();

  return (
    <>
      <ul className="d-flex justify-content-center flex-wrap">
        {value.words.length > 0 ? (
          value.words.map((card) => (
            <li key={card.id}>
              <OneCard card={card} />
            </li>
          ))
        ) : (
          <EmptyWords />
        )}
      </ul>
    </>
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
