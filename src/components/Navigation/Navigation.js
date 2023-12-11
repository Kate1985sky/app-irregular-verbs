import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <Link
          className={`${styles.item} ${
            pathname === "/word-of-the-day" ? styles["is-active"] : ""
          }`}
          to="/word-of-the-day"
        >
          word of the day
        </Link>
        <Link
          className={`${styles.item} ${
            pathname.startsWith("/all-words/") ? styles["is-active"] : ""
          }`}
          to="/all-words/"
        >
          all words
        </Link>
        <Link
          className={`${styles.item} ${
            pathname === "/search" ? styles["is-active"] : ""
          }`}
          to="/search"
        >
          search
        </Link>
        <Link
          className={`${styles.item} ${styles.button} ${
            pathname === "/create" ? styles["is-disabled"] : ""
          }`}
          to="/create"
        >
          {" "}
          + create
        </Link>
      </ul>
    </nav>
  );
};
