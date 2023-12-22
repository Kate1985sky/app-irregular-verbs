import style from "./Create.module.css";
import { useEditor } from "../../hooks/EditorProvider";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { Row, Col, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const defaultFormValues = {
  "1st form": "",
  "2st form": "",
  "3st form": "",
  "example of usage": "",
  "translate of the world": "",
  "translate of the example": "",
  "level": "",
};

export const Create = () => {
  const [formState, setFormState] = useState(defaultFormValues);
  console.log(formState);
  const value = useEditor();

  const submitForm = (event) => {
    event.preventDefault();
    value.addWord(formState);
    resetForm();
  };

  const resetForm = () => {
    setFormState(defaultFormValues);
  };

  const changeHeandler = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Form onSubmit={submitForm}>
        <Stack gap={4}>
          <Row>
            <Col>
              <p class="fw-weight-bolder">1. Add forms of a word</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <small className="text-muted">1st form</small>
                </Form.Label>
                <Form.Control
                  onChange={changeHeandler}
                  value={formState["1st form"]}
                  type="text"
                  name="1st form"
                  placeholder="1st"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <small className="text-muted">2st form</small>
                </Form.Label>
                <Form.Control
                  name="2st form"
                  type="text"
                  placeholder="2st"
                  value={formState["2st form"]}
                  onChange={changeHeandler}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <small className="text-muted">3st form</small>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="3st"
                  onChange={changeHeandler}
                  value={formState["3st form"]}
                  name="3st form"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <p class="fw-weight-bolder">2. Add an example of usage</p>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <small className="text-muted">An example</small>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={changeHeandler}
              value={formState["example of usage"]}
              type="text"
              name="example of usage"
            />
          </Form.Group>

          <Row>
            <Col md="auto">
              <p class="fw-weight-bolder">3. Add translations</p>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <small className="text-muted">translate of the world</small>
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={changeHeandler}
                  value={formState["translate of the world"]}
                  name="translate of the world"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <small className="text-muted">translate of the example</small>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="translate of the example"
              value={formState["translate of the example"]}
              onChange={changeHeandler}
              type="text"
            />
          </Form.Group>

          <Row>
            <Col md="auto">
              <p class="fw-weight-bolder">4. Select a level of the word</p>
              <Form.Group
                size="sm"
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <small className="text-muted">a level of the word</small>
                </Form.Label>
              </Form.Group>

              <Form.Select
                size="sm"
                value={formState["level"]}
                name="level"
                onChange={changeHeandler}
                aria-label="Default select example"
              >
                <option>Select a level</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={{ span: 4, offset: 4 }}>
              <Button variant="danger" size="lg" type="submit">
                Save
              </Button>{" "}
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
};
