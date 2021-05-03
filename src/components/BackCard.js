import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BackCard.css';

function BackCard(props) {
  const characterName = props.myCharacterName;
  return (
    <div className="flip-card-back">
      <h2>{characterName}</h2>
      <h4>Learn More</h4>
    </div>
  );
}

export default BackCard;
