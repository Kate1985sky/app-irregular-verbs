import React from "react";
import { useState } from "react";
import styles from "./Card.module.css";
import { CardBody, CardText, Card } from "react-bootstrap";

const palette = {
  a1: { frontside: "rgb(250, 112, 112)", backside: "rgb(247, 171, 171)" },
  a2: { frontside: "rgb(250, 112, 112)", backside: "rgb(247, 171, 171)" },
  b1: { frontside: "rgb(247, 195, 23)", backside: "rgb(248, 212, 94)" },
  b2: { frontside: "rgb(247, 195, 23)", backside: "rgb(248, 212, 94)" },
  c1: { frontside: "blue", backside: "lightblue" },
  c2: { frontside: "blue", backside: "lightblue" },
};

export const OneCard = ({ card }) => {
  const [frontSide, setFrontSide] = useState(false);

  const wordsWithSeparator = [
    card["1st form"],
    card["1st form"],
    card["3st form"],
  ].join(" - ");

  const cardPaletteByLevel = palette[card.level.toLowerCase()];

  const sideColorKey = frontSide ? "frontside" : "backside";

  const colorBySide = cardPaletteByLevel[sideColorKey];

  return frontSide ? (
    <Card className="w-100 rounded-3">
      <div
        style={{ backgroundColor: colorBySide }}
        className="px-3 py-2 d-flex justify-content-between"
      >
        <p className="text-white mb-0">{card.level}</p>
        <p className="text-white mb-0" onClick={() => setFrontSide(false)}>
          Show translation
        </p>
      </div>
      <CardBody>
        <CardText>{wordsWithSeparator}</CardText>
        <CardText>{card["example of usage"]}</CardText>
      </CardBody>
    </Card>
  ) : (
    <Card className="w-100 rounded-3">
      <div
        style={{ backgroundColor: colorBySide }}
        className="px-3 py-2 d-flex justify-content-between"
      >
        <p className="text-white mb-0">{card.level}</p>
        <p className="text-white mb-0" onClick={() => setFrontSide(true)}>
          Show origional
        </p>
      </div>
      <CardBody>
        <CardText>{card["translate of the world"]}</CardText>
        <CardText>{card["translate of the example"]}</CardText>
      </CardBody>
    </Card>
  );
};
