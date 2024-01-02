import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useEditor } from "../../hooks/EditorProvider";
import { OneCard } from "../../components/Card/Card";
import { useState } from "react";
import { Incorrect } from "../../components/Incorrect/Incorrect";
import { NothingFound } from "../../components/NothingFound/NothingFound";

export const Search = () => {
  const [search, setSearch] = useState(null);
  const value = useEditor();

  const verbsFirstForm = value.words.map((word) => word["1st form"]);

  const sliceVerb = verbsFirstForm.map((word) => word.slice(0, 3));

  const searchHeandler = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
  };

  const showWords = () => {
    sliceVerb.filter((word) => {
      if (word === search) {
        return <OneCard card={search} />;
      } else if (word.length >= 1) {
        return <Incorrect />
      } else {
        return <NothingFound />
      }
    });
  };

  
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
            <div className="w-auto">
            <button
              type="button"
              onClick={showWords}
              className="btn btn-primary btn-lg"
            ></button>
            </div>
          </Col>
        </Row>
        </Form>
    </Container>
  );
};
