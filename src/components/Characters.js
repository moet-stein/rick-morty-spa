import React, { useState, useEffect } from 'react';
import BackCard from './BackCard.js';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Characters.css';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const fetchApi = () => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  };

  useEffect(() => {
    fetchApi();
  });

  return (
    <div className="d-flex justify-content-center">
      <Container className="m-3 d-flex justify-content-center align-content-around">
        <Row>
          {characters.length !== 0 ? (
            characters.map((character) => {
              return (
                <Col>
                  <Card className="my-card m-2">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img className="card-image" src={character.image} />
                        </div>
                        <BackCard myCharacter={character} />
                      </div>
                    </div>
                  </Card>
                </Col>
              );
            })
          ) : (
            <p>Loading ...</p>
          )}
        </Row>
      </Container>
    </div>
  );
}
export default Characters;
