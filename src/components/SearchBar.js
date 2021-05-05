import { React } from 'react';

import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = (props) => {
  const handleChange = (event) => {
    props.onchange(event.target.value);
  };

  return (
    <div>
      <div className="bg-gradient">
        <Container className="mb-3">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1 className="text-light">Rick and Morty</h1>
              <InputGroup className="mb-3">
                <FormControl
                  className="m-3"
                  type="text"
                  placeholder="Search name"
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SearchBar;
