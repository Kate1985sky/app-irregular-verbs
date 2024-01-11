import React, { useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEditor } from "../../hooks/EditorProvider";
import { useState } from "react";
import { OneCard } from "../../components/Card/Card";
import { EmptyWords } from "../../components/EmptyWords/EmptyWords";
import Button from "react-bootstrap/Button";

export const Search = () => {
  let [searchParams] = useSearchParams();
  const searchRequest = searchParams.get("q");
  const value = useEditor();

  const [search, setSearch] = useState(searchRequest ?? "");

  let navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    if (search.length >= 3) {
      navigate(`/search?q=${search}`);
    } else {
      alert("sorry, at least 3 chars!");
    }
  };

  const filteredBySearch = useMemo(() => {
    
    return value.words.filter((word) => {
      
      return (
        word["1st form"].startsWith(searchRequest) ||
        word["2st form"].startsWith(searchRequest) ||
        word["3st form"].startsWith(searchRequest)
      );
    });
  }, [value.words, searchRequest]);
 
  return (
    <Container>
      <Row className="mt-3">
        <Col xs="12" lg={{ span: 6, offset: 3 }}>
          <Form onSubmit={submitHandler} className="mb-4">
            <Row>
              <Col xs="8">
                <Form.Control
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  type="text"
                  name="search"
                  className="w-100"
                  placeholder="What would you like to find?"
                />
              </Col>
              <Col xs="4">
                <Button type="submit" className="btn btn-info w-100">
                  Find!
                </Button>
              </Col>
            </Row>
          </Form>
          <Row>
            {filteredBySearch.length > 0 ? (
              filteredBySearch.map((card) => (
                <Col xs="12" lg="6" className="w-50">
                  <OneCard card={card} key={card.id} />
                </Col>
              ))
            ) : (
              <EmptyWords />
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
