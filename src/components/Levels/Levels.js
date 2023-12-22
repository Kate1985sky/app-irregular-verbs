import React from "react";
import styles from "./Levels.module.css";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const Levels = () => {
  const params = useParams();

  return (
    <Nav className="d-flex justify-content-center">
      <Nav.Item
        className={`${styles.btn} ${
          typeof params.level === "undefined" ? styles["is-active"] : ""
        }`}
      >
        <Nav.Link as={NavLink} to="/all-words">
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={`${styles.btn} ${
          typeof params.level === "a1" ? styles["is-active"] : ""
        }`}
      >
        <Nav.Link as={NavLink} to="/all-words/a1">
          A1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={`${styles.btn} ${
          typeof params.level === "a2" ? styles["is-active"] : ""
        }`}
      >
        <Nav.Link as={NavLink} to="/all-words/a2">
          A2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={`${styles.btn} ${
          typeof params.level === "b1" ? styles["is-active"] : ""
        }`}
      >
        <Nav.Link as={NavLink} to="/all-words/b1">
          B1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={`${styles.btn} ${
          typeof params.level === "b2" ? styles["is-active"] : ""
        }`}
      >
        <Nav.Link as={NavLink} to="/all-words/b2">
          B2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={`${styles.btn} ${
          typeof params.level === "c1" ? styles["is-active"] : ""
        }`}
      >
        <Nav.Link as={NavLink} to="/all-words/c1">
          C1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={`${styles.btn} ${
          typeof params.level === "c2" ? styles["is-active"] : ""
        }`}
      >
        <Nav.Link as={NavLink} to="/all-words/c2">
          C2
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
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
