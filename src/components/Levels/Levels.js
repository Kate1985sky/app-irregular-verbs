import React from "react";
import styles from "./Levels.module.css";
import { useParams, Link } from "react-router-dom";

export const Levels = () => {
  const params = useParams();

  return (
    <div className={styles.filter}>
      <Link
        to="/all-words"
        className={`${styles.btn} ${
          typeof params.level === "undefined" ? styles["is-active"] : ""
        }`}
      >
        All
      </Link>
      <Link
        to="/all-words/a1"
        className={`${styles.btn} ${
          params.level === "a1" ? styles["is-active"] : ""
        }`}
      >
        A1
      </Link>
      <Link
        to="/all-words/a2"
        className={`${styles.btn} ${
          params.level === "a2" ? styles["is-active"] : ""
        }`}
      >
        A2
      </Link>
      <Link
        to="/all-words/b1"
        className={`${styles.btn} ${
          params.level === "b1" ? styles["is-active"] : ""
        }`}
      >
        B1
      </Link>
      <Link
        to="/all-words/b2"
        className={`${styles.btn} ${
          params.level === "b2" ? styles["is-active"] : ""
        }`}
      >
        B2
      </Link>
      <Link
        to="/all-words/c1"
        className={`${styles.btn} ${
          params.level === "c1" ? styles["is-active"] : ""
        }`}
      >
        C1
      </Link>
      <Link
        to="/all-words/c2"
        className={`${styles.btn} ${
          params.level === "c2" ? styles["is-active"] : ""
        }`}
      >
        C2
      </Link>
    </div>
  );
};
