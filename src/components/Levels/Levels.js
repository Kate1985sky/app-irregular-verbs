import React from "react";
import { useEditor } from "../../hooks/EditorProvider";
import styles from "./Levels.module.css";

export const Levels = () => {
  const value = useEditor();

  const handleFilterCard = (e) => {
    
    // const filterLevels = value.words.filter(
    //   (item) => item.levels === id
    // );

    console.log(e);
  };
  
  return (
    <div className={styles.filter}>
      <button className={styles.btn}>All</button>
      <button
        type="button"
        data-id={"A1"}
        onClick={(e) => handleFilterCard(e)}
        className={styles.btn}
      >
        A1
      </button>
      <button
        type="button"
        data-id={"A2"}
        onClick={(e) => handleFilterCard(e)}
        className={styles.btn}
      >
        A2
      </button>
      <button
        type="button"
        data-id={"B1"}
        onClick={(e) => handleFilterCard(e)}
        className={styles.btn}
      >
        B1
      </button>
      <button
        type="button"
        data-id={"B2"}
        onClick={(e) => handleFilterCard(e)}
        className={styles.btn}
      >
        B2
      </button>
      <button
        type="button"
        data-id={"C1"}
        onClick={(e) => handleFilterCard(e)}
        className={styles.btn}
      >
        C1
      </button>
      <button
        type="button"
        data-id={"C2"}
        onClick={(e) => handleFilterCard(e)}
        className={styles.btn}
      >
        C2
      </button>
    </div>
  );
};
