import { React, useState } from 'react';
import Characters from './Characters.js';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = (props) => {
  const { characters } = props;
  const { loading } = props;
  const [searchTerm, setSearchTerm] = useState('');
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
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <Characters
        characters={characters}
        searchTerm={searchTerm}
        loading={loading}
      />
    </div>
  );
};

export default SearchBar;
