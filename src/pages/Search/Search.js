import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useEditor } from "../../hooks/EditorProvider";
import { OneCard } from "../../components/Card/Card";
import { useState } from "react";

export const Search = () => {
  const [word, setWord] = useState(null);
  const value = useEditor();

  const searchHeandler = (e) => {
    const searchByWods = value.words.filter((word) => {
      if(word["1st form"].split("").slice(0, 3) === e.target.value) {
        return <OneCard />
      };
    });
  };

  const findWords = () => {};

  return (
    <Container>
      <Form>
        <Row className="row justify-content-center mt-4">
          <Col className="col-4">
            <Form.Group
              className="w-auto"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                onChange={searchHeandler}
                value={value.formState}
                type="text"
                name="search"
                placeholder="What would you like to find?"
              />
            </Form.Group>
          </Col>
          <Col className="col-2">
            <button
              type="button"
              onClick={findWords}
              className="btn btn-primary btn-lg"
            ></button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
