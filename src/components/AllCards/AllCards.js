import React from "react";
import { useEditor } from "../../hooks/EditorProvider";
import styles from "./AllCards.module.css";

export const AllCards = () => {
  const value = useEditor();

  function handleSwithCard(id) {
    const updatedCompleted = value.words.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          completed: !value.words.completed,
        };
      }
      return card;
    });
    value.setWords(updatedCompleted);
    console.log(updatedCompleted);
  }

  return (
    <div className={styles.cards}>
      <ul>
        {value.words.map((card) => (
          <li key={card.id}>
            {card.completed === false ? (
              <div className={styles.card}>
                <button
                  className={styles.blockLevel}
                  onClick={() => handleSwithCard(card.id)}
                >
                  {card.levels}
                </button>
                <span className={styles.items}>
                  {card["1st form"]}
                  {card["2st form"]}
                  {card["3st form"]}
                </span>
                <span className={styles.items}>{card["example of usage"]}</span>
              </div>
            ) : (
              <div className={styles.card}>
                <button
                  className={styles.blockLevel}
                  onClick={() => handleSwithCard(card.id)}
                >
                  {card.levels}
                </button>
                <span className={styles.items}>
                  {card["translate of the world"]}
                </span>
                <span className={styles.items}>
                  {card["translate of the example"]}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
