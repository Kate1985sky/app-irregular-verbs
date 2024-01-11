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
            <Nav.Link className="d-flex justify-content-center align-items-center p-1" as={NavLink} to={navItem.url}>
              {navItem.title}
            </Nav.Link>
          </Nav.Item>
        ))
      }
      </Nav>
  )}

