import React from "react";
import styles from "./Levels.module.css";
import {useParams, Link} from 'react-router-dom';

export const Levels = () => {
  const params = useParams();
  
  
  return (
    <div className={styles.filter}>
      <Link to="/all-words" className={styles.btn}>All {typeof params.level === 'a1' ? "is-active" : ""}</Link>
      <Link to="/all-words/a1"
        className={styles.btn}
      >
        A1 {typeof params.level === 'a1' ? "is-active" : ""}
      </Link>
      <Link to="/all-words/a2"
        className={styles.btn}
      >
        A2 {typeof params.level === 'a2' ? "is-active" : ""}
      </Link>
      <Link to="/all-words/b1"
        className={styles.btn}
      >
        B1 {typeof params.level === 'b1' ? "is-active" : ""}
      </Link>
      <Link to="/all-words/b2"
        className={styles.btn}
      >
        B2 {typeof params.level === 'b2' ? "is-active" : ""}
      </Link>
      <Link to="/all-words/c1"
        className={styles.btn}
      >
        C1 {typeof params.level === 'c1' ? "is-active" : ""}
      </Link>
      <Link to="/all-words/c2"
        className={styles.btn}
      >
        C2 {typeof params.level === 'c1' ? "is-active" : ""}
      </Link>
    </div>
  );
};
