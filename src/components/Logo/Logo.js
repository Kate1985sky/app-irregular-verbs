import React from "react";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.photo} src="/images/logo.webp" alt="Logo should be here" />
    </div>
  );
};