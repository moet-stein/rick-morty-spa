import React, { useState, useEffect } from 'react';
import Character from './Character.js';
// import SearchBar from './SearchBar.js';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const fetchApi = () => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      });
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
              <input
                type="text"
                placeholder="Search name"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="d-flex justify-content-center">
        <Container className="m-3 d-flex justify-content-center align-content-around">
          <Row>
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
    </React.Fragment>
  );
};

export default Home;
