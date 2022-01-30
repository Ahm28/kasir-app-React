import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavbarComponents, Hasil, ListCategories } from "./components";

function App() {
  return (
    <div className="App">
      <NavbarComponents />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>List Product</strong>
              </h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
