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

  //style={{ width: '300px', height: '300px' }

  return (
    <div>
      <Container className="mt-3 mb-3">
        <Row>
          {characters.length !== 0 ? (
            characters.map((character) => {
              return (
                <Col>
                  <Card className="my-card m-3">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img className="card-image" src={character.image} />
                        </div>
                        <BackCard myCharacterName={character.name} />
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
