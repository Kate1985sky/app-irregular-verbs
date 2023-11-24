import React from "react";
import { Home } from "../../pages/Home/Home";
import { WordOfTheDay } from "../../pages/WordOfTheDay/WordOfTheDay";
import { NotFound } from "../../pages/NotFound";
import { AllWords } from "../../pages/AllWords/AllWords";
import { Routes, Route } from "react-router-dom";
import { Create } from "../../pages/Create/Create";
import styles from "./Main.module.css";
import { ContentBox } from "../ContentBox/ContentBox";

export function Main() {
  return (
    <ContentBox>
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word-of-the-day" element={<WordOfTheDay />} />
        <Route path="/all-words" element={<AllWords />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </ContentBox>
  );
};
