import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";



export const Navigation = () => {

  return (
   
    <nav className={styles.container}>
      <ul className={styles.list}>
        <Link className={styles.item} to="/word-of-the-day">
          word of the day
        </Link>
        <Link className={styles.item} to="/all-words/">
          all words
        </Link>
        <Link className={styles.item} to="/search">
          search
        </Link>
        <NavLink className={styles.item} to="/create">
          {" "}
          + create
        </NavLink>
      </ul>
    </nav>
    
    
    
  );
};
