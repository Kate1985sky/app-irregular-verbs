import React from "react";
import { useState } from "react";
import styles from "./Card.module.css";
import { Row, Col } from "react-bootstrap";

const palette = {
  a1: { frontside: "rgb(250, 112, 112)", backside: "rgb(247, 171, 171)" },
  a2: { frontside: "rgb(250, 112, 112)", backside: "rgb(247, 171, 171)" },
  b1: { frontside: "rgb(247, 195, 23)", backside: "rgb(248, 212, 94)" },
  b2: { frontside: "rgb(247, 195, 23)", backside: "rgb(248, 212, 94)" },
  c1: { frontside: "blue", backside: "lightblue" },
  c2: { frontside: "blue", backside: "lightblue" },
};

export const Card = ({ card }) => {
  const [frontSide, setFrontSide] = useState(false);
  console.log(frontSide);

  const wordsWithSeparator = [
    card["1st form"],
    card["1st form"],
    card["3st form"],
  ].join(" - ");

  const cardPaletteByLevel = palette[card.levels.toLowerCase()];

  const sideColorKey = frontSide ? "frontside" : "backside";
  const colorBySide = cardPaletteByLevel[sideColorKey];

  return (
    
    <li className={styles.itemCard}>
    {frontSide ? (
      <div className={styles.card}>
        <div
          style={{ backgroundColor: colorBySide }}
          className={styles.blockLevel}
        >
          <span className={styles.level}>{card.levels}</span>
          <span
            className={styles.titleItem}
            onClick={() => setFrontSide(false)}
          >
            Show translation
          </span>
        </div>
        <span className={styles.items}>{wordsWithSeparator}</span>
        <span className={styles.items}>{card["example of usage"]}</span>
      </div>
    ) : (
      <div className={styles.card}>
        <div
          style={{ backgroundColor: colorBySide }}
          className={styles.blockLevel}
        >
          <span className={styles.level}>{card.levels}</span>
          <span
            className={styles.titleItem}
            onClick={() => setFrontSide(true)}
          >
            Show original
          </span>
        </div>
        <span className={styles.items}>{card["translate of the world"]}</span>
        <span className={styles.items}>
          {card["translate of the example"]}
        </span>
      </div>
    )}
  </li>

   
       
  );
};

  