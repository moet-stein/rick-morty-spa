import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {
  return (
    <div style={{ backgroundColor: 'teal' }}>
      <Container className="mb-3">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1 className="text-light">Rick and Morty</h1>
            <Form className="mt-3" bg="dark">
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Search name" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchBar;