import React, { useState, useEffect } from 'react';
import BackCard from './BackCard.js';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Character.css';

function Character(props) {
  const { character } = props;
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card className="my-card m-2">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="card-image"
                    src={character.image}
                    key={character.id}
                  />
                </div>
                <BackCard myCharacter={character} />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default Character;
