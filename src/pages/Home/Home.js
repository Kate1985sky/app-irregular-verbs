import React from "react";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.irregular}>
        <h1 className={styles.title}>irregulars verbs easy!</h1>
        <p className={styles.article}>Learn irregulars verbs by our cards</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.cards}>
        <h2>Meet our card</h2>
        <p>a font side</p>
        <div className={styles.card}>
          <div className={styles.incard}>
            <span className={styles.span}>A1</span>
            <span className={styles.span}>pay - paid - paid</span>
            <span className={styles.span}>
              He paid the bills and came back home
            </span>
          </div>
        </div>
        <p>a back side</p>
        <div className={styles.card}>
          <div className={styles.backcard}>
            <span className={styles.span}>A1</span>
            <span className={styles.span}>платити</span>
            <span className={styles.span}>
              Він оплатив рахунки та повернувся додому
            </span>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <div className="info">
        <h3 className={styles.titleInfo}>
          Create new cards and track your progress
        </h3>
        <ol>
          <li className={styles.info}>
            Use a special page for creating your own cards
          </li>
          <li className={styles.info}>
            On all cards pages filter cards by their status
          </li>
        </ol>
      </div>
    </div>
  );
};
