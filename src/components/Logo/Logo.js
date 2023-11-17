import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to={"/"}>
      <img className={styles.photo} src="/images/logo.webp" alt="Logo should be here" />
      </Link>
    </div>
  );
};