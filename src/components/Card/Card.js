import React from "react";
import { useState } from "react";
import styles from "./Card.module.css";
// import {useMemo} from 'react';
import { useParams } from "react-router-dom";

export const Card = ({ card }) => {
  const [frontSide, setFrontSide] = useState(false);

  const { level } = useParams();

  const palette = {
    a1: { frontside: "brown", backside: "pink" },
    a2: { frontside: "brown", backside: "pink" },
    b1: { frontside: "yellow", backside: "blue" },
    b2: { frontside: "yellow", backside: "blue" },
    c1: { frontside: "blue", backside: "blue" },
    c2: { frontside: "blue", backside: "blue" },
  };
  const cardPaletteByLevel = palette[level];
  const isBackSide = true;

  const sideColorKey = isBackSide ? "backside" : "frontside";
  const colorBySide = palette[sideColorKey];

  // const filteredByColor = useMemo(() => {

  //   return Object.entries(palette);
  // }, []);

  return (
    <li className={styles.itemCard}>
      {frontSide ? (
        <div className={styles.card}>
          <button
            styles={{ backgroundColor: colorBySide }}
            className={styles.blockLevel}
            onClick={() => setFrontSide(false)}
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
            styles={{ backgroundColor: colorBySide }}
            className={styles.blockLevel}
            onClick={() => setFrontSide(true)}
          >
            {card.levels}
          </button>
          <span className={styles.items}>{card["translate of the world"]}</span>
          <span className={styles.items}>
            {card["translate of the example"]}
          </span>
        </div>
      )}
    </li>
  );
};
