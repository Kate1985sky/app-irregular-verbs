import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useEditor } from "../../hooks/EditorProvider";

export const Navigation = () => {
  const value = useEditor();

  return (
   
    <nav className={styles.container}>
      <ul className={styles.list}>
        <Link className={styles.item} to="/word-of-the-day">
          word of the day
        </Link>
        <Link className={styles.item} to="/all-words">
          all words
        </Link>
        <Link className={styles.item} to="/search">
          search
        </Link>
        <Link className={styles.item} to="/create">
          {" "}
          + create
        </Link>
      </ul>
    </nav>
    
    
    
  );
};
