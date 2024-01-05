import React from "react";
import { useEditor } from "../../hooks/EditorProvider";
import { OneCard } from "../Card/Card";
import styles from "./AllCards.module.css";
import { EmptyWords } from "../EmptyWords/EmptyWords";

export const AllCards = () => {
  const value = useEditor();

  return (
    <>
      <ul className="row row-cols-1 row-cols-md-2 g-4 p-2">
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


