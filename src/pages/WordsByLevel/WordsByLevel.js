import { Card } from "../../components/Card/Card";
import React from "react";
import { ContentBox } from "../../components/ContentBox/ContentBox";
import { useEditor } from "../../hooks/EditorProvider";
import { Levels } from "../../components/Levels/Levels";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "./WordsByLevel.module.css";
import { EmptyWords } from "../../components/EmptyWords/EmptyWords";

export const WordsByLevel = () => {
  const value = useEditor();

  const { level } = useParams();

  const filteredByLevel = useMemo(() => {
    return value.words.filter((word) => word.levels.toLowerCase() === level);
  }, [value.words, level]);

  return (
    <ContentBox>
      <div className={styles.wrapper}>
        <Levels />

        {filteredByLevel.length > 0 ? (
          <ul className={styles.oneCard}>
            {filteredByLevel.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </ul>
        ) : (
          <EmptyWords />
        )}
      </div>
    </ContentBox>
  );
};
