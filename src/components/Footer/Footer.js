import React from "react";
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <hr className={styles.line}/>
        <p className={styles.title}>Created with: Love in 2023</p>
      </div>
    </div>
  );
};