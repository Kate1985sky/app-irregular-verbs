import { Row, Col } from "react-bootstrap";
import { useEditor } from "../../hooks/EditorProvider";

export const NothingFound = () => {
    const value = useEditor();

  return (
    <Row className="mt-5">
      <Col className="d-flex justify-content-center">
      <p>Nothing found for: {value.value}</p>
      </Col>
    </Row>
  );
};