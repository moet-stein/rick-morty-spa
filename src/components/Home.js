import React, { useState, useEffect } from 'react';
import Character from './Character.js';
// import SearchBar from './SearchBar.js';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const fetchApi = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      });
  };
  const changePage = (direction) => {
    direction === 'right' ? setPageNum(pageNum + 1) : setPageNum(pageNum - 1);
    return fetchApi();
  };

  useEffect(() => {
    fetchApi();
  });

  return (
    <React.Fragment>
      <div style={{ backgroundColor: 'teal' }}>
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

      <div>
        <Container>
          <Row className="m-3 d-flex justify-content-center align-content-center">
            {!loading ? (
              characters
                .filter((character) =>
                  character.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .map((character) => {
                  return <Character character={character} />;
                })
            ) : (
              <p>Loading ...</p>
            )}
          </Row>
        </Container>
      </div>
      <Container className="mb-3">
        {pageNum === 1 ? (
          <Button variant="link" disabled>
            <ArrowLeft className="m-3" color="grey" size={50} />
          </Button>
        ) : (
          <Button variant="link" onClick={() => changePage('left')}>
            <ArrowLeft className="m-3" color="teal" size={50} />
          </Button>
        )}
        {pageNum === 34 ? (
          <Button variant="link" disabled>
            <ArrowRight className="m-3" color="grey" size={50} />
          </Button>
        ) : (
          <Button variant="link" onClick={() => changePage('right')}>
            <ArrowRight className="m-3" color="teal" size={50} />
          </Button>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Home;
