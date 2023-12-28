import React from "react";
import styles from "./Levels.module.css";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { navItems } from "./Levels.config"
import classNames from "classnames";

export const Levels = () => {
  const params = useParams();

  return (
    <Nav className="py-4 d-flex justify-content-center">
      {
        navItems.map(navItem => (
          <Nav.Item
            key={navItem.url}
            className={classNames(styles.btn, {
              [styles["is-active"]]: params.level === navItem.level,
            })}
          >
            <Nav.Link className={styles.link} as={NavLink} to={navItem.url}>
              {navItem.title}
            </Nav.Link>
          </Nav.Item>
        ))
      }
      </Nav>
  )}
// <div className={styles.filter}>
//   <Link
//     to="/all-words"
//     className={`${styles.btn} ${
//       typeof params.level === "undefined" ? styles["is-active"] : ""
//     }`}
//   >
//     All
//   </Link>
//   <Link
//     to="/all-words/a1"
//     className={`${styles.btn} ${
//       params.level === "a1" ? styles["is-active"] : ""
//     }`}
//   >
//     A1
//   </Link>
//   <Link
//     to="/all-words/a2"
//     className={`${styles.btn} ${
//       params.level === "a2" ? styles["is-active"] : ""
//     }`}
//   >
//     A2
//   </Link>
//   <Link
//     to="/all-words/b1"
//     className={`${styles.btn} ${
//       params.level === "b1" ? styles["is-active"] : ""
//     }`}
//   >
//     B1
//   </Link>
//   <Link
//     to="/all-words/b2"
//     className={`${styles.btn} ${
//       params.level === "b2" ? styles["is-active"] : ""
//     }`}
//   >
//     B2
//   </Link>
//   <Link
//     to="/all-words/c1"
//     className={`${styles.btn} ${
//       params.level === "c1" ? styles["is-active"] : ""
//     }`}
//   >
//     C1
//   </Link>
//   <Link
//     to="/all-words/c2"
//     className={`${styles.btn} ${
//       params.level === "c2" ? styles["is-active"] : ""
//     }`}
//   >
//     C2
//   </Link>
// </div>
