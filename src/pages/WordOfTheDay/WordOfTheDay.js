import { useEditor } from "../../hooks/EditorProvider";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { OneCard } from "../../components/Card/Card";
import { Col, Row, Container } from "react-bootstrap";
import { EmptyWords } from "../../components/EmptyWords/EmptyWords";

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

      if (parseWord.data === todayDate) {
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

  return (
    <Container>
      <Row>
        <Col xs="12" lg={{ span: 4, offset: 5 }} className="w-25">
          {word?.word ? (
            <OneCard card={word.word} />
          ) : (
            <Col xs="12">
              <EmptyWords />
            </Col>
          )}
        </Col>
      </Row>
    </Container>
  );
}
