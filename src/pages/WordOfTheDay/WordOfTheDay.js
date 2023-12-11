import styles from "./WordOfTheDay.module.css";
import { useEditor } from "../../hooks/EditorProvider";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { ContentBox } from "../../components/ContentBox/ContentBox";
import { Card } from "../../components/Card/Card";

export function WordOfTheDay() {
  const value = useEditor();
  const [word, setWord] = useState(null);

  const now = useRef(new Date());
  const todayDate = `${now.current.getMonth()}-${now.current.getDate()}`;

  function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  useEffect(() => {
    const storeWord = localStorage.getItem("word-of-the-day");

    if (storeWord) {
      const parseWord = JSON.parse(storeWord);
      if (parseWord.date === todayDate) {
        setWord(parseWord);
        return;
      }
    }
    const randomIndex = getRandomIndex(value.words);
    const word = value.words[randomIndex];
    setWord({ word });
    localStorage.setItem(
      "word-of-the-day",
      JSON.stringify({ date: todayDate, word })
    );
  }, []);

  return <ContentBox>{word?.word && <Card card={word.word} />}</ContentBox>;
}
